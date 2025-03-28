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
            "mal_id",
            "type",
            "anime_poster",
            "episodes",
            "created_at",
            "updated_at",
            "isBookmarked",
        ]
        read_only_fields = ["id", "created_at", "updated_at", "isBookmarked"]

    def create(self, validated_data):
        # Automatically set isBookmarked to True when creating
        validated_data["isBookmarked"] = True
        return super().create(validated_data)
