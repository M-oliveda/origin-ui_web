# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this
repository.

@AGENTS.md

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

## Claude-specific Notes

- Before writing any Next.js code, run `Read node_modules/next/dist/docs/` to check for v16-specific
  APIs and deprecations.
- When adding new components, check `src/components/ui/` and `src/components/branding/` first — the
  primitive almost certainly already exists.
- Design tokens (colors, spacing, typography) live entirely in `src/app/globals.css`. Do not add new
  CSS variables elsewhere.
- The `@/*` path alias resolves from `src/` (Next.js maps it there when a `src/` directory is
  present). Use it for all non-relative imports — e.g. `@/components/ui/button`, not
  `../../components/ui/button`.
- Run `npm run type-check` after any TypeScript change before considering the task done.
- Prefer editing existing files over creating new ones. Ask before creating a new top-level
  directory.

---

## Architecture

### shadcn/ui uses Base UI, not Radix

`components.json` sets `"style": "base-nova"`. All shadcn primitives wrap `@base-ui/react` — **not**
Radix UI. The import path in every `components/ui/*.tsx` file is `@base-ui/react/<primitive>`, not
`@radix-ui/react-*`. This is a breaking difference from standard shadcn documentation.

### How component documentation pages are structured

Every page under `src/app/components/<slug>/page.tsx` follows a fixed section order used across all
63+ components:

1. **Header** — `<h1>`, short description, `<Separator />`
2. **Anatomy** — visual breakdown of the component's parts
3. **Variants / Examples** — all visual variants with live previews
4. **States** — hover, focus, disabled, loading
5. **Design Guidelines** — side-by-side Do / Don't grid (green/red bordered cards)
6. **Developer Reference** — accessibility notes, prop semantics
7. **Usage** — `<CodeBlock>` with copy-pasteable import + usage snippet

The `CodeBlock` component lives at `src/app/components/code-block.tsx` — use it for all code
snippets in component pages.

### Adding a new component to the sidebar

The sidebar is driven by the `categories` array in `src/app/components/layout.tsx` (a Client
Component). When adding a new component route, add its `{ slug, label }` entry to the correct
category there — otherwise the component won't appear in navigation.

### Theming Sonner (intentional inline-style exception)

`src/components/ui/sonner.tsx` passes CSS custom properties via an inline `style` prop to override
Sonner's internal variables (e.g. `--normal-bg`, `--normal-border`). This is the only supported way
to theme Sonner and is an intentional exception to the no-inline-style rule.

`src/app/layout.tsx` already mounts `<Toaster richColors />`, `<ThemeProvider>`, and
`<TooltipProvider>` — do not add duplicates of any of these.

### globals.css import order

`src/app/globals.css` opens with three imports that must stay at the top in this order:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
```

Do not reorder or remove these; all subsequent CSS variable definitions depend on them.

### Test coverage

`npm run test:coverage` must pass at **100% coverage**. It is required by the CI pipeline on every
PR and by the production deploy workflow — neither will proceed unless coverage is at 100%.

### TypeScript strictness beyond `strict: true`

`tsconfig.json` also enables `noUnusedLocals` and `noUnusedParameters`. Unused variables and
function parameters will fail `type-check` — remove or prefix with `_` if intentionally unused.
