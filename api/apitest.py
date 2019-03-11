from GPSPhoto import gpsphoto

data = gpsphoto.getGPSData('./api/first.JPG')

for tag in data.keys():
    print("{}:{}") % (tag, data[tag])
