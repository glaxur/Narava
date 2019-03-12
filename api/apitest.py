import gpsphoto

data = gpsphoto.getGPSData('9ewtl0g6TBKsiRQMhyrLJQ_thumb_73e.jpg')

print(data.keys())
for tag in data.keys():
    print("{}:{}" .format(tag, data[tag]))
