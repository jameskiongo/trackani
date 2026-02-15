// pages/current.tsx

import ListAnime from "@/components/homepage/ListCurrentAiring";
import TopAiringAnime from "@/components/homepage/TopAnime";
export default function CurrentPage() {
  return (
    <div className="w-full flex flex-col lg:flex-row min-h-screen">
      {/* ListAnime section - left side on desktop, top on mobile */}
      <div className="w-full lg:w-9/12 bg-white size-full">
        <ListAnime />
      </div>
      {/* TopAiringAnime section - right side on desktop, bottom on mobile */}
      <div className="w-full lg:w-3/12 bg-offwhite rounded-sm size-full">
        <TopAiringAnime />
      </div>
    </div>
  );
}
