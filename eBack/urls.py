from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.http import HttpResponse
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),
    path('api/', include('api.urls')),
    path('', lambda x: HttpResponse("Hello world"))
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
