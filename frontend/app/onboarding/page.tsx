import ProfileHeader from "@/components/onboarding/ProfileHeader";
import ProfileAvatar from "@/components/onboarding/ProfileAvatar";
import ProfileForm from "@/components/onboarding/ProfileForm";

export default function OnboardingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      <div className="w-full max-w-md space-y-8">
        <ProfileHeader />
        <ProfileAvatar />
        <ProfileForm />
      </div>
    </main>
  );
}