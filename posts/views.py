from django.shortcuts import render
from .models import NatureLocation
from django.views.generic import TemplateView, DetailView


class NatureLocationDetailView(DetailView):
    model = NatureLocation
    template_name = 'googlemapsAPI.html'






