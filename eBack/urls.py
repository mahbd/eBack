from django.conf import settings
from django.shortcuts import render
from django.conf.urls.static import static
from django.contrib import admin
from django.http import HttpResponse
from django.urls import path, include, re_path

def index(request):
    return render(request, 'build/index.html')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),
    path('api/', include('api.urls')),
    re_path(r'^(?!admin|users|api)([a-z0-9/]+)$', index),
    path('', index),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
