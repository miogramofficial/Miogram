const experiences = [
  "🔥 Trending",
  "🏔 Mountains",
  "🎉 Weddings",
  "🏖 Beaches",
  "🎵 Concerts",
  "🚗 Road Trips",
  "⚽ Sports",
  "🌌 Night Sky",
  "🎆 Festivals",
  "🌊 Oceans",
];

export default function ExploreStrip() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-white">
        Explore Experiences
      </h2>

      <div
        className="
          flex
          gap-3
          overflow-x-auto
          pb-2
          scrollbar-hide
        "
      >
        {experiences.map((item) => (
          <button
            key={item}
            className="
              whitespace-nowrap
              rounded-full
              border
              border-zinc-700
              bg-zinc-900
              px-4
              py-2
              text-sm
              text-gray-300
              transition
              hover:border-blue-500
              hover:text-white
            "
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}