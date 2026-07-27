import { Search } from "lucide-react";

export default function FeedHeader() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-zinc-800
        bg-black/80
        backdrop-blur-xl
      "
    >
      <div className="mx-auto max-w-lg px-4 py-4">

        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
          Miogram
        </h1>

        <div className="mt-4 flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-3">

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            placeholder="Search experiences..."
            className="
              ml-3
              w-full
              bg-transparent
              text-white
              outline-none
              placeholder:text-gray-500
            "
          />

        </div>

      </div>
    </header>
  );
}