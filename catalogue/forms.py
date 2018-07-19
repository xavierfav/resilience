from django import forms
from catalogue.models import Reference


class ReferenceForm(forms.ModelForm):
    class Meta:
        model = Reference
        fields = ['name', 'url']