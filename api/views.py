from collections import OrderedDict
from random import choices

from django.core.mail import send_mail
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework import viewsets, generics, permissions
from rest_framework.decorators import action
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response

from eBack import settings
from .models import SiteData, NewsletterSubscriber, Message, Product, UserReview, Purchase, Category
from .serializers import SiteDataSerializer, NewsletterSubscriberSerializer, MessageSerializer, CategorySerializer, \
    ProductSerializer, UserReviewSerializer, PurchaseSerializer


class SiteDataViewSet(viewsets.ReadOnlyModelViewSet):
    lookup_field = 'category'
    queryset = SiteData.objects.all()
    serializer_class = SiteDataSerializer


class Pagination(LimitOffsetPagination):
    default_limit = 12

    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('count', self.count),
            ('page', self.offset // self.limit + 1),
            ('next', self.get_next_link()),
            ('previous', self.get_previous_link()),
            ('results', data)
        ]))


class NewsletterSubscriberView(generics.CreateAPIView):
    queryset = NewsletterSubscriber.objects.all()
    serializer_class = NewsletterSubscriberSerializer


class MessageView(generics.CreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class ProductViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        if self.request.GET.get('cat'):
            return Product.objects.filter(category__name=self.request.GET.get('cat'))
        return Product.objects.all()

    @action(detail=False)
    def search(self, request, *args, **kwargs):
        ls = ProductSerializer(Product.objects.filter(name__contains=request.GET.get('name')), many=True)
        return Response(ls.data)

    serializer_class = ProductSerializer


class UserReviewViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        product_id = self.request.GET.get('product_id')
        try:
            product_id = int(product_id)
            return UserReview.objects.filter(product_id=product_id)
        except TypeError:
            return UserReview.objects.all()
    serializer_class = UserReviewSerializer


class PurchaseViewSet(viewsets.ModelViewSet):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False)
    def cart_list(self, request, *args, **kwargs):
        ls = PurchaseSerializer(Purchase.objects.filter(user=request.user, paid=False, delivered=False), many=True)
        return Response(ls.data)

    @action(detail=False)
    def cart_add(self, request, *args, **kwargs):
        pro_id = request.GET.get('product_id')
        try:
            pro_id = int(pro_id)
            if pro_id:
                try:
                    purchase = Purchase.objects.get(product_id=pro_id, user=request.user)
                    purchase.quantity = purchase.quantity + 1
                    purchase.save()
                except Purchase.DoesNotExist:
                    Purchase.objects.create(user=request.user, product_id=pro_id)
                return Response({}, status=201)
        except ValueError:
            pass
        return Response({}, status=400)

    @action(detail=False)
    def cart_remove(self, request, *args, **kwargs):
        pro_id = request.GET.get('product_id')
        all_rem = request.GET.get('all')
        try:
            pro_id = int(pro_id)
            if pro_id:
                try:
                    purchase = Purchase.objects.get(product_id=pro_id, user=request.user)
                    if all_rem or purchase.quantity == 1:
                        purchase.delete()
                    else:
                        purchase.quantity = max(0, purchase.quantity - 1)
                        purchase.save()
                except Purchase.DoesNotExist:
                    pass
                return Response({}, status=201)
        except ValueError:
            pass
        return Response({}, status=400)

    @action(detail=False)
    def cart_reset(self, request, *args, **kwargs):
        Purchase.objects.filter(user=request.user, delivered=False, paid=False).delete()
        return Response({}, status=201)

    @action(detail=False)
    def delivered_list(self, request, *args, **kwargs):
        ls = PurchaseSerializer(Purchase.objects.filter(user=request.user, paid=True, delivered=True), many=True)
        return Response(ls.data)

    @action(detail=False)
    def way_list(self, request, *args, **kwargs):
        ls = PurchaseSerializer(Purchase.objects.filter(user=request.user, paid=True, delivered=False), many=True)
        return Response(ls.data)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class Recommend(generics.ListAPIView):
    def get_queryset(self):
        return choices(Product.objects.all(), k=20)

    serializer_class = ProductSerializer


@receiver(post_save, sender=NewsletterSubscriber)
def subscribe_newsletter(sender, instance=None, created=False, **kwargs):
    if created:
        send_mail(subject='Subscribed successfully',
                  message='Thanks for subscribing newsletter. We will send you important event information.',
                  from_email=settings.EMAIL_HOST_USER,
                  recipient_list=[instance.email],
                  fail_silently=False)
    else:
        send_mail(subject='Email changed successfully',
                  message='Thanks for subscribing newsletter. We will send you important event information.',
                  from_email=settings.EMAIL_HOST_USER,
                  recipient_list=[instance.email],
                  fail_silently=False)
