"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormState } from "react-dom";
import { submitContactForm } from "../actions";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, {
    success: false,
    error: null,
    pending: false,
  });

  if (state.success) {
    return (
      <div className="text-green-400 text-lg md:text-xl">
        Thank you for your message! We'll get back to you soon.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <form action={formAction} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            type="text"
            name="firstName"
            placeholder="First name"
            className="bg-transparent border-white/30 text-white placeholder:text-white/50"
            required
            disabled={state.pending}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="bg-transparent border-white/30 text-white placeholder:text-white/50"
            required
            disabled={state.pending}
          />
        </div>
        <Input
          type="email"
          name="email"
          placeholder="e-mail"
          className="bg-transparent border-white/30 text-white placeholder:text-white/50"
          required
          disabled={state.pending}
        />
        <Textarea
          name="message"
          placeholder="What can we help you with?"
          className="bg-transparent border-white/30 text-white placeholder:text-white/50 min-h-[100px]"
          required
          disabled={state.pending}
        />
        <Button
          type="submit"
          className="w-full bg-white text-[#0a3330] hover:bg-white/90 font-heading"
          disabled={state.pending}
        >
          {state.pending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
      {state.error && <p className="text-red-400">Error: {state.error}</p>}
    </div>
  );
}
