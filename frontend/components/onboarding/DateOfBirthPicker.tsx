"use client";

import { CalendarDays } from "lucide-react";

type DateOfBirthPickerProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function DateOfBirthPicker({
  value,
  onChange,
}: DateOfBirthPickerProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300">
        Date of Birth
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
        <CalendarDays
          size={18}
          className="text-gray-500"
        />

        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            ml-3
            w-full
            bg-transparent
            outline-none
            text-white
            [color-scheme:dark]
          "
        />
      </div>
    </div>
  );
}