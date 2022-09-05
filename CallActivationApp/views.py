from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CallPersonnelSerializer
from .models import CallPersonnel
from django.http import HttpResponse

import boto3

class CallPersonnelViewSet(viewsets.ModelViewSet):
    queryset = CallPersonnel.objects.all().order_by('name')
    serializer_class = CallPersonnelSerializer

def sendEmail(request):
    queryset = CallPersonnel.objects.all()
    toAddressList = []
    for e in queryset:
        toAddressList.append(e.email)
    # send emails using AWS SES via Boto3.
    ses = boto3.client('ses')
    status_code = ses.send_templated_email (
        Source = 'jrenjqgithub@gmail.com',
        Destination = {
            'ToAddresses': toAddressList,
            'CcAddresses': ['jrenjqgithub@gmail.com']
        },
        ReplyToAddresses = ['jrenjqgithub@gmail.com'],
        Template = 'Jren',
        TemplateData = '{"replace tag name": "with value"}'
    )
    return HttpResponse("<h1>email sent successfully!</h1><p>You may return to the previous page now.</p>")