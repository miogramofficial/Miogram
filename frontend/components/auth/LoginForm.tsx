import { Button, Input } from "@/components/ui";
import PasswordInput from "@/components/auth/PasswordInput";

export default function LoginForm() {
  return (
    <div className="space-y-5">
      <Input
        type="email"
        placeholder="Email"
      />

       <PasswordInput/>

       {/* <div>Password Input Test</div> */}

      <div className="flex justify-end">
        <Button
        className="
            w-full
            rounded-full
            bg-blue-600
            hover:bg-blue-500
            transition-all
            duration-300
            hover:scale-[1.02]
            active:scale-[0.98]
            shadow-lg
            shadow-blue-700/30
        "
        >
        Continue
        </Button>
      </div>

      <Button className="w-full">
        Continue
      </Button>
    </div>
  );
}