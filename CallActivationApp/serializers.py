# serializers.py

from rest_framework import serializers

from .models import CallPersonnel

class CallPersonnelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CallPersonnel
        fields = ('id', 'name', 'desc', 'email')