"use client";

import Image from "next/image";
import { useState } from "react";
import { Lock } from "lucide-react";
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
        leftIcon={Lock}
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
          hover:scale-110
          transition-all
          duration-200
        "
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        <Image
          src={showPassword ? "/eye-open.svg" : "/eye-closed.svg"}
          alt="Password visibility"
          width={20}
          height={20}
          priority
        />
      </button>
    </div>
  );
}