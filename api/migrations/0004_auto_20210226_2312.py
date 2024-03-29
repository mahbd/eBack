# Generated by Django 3.1.7 on 2021-02-26 23:12

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0003_purchase_quantity'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='purchase',
            unique_together={('user', 'product', 'delivered')},
        ),
        migrations.AlterUniqueTogether(
            name='userreview',
            unique_together={('user', 'product')},
        ),
    ]
