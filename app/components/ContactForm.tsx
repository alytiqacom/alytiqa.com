"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
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
        Thank you for your message! We'll get back to you soon.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          setState({ ...state, pending: true });

          try {
            const formData = new FormData(e.target as HTMLFormElement);
            const response = await fetch("/__forms.html", {
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
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>
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
