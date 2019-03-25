from django.shortcuts import render
from .models import NatureLocation
from django.views.generic import TemplateView, DetailView, ListView
import requests
from django.contrib.gis.measure import D
from django.contrib.gis.geos import Point

class NatureLocationDetailView(DetailView):
    model = NatureLocation
    template_name = 'googlemapsAPI.html'


class AllPostsListView(ListView):
    model = NatureLocation
    template_name = 'posts_list.html'


class PostSearchView(ListView):
    model = NatureLocation
    template_name = 'posts_list.html'

    def get_queryset(self):
        queryset = super().get_queryset()
        # get the search address from querystring
        search = self.request.GET.get('search_box')
        print(search)
        # convert address to lat long using google api call
        response = requests.get('https://maps.googleapis.com/maps/api/geocode/json?address='+search+'&key=AIzaSyDo1QqQKXqmM68fNbBP4dgsW3pwy3TngOs')
        data = response.json()
        print(data)
        # Use lat long in filter to find images in 50 miles

        lat = data['results'][0]['geometry']['location']['lat']
        lng = data['results'][0]['geometry']['location']['lng']

        return queryset.filter(point__distance_lte=(Point(lat, lng), D(mi=50)))
