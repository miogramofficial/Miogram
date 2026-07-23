import AuthLogo from "@/components/auth/AuthLogo";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthCard from "@/components/auth/AuthCard";
import RegisterForm from "@/components/auth/RegisterForm";
import SocialLogin from "@/components/auth/SocialLogin";

export default function RegisterPage() {
  return (
    <AuthCard>
      <div className="space-y-8">
        <AuthLogo />

        <AuthHeader
          title="Create your account"
          subtitle="Start experiencing moments with Miogram."
        />

        <RegisterForm />

        <SocialLogin />
      </div>
    </AuthCard>
  );
}