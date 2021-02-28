from django.contrib import admin
from django import forms
from django_admin_json_editor import JSONEditorWidget

from .models import SiteData, Message, NewsletterSubscriber, Category, Product, Purchase, UserReview


class JSONModelAdminForm(forms.ModelForm):
    class Meta:
        model = SiteData
        fields = '__all__'
        widgets = {
            'data': JSONEditorWidget({}, collapsed=False),
        }


@admin.register(SiteData)
class SiteDataAdmin(admin.ModelAdmin):
    list_display = ('category', )
    form = JSONModelAdminForm


@admin.register(NewsletterSubscriber)
class NewsletterAdmin(admin.ModelAdmin):
    list_display = ('id', 'email')


@admin.register(UserReview)
class UserReviewAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'product_id', 'rating')


admin.site.register(Message)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Purchase)
