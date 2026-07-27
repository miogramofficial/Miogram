"use client";

type UsernameInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function UsernameInput({
  value,
  onChange,
}: UsernameInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value
      .toLowerCase()
      .replace(/\s/g, "")
      .replace(/[^a-z0-9._]/g, "");

    onChange(username);
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300">
        Username
      </label>

      <div
        className="
          flex
          items-center
          h-14
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900
          px-4
          focus-within:border-blue-500
        "
      >
        <span className="text-gray-500">@</span>

        <input
          value={value}
          onChange={handleChange}
          placeholder="username"
          className="
            ml-2
            w-full
            bg-transparent
            outline-none
            text-white
            placeholder:text-gray-500
          "
        />
      </div>

      {value && (
        <p className="text-sm text-green-400">
          ✓ Username Available
        </p>
      )}
    </div>
  );
}