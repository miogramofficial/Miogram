import Image from "next/image";

export default function SocialLogin() {
  return (
    <div className="pt-8 space-y-6">
      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-800" />

        <span className="text-sm text-zinc-500">
          Continue with
        </span>

        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          className="
            h-12
            rounded-xl
            border
            border-zinc-700
            bg-zinc-900/50
            flex
            items-center
            justify-center
            gap-2
            transition-all
            duration-300
            hover:border-violet-500
            hover:bg-violet-500/5
          "
        >
          <Image
            src="/google.svg"
            alt="Google"
            width={20}
            height={20}
            className="w-5 h-auto"
          />

          <span className="text-sm font-medium text-white">
            Google
          </span>
        </button>

        <button
          className="
            h-12
            rounded-xl
            border
            border-zinc-700
            bg-zinc-900/50
            flex
            items-center
            justify-center
            gap-2
            transition-all
            duration-300
            hover:border-violet-500
            hover:bg-violet-500/5
          "
        >
          <Image
            src="/apple.svg"
            alt="Apple"
            width={20}
            height={20}
            className="w-5 h-auto"
          />

          <span className="text-sm font-medium text-white">
            Apple
          </span>
        </button>
      </div>
    </div>
  );
}