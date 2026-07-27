"use client";

import DiscoverCard from "./DiscoverCard";

const cards = [
  {
    image: "/discover/maldives.jpg",
    title: "Sunset Escape",
    location: "Maldives",
    creator: "Sarah",
    entered: "2.4M",
    likes: "18K",
    badge: "🔥 Trending",
  },
  {
    image: "/discover/wedding.jpg",
    title: "Royal Wedding",
    location: "Jaipur",
    creator: "Aarav",
    entered: "980K",
    likes: "11K",
    badge: "✨ Recommended",
  },
  {
    image: "/discover/concert.jpg",
    title: "Coldplay Night",
    location: "London",
    creator: "Chris",
    entered: "1.8M",
    likes: "27K",
    badge: "🌍 Popular Near You",
  },
  {
    image: "/discover/trekking.jpg",
    title: "Everest Trek",
    location: "Nepal",
    creator: "Emily",
    entered: "640K",
    likes: "9K",
    badge: "❤️ Because You Like Travel",
  },
  {
    image: "/discover/surfing.jpg",
    title: "Big Waves",
    location: "Bali",
    creator: "Jake",
    entered: "720K",
    likes: "15K",
    badge: "🏝 Similar Experience",
  },
  {
    image: "/discover/festival.jpg",
    title: "Festival Lights",
    location: "Japan",
    creator: "Yuki",
    entered: "1.1M",
    likes: "22K",
    badge: "🎉 Editor's Pick",
  },
];

export default function ExperienceGrid() {
  return (
    <section className="space-y-4">

      <h2 className="text-lg font-bold text-white">
        ✨ Experiences You'll Love
      </h2>

      <div className="grid grid-cols-2 gap-4 items-start">
        {cards.map((card) => (
          <DiscoverCard key={card.title} {...card} />
        ))}
      </div>

    </section>
  );
}