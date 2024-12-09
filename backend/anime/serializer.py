from rest_framework import serializers

from .models import Anime


class AnimeSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Anime
        fields = [
            "id",
            "user",
            "title",
            "watch_status",
            "synopsis",
            "anime_score",
            "anime_id",
            "anime_poster",
            "episodes",
            "created_at",
            "updated_at",
            "airing_status",
        ]
        read_only_fields = ["id", "created_at", "updated_at"]
