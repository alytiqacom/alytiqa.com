"use client"

import React from "react"

import { useState } from "react"

type FormState = "idle" | "submitting" | "success" | "error"

const FORM_NAME = "early-access"

const HONEYPOT_FIELD = "company"

export function EarlyAccessForm() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [website, setWebsite] = useState("")
  const [honeypot, setHoneypot] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    if (honeypot) return // Bot detected
    setFormState("submitting")
    try {
      const formData = {
        "form-name": FORM_NAME,
        email,
        role,
        website,
      }
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as Record<string, string>).toString(),
      })
      if (!response.ok) throw new Error("Submission failed")
      setFormState("success")
    } catch {
      setFormState("error")
    }
  }

  if (formState === "success") {
    return (
      <div className="space-y-3">
        <p className="text-lg font-medium text-foreground">
          {"Thanks. We\u2019ll be in touch when early access opens."}
        </p>
        <p className="text-sm text-body-secondary">
          No spam. No marketing noise.
        </p>
      </div>
    )
  }

  return (
    <form
      name={FORM_NAME}
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <div
        className="absolute -left-[9999px] w-1 h-1 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor={HONEYPOT_FIELD}>Company</label>
        <input
          id={HONEYPOT_FIELD}
          type="text"
          name={HONEYPOT_FIELD}
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-body-secondary">
          Work email<span className="text-foreground"> *</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full bg-transparent border border-border text-foreground placeholder-muted-foreground px-4 py-3 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="role" className="block text-sm font-medium text-body-secondary">
          Role
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full bg-transparent border border-border text-foreground px-4 py-3 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-ring transition-colors appearance-none"
        >
          <option value="" className="bg-background text-foreground">Select a role</option>
          <option value="head-of-growth" className="bg-background text-foreground">Head of Growth</option>
          <option value="growth-revops" className="bg-background text-foreground">{"Growth / RevOps"}</option>
          <option value="strategy" className="bg-background text-foreground">Strategy</option>
          <option value="other" className="bg-background text-foreground">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="website" className="block text-sm font-medium text-body-secondary">
          Company website
        </label>
        <input
          id="website"
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="https://yourcompany.com"
          className="w-full bg-transparent border border-border text-foreground placeholder-muted-foreground px-4 py-3 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
        />
      </div>

      {formState === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong. Please try again.
        </p>
      )}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="bg-primary text-primary-foreground px-8 py-3 text-sm font-medium rounded-md hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {formState === "submitting" ? "Submitting\u2026" : "Request access"}
      </button>
    </form>
  )
}
