from django.contrib import admin
from django.contrib.auth.views import LoginView, LogoutView
from django.urls import path

from .views import IndexView

app_name = 'frontend'


urlpatterns = [
    path('yourposts/', IndexView.as_view(), name='index'),
    # path('allposts/', IndexView.as_view(), name='index'),
]