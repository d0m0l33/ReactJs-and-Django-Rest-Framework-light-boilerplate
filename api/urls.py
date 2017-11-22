from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    url(r'^api/$', views.AudioList.as_view()),
    url(r'^api/(?P<pk>[0-9]+)/$', views.AudioDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
