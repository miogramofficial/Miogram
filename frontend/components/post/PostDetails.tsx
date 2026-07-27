"use client";

export default function PostDetails() {
  return (
    <div className="space-y-5">

      {/* Location */}

      <div>

        <label className="mb-2 block text-sm text-zinc-300">
          Location (Optional)
        </label>

        <input
          type="text"
          placeholder="Add a location..."
          className="
            w-full
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900
            px-4
            py-3
            text-white
            outline-none
            focus:border-blue-500
          "
        />

      </div>

      {/* Visibility */}

      <div>

        <label className="mb-3 block text-sm text-zinc-300">
          Visibility
        </label>

        <div className="flex gap-3">

          <button className="rounded-full bg-blue-600 px-4 py-2 text-sm">
            🌍 Public
          </button>

          <button className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm">
            👥 Followers
          </button>

          <button className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm">
            🔒 Private
          </button>

        </div>

      </div>

      {/* Publish */}

      <button
        className="
          w-full
          rounded-full
          bg-blue-600
          py-4
          text-lg
          font-semibold
          transition
          hover:bg-blue-500
        "
      >
        Publish Post
      </button>

    </div>
  );
}