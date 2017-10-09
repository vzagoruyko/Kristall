from django.db import models

# Create your models here.
class Client(models.Model):
    name = models.CharField(max_length=30)
    phone = models.CharField(max_length=13)
    description = models.CharField(max_length=30)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)

    def __str__(self):
        return str(self.name)