from rest_framework.serializers import ModelSerializer

from .models import NatureLocation


class PostSerializer(ModelSerializer):
    class Meta:
        model = NatureLocation
        fields = ('id', 'user', 'postCaption', 'natureUpload', 'point')
