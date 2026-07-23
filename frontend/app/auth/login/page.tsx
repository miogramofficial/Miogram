import AuthLogo from "@/components/auth/AuthLogo";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";
import SocialLogin from "@/components/auth/SocialLogin";

export default function LoginPage() {
  return (
    <AuthCard>
      <div className="space-y-7">
        <AuthLogo />

        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to continue your Miogram experience."
        />

        <LoginForm />

        <SocialLogin />
      </div>
    </AuthCard>
  );
}