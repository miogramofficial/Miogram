"use client";

import Link from "next/link";

const options = [
  {
    emoji: "🎥",
    title: "Experience",
    description: "Create an immersive experience",
    href: "/upload",
  },
  {
    emoji: "📷",
    title: "Post",
    description: "Share photos or videos",
    href: "/post",
  },
  {
    emoji: "📖",
    title: "Story",
    description: "Share a 24-hour story",
    href: "/story",
  },
  {
    emoji: "✍️",
    title: "Thought",
    description: "Write something to share",
    href: "/thought",
  },
];

export default function CreateMenu() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div
        className="
          mx-auto
          max-w-lg
          px-4
          pt-8
          pb-10
        "
      >
        <p className="text-sm text-zinc-400">
          Create
        </p>

        <h1 className="mt-1 text-3xl font-bold">
          What would you like to share?
        </h1>

        <div className="mt-8 space-y-4">

          {options.map((item) => (

            <Link
              key={item.title}
              href={item.href}
              className="
                flex
                items-center
                gap-5
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500
                hover:bg-zinc-800
              "
            >

              <div className="text-4xl">
                {item.emoji}
              </div>

              <div>

                <h2 className="text-lg font-semibold">
                  {item.title}
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                  {item.description}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>
  );
}