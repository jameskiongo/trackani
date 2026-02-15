import { useState } from "react";

interface YTProps {
  videoId?: string;
  embedUrl?: string;
}

function extractVideoId(url: string): string | null {
  // Handle youtube-nocookie.com embed URLs
  const nocookieMatch = url.match(/youtube-nocookie\.com\/embed\/([^?]+)/);
  if (nocookieMatch) return nocookieMatch[1];

  // Handle regular youtube.com embed URLs
  const embedMatch = url.match(/youtube\.com\/embed\/([^?]+)/);
  if (embedMatch) return embedMatch[1];

  // Handle regular youtube.com watch URLs
  const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (watchMatch) return watchMatch[1];

  // Handle youtu.be short URLs
  const shortMatch = url.match(/youtu\.be\/([^?]+)/);
  if (shortMatch) return shortMatch[1];

  return null;
}

export default function YouTubeEmbed({ videoId, embedUrl }: YTProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Determine the video ID to use
  let finalVideoId = videoId;

  if (!finalVideoId && embedUrl) {
    finalVideoId = extractVideoId(embedUrl) || undefined;
  }

  if (!finalVideoId) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
          </div>
        )}
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${finalVideoId}?enablejsapi=1&wmode=opaque`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}
