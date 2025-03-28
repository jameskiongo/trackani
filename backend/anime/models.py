from django.conf import settings
from django.db import models

# Create your models here.
WATCH_STATUS = (
    ("watching", "watching"),
    ("completed", "completed"),
    ("on hold", "on hold"),
    ("maybe watching", "maybe watching"),
)


class Anime(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    watch_status = models.CharField(
        max_length=20, choices=WATCH_STATUS, default="maybe watching"
    )
    synopsis = models.TextField()
    anime_score = models.CharField(max_length=100)
    type = models.CharField(max_length=20)
    isBookmarked = models.BooleanField(default=False)
    mal_id = models.IntegerField(unique=True)
    anime_poster = models.CharField(max_length=100)
    episodes = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
