from api.models import Audio
from api.serializers import AudioSerializer
from rest_framework import generics


class AudioList(generics.ListCreateAPIView):
    queryset = Audio.objects.all()
    serializer_class = AudioSerializer


class AudioDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Audio.objects.all()
    serializer_class =AudioSerializer
