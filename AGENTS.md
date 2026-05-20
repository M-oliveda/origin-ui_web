# Agent Guidelines – Origin UI

<!-- BEGIN:nextjs-agent-rules -->

## Critical: This is NOT the Next.js you know

Next.js **16** has breaking changes — APIs, conventions, and file structure may all differ from your
training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code.
Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

---

## Coding Plan

Before writing any code, assess the task complexity:

- **Small** (1–2 files, isolated change — e.g. rename, minor style fix, single-prop addition):
  proceed directly without a plan.
- **Medium or larger** (3+ files touched, new feature, refactor, architectural change, or any task
  where the approach is non-obvious): **always enter plan mode first** using the `EnterPlanMode`
  tool. Draft the full implementation plan and get user approval via `ExitPlanMode` before writing a
  single line of code.

When in plan mode:

- List every file that will be created or modified.
- Describe the key design decisions and trade-offs.
- Call out any ambiguities and ask the user to resolve them before implementation begins.
- Do **not** start implementing until the user approves the plan.

---

## Project Overview

| Concern         | Stack                                       |
| --------------- | ------------------------------------------- |
| Framework       | Next.js 16 (App Router)                     |
| UI library      | React 19                                    |
| Language        | TypeScript 5 (`strict: true`)               |
| Styling         | Tailwind CSS v4 (CSS-first, no config file) |
| Components      | shadcn/ui + Base UI                         |
| Package manager | npm                                         |

### Directory structure

```text
src/
  app/                  # Next.js App Router — pages, layouts
    globals.css         # Design tokens (CSS variables) — single source of truth for color
  components/
    ui/                 # shadcn/ui primitives
    branding/           # OriginUI custom branded components
  hooks/                # Custom React hooks (use* prefix)
  lib/                  # Pure utilities and helpers
```

---

## TypeScript

- Enable and keep `strict: true` — never weaken `tsconfig.json`.
- **Never use `any`** — use `unknown` for genuinely unknown types, then narrow with type guards.
- Prefer **interfaces** for object shapes; use `type` for unions, intersections, and mapped types.
- Prefix interface names with `I` — e.g., `IUserProfile`.
- Use `readonly` for properties that must not be mutated.
- Name component prop types with a `Props` suffix — e.g., `ButtonProps`.
- Use `Partial`, `Pick`, `Omit`, `Record`, and other utility types instead of hand-rolling them.
- Keep type definitions close to where they are used; extract shared types to a sibling `types.ts`
  or colocated file.
- Use barrel exports (`index.ts`) to simplify import paths.
- Avoid circular imports by structuring modules in clear dependency layers.
- Imports must be ordered: **external → internal (`@/`) → relative**.

---

## React & Next.js

### Components

- **Default to Server Components.** Only add `"use client"` when the component uses browser APIs,
  event handlers, or React hooks.
- Always use **named function declarations** for components — not arrow function assignments at the
  module level.
- Split any component that exceeds ~300 lines into smaller focused files.
- Use `Suspense` with a meaningful fallback around every Client Component boundary.
- Use `next/dynamic` for non-critical or heavy components.
- Co-locate styles, tests, and types with their component.

### Hooks

- Follow the Rules of Hooks strictly.
- Extract reusable logic into custom hooks (prefix: `use`).
- Always specify dependency arrays in `useEffect`; always return a cleanup function when registering
  subscriptions or timers.
- Avoid `useEffect` for derived state — compute it inline or with `useMemo`.

### Performance

- Wrap expensive child components in `React.memo`.
- Use `useMemo` / `useCallback` for referentially stable values passed as props or deps.
- Use proper `key` props on lists — never use array indices as keys for dynamic lists.
- Lazy-load routes and heavy components with `next/dynamic`.
- Use `next/image` for all images — always set `sizes`, `width`, and `height` to prevent CLS.

### Forms

- Neither `react-hook-form` nor `zod` are currently installed — add them
  (`npm install react-hook-form zod`) before building any form.
- Once installed: place the Zod schema in a sibling `zod.ts`, validate on both client and server,
  show field-level errors, and disable submit while submitting.

### State

- Local/ephemeral state: `useState` or `useReducer`.
- Global state: neither Zustand nor a global store is currently installed — add Zustand
  (`npm install zustand`) if shared state becomes necessary, with store files in `src/stores/`.
- Server state: TanStack Query is not installed — add `@tanstack/react-query` if async server-state
  caching is needed.
- Tables: **TanStack Table** (`@tanstack/react-table`) is installed — use it for all table
  rendering.
- Keep state as close to where it is consumed as possible; avoid prop drilling.

### Error handling

- Implement `error.tsx` at every route segment that may fail.
- Use React Error Boundaries for critical UI sections.
- Always handle `async/await` errors with `try/catch`; never leave Promise rejections unhandled.
- Show user-friendly error UI with a retry action — never expose raw error messages.

---

## Styling (Tailwind CSS v4)

- Use **utility classes only** — no custom CSS outside of `globals.css`.
- All colors must come from the CSS variables defined in `src/app/globals.css` — do not hardcode
  hex/rgb values or add new color definitions elsewhere.
- Use **mobile-first** responsive classes (`sm:`, `md:`, `lg:`).
- Use semantic color names (`text-foreground`, `bg-card`, etc.) over raw palette names
  (`bg-zinc-900`).
- Never use `style={{}}` inline style props — use Tailwind classes.
- Dark mode is handled by `next-themes` — use the `dark:` variant for overrides.
- Tailwind CSS v4 uses a CSS-first setup via `@import "tailwindcss"` in `globals.css` — there is
  **no** `tailwind.config.js` file.

---

## HTML & Accessibility

- Use semantic HTML — `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`.
- One `<h1>` per page; heading levels must reflect content hierarchy.
- All `<img>` elements require a descriptive `alt` attribute.
- Use `<label for="…">` linked to input `id`s — never floating labels without accessible fallback.
- Add `aria-*` attributes only when a native HTML element cannot express the semantics.
- All interactive elements must be keyboard accessible with a visible focus indicator.
- Test pages with Lighthouse; aim for accessibility score ≥ 90.

---

## Code Style

The project enforces formatting and linting automatically:

| Tool       | Command              | Runs automatically on commit? |
| ---------- | -------------------- | ----------------------------- |
| Prettier   | `npm run format`     | Yes (lint-staged + Husky)     |
| ESLint     | `npm run lint`       | Yes (lint-staged + Husky)     |
| TypeScript | `npm run type-check` | No — run manually in CI       |

**Formatting rules (`.prettierrc`):**

- 4 spaces indentation
- Double quotes for strings
- Semicolons required
- Trailing commas everywhere
- Print width: 100 chars
- Tailwind classes sorted by `prettier-plugin-tailwindcss`

**Naming:**

| Entity                | Convention         | Example                      |
| --------------------- | ------------------ | ---------------------------- |
| Files (components)    | kebab-case         | `user-profile.tsx`           |
| Components            | PascalCase         | `UserProfile`                |
| Variables / functions | camelCase          | `fetchUser`, `currentUser`   |
| Constants (exported)  | UPPER_SNAKE_CASE   | `MAX_RETRY_COUNT`            |
| Booleans              | `is`/`has`/`can`   | `isLoading`, `hasPermission` |
| Interfaces            | PascalCase + `I`   | `IUserProfile`               |
| Prop types            | PascalCase + Props | `ButtonProps`                |
| Custom hooks          | `use` prefix       | `useMobile`                  |

---

## Anti-patterns to Avoid

- `any` type anywhere in the codebase.
- `var` — always use `const` or `let`.
- `console.log` in production code — use `console.warn` / `console.error` only.
- Inline `style={{}}` — use Tailwind classes instead.
- Hardcoded color values — use CSS variables from `globals.css`.
- `!important` in CSS — resolve specificity properly.
- Mutable shared state outside a dedicated store (Zustand when installed).
- Extending native prototypes (`Array.prototype`, `Object.prototype`).
- `eval()` or `Function()` with dynamic/user-supplied input.
- Side effects inside component render bodies.
- Array index as `key` prop on dynamic lists.
- Skipping `Suspense` boundaries around Client Components.

---

## Project Setup (first time)

```bash
npm install          # install dependencies
git init             # required for Husky git hooks
npm run prepare      # initializes Husky
```

---

## Available Scripts

```bash
npm run dev          # start development server
npm run build        # production build
npm run start        # serve production build
npm run lint         # run ESLint
npm run lint:fix     # run ESLint and auto-fix
npm run format       # run Prettier (writes files)
npm run format:check # run Prettier (check only, no write)
npm run type-check   # run TypeScript compiler check
npm run test:coverage # run tests with coverage (must reach 100%)
```
