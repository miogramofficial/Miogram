import AuthLogo from "@/components/auth/AuthLogo";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";
import SocialLogin from "@/components/auth/SocialLogin";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      <AuthCard>
        <AuthLogo />

        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to continue your journey."
        />

        <LoginForm />

        <SocialLogin />
      </AuthCard>
    </main>
  );
}