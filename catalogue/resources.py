from tastypie.resources import ModelResource
from catalogue.models import Reference


class ReferenceResource(ModelResource):
    class Meta:
        queryset = Reference.objects.all()
        ressource_name = 'reference'