import { Button, Input, Card } from "@/components/ui";

export default function RegisterPage() {
  return (
    <Card>
      <h1 className="text-3xl font-bold mb-2">
        Create Account
      </h1>

      <p className="text-gray-500 mb-8">
        Join Miogram and start sharing immersive experiences.
      </p>

      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Full Name"
        />

        <Input
          type="email"
          placeholder="Email"
        />

        <Input
          type="password"
          placeholder="Password"
        />

        <Input
          type="password"
          placeholder="Confirm Password"
        />

        <Button className="w-full">
          Create Account
        </Button>
      </div>
    </Card>
  );
}