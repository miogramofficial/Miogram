import Image from "next/image";

export default function SocialLogin() {
  return (
    <div className="space-y-6">
      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-800" />

        <span className="text-sm text-gray-500">
          Continue with
        </span>

        <div className="h-px flex-1 bg-gray-800" />
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-2 gap-4">

        <button
          className="
            h-12
            rounded-xl
            border
            border-gray-700
            flex
            items-center
            justify-center
            gap-2
            hover:border-blue-500
            hover:bg-blue-500/5
            transition-all
          "
        >

            <Image
            src="/google.svg"
            alt="Google"
            width={20}
            height={20}
            className="w-5 h-auto"
            />

          <span>Google</span>
        </button>

        <button
          className="
            h-12
            rounded-xl
            border
            border-gray-700
            flex
            items-center
            justify-center
            gap-2
            hover:border-blue-500
            hover:bg-blue-500/5
            transition-all
          "
        >

        <Image
        src="/apple.svg"
        alt="Apple"
        width={20}
        height={20}
        className="w-5 h-auto"
        />

          <span>Apple</span>
        </button>

      </div>
    </div>
  );
}