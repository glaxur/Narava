from django.urls import path
from . import views

from django.contrib import admin
from django.urls import path

from .api import PostModelViewSet

urlpatterns = [
    path('api/post/', PostModelViewSet.as_view({
       'get': 'list',
       'post': 'create',
    }), name='post_api'),
]
