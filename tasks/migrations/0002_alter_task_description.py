# Generated by Django 5.0.1 on 2024-01-06 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='description',
            field=models.TextField(blank=True, max_length=1000),
        ),
    ]
