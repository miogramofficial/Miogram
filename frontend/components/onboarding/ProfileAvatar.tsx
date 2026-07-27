"use client";

import Image from "next/image";
import { Camera } from "lucide-react";

export default function ProfileAvatar() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Avatar */}
      <button
        className="
          relative
          flex
          h-28
          w-28
          items-center
          justify-center
          overflow-hidden
          rounded-full
          border
          border-zinc-700
          bg-zinc-900
          transition-all
          duration-300
          hover:border-blue-500
        "
      >
        <Image
        src="/avatars/miogram-avatar.png"
        alt="Miogram Avatar"
        width={112}
        height={112}
        className="object-cover"
        />

        <div
          className="
            absolute
            bottom-1
            right-1
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-blue-600
            text-white
          "
        >
          <Camera size={16} />
        </div>
      </button>

      <button className="text-sm font-medium text-blue-400 hover:text-blue-300">
        Upload Photo
      </button>

      <button className="text-sm text-gray-500 hover:text-gray-300">
        Use Miogram Avatar
      </button>
    </div>
  );
}