from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('site-data', views.SiteDataViewSet, 'site-data')
router.register('category', views.CategoryViewSet, 'category')
router.register('user_review', views.UserReviewViewSet, 'user_review')
router.register('purchase', views.PurchaseViewSet, 'purchase')
router.register('product', views.ProductViewSet, 'product')

urlpatterns = [
    path('subscribe/', csrf_exempt(views.NewsletterSubscriberView.as_view())),
    path('message/', csrf_exempt(views.MessageView.as_view())),
    path('recommend/', views.Recommend.as_view()),
    path('', include(router.urls)),
]
