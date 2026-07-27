"use client";

const capsules = [
  {
    id: 1,
    title: "Your Experience",
    image: null,
    live: false,
  },
  {
    id: 2,
    title: "Concert",
    image: "/placeholders/concert.jpg",
    live: true,
  },
  {
    id: 3,
    title: "Ride",
    image: "/placeholders/ride.jpg",
    live: false,
  },
  {
    id: 4,
    title: "Trek",
    image: "/placeholders/trek.jpg",
    live: false,
  },
  {
    id: 5,
    title: "Birthday",
    image: "/placeholders/birthday.jpg",
    live: false,
  },
  {
    id: 6,
    title: "Beach",
    image: "/placeholders/beach.jpg",
    live: false,
  },
];

export default function ExperienceCapsules() {
  return (
    <section className="space-y-4">

      {/* Section Title */}

      <div>
        <h2 className="text-lg font-bold text-white">
          Today's Experiences
        </h2>
      </div>

      {/* Capsules */}

      <div
        className="
          flex
          gap-4
          overflow-x-auto
          scrollbar-hide
          pb-2
        "
      >
        {capsules.map((capsule) => (
          <div
            key={capsule.id}
            className="
              flex
              min-w-[78px]
              flex-col
              items-center
            "
          >

            {/* Circle */}

            <div
              className="
                relative
                flex
                h-20
                w-20
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border-2
                border-blue-500
                bg-zinc-800
              "
            >
              {capsule.image ? (
                <img
                  src={capsule.image}
                  alt={capsule.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-4xl font-light text-white">
                    +
                  </span>
                </div>
              )}

              {capsule.live && (
                <span
                  className="
                    absolute
                    bottom-0
                    rounded-full
                    bg-red-600
                    px-2
                    py-0.5
                    text-[10px]
                    font-bold
                    text-white
                  "
                >
                  LIVE
                </span>
              )}
            </div>

            {/* Label */}

            <span
              className="
                mt-2
                text-center
                text-[11px]
                leading-tight
                text-gray-300
              "
            >
              {capsule.title}
            </span>

          </div>
        ))}
      </div>

    </section>
  );
}