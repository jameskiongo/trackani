from django.conf import settings
from django.db import models

# Create your models here.
WATCH_STATUS = (
    ("Watching", "Watching"),
    ("Completed", "Completed"),
    ("On Hold", "On Hold"),
    ("Dropped", "Dropped"),
    ("Plan to Watch", "Plan to Watch"),
)


class Anime(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    watch_status = models.CharField(
        max_length=20, choices=WATCH_STATUS, default="Plan to Watch"
    )
    synopsis = models.TextField()
    anime_score = models.IntegerField()
    anime_id = models.IntegerField()
    anime_poster = models.CharField(max_length=100)
    episodes = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    airing_status = models.CharField(max_length=20)

    def __str__(self):
        return self.title
