import { Button, Input } from "@/components/ui";
import PasswordInput from "@/components/auth/PasswordInput";
import { User, Mail } from "lucide-react";

export default function RegisterForm() {
  return (
    <div className="space-y-5">
      <Input
        type="text"
        placeholder="Full Name"
        leftIcon={User}
        />

      <Input
        type="email"
        placeholder="Email"
        leftIcon={Mail}
        />

      <PasswordInput
        placeholder="Password"
      />

      <PasswordInput
        placeholder="Confirm Password"
      />

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          className="
            mt-1
            h-4
            w-4
            rounded
            border-zinc-600
            bg-zinc-900
            accent-violet-600
          "
        />

        <p className="text-sm leading-6 text-zinc-400">
          By creating an account, you agree to our{" "}
          <span className="cursor-pointer text-violet-500 hover:underline">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="cursor-pointer text-violet-500 hover:underline">
            Privacy Policy
          </span>.
        </p>
      </div>

      <Button fullWidth>
        Create Account
      </Button>
    </div>
  );
}