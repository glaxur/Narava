import exifread
from rest_framework.viewsets import ModelViewSet
from rest_framework.authentication import SessionAuthentication

from .gpsphoto.gpsphoto import GPSPhoto
from django.contrib.gis.geos import Point
from .models import NatureLocation
from .serializers import NatureLocationSerializer


class CustomGPSPhoto(GPSPhoto):
    def __init__(self, file):
        try:
            self.loadFile(file)
        except IOError:
            self._GPSPhoto__gpsRawDict = None

        self._GPSPhoto__getGPSData()

    def loadFile(self, file):
        """loadFile(file)

        Loads Image file for extraction takes one argument
            filename - str of the path/to/imagefile"""

        self._GPSPhoto__filename = file
        self.__getRawData()
        self._GPSPhoto__getGPSData()

    def __getRawData(self):
        ''' Returns the raw GPS Data returned from ExifRead'''

        # Declare Local Variables
        self._GPSPhoto__gpsRawDict = {}

        # Open images file for reading (binary mode)
        image = self._GPSPhoto__filename

        # Return Exif tags
        tags = exifread.process_file(image)

        # Get GPS Tags List
        tagKeys = []
        self._GPSPhoto__foundGPS = False
        for tag in list(tags.keys()):
            if tag not in ('JPEGThumbnail', 'TIFFThumbnail', 'Filename',
                           'EXIF MakerNote'):
                # Search For GPS Data
                if tag.find('GPS') > -1:
                    self._GPSPhoto__foundGPS = True
                    tagKeys.append(tag)

        # Build Dictionary
        for tag in tagKeys:
            self._GPSPhoto__gpsRawDict[tag] = tags[tag]


class CsrfExemptMixin(SessionAuthentication):
    def enforce_csrf(self, request):
        return


class NatureLocationViewSet(ModelViewSet):
    authentication_classes = (CsrfExemptMixin, )
    model = NatureLocation
    queryset = NatureLocation.objects.all()
    serializer_class = NatureLocationSerializer

    def perform_create(self, serializer):
        photo = CustomGPSPhoto(self.request.FILES['nature_upload'])
        data = photo.getGPSData()

        print(data['Latitude'])
        print(data['Longitude'])

        pnt = Point(data['Latitude'], data['Longitude'])

        serializer.save(user=self.request.user, point=pnt)
