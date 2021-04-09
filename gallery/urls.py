
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("connectwallet", views.connectwallet, name="connectwallet"),
    path("explore", views.explore, name="explore"),
    path("following", views.explore, name="following"),
    path("saved", views.explore, name="saved"),
    path("newcreate", views.newcreate, name="newcreate"),
    path("gallery", views.gallery, name="gallery"),
    path("testdropzone", views.testdropzone, name="testdropzone"),

    path("register", views.register, name="register"),
    path("thegallery/<int:id>", views.thegallery, name="thegallery"),
    path("profile/<int:id>", views.profile, name="profile"),



    #APIS
    path("currentgalleryapi/<str:whatkind>/<int:clicked>/<int:paginationid>", views.currentgalleryapi, name="currentgalleryapi")
    #path("network/<str:posts>/<int:paginationid>", views.posts, name="posts")



]
