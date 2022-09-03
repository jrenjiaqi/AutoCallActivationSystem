from django.db import models

class CallPersonnel(models.Model):
    name = models.CharField(max_length=60)
    desc = models.CharField(max_length=140)
    email = models.CharField(max_length=80)

    def __str__(self):
        return self.name