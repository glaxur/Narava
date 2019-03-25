from django.urls import path
from . import views

from django.contrib import admin
from django.urls import path

from .api import NatureLocationViewSet, NatureLocationUpdateView, NatureLocationDeleteView
from .views import NatureLocationDetailView, AllPostsListView, PostSearchView

urlpatterns = [
    path('api/post/', NatureLocationViewSet.as_view({
        'get': 'list',
        'post': 'create',
    }), name='post_api'),
    path('api/post/<int:pk>/update/', NatureLocationUpdateView.as_view()),
    path('api/post/<int:pk>/delete/', NatureLocationDeleteView.as_view()),
    path('map/<int:pk>/', NatureLocationDetailView.as_view(), name='map'),
    path('allposts/', AllPostsListView.as_view(), name='allposts'),
    path('search/', PostSearchView.as_view(), name='search'),

]
