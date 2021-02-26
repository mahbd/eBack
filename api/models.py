from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from users.models import User


class SiteData(models.Model):
    category = models.CharField(max_length=255, unique=True, error_messages={
        'unique': _("This category already exist.")
    })
    data = models.JSONField(null=True, blank=True)


class NewsletterSubscriber(models.Model):
    email = models.EmailField(unique=True, error_messages={
        'unique': _("A user with that email already exists."),
    })


class Message(models.Model):
    email = models.EmailField(blank=True, null=True)
    name = models.CharField(max_length=255)
    message = models.TextField()


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    price = models.FloatField()
    images = models.JSONField(null=True, blank=True)
    description = models.TextField()
    stock = models.PositiveIntegerField(default=0)
    offer = models.IntegerField(default=0)
    rating = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(5)])
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name


class UserReview(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(5)])
    comment = models.TextField(blank=True, null=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(default=timezone.now, editable=False)


class Purchase(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    paid = models.BooleanField(default=False)
    delivered = models.BooleanField(default=False)
    timestamp = models.DateTimeField(default=timezone.now)
