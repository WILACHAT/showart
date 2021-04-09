from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser, models.Model):
    pass
    opensea_url = models.URLField(max_length=256, null=True)
    contactgmail = models.CharField(max_length=256, null=True)
    profile_des = models.TextField(null=True)
    profile_pic = models.URLField(max_length=256, null=True)
    


class User_Wallet(models.Model):   
    wallet_address = models.CharField(max_length=64)
    user_id = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)

class Dummypost(models.Model):
    post_info = models.CharField(max_length=256)
    creationtime = models.DateTimeField(auto_now_add=True)
    modify_date = models.DateTimeField(auto_now=True)
    user_id = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE, related_name='postposts')
    activedummy = models.BooleanField(default=True)

    def serialize(self, usercurrent):
        return {
            "id": self.id,
            "post_info": self.post_info,
            "timestamp":  self.modify_date.strftime("%b %-d %Y, %-I:%M %p"),
            "user_name": self.user_id.username,
            "user_id": self.user_id.id, 
            "activedummy": self.activedummy,
            "changedtime":self.creationtime.strftime("%b %-d %Y, %-I:%M %p")
        }   


class Gallery(models.Model):
    user_id = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    creationtime = models.DateTimeField(auto_now_add=True)
    modify_date = models.DateTimeField(auto_now=True)
    gallery_des = models.TextField()
    gallery_name = models.CharField(max_length=64)
    mail = models.CharField(max_length=64)
    views = models.CharField(max_length=64)
    active = models.BooleanField(default=True)

class Template(models.Model):
    template = models.CharField(max_length=64)
    gallery_id = models.ForeignKey(Gallery, on_delete=models.CASCADE)

class Gallery_Info(models.Model):
    template_id = models.ForeignKey(Template, null=True, blank=True, on_delete=models.CASCADE)
    image_url = models.URLField(max_length=256)
    animation_url = models.URLField(max_length=256)
    opensea_url = models.URLField(max_length=256)
    image_des = models.TextField()

class Follower(models.Model):
    user_id_follower = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE, related_name='followers') 
    user_id_following= models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE, related_name='followings')
    follow_qm = models.BooleanField(default=True)

class Vote(models.Model):
    like = models.BooleanField(default=True)
    gallery_id = models.ForeignKey(Gallery, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)






