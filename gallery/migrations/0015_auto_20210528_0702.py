# Generated by Django 3.1.2 on 2021-05-28 07:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0014_user_wallet_address'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='gallery',
            name='user_id',
        ),
        migrations.RemoveField(
            model_name='gallery_info',
            name='template_id',
        ),
        migrations.RemoveField(
            model_name='template',
            name='gallery_id',
        ),
        migrations.RemoveField(
            model_name='vote',
            name='user_id',
        ),
        migrations.DeleteModel(
            name='Dummypost',
        ),
        migrations.DeleteModel(
            name='Gallery',
        ),
        migrations.DeleteModel(
            name='Gallery_Info',
        ),
        migrations.DeleteModel(
            name='Template',
        ),
        migrations.DeleteModel(
            name='Vote',
        ),
    ]
