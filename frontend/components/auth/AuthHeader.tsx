type AuthHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function AuthHeader({
  title,
  subtitle,
}: AuthHeaderProps) {
  return (
    <div className="text-center space-y-2">
      <h1 className="text-4xl font-bold tracking-tight text-white">
        {title}
      </h1>

      {subtitle && (
        <p className="text-base text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}