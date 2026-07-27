"use client";

import ExperienceType from "./ExperienceType";
import Visibility from "./Visibility";
import PublishButton from "./PublishButton";

export default function UploadDetails() {
  return (
    <section className="space-y-5">

      {/* Title */}

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Experience Title
        </label>

        <input
          type="text"
          placeholder="Give your experience a title..."
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
            transition
            focus:border-blue-500
          "
        />
      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          Description
        </label>

        <textarea
          rows={4}
          placeholder="Tell people about this experience..."
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
            transition
            focus:border-blue-500
          "
        />
      </div>

      {/* Location */}

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">
          📍 Location
        </label>


        <input
          type="text"
          placeholder="Where did this happen?"
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
            transition
            focus:border-blue-500
          "
        />
      </div>

      <ExperienceType />

      <Visibility />

      <PublishButton />

    </section>
  );
}