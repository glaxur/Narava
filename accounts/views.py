from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic
from .forms import SignUpForm
from posts.models import NatureLocation, User
from django.views.generic import TemplateView, ListView, View


class SignUp(generic.CreateView):
    form_class = SignUpForm
    success_url = reverse_lazy('users:login')
    template_name = 'registration/signup.html'


class AllPostsView(TemplateView):
    template_name = 'registration/allposts.html'
    model = NatureLocation

    # def get_queryset(self):
    #     # super needs to be inside method I am overloading
    #     query_set = super().get_queryset()
    #     user_id = self.kwargs.get('pk')

        # query_set = query_set.filter(id=id, )

        # return query_set

