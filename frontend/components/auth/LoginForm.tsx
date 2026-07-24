import { Button, Input } from "@/components/ui";
import PasswordInput from "@/components/auth/PasswordInput";
import { Mail } from "lucide-react";

export default function LoginForm() {
  return (
    <div className="space-y-5">
      <Input
        type="email"
        placeholder="Email"
        leftIcon={Mail}
      />

      <PasswordInput />

      <div className="flex justify-end">
        <button
          className="
            text-sm
            text-violet-400
            hover:text-violet-300
            transition-colors
            hover:underline
          "
        >
          Forgot Password?
        </button>
      </div>

      <Button fullWidth>
        Sign In
      </Button>
    </div>
  );
}