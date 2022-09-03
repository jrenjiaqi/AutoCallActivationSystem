from django.shortcuts import render

from rest_framework import viewsets

from .serializers import CallPersonnelSerializer
from .models import CallPersonnel

class CallPersonnelViewSet(viewsets.ModelViewSet):
    queryset = CallPersonnel.objects.all().order_by('name')
    serializer_class = CallPersonnelSerializer