from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.http.response import Http404
from django.shortcuts import redirect, render
from django.urls import reverse
from django.http import JsonResponse
from datetime import datetime
import pytz
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from .models import User_Wallet, Gallery, Template, User, Follower, Vote, Gallery_Info, Dummypost
import os
from django.conf import settings
from django.contrib.staticfiles.views import serve
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.db.models import F
from django.db.models import Count


def index(request):
    if request.user.id == None:
        request.session["wallet"] = "ye"

    if "wallet" not in request.session.keys():
        request.session["wallet"] = "ye"
    
    return render(request, "gallery/index.html", {"wallet": request.session["wallet"]})

def explore(request):
    return render(request, "gallery/explore.html", {"wallet": request.session["wallet"]})

def newcreate(request):
    userid = request.user.id
    if request.method == "POST":
        print(request.POST.keys())
        if "checkmain" not in request.POST.keys():
            checkmain = 0
        else:
            checkmain = int(request.POST["checkmain"])

        text = request.POST["newposttext"]
        tz = pytz.timezone('Asia/Bangkok')
        currenttime = datetime.now(tz)
        post =  Dummypost(post_info=text, creationtime=currenttime, modify_date=currenttime, user_id_id=userid, activedummy = checkmain)
        post.save()
        return render(request, "gallery/explore.html", {"wallet": request.session["wallet"]})

    return render(request, "gallery/newcreate.html", {"wallet": request.session["wallet"]})

def gallery(request):
    if request.user.id == None:
         request.session["wallet"] = "Ye"
    
    return render(request, "gallery/gallery.html", {"wallet": request.session["wallet"]})


def realsaveapi(request, address):
    if request.method == "POST":
        curid = request.user.id
        data = json.loads(request.body)
        print(f"gallerytitle: {data['gallerytitle']}")

        tz = pytz.timezone('Asia/Bangkok')
        currenttime = datetime.now(tz)
   
        User.objects.filter(id = request.user.id).update(galleryinfo = data['everydataa'], gallerybgcolor = data['gallerybgcolor']
        ,gallerybgimage = data['gallerybgimage'], gallerytitle = data['gallerytitle'], modify_date = currenttime)
        
        return render(request, "gallery/profile.html")

def realcreateapi(request, clicked):
    if request.method == "POST":
        
        if 'media' in request.FILES.keys():

            handle_uploaded_file(request.FILES['media'])
            print(f"checking for request files: {request.FILES['media']}")   
            filename = str(request.FILES['media'])
            return JsonResponse(filename, safe=False)
        
    if request.method == "PUT":
        data = json.loads(request.body)
        if (data['edit'] == "edit"):
            check =  User.objects.filter(id = request.user.id)  
        else:
            check =  User.objects.filter(id = clicked)  

        for i in check:
            print(f"check for the galleryinfo: {i.galleryinfo}")
            galleryinfo = i.galleryinfo
            gallerybgimage = i.gallerybgimage
            gallerybgcolor = i.gallerybgcolor
            gallerytitle = i.gallerytitle
            print(f"this is gallery info:{galleryinfo}")

            return_request = {"galleryinfo": galleryinfo, "gallerybgimage": gallerybgimage, "gallerybgcolor": gallerybgcolor, "gallerytitle": gallerytitle}

            return JsonResponse(return_request, safe=False)

def currentgalleryapi(request, whatkind, clicked, paginationid):
    curuser = request.user.id
    allgallery = ""
    following = Follower.objects.filter(user_id_follower = clicked, user_id_following = curuser, follow_qm = 1).count()
    howmanyvotes = Vote.objects.filter(user_id_id = clicked, like = 1).count()
  

    if howmanyvotes == 0:
            howmanyvotes = 0
    if following == 0:
        following = 0
    else:
        following = 1
    contactgmail = None
    openseaurl = None
    profiledes = None
    username = None
    profpic = None
    view = 0

    listfollowing = []

    if whatkind == "profile":
        viewview = User.objects.filter(id = clicked)
        view = 0
        for i in viewview:
            view = i.views
            if view == None:
                view = 0
            
        print(f"how many views: {view}")
        view = view + 1
        viewcheck = User.objects.filter(id = clicked).update(views = view)
        currentgallery = Dummypost.objects.filter(user_id_id = clicked, activedummy = 1)
        currentuserinfo = User.objects.filter(id = clicked)
        for i in currentuserinfo:
            username = i.username
            contactgmail = i.contactgmail 
            openseaurl = i.opensea_url
            profiledes = i.profile_des
            view = i.views

        first = "gallery/"   
        nogal = "/static/profile_pic/"   
        user = User.objects.filter(id = clicked)
        for i in user:
            if i.profile_pic != None:
                profpic = i.profile_pic
            else:
                profpic = "/static/profile_pic/brown.jpeg"

        if request.method == "POST":
            if 'media' in request.FILES.keys():
                user = User.objects.filter(id = request.user.id)
                for i in user:
                    profpica = i.profile_pic
                    if profpica != None:

                        profpica = first + profpica
                        os.remove(profpica)
                
                handle_uploaded_file(request.FILES['media'])
                profpicc = str(request.FILES['media'])
                profpic = nogal + profpicc
                User.objects.filter(id = request.user.id).update(profile_pic = profpic)     


            else:
                data = json.loads(request.body)
                profiledes = data["profiledes"]
                contactgmail = data["contactgmail"]
                openseaurl = data["openseaurl"]
                user = User.objects.filter(id = clicked)
                for i in user:
                    if i.profile_pic != None:
                        profpic = i.profile_pic
                    else:
                        profpic = "/static/profile_pic/brown.jpeg"
                User.objects.filter(id = request.user.id).update(contactgmail = contactgmail, opensea_url = openseaurl, profile_des = profiledes)      


        if request.method == "PUT":
            data = json.loads(request.body)
            follow = data["follow"]
            follower = data["follower"]
            following = data["following"]
            ishefollowinga = Follower.objects.filter(user_id_follower = clicked, user_id_following = curuser).count()
            ishefollowinga = int(ishefollowinga)

            if ishefollowinga == 0:
                follows =  Follower(user_id_follower_id=follower, user_id_following_id=following)
                following = 1
                follows.save()
            else:
                if follow == "true":
                    Follower.objects.filter(user_id_follower_id=follower, user_id_following_id=following).update(follow_qm = 1)            
                    following = 1

                elif follow == "false":
                    Follower.objects.filter(user_id_follower_id=follower, user_id_following_id=following).update(follow_qm = 0)            
                    following = 0

    elif whatkind == "explore":
        print("is this in explore")
        allgallery = User.objects.all()
    
    elif whatkind == "gallery":
        kuku = Follower.objects.values('user_id_follower').annotate(count=Count('user_id_follower')).filter(follow_qm = 1).order_by('-count')[:3]
        kulist = []
        print(kuku)
        for i in kuku:
            print("i.user.id.follower", i['user_id_follower'])
            kulist.append(i['user_id_follower'])
            
        
        print(f"kulist: {kulist}")
        allgallery = User.objects.filter(id__in = kulist)


        print(f"kutoo: {allgallery}")
            
    elif whatkind == "following":
        print("this is whatkind and it should be in whatkind")
        following_f = Follower.objects.filter(user_id_following = request.user.id, follow_qm = 1)
    
        for i in following_f:
            listfollowing.append(i.user_id_follower.id)
        
        allgallery = User.objects.filter(id__in = listfollowing)

    newdata = []
    for gallery in allgallery:
        newdata.append(gallery.serializeuser(request.user.id))
    
    pagination = Paginator(newdata, 5)
    num_pages = pagination.num_pages
    paginationid = int(paginationid)
    print(f"this is profpic", profpic)
    howmanyfollow = Follower.objects.filter(user_id_follower = clicked, follow_qm = 1).count()


    return_request = {"user":curuser, "username":username, "whatkind":whatkind, "following":following,"contactgmail":contactgmail, "openseaurl":openseaurl, "profiledes":profiledes, "data":[], "num_pages":num_pages, "paginationid":paginationid,
    "profilepic":profpic, "howmanyvotes":howmanyvotes, "howmanyfollow":howmanyfollow, "view":view}

    for row in pagination.page(paginationid).object_list:  
        return_request["data"].append(row)

    return JsonResponse(return_request, safe=False)

def handle_uploaded_file(profilepic):
    first = "gallery/static/profile_pic/"
    profilepicname= str(profilepic)
    path = first + profilepicname
    with open(path, 'wb+') as destination:
        for chunk in profilepic.chunks():
            destination.write(chunk)

def realcreate(request):
    return render(request, "gallery/realcreate.html")

def thegallery(request, id):
    return render(request, "gallery/thegallery.html", {"wallet": request.session["wallet"]})


def profile(request, id):
    if request.user.id == "ye":
        request.session["wallet"] = "ye"

    if "wallet" not in request.session.keys():
        request.session["wallet"] = "ye"
    
    
    user = User.objects.filter(id = id)
    return render(request, "gallery/profile.html", {"wallet": "ye"})

def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            try:
                check_if_wallet_exists = User_Wallet.objects.get(user_id_id = request.user.id)
            except User_Wallet.DoesNotExist:
                print("yea")
                request.session["wallet"] = "ye"
                return render(request, "gallery/index.html", {"wallet": request.session["wallet"]})
            
            request.session["wallet"] = "Ye"
            return render(request, "gallery/index.html", {"wallet": request.session["wallet"]})

           
        else:
            return render(request, "gallery/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "gallery/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "gallery/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "gallery/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "gallery/register.html")

def connectwallet(request):
    current_userid = request.user.id
    if request.method == "PUT":

        data = json.loads(request.body)
        wallet_address = data["wallet_address"]
        
        try:
            check_if_wallet_exists = User_Wallet.objects.get(user_id_id = current_userid, wallet_address = wallet_address)
        except User_Wallet.DoesNotExist:
            print("still none")
            userwalletdb = User_Wallet(user_id_id = current_userid, wallet_address = wallet_address)
            userwalletdb.save()


    #MIGHT HAVE A PROBLEM LATER IF USER HAVE MORE THAN ONE WALLET
    
    return render(request, "gallery/connectwallet.html", {"wallet": request.session["wallet"]})

def testdropzone(request):
    return render(request, "gallery/testdropzone.html")





