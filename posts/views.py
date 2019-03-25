from django.shortcuts import render
from .models import NatureLocation
from django.views.generic import TemplateView, DetailView, ListView


class NatureLocationDetailView(DetailView):
    model = NatureLocation
    template_name = 'googlemapsAPI.html'


class AllPostsListView(ListView):
    model = NatureLocation
    template_name = 'allposts.html'


# class ClickedUserPostList(ListView):
#     pass