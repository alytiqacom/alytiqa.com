"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function SignupForm() {
  const [state, setState] = useState<{
    success: boolean;
    error: string | null;
    pending: boolean;
  }>({
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
        name="signup"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="flex flex-col sm:flex-row gap-2 w-full"
        onSubmit={async (e) => {
          e.preventDefault();
          setState({ ...state, pending: true });

          try {
            const formData = new FormData(e.target as HTMLFormElement);
            const response = await fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams(formData as any).toString(),
            });

            if (response.ok) {
              setState({ success: true, error: null, pending: false });
            } else {
              throw new Error("Form submission failed");
            }
          } catch (error) {
            setState({
              success: false,
              error: "Failed to submit form",
              pending: false,
            });
          }
        }}
      >
        <input type="hidden" name="form-name" value="signup" />
        <p hidden>
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>
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
