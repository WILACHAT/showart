# Generated by Django 3.1.2 on 2021-05-21 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0013_user_rank'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='wallet_address',
            field=models.CharField(max_length=64, null=True),
        ),
    ]
