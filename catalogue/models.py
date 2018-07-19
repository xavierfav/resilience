from django.db import models


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=2500, null=True, blank=True)

    def __str__(self):
        return self.name


class Reference(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=2500, null=True, blank=True)
    url = models.CharField(max_length=250)
    category = models.ManyToManyField(Category, symmetrical=False, related_name='references')

    def __str__(self):
        return self.name
