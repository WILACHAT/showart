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
from .models import User_Wallet, User, Follower
import os
from django.conf import settings
from django.contrib.staticfiles.views import serve
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.db.models import F
from django.db.models import Count
import re
import requests





def index(request):
    if request.user.id == None:
        request.session["wallet"] = "ye"

    if "wallet" not in request.session.keys():
        request.session["wallet"] = "ye"
    
    return render(request, "gallery/index.html", {"wallet": request.session["wallet"]})

def explore(request):
    return render(request, "gallery/explore.html", {"wallet": request.session["wallet"]})


def gallery(request):
    if request.user.id == None:
         request.session["wallet"] = "Ye"
    
    return render(request, "gallery/gallery.html", {"wallet": request.session["wallet"]})


def realsaveapi(request):
    if request.method == "POST":
        curid = request.user.id
        data = json.loads(request.body)
        print(f"gallerytitle: {data['gallerytitle']}")

        tz = pytz.timezone('Asia/Bangkok')
        currenttime = datetime.now(tz)
   
        User.objects.filter(id = request.user.id).update(galleryinfo = data['everydataa'], gallerybgcolor = data['gallerybgcolor']
        ,gallerybgimage = data['gallerybgimage'], gallerytitle = data['gallerytitle'], modify_date = currenttime)
        
        return JsonResponse(curid, safe=False)


def realcreateapi(request, clicked):
    wallet = ""
    if request.method == "POST":
        
        if 'media' in request.FILES.keys():

            handle_uploaded_file(request, request.FILES['media'])
            print(f"checking for request files: {request.FILES['media']}")   
            filename = str(request.FILES['media'])
            return JsonResponse(filename, safe=False)
    newdata = []

    if request.method == "PUT":
        check =  User.objects.filter(id = clicked)  

        curuser = request.user.id
        data = json.loads(request.body)
        if data['edit'] == "edit":
            check =  User.objects.filter(id = request.user.id)  
        elif data['edit'] == "getcur":
            getcur = request.user.id
            return JsonResponse(getcur, safe=False)
        elif data['edit'] == "fetchnft" or data['edit'] == "authen":
            
            
            if data['edit'] == "fetchnft":
                check =  User.objects.filter(id = request.user.id)

                for i in check:
                    wallet = i.wallet_address

            else:
                check =  User.objects.filter(wallet_address = data['wallet'])
                print(f"check this check: {check}")
                if not check:
                    return JsonResponse("error", safe=False)
                else:
                    wallet = data['wallet']
                    
            
            adddata = []
            offset = 0
            newdata = []
            numberall = 0
            print(f"this is real wallet address:{wallet}")
            def recurse(offset, numberall, newdata):
                url = "https://api.opensea.io/api/v1/assets"
                querystring = {"owner":wallet,"order_by":"visitor_count","order_direction":"desc","offset":offset,"limit":"50"}
                response = requests.request("GET", url, params=querystring)
                adddata = json.loads(response.text)
              
                if adddata['assets'] == []:

                    return newdata
                else:
                    for i in range(len(adddata['assets'])):
                        smallerdata = []
                        numberall = numberall + 1
                        smallerdata.append(adddata['assets'][i]['image_url'])
                        smallerdata.append(adddata['assets'][i]['animation_url'])
                        newdata.append(smallerdata)
                   
                    return recurse(offset + 50, numberall, newdata)

            recurse(offset, numberall, newdata)
        elif data['edit'] == "gallery":
            check =  User.objects.filter(id = clicked)


        for i in check:
            galleryinfo = i.galleryinfo
            gallerybgimage = i.gallerybgimage
            gallerybgcolor = i.gallerybgcolor
            gallerytitle = i.gallerytitle
            return_request = {"galleryinfo": galleryinfo, "gallerybgimage": gallerybgimage, "gallerybgcolor": gallerybgcolor, "gallerytitle": gallerytitle, "adddata":newdata}
        return JsonResponse(return_request, safe=False)


def currentgalleryapi(request, whatkind, clicked, paginationid):
    curuser = request.user.id
    allgallery = ""
    following = Follower.objects.filter(user_id_follower = clicked, user_id_following = curuser, follow_qm = 1).count()
  
    searchvalue = ""
  
    if following == 0:
        following = 0
    else:
        following = 1
    contactgmail = None
    openseaurl = None
    profiledes = None
    username = None
    profpic = None
    wallet = None
    view = 0
    datainfo = None

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
        currentuserinfo = User.objects.filter(id = clicked)
        for i in currentuserinfo:
            username = i.username
            contactgmail = i.contactgmail 
            openseaurl = i.opensea_url
            profiledes = i.profile_des
            view = i.views
            wallet = i.wallet_address
            datainfo = i.galleryinfo
            

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
                
                ok = handle_uploaded_file(request, request.FILES['media'])
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
        allgallery = User.objects.all().order_by('?')
    
    elif whatkind == "gallery":
        kuku = Follower.objects.values('user_id_follower').annotate(count=Count('user_id_follower')).filter(follow_qm = 1).order_by('-count')[:3]
        kulist = []
        print(kuku)
        counter = 1
        for i in kuku:
            print("i.user.id.follower", i['user_id_follower'])
            User.objects.filter(id = i['user_id_follower']).update(rank = counter)
            counter = counter + 1

            kulist.append(i['user_id_follower'])
            
        
        print(f"kulist: {kulist}")
        allgallery = User.objects.filter(id__in = kulist).order_by('rank')


        print(f"kutoo: {allgallery}")
            
    elif whatkind == "following":
        print("this is whatkind and it should be in whatkind")
        following_f = Follower.objects.filter(user_id_following = request.user.id, follow_qm = 1)
    
        for i in following_f:
            listfollowing.append(i.user_id_follower.id)
        
        allgallery = User.objects.filter(id__in = listfollowing).order_by('-modify_date')

    elif whatkind == "search":
        userall = User.objects.all()
        data = json.loads(request.body)
        searchvalue = data["searchvalue"]
        hi = "how many his can i get"
        listofcloseuser = []
        
        

        for i in userall:
            
            print(f"this is searchvalue: {searchvalue}")
            match = re.search(f"{searchvalue}",i.username)

            if match:
                listofcloseuser.append(i.id)

            else:
                print("did not find")
        allgallery = User.objects.filter(id__in = listofcloseuser)

        print(f"this is u know:{listofcloseuser}")


    newdata = []
    for gallery in allgallery:
        newdata.append(gallery.serializeuser(request.user.id))
    
    if (whatkind == "search"):
        
        pagination = Paginator(newdata, 15)
        num_pages = 0
    
    else:
    
        pagination = Paginator(newdata, 5)
        num_pages = pagination.num_pages

    
    paginationid = int(paginationid)
    print(f"this is profpic", profpic)
    howmanyfollow = Follower.objects.filter(user_id_follower = clicked, follow_qm = 1).count()

    return_request = {"user":curuser, "username":username, "whatkind":whatkind, "following":following,"contactgmail":contactgmail, "openseaurl":openseaurl, "profiledes":profiledes, "data":[], "num_pages":num_pages, "paginationid":paginationid,
    "profilepic":profpic, "howmanyfollow":howmanyfollow, "view":view, "searchvalue":searchvalue, "wallet":wallet, "datainfo":datainfo}

    for row in pagination.page(paginationid).object_list:  
        return_request["data"].append(row)

    return JsonResponse(return_request, safe=False)



    
def handle_uploaded_file(request, profilepic):
    curuserstr = str(request.user.id)
    first = "gallery/static/profile_pic/"
    profilepicname= str(profilepic)

    splitname = profilepicname.split('.')
    splitname[0] = splitname[0] + curuserstr
    splitname[-1] = "." + splitname[-1]

    realname = ""
    for i in range(len(splitname)):
    
        realname = realname + splitname[i]
    profilepic.name = realname

    
    path = first + realname
    with open(path, 'wb+') as destination:
        for chunk in profilepic.chunks():
            destination.write(chunk)
    return profilepicname

def realcreate(request):
    return render(request, "gallery/realcreate.html")

def authenticity(request):
    return render(request, "gallery/authenticity.html")

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
        User.objects.filter(id = request.user.id).update(wallet_address = wallet_address)
        return JsonResponse(request.user.id, safe=False)

    #MIGHT HAVE A PROBLEM LATER IF USER HAVE MORE THAN ONE WALLET
    
    return render(request, "gallery/connectwallet.html", {"wallet": request.session["wallet"]})

def testdropzone(request):
    return render(request, "gallery/testdropzone.html")





