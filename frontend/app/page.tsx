export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold mb-6">
          🚀 Miogram
        </h1>

        <h2 className="text-3xl font-semibold mb-4">
          Experience moments,
          <br />
          don't just watch them.
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          The world's first immersive social platform where you don't
          just watch videos—you step inside experiences.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}