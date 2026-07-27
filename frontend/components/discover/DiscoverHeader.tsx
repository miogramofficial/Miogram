"use client";

import { Sparkles } from "lucide-react";

export default function DiscoverHeader() {
  return (
    <header className="flex items-center justify-between">

      <div>

        <p className="text-sm text-zinc-400">
          Good Evening 👋
        </p>

        <h1 className="mt-1 text-3xl font-bold text-white">
          Discover Experiences
        </h1>

      </div>

      <button
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-zinc-800
          bg-zinc-900
          transition-all
          duration-300
          hover:border-blue-500
          hover:bg-zinc-800
        "
      >
        <Sparkles
          size={20}
          className="text-blue-500"
        />
      </button>

    </header>
  );
}