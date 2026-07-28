import AuthLogo from "@/components/auth/AuthLogo";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthCard from "@/components/auth/AuthCard";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      <AuthCard>
        <AuthLogo />

        <AuthHeader
          title="Forgot Password?"
          subtitle="We'll help you recover your account."
        />

        <ForgotPasswordForm />
      </AuthCard>
    </main>
  );
}