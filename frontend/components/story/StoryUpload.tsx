"use client";

export default function StoryUpload() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div
        className="
          mx-auto
          flex
          max-w-lg
          flex-col
          gap-6
          px-4
          pt-6
          pb-10
        "
      >

        {/* Header */}

        <div>

          <p className="text-sm text-zinc-400">
            Create
          </p>

          <h1 className="mt-1 text-3xl font-bold">
            Create Story
          </h1>

        </div>

        {/* Upload */}

        <div
          className="
            flex
            h-72
            flex-col
            items-center
            justify-center
            rounded-3xl
            border-2
            border-dashed
            border-zinc-700
            bg-zinc-900
          "
        >

          <div className="text-6xl">
            📖
          </div>

          <p className="mt-4 text-lg font-semibold">
            Select Photo or Video
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Your story disappears after 24 hours
          </p>

          <button
            className="
              mt-6
              rounded-full
              bg-blue-600
              px-6
              py-3
              font-medium
              transition
              hover:bg-blue-500
            "
          >
            Choose Media
          </button>

        </div>

        {/* Optional Text */}

        <div>

          <label className="mb-2 block text-sm text-zinc-300">
            Text (Optional)
          </label>

          <textarea
            rows={4}
            placeholder="Say something..."
            className="
              w-full
              resize-none
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

        {/* Share */}

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
          Share Story
        </button>

      </div>

    </main>
  );
}