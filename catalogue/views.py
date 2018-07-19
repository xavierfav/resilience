from django.shortcuts import render
from catalogue.models import Category, Reference


# Create your views here.
def references_table(request):
    references = Reference.objects.all()
    return render(request, 'catalogue/catalogue.html', {'references': references})
