# Generated by Django 3.1.2 on 2021-05-07 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0010_user_modify_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vote',
            name='gallery_id',
        ),
        migrations.AddField(
            model_name='vote',
            name='current_id',
            field=models.IntegerField(null=True),
        ),
    ]
