# Generated by Django 3.1.7 on 2021-03-09 01:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20210308_0151'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='facebook',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='phone',
            field=models.CharField(blank=True, max_length=14, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='twitter',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
