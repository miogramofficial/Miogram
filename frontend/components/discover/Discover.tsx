"use client";

import DiscoverHeader from "./DiscoverHeader";
import SearchBar from "./SearchBar";
import CategoryChips from "./CategoryChips";
import TrendingExperiences from "./TrendingExperiences";
import ExperienceGrid from "./ExperienceGrid";
import TrendingNow from "./TrendingNow";
import TrendingCarousel from "./TrendingCarousel";

export default function Discover() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div
        className="
          mx-auto
          max-w-lg
          space-y-6
          px-4
          pt-5
          pb-28
        "
      >
    <DiscoverHeader />

    <SearchBar />

    <CategoryChips />

    <TrendingCarousel />

    <ExperienceGrid />

      </div>
    </main>
  );
}