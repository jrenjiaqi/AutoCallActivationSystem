# myapi/urls.py
from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'CallPersonnel', views.CallPersonnelViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('api/v1/api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]