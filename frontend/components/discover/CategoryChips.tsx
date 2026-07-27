"use client";

import {
  Sparkles,
  Heart,
  Plane,
  Music2,
  Mountain,
  Utensils,
  Camera,
  Waves,
} from "lucide-react";

const categories = [
  {
    name: "For You",
    icon: Sparkles,
  },
  {
    name: "Wedding",
    icon: Heart,
  },
  {
    name: "Travel",
    icon: Plane,
  },
  {
    name: "Concert",
    icon: Music2,
  },
  {
    name: "Adventure",
    icon: Mountain,
  },
  {
    name: "Food",
    icon: Utensils,
  },
  {
    name: "Nature",
    icon: Camera,
  },
  {
    name: "Beaches",
    icon: Waves,
  },
];

export default function CategoryChips() {
  return (
    <div
      className="
        flex
        gap-3
        overflow-x-auto
        pb-1
        scrollbar-hide
      "
    >
      {categories.map((category, index) => {
        const Icon = category.icon;

        return (
          <button
            key={category.name}
            className={`
              flex
              items-center
              gap-2
              whitespace-nowrap
              rounded-full
              px-4
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-300

              ${
                index === 0
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-blue-500 hover:text-white"
              }
            `}
          >
            <Icon size={16} />

            {category.name}
          </button>
        );
      })}
    </div>
  );
}