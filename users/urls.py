from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

from . import views
from users.authentication import MyTokenObtainPairView

urlpatterns = [
    path('register/', csrf_exempt(views.create_user)),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('update-profile-image/', views.UpdateImage.as_view()),
]
