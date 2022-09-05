from django.test import TestCase
from CallActivationApp.models import CallPersonnel

class AnimalTestCase(TestCase):
    def test_email_valid(self):
        isAllEmailValid = True
        allCallPersonnelQuerySet = CallPersonnel.objects.all().order_by('name')
        for callPersonnel in allCallPersonnelQuerySet:
            if not ("@" or ".com" or ".sg") in callPersonnel.email:
                isAllEmailValid = False
                break
        self.assertTrue(isAllEmailValid)