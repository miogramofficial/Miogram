"use client";

export default function ForgotPasswordForm() {
  return (
    <form className="mt-8 space-y-5">

      <div>
        <label className="mb-2 block text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="
            w-full
            rounded-xl
            border
            border-zinc-700
            bg-zinc-900
            px-4
            py-3
            outline-none
            transition
            focus:border-blue-500
          "
        />
      </div>

      <button
        className="
          w-full
          rounded-full
          bg-blue-600
          py-3
          font-semibold
          transition
          hover:bg-blue-500
        "
      >
        Send Recovery Link
      </button>

    </form>
  );
}