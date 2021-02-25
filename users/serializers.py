from rest_framework import serializers

from users.models import User


class BasicUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'first_name', 'last_name')
        extra_kwargs = {
            'email': {'write_only': True},
            'password': {'write_only': True, 'required': False},
        }


class FullUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
