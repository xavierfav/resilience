from django.db import models


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50, blank=True, default=None)
    description = models.TextField(max_length=2500, blank=True, default=None)

    def __str__(self):
        return self.name


class Reference(models.Model):
    name = models.CharField(max_length=50, blank=True, default=None)
    description = models.TextField(max_length=2500, blank=True, default=None)
    url = models.CharField(max_length=250, blank=True, default=None)
    category = models.ManyToManyField(Category, blank=True)

    def __str__(self):
        return self.name
