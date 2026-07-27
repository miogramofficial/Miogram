"use client";

import { useState } from "react";

const categories = [
  "Wedding",
  "Travel",
  "Adventure",
  "Concert",
  "Food",
  "Nature",
  "Sports",
];

export default function ExperienceType() {
  const [selected, setSelected] = useState("Wedding");

  return (
    <section className="space-y-3">

      <h3 className="text-sm font-medium text-zinc-300">
        Experience Type
      </h3>

      <div className="flex flex-wrap gap-3">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`
              rounded-full
              px-4
              py-2
              text-sm
              transition

              ${
                selected === category
                  ? "bg-blue-600 text-white"
                  : "border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-blue-500"
              }
            `}
          >
            {category}
          </button>
        ))}

      </div>

    </section>
  );
}