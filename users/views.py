import json
import string
from random import choices

from django.http import JsonResponse, Http404
from rest_framework import viewsets, generics, permissions

from .authentication import IsAuthenticatedOrReadCreate
from .models import User
from .serializers import BasicUserSerializer, FullUserSerializer, UserImageSerializer, UserUpdateInfoSerializer


class UserViewSet(viewsets.ModelViewSet):
    def get_serializer_class(self):
        user = self.request.user
        if user.is_authenticated or user.is_superuser:
            return FullUserSerializer
        return BasicUserSerializer

    permission_classes = [IsAuthenticatedOrReadCreate]
    lookup_field = 'email'


def create_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data['email']
        password = data['password']
        address = data.get('address')
        username = ''.join(choices(string.ascii_letters, k=20))
        try:
            User.objects.create_user(username=username, email=email, password=password, address=address)
            return JsonResponse({}, status=201)
        except:
            return JsonResponse({"details": "Something went wrong"}, status=400)


class UpdateImage(generics.RetrieveUpdateAPIView):
    def get_object(self):
        try:
            return User.objects.get(email=self.request.GET.get('email'))
        except User.DoesNotExist:
            raise Http404
    serializer_class = UserImageSerializer
    queryset = User.objects.all()


class UpdateInfo(generics.RetrieveUpdateAPIView):
    def get_object(self):
        try:
            return User.objects.get(email=self.request.GET.get('email'))
        except User.DoesNotExist:
            raise Http404
    serializer_class = UserUpdateInfoSerializer
    queryset = User.objects.all()
