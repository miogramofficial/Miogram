"use client";

import { Button } from "@/components/ui";

type ContinueButtonProps = {
  disabled: boolean;
  onClick: () => void;
};

export default function ContinueButton({
  disabled,
  onClick,
}: ContinueButtonProps) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      className="
        h-14
        w-full
        rounded-full
      "
    >
      Continue
    </Button>
  );
}