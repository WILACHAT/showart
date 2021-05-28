from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser, models.Model):
    pass
    opensea_url = models.URLField(max_length=256, null=True)
    contactgmail = models.CharField(max_length=256, null=True)
    profile_des = models.TextField(null=True)
    profile_pic = models.URLField(max_length=256, null=True)
    galleryinfo = models.TextField(null=True)
    gallerytitle = models.CharField(max_length=256, null=True)
    gallerybgcolor = models.CharField(max_length=256, null=True)
    gallerybgimage = models.URLField(max_length=256, null=True)
    modify_date = models.DateTimeField(auto_now=True)
    views = models.IntegerField(null=True)
    rank = models.IntegerField(null=True)
    wallet_address = models.CharField(max_length=64, null=True)




    def serializeuser(self, usercurrent):
        return {
            "id": self.id,
           # "openseaurl": self.opensea_url,
          #  "contactgmail": self.contactgmail,
           # "profiledes": self.profile_des,
           # "profilepic": self.profile_pic,
            "username": self.username,
            "galleryinfo": self.galleryinfo,
            "gallerytitle":  self.gallerytitle,
            "gallerybgcolor": self.gallerybgcolor,
            "gallerybgimage": self.gallerybgimage, 
            "views": self.views, 
            "modifiedtime":self.modify_date.strftime("%b %-d %Y, %-I:%M %p")
        }   
class User_Wallet(models.Model):   
    wallet_address = models.CharField(max_length=64)
    user_id = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)


class Follower(models.Model):
    user_id_follower = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE, related_name='followers') 
    user_id_following= models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE, related_name='followings')
    follow_qm = models.BooleanField(default=True)




