"use client";

type CountrySelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function CountrySelector({
  value,
  onChange,
}: CountrySelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300">
        Country / Region
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-14
          w-full
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900
          px-4
          text-white
          outline-none
          transition-colors
          focus:border-blue-500
        "
      >
        <option value="">Select your country</option>

        <option>India</option>
        <option>United States</option>
        <option>United Kingdom</option>
        <option>Canada</option>
        <option>Australia</option>
      </select>
    </div>
  );
}