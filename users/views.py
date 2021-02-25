from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework import viewsets
from rest_framework.authtoken.models import Token

from .authentication import IsAuthenticatedOrReadCreate
from .serializers import BasicUserSerializer, FullUserSerializer


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class UserViewSet(viewsets.ModelViewSet):
    def get_serializer_class(self):
        user = self.request.user
        if user.is_authenticated or user.is_superuser:
            return FullUserSerializer
        return BasicUserSerializer

    permission_classes = [IsAuthenticatedOrReadCreate]
