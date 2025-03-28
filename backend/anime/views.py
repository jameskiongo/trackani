from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import Anime
from .serializer import AnimeSerializer


class AnimeApiView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        anime = Anime.objects.filter(user=request.user)
        serializer = AnimeSerializer(anime, many=True)
        return Response(serializer.data)

    def post(self, request):

        serializer = AnimeSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class EditAnimeApiView(APIView):
    def patch(self, request, pk):
        # anime = Anime.objects.get(pk=pk)
        anime = get_object_or_404(Anime, pk=pk)
        if anime.user != request.user:
            raise ValidationError("Unauthorized")
        serializer = AnimeSerializer(anime, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk):
        anime = get_object_or_404(Anime, pk=pk)
        if anime.user != request.user:
            raise ValidationError("Unauthorized")
        anime.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
