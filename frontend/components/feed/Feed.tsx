"use client";

import FeedHeader from "./FeedHeader";
import ExperienceCapsules from "./ExperienceCapsules";
import ExperienceCard from "./ExperienceCard";
import BottomNavigation from "./BottomNavigation";

export default function Feed() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Feed Container */}

      <div
        className="
          mx-auto
          flex
          max-w-lg
          flex-col
          gap-6
          px-4
          pb-28
          pt-5
          sm:px-5
        "
      >

        {/* Header */}

        <FeedHeader />

        {/* Today's Experiences */}

        <ExperienceCapsules />

        {/* Feed */}

        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />

      </div>

      {/* Bottom Navigation */}

      <BottomNavigation />

    </main>
  );
}