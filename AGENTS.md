# AGENTS.md

Guidance for any AI coding agent working in this repository.

## Project Snapshot

- Stack: Next.js 16, React 19, TypeScript.
- Styling: Tailwind CSS + Radix UI primitives/shadcn-style components.
- Package manager: `pnpm`.
- App layout uses the App Router (`app/` directory).

## Primary Goal

Ship small, correct, maintainable changes with minimal disruption to existing behavior.

## Working Rules

1. Understand the target file and nearby patterns before editing.
2. Make focused changes; avoid broad refactors unless explicitly requested.
3. Preserve existing naming, formatting, and component patterns.
4. Do not remove or rewrite unrelated user changes.
5. Prefer clear code over clever code.

## Commands

- Install deps: `pnpm install`
- Dev server: `pnpm dev`
- Lint: `pnpm lint`
- Build check: `pnpm build`

Run lint/build when changes are substantial or risk regressions.

## Code Style Expectations

- Use TypeScript types explicitly when they improve clarity.
- Keep React components small and composable.
- Reuse existing UI primitives from `components/ui` before creating new ones.
- Keep Tailwind class usage readable; avoid duplicated utility chains when a helper/component exists.
- Add comments only for non-obvious reasoning.

## File/Architecture Conventions

- Route and page logic belongs in `app/`.
- Shared UI components belong in `components/`.
- Reusable hooks belong in `hooks/`.
- Utilities/helpers belong in `lib/`.
- Keep public/static assets in `public/`.

## Validation Checklist (Before Finishing)

- Code compiles and types are sound.
- Lint passes (or existing warnings are not worsened).
- No unrelated files were modified.
- Changes match the user request exactly.

## Git Hygiene

- Keep commits scoped to one logical change.
- Use clear, imperative commit messages.
- Never commit secrets or environment-specific credentials.

## If Requirements Are Unclear

Ask a short clarifying question instead of guessing on behavior that could break UX or data flow.
