interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
}

export default function Avatar({
  src,
  alt = "Avatar",
  size = "md",
}: AvatarProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <img
      src={src || "https://placehold.co/100x100"}
      alt={alt}
      className={`${sizes[size]} rounded-full object-cover`}
    />
  );
}