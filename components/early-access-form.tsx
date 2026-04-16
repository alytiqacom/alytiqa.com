"use client"

import React from "react"

import { useState } from "react"

type FormState = "idle" | "submitting" | "success" | "error"

const FORM_NAME = "early-access"

/** Honeypot — must match `public/__forms.html` and stay visually hidden. */
const HONEYPOT_FIELD = "bot-field"

export function EarlyAccessForm() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [role, setRole] = useState("")
  const [analyticsTools, setAnalyticsTools] = useState("")
  const [note, setNote] = useState("")
  const [honeypot, setHoneypot] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    if (honeypot) return // Bot detected
    setFormState("submitting")
    try {
      const formData: Record<string, string> = {
        "form-name": FORM_NAME,
        email,
        company,
        role,
        "analytics-tools": analyticsTools,
        note,
      }
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
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
          No spam. We only use your details to follow up on early access.
        </p>
      </div>
    )
  }

  const inputClassName =
    "w-full bg-background border border-input text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors"
  const labelClassName = "block text-sm font-medium text-body-secondary"

  return (
    <form
      name={FORM_NAME}
      data-netlify="true"
      onSubmit={handleSubmit}
      className="relative space-y-6 max-w-md"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <div
        className="absolute -left-[9999px] w-1 h-1 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor={HONEYPOT_FIELD}>Leave blank</label>
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
        <label htmlFor="email" className={labelClassName}>
          Work email<span className="text-foreground"> *</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={inputClassName}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className={labelClassName}>
          Company<span className="text-foreground"> *</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company name"
          className={inputClassName}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="role" className={labelClassName}>
          Role
        </label>
        <select
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className={`${inputClassName} appearance-none bg-[length:1rem_1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2302302B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
          }}
        >
          <option value="">Select a role</option>
          <option value="head-of-growth">Head of Growth</option>
          <option value="demand-gen">Demand generation</option>
          <option value="revenue-ops">Revenue / growth ops</option>
          <option value="marketing-ops">Marketing ops</option>
          <option value="digital-analyst">Digital analyst</option>
          <option value="strategy">Strategy</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="analytics-tools" className={labelClassName}>
          What analytics tools do you use?
        </label>
        <input
          id="analytics-tools"
          name="analytics-tools"
          type="text"
          value={analyticsTools}
          onChange={(e) => setAnalyticsTools(e.target.value)}
          placeholder="e.g. GA4, Amplitude, Mixpanel"
          className={inputClassName}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="note" className={labelClassName}>
          Anything else we should know?{" "}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="note"
          name="note"
          rows={4}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Context on your analytics setup or recurring analysis needs"
          className={`${inputClassName} resize-y min-h-[100px]`}
        />
      </div>

      {formState === "error" && (
        <p className="text-sm text-destructive" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="bg-primary text-primary-foreground px-8 py-3 text-sm font-medium rounded-md hover:opacity-90 transition-opacity disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        {formState === "submitting" ? "Submitting\u2026" : "Request early access"}
      </button>
    </form>
  )
}
