from rest_framework.serializers import ModelSerializer

from .models import NatureLocation


class NatureLocationSerializer(ModelSerializer):
    class Meta:
        model = NatureLocation
        fields = ('id', 'user', 'post_caption', 'nature_upload', 'point')
        depth = 1
