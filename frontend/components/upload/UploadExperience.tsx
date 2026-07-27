"use client";

import { useRef, useState } from "react";
import UploadDetails from "./UploadDetails";

export default function UploadExperience() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [videoName, setVideoName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  function handleChooseVideo() {
    inputRef.current?.click();
  }

  function handleVideoChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    setVideoName(file.name);
    setVideoUrl(URL.createObjectURL(file));
  }

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
            Upload Experience
          </h1>
        </div>

        {/* Upload Box */}

        <div
          className="
            overflow-hidden
            rounded-3xl
            border-2
            border-dashed
            border-zinc-700
            bg-zinc-900
            p-5
          "
        >
          {videoUrl ? (
            <>
              <video
                src={videoUrl}
                controls
                className="
                  aspect-[9/16]
                  w-full
                  rounded-2xl
                  bg-black
                  object-cover
                "
              />

              <p className="mt-4 text-center text-sm text-blue-400">
                {videoName}
              </p>
            </>
          ) : (
            <div
              className="
                flex
                h-64
                flex-col
                items-center
                justify-center
              "
            >
              <div className="text-6xl">
                🎥
              </div>

              <p className="mt-4 text-lg font-semibold">
                Select a Video
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                Portrait or Landscape
              </p>
            </div>
          )}

          <button
            onClick={handleChooseVideo}
            className="
              mt-6
              w-full
              rounded-full
              bg-blue-600
              py-3
              font-medium
              transition
              hover:bg-blue-500
            "
          >
            {videoUrl
              ? "Choose Another Video"
              : "Choose Video"}
          </button>

          <input
            ref={inputRef}
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleVideoChange}
          />
        </div>

        {/* Upload Details */}

        <UploadDetails />

      </div>
    </main>
  );
}