"use client";

import { useState } from "react";
import { Input } from "@/components/ui";

type PasswordInputProps = {
  placeholder?: string;
};

export default function PasswordInput({
  placeholder = "Password",
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="pr-12"
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          flex
          items-center
          justify-center
          transition-transform
          duration-200
          hover:scale-110
        "
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        <img
          src={showPassword ? "/eye-open.svg" : "/eye-closed.svg"}
          alt={showPassword ? "Hide password" : "Show password"}
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}