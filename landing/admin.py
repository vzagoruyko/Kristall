from django.contrib import admin
from landing.models import Client

class Client_View(admin.ModelAdmin):
    list_display = ('name', 'phone', 'description', 'created')

admin.site.register(Client, Client_View)