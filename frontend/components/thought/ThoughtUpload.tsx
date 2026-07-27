"use client";

export default function ThoughtUpload() {
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
            Share a Thought
          </h1>

        </div>

        {/* Thought */}

        <div>

          <label className="mb-2 block text-sm text-zinc-300">
            What's on your mind?
          </label>

          <textarea
            rows={8}
            maxLength={300}
            placeholder="Share something with the world..."
            className="
              w-full
              resize-none
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900
              px-5
              py-4
              text-white
              outline-none
              focus:border-blue-500
            "
          />

          <p className="mt-2 text-right text-xs text-zinc-500">
            300 characters max
          </p>

        </div>

        {/* Optional Image */}

        <button
          className="
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900
            py-4
            transition
            hover:border-blue-500
          "
        >
          📷 Add Image (Optional)
        </button>

        {/* Publish */}

        <button
          className="
            rounded-full
            bg-blue-600
            py-4
            text-lg
            font-semibold
            transition
            hover:bg-blue-500
          "
        >
          ✍️ Post Thought
        </button>

      </div>

    </main>
  );
}