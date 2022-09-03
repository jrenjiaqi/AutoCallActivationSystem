# serializers.py

from rest_framework import serializers

from .models import CallPersonnel

class CallPersonnelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CallPersonnel
        fields = ('name', 'desc', 'email')