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
    ses = boto3.client('ses')

    # send emails.
    status_code = ses.send_templated_email (
        Source = 'jrenjqgithub@gmail.com',
        Destination = {
            'ToAddresses': ['jren9982@gmail.com'],
            'CcAddresses': ['jren3321@gmail.com']
        },
        ReplyToAddresses = ['jren9982@gmail.com'],
        Template = 'Jren',
        TemplateData = '{"replace tag name": "with value"}'
    )
    print(status_code)
    return HttpResponse("<h1>email sent successfully!</h1><p>You may return to the previous page now.</p>")