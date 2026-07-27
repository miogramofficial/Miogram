"use client";

const trending = [
  {
    title: "Maldives Sunset",
    viewers: "2.4M Entered",
  },
  {
    title: "Royal Wedding",
    viewers: "1.8M Entered",
  },
  {
    title: "Coldplay Live",
    viewers: "980K Entered",
  },
];

export default function TrendingExperiences() {
  return (
    <section className="space-y-4">

      <div className="flex items-center justify-between">

        <h2 className="text-lg font-bold text-white">
          🔥 Everyone Is Entering
        </h2>

        <button className="text-sm text-blue-400 hover:text-blue-300">
          See all
        </button>

      </div>

      <div
        className="
          flex
          gap-4
          overflow-x-auto
          scrollbar-hide
          pb-2
        "
      >
        {trending.map((item) => (
          <div
            key={item.title}
            className="
              min-w-[240px]
              overflow-hidden
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900
            "
          >
            <div
              className="
                aspect-video
                bg-gradient-to-br
                from-zinc-800
                to-zinc-900
                flex
                items-center
                justify-center
                text-5xl
              "
            >
              🌍
            </div>

            <div className="space-y-1 p-4">

              <h3 className="font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-sm text-blue-400">
                {item.viewers}
              </p>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}