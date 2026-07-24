import { Button } from "@/components/ui";

const experiences = [
  {
    title: "Wedding in Kyoto",
    creator: "Sarah",
    location: "Kyoto, Japan",
    likes: "24.8K",
    comments: "3.2K",
    countries: 82,
    entering: 138,
  },
  {
    title: "Safari Adventure",
    creator: "David",
    location: "Kenya",
    likes: "18.2K",
    comments: "1.9K",
    countries: 57,
    entering: 92,
  },
  {
    title: "Northern Lights",
    creator: "Emma",
    location: "Iceland",
    likes: "31.5K",
    comments: "4.1K",
    countries: 101,
    entering: 214,
  },
];

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">
          Featured Experiences
        </h2>

        <p className="mt-4 text-lg text-zinc-400">
          Discover moments from around the world.
        </p>
      </div>

      <div className="space-y-10">
        {experiences.map((item) => (
          <div
            key={item.title}
            className="
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-zinc-900
            "
          >
            {/* Preview */}
            <div
              className="
                h-72
                bg-gradient-to-br
                from-violet-700
                via-indigo-700
                to-zinc-900
              "
            />

            {/* Content */}
            <div className="space-y-6 p-8">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-zinc-400">
                  👤 {item.creator}
                </p>

                <p className="text-zinc-400">
                  📍 {item.location}
                </p>
              </div>

              <Button
                className="
                  rounded-full
                  bg-violet-600
                  px-8
                  py-3
                  hover:bg-violet-500
                "
              >
                Enter Experience
              </Button>

              <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
                <span>❤️ {item.likes}</span>
                <span>💬 {item.comments}</span>
                <span>🌍 {item.countries} Countries</span>
                <span>🔥 {item.entering} Entering Now</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}