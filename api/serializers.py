from rest_framework import serializers

from .models import SiteData, NewsletterSubscriber, Message, Category, Product, Purchase, UserReview


class SiteDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteData
        fields = '__all__'


class NewsletterSubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscriber
        fields = '__all__'


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class PurchaseSerializer(serializers.ModelSerializer):
    def validate(self, attrs):
        if self.instance:
            pass
        else:
            user = self.context['request'].user
            attrs['user'] = user if user.is_authenticated else None
        return attrs

    class Meta:
        depth = 1
        model = Purchase
        exclude = ('user', )


class UserReviewSerializer(serializers.ModelSerializer):
    def validate(self, attrs):
        if self.instance:
            pass
        else:
            user = self.context['request'].user
            attrs['user'] = user if user.is_authenticated else None
        return attrs

    class Meta:
        model = UserReview
        exclude = ('user', )
