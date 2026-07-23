import Image from "next/image";

type AuthLogoProps = {
  size?: number;
  showText?: boolean;
};

export default function AuthLogo({
  size = 88,
  showText = true,
}: AuthLogoProps) {
  return (
    <div className="flex flex-col items-center">
      <Image
    src="/logo.png"
    alt="Miogram"
    width={size}
    height={size}
    priority
    style={{
        width: `${size}px`,
        height: "auto",
    }}
    />

      {showText && (
        <>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-white">
            Miogram
          </h1>

          <p className="mt-3 text-center text-base leading-7 text-zinc-400">
            Experience moments,
            <br />
            don't just watch them.
          </p>
        </>
      )}
    </div>
  );
}