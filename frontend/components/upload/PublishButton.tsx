"use client";

import { useState } from "react";

export default function PublishButton() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  function handlePublish() {
    if (uploading) return;

    setUploading(true);
    setProgress(0);

    let value = 0;

    const interval = setInterval(() => {
      value += 5;

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
      }
    }, 120);
  }

  return (
    <section className="space-y-4">

      {uploading && (
        <div className="space-y-2">

          <div className="flex justify-between text-sm text-zinc-400">
            <span>Uploading...</span>

            <span>{progress}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">

            <div
              className="h-full bg-blue-500 transition-all"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <p className="text-xs text-zinc-500">

            {progress < 30 && "Uploading video..."}

            {progress >= 30 &&
              progress < 60 &&
              "Optimizing video..."}

            {progress >= 60 &&
              progress < 90 &&
              "Generating immersive preview..."}

            {progress >= 90 &&
              progress < 100 &&
              "Publishing..."}

            {progress === 100 &&
              "Upload Complete ✅"}

          </p>

        </div>
      )}

      <button
        onClick={handlePublish}
        disabled={uploading}
        className="
          w-full
          rounded-2xl
          bg-blue-600
          py-4
          text-lg
          font-semibold
          text-white
          transition
          hover:bg-blue-500
          disabled:opacity-60
        "
      >
        {uploading
          ? "Publishing..."
          : "🚀 Publish Experience"}
      </button>

    </section>
  );
}