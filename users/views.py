import json
import string
from random import choices

from django.http import JsonResponse
from rest_framework import viewsets

from .authentication import IsAuthenticatedOrReadCreate
from .models import User
from .serializers import BasicUserSerializer, FullUserSerializer


class UserViewSet(viewsets.ModelViewSet):
    def get_serializer_class(self):
        user = self.request.user
        if user.is_authenticated or user.is_superuser:
            return FullUserSerializer
        return BasicUserSerializer

    permission_classes = [IsAuthenticatedOrReadCreate]


def create_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data['email']
        password = data['password']
        username = ''.join(choices(string.ascii_letters, k=20))
        try:
            User.objects.create_user(username=username, email=email, password=password)
            return JsonResponse({}, status=201)
        except :
            return JsonResponse({"details": "Something went wrong"}, status=400)
