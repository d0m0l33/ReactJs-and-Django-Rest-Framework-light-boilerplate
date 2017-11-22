from rest_framework import serializers
from api.models import Audio, LANGUAGE_CHOICES, STYLE_CHOICES


class AudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Audio
        fields = ('id', 'track', 'producer', 'genre', 'style')
