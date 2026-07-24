import AuthLogo from "@/components/auth/AuthLogo";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthCard from "@/components/auth/AuthCard";
import RegisterForm from "@/components/auth/RegisterForm";
import SocialLogin from "@/components/auth/SocialLogin";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      <AuthCard>
        <AuthLogo />

        <AuthHeader
          title="Create your account"
          subtitle="Start your immersive journey."
        />

        <RegisterForm />

        <SocialLogin />
      </AuthCard>
    </main>
  );
}