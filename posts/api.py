from rest_framework.viewsets import ModelViewSet

from .models import NatureLocation
from .serializers import PostSerializer


class PostModelViewSet(ModelViewSet):
    model = NatureLocation
    queryset = NatureLocation.objects.all()
    serializer_class = PostSerializer

    # def create(self):
    #     pass
