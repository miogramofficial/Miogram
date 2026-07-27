"use client";

import {
  House,
  Compass,
  Bell,
  User,
  Plus,
} from "lucide-react";

export default function BottomNavigation() {
  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        pointer-events-none
      "
    >
      <div className="mx-auto max-w-lg px-5 pb-2">

        <div
          className="
            relative
            pointer-events-auto
            h-14
            rounded-full
            border
            border-zinc-800
            bg-black/95
            backdrop-blur-xl
            shadow-xl
            shadow-black/30
          "
        >

          {/* Floating Create Button */}

          <button
            className="
              absolute
              left-1/2
              -top-4
              -translate-x-1/2

              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-full
              bg-blue-600

              shadow-lg
              shadow-blue-600/25

              transition-all
              duration-200
              hover:scale-105
              active:scale-95
            "
          >
            <Plus
              size={20}
              strokeWidth={2.5}
              className="text-white"
            />
          </button>

          {/* Navigation */}

          <div className="flex h-full items-center justify-between px-7">

            {/* Home */}

            <button className="flex items-center justify-center">
              <House
                size={21}
                className="text-white"
              />
            </button>

            {/* Discover */}

            <button className="flex items-center justify-center">
              <Compass
                size={21}
                className="text-zinc-500 transition-colors hover:text-white"
              />
            </button>

            {/* Space for floating button */}

            <div className="w-10" />

            {/* Notifications */}

            <button className="flex items-center justify-center">
              <Bell
                size={21}
                className="text-zinc-500 transition-colors hover:text-white"
              />
            </button>

            {/* Profile */}

            <button className="flex items-center justify-center">
              <User
                size={21}
                className="text-zinc-500 transition-colors hover:text-white"
              />
            </button>

          </div>
        </div>

      </div>
    </nav>
  );
}