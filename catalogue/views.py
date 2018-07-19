from django.shortcuts import render
from catalogue.models import Category, Reference
from catalogue.forms import ReferenceForm


# Create your views here.
def references_table(request):
    references = Reference.objects.all()
    form_errors = False
    if request.method == 'POST':
        form = ReferenceForm(request.POST)
        if form.is_valid():
            reference = form.save()
            form = ReferenceForm()  # Reset form
        else:
            form_erros = True
    else:
        form = ReferenceForm()

    return render(request, 'catalogue/catalogue.html', {'references': references,
                                                        'form': form
                                                        })
