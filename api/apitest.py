from GPSPhoto import gpsphoto

data = gpsphoto.getGPSData('/api/deadend.jpg')

for tag in data.keys():
    print("{}:{}" % (tag, data[tag]))
