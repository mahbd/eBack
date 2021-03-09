import uuid
import os

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _


def get_file_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join('~/media', filename)


class User(AbstractUser):
    email = models.EmailField(_('email address'), unique=True, error_messages={
        'unique': _("A user with that email already exists."),
    })
    profile_picture = models.CharField(_('profile picture'), blank=True, null=True, max_length=255)
    address = models.TextField(null=True, blank=True)
    phone = models.CharField(max_length=14, blank=True, null=True)
    facebook = models.CharField(max_length=255, blank=True, null=True)
    twitter = models.CharField(max_length=255, blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
