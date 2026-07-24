import Image from "next/image";

type AuthLogoProps = {
  size?: number;
};

export default function AuthLogo({
  size = 74,
}: AuthLogoProps) {
  return (
    <div className="flex justify-center pb-6">
      <Image
        src="/logo.png"
        alt="Miogram"
        width={size}
        height={size}
        priority
        className="h-auto w-auto"
      />
    </div>
  );
}