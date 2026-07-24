import AuthLogo from "@/components/auth/AuthLogo";
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <AuthLogo size={88} />

      <div className="mt-10 max-w-4xl space-y-6">
        <h1
        className="
            text-6xl
            md:text-8xl
            font-black
            leading-[0.95]
            tracking-tight
            text-white
        "
        >
        Experience moments,
        <br />
        don't just watch them.
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-400">
          The world's first immersive social platform where you don't
          just watch videos—you step inside experiences.
        </p>

        <div className="pt-6">
          <Button
        className="
            rounded-full
            px-10
            py-4
            bg-violet-600
            hover:bg-violet-500
            shadow-xl
            shadow-violet-700/30
        "
        >
        Get Started
        </Button>
        </div>
      </div>

      <div className="mt-24 flex flex-col items-center text-zinc-500">
        <span className="text-2xl">↓</span>

        <span className="mt-2 text-sm tracking-wide">
          Scroll to Explore
        </span>
      </div>
    </section>
  );
}