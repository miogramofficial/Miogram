"use client";

import { useState } from "react";

export default function Visibility() {
  const [visibility, setVisibility] = useState("Public");

  return (
    <section className="space-y-3">

      <h3 className="text-sm font-medium text-zinc-300">
        Visibility
      </h3>

      <div className="grid grid-cols-2 gap-3">

        <button
          onClick={() => setVisibility("Public")}
          className={`
            rounded-2xl
            py-3
            text-sm
            font-medium
            transition

            ${
              visibility === "Public"
                ? "bg-blue-600 text-white"
                : "border border-zinc-800 bg-zinc-900 text-zinc-300"
            }
          `}
        >
          🌍 Public
        </button>

        <button
          onClick={() => setVisibility("Private")}
          className={`
            rounded-2xl
            py-3
            text-sm
            font-medium
            transition

            ${
              visibility === "Private"
                ? "bg-blue-600 text-white"
                : "border border-zinc-800 bg-zinc-900 text-zinc-300"
            }
          `}
        >
          🔒 Private
        </button>

      </div>

    </section>
  );
}