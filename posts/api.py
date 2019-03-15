from rest_framework.viewsets import ModelViewSet

from .models import NatureLocation
from .serializers import NatureLocationSerializer
from rest_framework.authentication import SessionAuthentication


class CsrfExemptMixin(SessionAuthentication):
    def enforce_csrf(self, request):
        return


class NatureLocationViewSet(ModelViewSet):
    authentication_classes = (CsrfExemptMixin, )
    model = NatureLocation
    queryset = NatureLocation.objects.all()
    serializer_class = NatureLocationSerializer

    # def create(self):
    #     pass
