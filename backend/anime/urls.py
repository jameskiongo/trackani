from django.urls import include, path

from . import views

urlpatterns = [
    path("", views.AnimeApiView.as_view(), name="anime"),
    path("<int:pk>/", views.EditAnimeApiView.as_view(), name="edit_anime"),
]
