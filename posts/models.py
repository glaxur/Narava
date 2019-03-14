from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.gis.db import models as gis_models

User = get_user_model()


class NatureLocation(models.Model):
    # latitude = models.FloatField()
    # longitude = models.FloatField()
    point = gis_models.PointField(null=True)
    natureUpload = models.ImageField(upload_to='images')
    postCaption = models.CharField(max_length=100, default='No caption needed...')
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
