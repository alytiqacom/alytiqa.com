"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";
import { submitSignupForm } from "../actions";
import { Loader2 } from "lucide-react";

export function SignupForm() {
  const [state, formAction] = useFormState(submitSignupForm, {
    success: false,
    error: null,
    pending: false,
  });

  if (state.success) {
    return (
      <div className="text-green-400 text-lg md:text-xl">
        Thank you for signing up!
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <form
        action={formAction}
        className="flex flex-col sm:flex-row gap-2 w-full"
      >
        <Input
          type="email"
          name="email"
          placeholder="e-mail"
          className="bg-transparent border-white/30 text-white placeholder:text-white/50"
          required
          disabled={state.pending}
        />
        <Button
          type="submit"
          className="bg-white text-[#0a3330] hover:bg-white/90 font-heading"
          disabled={state.pending}
        >
          {state.pending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing up...
            </>
          ) : (
            "Sign up"
          )}
        </Button>
      </form>
      {state.error && <p className="text-red-400">Error: {state.error}</p>}
    </div>
  );
}
