# Generated manually to allow hashed passwords.
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_membresia_clases_disponibles'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registro',
            name='password',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='coach',
            name='password',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='nuevocoach',
            name='password',
            field=models.CharField(max_length=128),
        ),
    ]
