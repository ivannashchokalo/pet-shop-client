"use client";

import Button from "@/components/Button/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="mt-20 text-center">
      <p className="mb-6 text-[#9db4d3]">{error.message}</p>

      <Button onClick={reset} className="min-w-[120px] mx-auto p-[10px]">
        Try again
      </Button>
    </div>
  );
}
