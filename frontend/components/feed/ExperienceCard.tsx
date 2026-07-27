import {
  MoreHorizontal,
  Heart,
  MessageCircle,
  Share2,
  CheckCircle,
  MapPin,
  Clock3,
} from "lucide-react";

import EnterButton from "./EnterButton";

export default function ExperienceCard() {
  return (
    <article
      className="
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        shadow-xl
        shadow-black/30
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between p-4">
        <div className="flex gap-3">

          {/* Avatar */}

          <div className="h-12 w-12 overflow-hidden rounded-full bg-zinc-700">
            <img
              src="/avatars/miogram-default.png"
              alt="Miogram Avatar"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Creator */}

          <div>
            <div className="flex items-center gap-1">
              <h3 className="font-semibold text-white">
                @Sarah
              </h3>

              <CheckCircle
                size={16}
                className="text-blue-500"
              />
            </div>

            <div className="mt-1 flex items-center gap-4 text-xs text-zinc-400">

              <div className="flex items-center gap-1">
                <MapPin size={13} />
                <span>Maldives, Maldives</span>
              </div>

              <div className="flex items-center gap-1">
                <Clock3 size={13} />
                <span>2m ago</span>
              </div>

            </div>
          </div>
        </div>

        {/* Menu */}

        <button
          className="
            rounded-full
            p-2
            transition
            hover:bg-zinc-800
          "
        >
          <MoreHorizontal
            size={20}
            className="text-zinc-400"
          />
        </button>
      </div>

      {/* Experience Placeholder */}

      <div
        className="
          mx-4
          sm:mx-5
          flex
          aspect-[9/16]
          flex-col
          items-center
          justify-center
          rounded-3xl
          bg-gradient-to-br
          from-zinc-800
          to-zinc-900
          px-8
          text-center
        "
      >
        <img
          src="/avatars/miogram-default.png"
          alt="Miogram"
          className="mb-6 h-20 w-20 rounded-full object-cover"
        />

        <h2 className="text-xl font-bold text-white">
          No Experience Yet
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Be the first to share
          <br />
          an immersive experience.
        </p>
      </div>

      {/* Stats */}

      <div className="flex items-center justify-around px-6 py-5 text-sm">

        <button className="flex items-center gap-2 text-zinc-400 transition hover:text-white">
          <Heart size={18} />
          <span>1.2K</span>
        </button>

        <button className="flex items-center gap-2 text-zinc-400 transition hover:text-white">
          <MessageCircle size={18} />
          <span>348</span>
        </button>

        <button className="flex items-center gap-2 text-zinc-400 transition hover:text-white">
          <Share2 size={18} />
          <span>Share</span>
        </button>

        <button className="flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300">
          <span>🌍</span>
          <span>24.8K Entered</span>
        </button>

      </div>

      {/* Enter Button */}

      <div className="px-4 pb-5">
        <EnterButton />
      </div>

    </article>
  );
}