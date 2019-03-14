import gpsphoto

data = gpsphoto.getGPSData('imageUploads/deadend.jpg')

print(data.keys())
for tag in data.keys():
    print("{}:{}" .format(tag, data[tag]))
