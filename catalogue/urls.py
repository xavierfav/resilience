from django.conf.urls import url, include
from catalogue.views import *


urlpatterns = [
    url(r'^references_table/$', references_table, name='references-table'),
]
