from django.shortcuts import render, HttpResponse
from landing.models import Client

def index(request):
    if request.POST:
        data = request.POST
        post_data = []
        for key in data:
            post_data.append(data.get(key))

        new_callback = Client.objects.create(name=str(post_data[1]), phone=post_data[2], description='-')

        return render(request, 'success.html')
    else:
        return render(request, 'index.html')