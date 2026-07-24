type AuthCardProps = {
  children: React.ReactNode;
};

export default function AuthCard({
  children,
}: AuthCardProps) {
  return (
    <div
      className="
        w-full
        max-w-[520px]
        rounded-[36px]
        border
        border-white/10
        bg-zinc-900/90
        backdrop-blur-2xl
        px-10
        py-10
        shadow-2xl
        shadow-black/60
      "
    >
      {children}
    </div>
  );
}