from django.urls import path
from . import views
from posts.views import AccountIndex

urlpatterns = [
    path('', views.AccountIndex.as_view(), name="yourposts")
]