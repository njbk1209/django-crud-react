from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, max_length=1000)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.title