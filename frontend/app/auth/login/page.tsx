import { Button, Input, Card } from "@/components/ui";

export default function LoginPage() {
  return (
    <Card>
      <h1 className="text-3xl font-bold mb-2">
        Welcome Back
      </h1>

      <p className="text-gray-500 mb-8">
        Sign in to continue your Miogram experience.
      </p>

      <div className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
        />

        <Input
          type="password"
          placeholder="Password"
        />

        <Button className="w-full">
            Login
        </Button>
      </div>
    </Card>
  );
}

