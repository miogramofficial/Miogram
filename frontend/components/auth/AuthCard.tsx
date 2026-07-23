type AuthCardProps = {
  children: React.ReactNode;
};

export default function AuthCard({
  children,
}: AuthCardProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12">
      <div
        className="
          w-full
          max-w-[430px]
          rounded-3xl
          border
          border-zinc-800
          bg-[#171717]/95
          p-10
          shadow-[0_20px_80px_rgba(124,58,237,0.18)]
        "
      >
        {children}
      </div>
    </div>
  );
}