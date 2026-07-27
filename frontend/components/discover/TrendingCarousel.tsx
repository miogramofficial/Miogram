"use client";

import { useEffect, useState } from "react";

const experiences = [
  {
    image: "/discover/maldives.jpg",
    title: "Sunset Escape",
    location: "Maldives",
    creator: "Sarah",
    entered: "2.4M",
    badge: "🔥 Trending",
  },
  {
    image: "/discover/wedding.jpg",
    title: "Royal Wedding",
    location: "Jaipur",
    creator: "Aarav",
    entered: "980K",
    badge: "✨ Recommended",
  },
  {
    image: "/discover/concert.jpg",
    title: "Coldplay Night",
    location: "London",
    creator: "Chris",
    entered: "1.8M",
    badge: "🎉 Editor's Pick",
  },
  {
    image: "/discover/festival.jpg",
    title: "Festival Lights",
    location: "Japan",
    creator: "Yuki",
    entered: "1.1M",
    badge: "🏝 Similar Experience",
  },
];

export default function TrendingCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % experiences.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const experience = experiences[current];

  return (
    <section
      key={current}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        animate-fade
      "
    >
      <img
        src={experience.image}
        alt={experience.title}
        className="
          aspect-[16/9]
          w-full
          object-cover
        "
      />

      {/* Dark Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/40
          to-transparent
        "
      />

      {/* Content */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-5
        "
      >
        <span
          className="
            rounded-full
            bg-blue-600
            px-3
            py-1
            text-xs
            font-medium
          "
        >
          {experience.badge}
        </span>

        <h2 className="mt-3 text-2xl font-bold text-white">
          {experience.title}
        </h2>

        <p className="mt-1 text-sm text-zinc-300">
          📍 {experience.location}
        </p>

        <p className="mt-1 text-sm text-zinc-400">
          @{experience.creator}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold text-blue-400">
            🌍 {experience.entered} Entered
          </span>

          <button
            className="
              rounded-full
              bg-blue-600
              px-5
              py-2
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:bg-blue-500
              active:scale-95
            "
          >
            🌍 Enter
          </button>
        </div>

        {/* Indicator Dots */}

        <div className="mt-5 flex justify-center gap-2">
          {experiences.map((_, index) => (
            <div
              key={index}
              className={`
                rounded-full
                transition-all
                duration-300
                ${
                  current === index
                    ? "h-2 w-6 bg-white"
                    : "h-2 w-2 bg-white/40"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}