"use client";

import { Heart } from "lucide-react";

type Props = {
  image: string;
  title: string;
  location: string;
  creator: string;
  entered: string;
  likes: string;
  badge: string;
};

const badgeStyles: Record<string, string> = {
  "🔥 Trending": "bg-orange-500/90 text-white",

  "✨ Recommended": "bg-blue-600/90 text-white",

  "🌍 Popular Near You": "bg-green-600/90 text-white",

  "❤️ Because You Like Travel": "bg-pink-600/90 text-white",

  "🏝 Similar Experience": "bg-cyan-600/90 text-white",

  "🎉 Editor's Pick": "bg-purple-600/90 text-white",
};

export default function DiscoverCard({
  image,
  title,
  location,
  creator,
  entered,
  likes,
  badge,
}: Props) {
  return (
    <article
      className="
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:shadow-xl
        hover:shadow-blue-500/10
      "
    >
      <div className="relative aspect-[3/4] overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />

        {/* Dark Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-black/20
            to-transparent
          "
        />

        {/* Badge */}

        <div
      className={`
        absolute
        left-3
        top-3
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        backdrop-blur
        ${badgeStyles[badge] || "bg-black/70 text-white"}
      `}
    >
      {badge}
    </div>

        {/* Bottom Content */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-4
          "
        >
          <h3 className="text-lg font-bold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-zinc-300">
            📍 {location}
          </p>

          <p className="mt-1 text-xs text-zinc-400">
            @{creator}
          </p>

          <div className="mt-3 flex items-center justify-between">

            <div className="flex items-center gap-1 text-pink-400">
              <Heart size={15} />
              <span className="text-xs">
                {likes}
              </span>
            </div>

            <span className="text-xs font-semibold text-blue-400">
              🌍 {entered}
            </span>

          </div>

        </div>

      </div>
    </article>
  );
}