# Generated by Django 3.1.2 on 2021-05-13 05:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0012_user_views'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='rank',
            field=models.IntegerField(null=True),
        ),
    ]
