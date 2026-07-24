type AuthHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function AuthHeader({
  title,
  subtitle,
}: AuthHeaderProps) {
  return (
    <div className="pb-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-white">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-3 text-base leading-7 text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}