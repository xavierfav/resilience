from tastypie.resources import ModelResource
from catalogue.models import Reference
from tastypie.authorization import Authorization


class ReferenceResource(ModelResource):
    class Meta:
        queryset = Reference.objects.all()
        ressource_name = 'reference'
        authorization = Authorization()
