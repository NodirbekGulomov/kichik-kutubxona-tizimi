from django import forms


class BookForm(forms.Form):
    title = forms.CharField(max_length=40, min_length=4)
    author = forms.CharField(max_length=40, min_length=3)
    year = forms.IntegerField()
    genre = forms.CharField(max_length=30, min_length=3)
