"use client";

import { Flame } from "lucide-react";

const trending = [
  {
    title: "Royal Wedding",
    entered: "2.8M Entered",
  },
  {
    title: "Coldplay Live",
    entered: "1.9M Entered",
  },
  {
    title: "Maldives Sunset",
    entered: "1.6M Entered",
  },
];

export default function TrendingNow() {
  return (
    <section className="space-y-3">

      <div className="flex items-center gap-2">

        <Flame
          size={18}
          className="text-orange-500"
        />

        <h2 className="font-semibold text-white">
          Trending Right Now
        </h2>

      </div>

      <div className="space-y-3">

        {trending.map((item) => (
          <div
            key={item.title}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              px-4
              py-3
            "
          >
            <div>
              <h3 className="text-sm font-medium text-white">
                {item.title}
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                {item.entered}
              </p>
            </div>

            <span className="text-orange-500">
              🔥
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}