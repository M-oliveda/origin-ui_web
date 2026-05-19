# Origin UI — Interactive Design System

> **A living design system and interactive component library built with Next.js 16, React 19, and
> Tailwind CSS v4, providing a fully documented catalog of 63+ UI components.**

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Docker](#docker)
- [CI/CD & Deployment](#cicd--deployment)
- [Project Structure](#project-structure)

---

## Overview

**Origin UI** is a design system that mirrors a Figma source of truth and provides a complete,
interactive reference for building consistent UIs. Every component is documented with live previews,
anatomy breakdowns, variant showcases, design guidelines, and copy-pasteable usage snippets.

The catalog covers 63+ components — from low-level primitives (Button, Input, Badge) to complex
compositions (DataTable, DatePicker, CommandPalette) — all built on **@base-ui/react** rather than
Radix UI, which is a deliberate and breaking departure from the standard shadcn/ui defaults.

### What's inside

| Section          | Description                                         |
| ---------------- | --------------------------------------------------- |
| **Components**   | 63+ documented UI components with live previews     |
| **Fundamentals** | Design tokens: colors, typography, spacing, effects |
| **Templates**    | Full-page layout examples                           |
| **Export**       | Copy the full design spec to clipboard for AI tools |

---

## Key Features

### 1. Interactive Component Catalog

Every component page follows a consistent structure:

1. **Header** — Name, short description
2. **Anatomy** — Visual breakdown of the component's parts
3. **Variants / Examples** — All visual variants with live previews
4. **States** — Hover, focus, disabled, loading
5. **Design Guidelines** — Side-by-side Do / Don't grid
6. **Developer Reference** — Accessibility notes, prop semantics
7. **Usage** — Copy-pasteable import and usage snippet

### 2. Design Fundamentals

| Section         | Contents                                                |
| --------------- | ------------------------------------------------------- |
| **Colors**      | Brand palette (brand-50 to brand-950) + semantic tokens |
| **Typography**  | Font families, scale, weights, letter spacing           |
| **Spacing**     | Full spacing scale (0–96)                               |
| **Effects**     | Visual effects reference                                |
| **Iconography** | Lucide icon library                                     |

### 3. Design Token Export

The `/export` page copies the full `design-spec.md` to the clipboard, providing a machine-readable
design token reference suited for use in AI-assisted workflows. The spec includes the full brand
palette, semantic color tokens, chart colors, sidebar tokens, and light/dark mode mappings.

### 4. Dark Mode

Dark mode is handled by `next-themes` using the `dark:` Tailwind variant. All colors are CSS custom
properties defined in `app/globals.css` — no hardcoded hex or rgb values anywhere in component code.

---

## Architecture

```text
┌─────────────────────────────────────────────────────────┐
│                     Origin UI                           │
│                                                         │
│   Next.js 16 App Router (React Server Components)       │
│   ─────────────────────────────────────────────────     │
│   app/                                                  │
│   ├── components/<slug>/page.tsx   Component docs       │
│   ├── fundamentals/<slug>/page.tsx Design tokens        │
│   ├── templates/<slug>/page.tsx    Layout templates     │
│   └── export/page.tsx             Token export         │
│                                                         │
│   components/                                           │
│   ├── ui/            shadcn/ui primitives (Base UI)     │
│   └── branding/      OriginUI custom components         │
└─────────────────────────────────────────────────────────┘
```

### shadcn/ui uses Base UI, not Radix

`components.json` sets `"style": "base-nova"`. Every primitive in `components/ui/` wraps
**`@base-ui/react`** — not `@radix-ui/react-*`. Import paths follow `@base-ui/react/<primitive>`.
This is a hard breaking difference from standard shadcn documentation and community examples.

### Tailwind CSS v4 — CSS-first

There is no `tailwind.config.js`. Tailwind is configured entirely via `@import "tailwindcss"` in
`app/globals.css`. PostCSS is configured via `postcss.config.mjs` using `@tailwindcss/postcss`. All
design tokens (colors, spacing, typography) are CSS custom properties declared in `globals.css` —
the single source of truth.

### Sidebar navigation

The sidebar is driven by the `categories` array in `app/components/layout.tsx` (a Client Component).
Adding a new component route requires a `{ slug, label }` entry in that array.

### Standalone output

`next.config.ts` sets `output: "standalone"`, producing a self-contained build artifact used by the
Docker image.

---

## Technology Stack

### Core

| Category        | Technology   | Version | Purpose               |
| --------------- | ------------ | ------- | --------------------- |
| **Framework**   | Next.js      | 16.x    | App Router, SSR/SSG   |
| **UI Runtime**  | React        | 19.x    | Component model       |
| **Language**    | TypeScript   | 5.x     | Type safety           |
| **Styling**     | Tailwind CSS | 4.x     | Utility-first CSS     |
| **Package Mgr** | npm          | —       | Dependency management |

### UI & Components

| Category        | Technology             | Version | Purpose                  |
| --------------- | ---------------------- | ------- | ------------------------ |
| **Primitives**  | @base-ui/react         | 1.x     | Headless UI primitives   |
| **Components**  | shadcn/ui (base-nova)  | —       | Component layer          |
| **Dark Mode**   | next-themes            | 0.4.x   | Theme switching          |
| **Icons**       | lucide-react           | 1.x     | Icon library             |
| **Charts**      | Recharts               | 3.x     | Data visualization       |
| **Tables**      | TanStack Table         | 8.x     | Table rendering          |
| **Toast**       | Sonner                 | 2.x     | Notifications            |
| **Carousel**    | Embla Carousel         | 8.x     | Carousel animation       |
| **Date Picker** | react-day-picker       | 9.x     | Calendar UI              |
| **Date Utils**  | date-fns               | 4.x     | Date manipulation        |
| **OTP Input**   | input-otp              | 1.x     | OTP field                |
| **Command**     | cmdk                   | 1.x     | Command palette          |
| **Drawer**      | vaul                   | 1.x     | Drawer animations        |
| **Panels**      | react-resizable-panels | 4.x     | Resizable layout panels  |
| **Animations**  | tw-animate-css         | 1.x     | Tailwind animation utils |

### Code Quality

| Tool       | Command              | Runs automatically?    |
| ---------- | -------------------- | ---------------------- |
| Prettier   | `npm run format`     | Yes (Husky pre-commit) |
| ESLint     | `npm run lint`       | Yes (Husky pre-commit) |
| Jest       | `npm run test`       | Yes (Husky pre-commit) |
| TypeScript | `npm run type-check` | No — run manually      |

ESLint uses the flat config format (`eslint.config.mjs`, ESLint 9+). Custom rules enforce
`no-explicit-any`, `prefer-const`, `no-var`, `eqeqeq`, and restrict `console` to `warn`/`error`
only.

---

## Getting Started

### Option 1 — Docker Compose (recommended)

Requires Docker and Docker Compose. No local Node.js needed.

```bash
# 1. Clone the repository
git clone <repository-url>
cd origin-ui_web

# 2. Start the development server in a container (hot-reload enabled)
docker compose up
# Open http://localhost:3000
```

### Option 2 — Native

Requires **Node.js 20+** and **npm**.

```bash
# 1. Clone the repository
git clone <repository-url>
cd origin-ui_web

# 2. Install dependencies
npm install

# 3. Initialize Husky (required for git hooks)
git init
npm run prepare

# 4. Start the development server
npm run dev
# Open http://localhost:3000
```

---

## Development

### Available Scripts

```bash
# Development
npm run dev              # Start Next.js dev server (http://localhost:3000)

# Build & Preview
npm run build            # Production build
npm run start            # Serve production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Run ESLint and auto-fix
npm run format           # Format with Prettier (writes files)
npm run format:check     # Prettier check only (no write)
npm run type-check       # TypeScript compiler check

# Testing
npm run test             # Run Jest tests
npm run test:watch       # Run Jest tests in watch mode
npm run test:coverage    # Run tests with coverage (must reach 100%)

# Setup
npm run prepare          # Initialize Husky git hooks
```

### Formatting rules

| Rule            | Setting                       |
| --------------- | ----------------------------- |
| Indentation     | 4 spaces                      |
| Quotes          | Double                        |
| Semicolons      | Required                      |
| Trailing commas | Everywhere                    |
| Print width     | 100 chars                     |
| Class sorting   | `prettier-plugin-tailwindcss` |

### Naming conventions

| Entity                | Convention              | Example            |
| --------------------- | ----------------------- | ------------------ |
| Files (components)    | kebab-case              | `user-profile.tsx` |
| Components            | PascalCase              | `UserProfile`      |
| Variables / functions | camelCase               | `fetchUser`        |
| Constants (exported)  | UPPER_SNAKE_CASE        | `MAX_RETRY_COUNT`  |
| Booleans              | `is`/`has`/`can` prefix | `isLoading`        |
| Interfaces            | PascalCase + `I`        | `IUserProfile`     |
| Prop types            | PascalCase + `Props`    | `ButtonProps`      |
| Custom hooks          | `use` prefix            | `useMobile`        |

### Key rules

- **No `any`** — use `unknown` and narrow with type guards.
- **No inline styles** — use Tailwind classes. The only exception is `components/ui/sonner.tsx`,
  which must pass CSS custom properties via `style` to override Sonner's internals.
- **Server Components by default** — add `"use client"` only for browser APIs, event handlers, or
  hooks.
- **Design tokens only in `app/globals.css`** — do not add CSS variables elsewhere.
- **`noUnusedLocals` / `noUnusedParameters` are enabled** — unused variables break `type-check`.
  Prefix with `_` if intentionally unused.
- **Imports ordered** — external → internal (`@/`) → relative.
- **No `var`** — always use `const` or `let`.
- **No `console.log`** — use `console.warn` / `console.error` only.

---

## Docker

The project ships a three-stage `Dockerfile` optimized for production.

| Stage        | Base image     | Purpose                        |
| ------------ | -------------- | ------------------------------ |
| `deps`       | node:24-alpine | Install npm dependencies       |
| `builder`    | node:24-alpine | Run `npm run build`            |
| `production` | node:24-alpine | Minimal runtime, non-root user |

The production stage copies only `.next/standalone` and `.next/static`, exposes port 3000, and
starts with `node server.js`. A `wget` health-check is configured against `http://localhost:3000/`.

### Local development with Docker Compose

```bash
# Start the development server in a container (hot-reload enabled)
docker compose up
# Open http://localhost:3000
```

`docker-compose.yml` mounts `src/`, `public/`, and the config files as volumes and runs
`npm run dev -- -H 0.0.0.0` so changes on the host are reflected immediately.

### Build and run the production image manually

```bash
docker build -t origin-ui .
docker run -p 3000:3000 origin-ui
```

---

## CI/CD & Deployment

### GCP Infrastructure

The application runs on **Google Cloud Run** (`us-central1`). Secrets and environment variables are
managed through **GitHub Environments** for isolation between contexts.

| Environment    | Trigger                | Cloud Run service | Access |
| -------------- | ---------------------- | ----------------- | ------ |
| **Production** | Manual (`main` branch) | `origin-ui_web`   | Public |

Authentication to GCP uses **Workload Identity Federation** (OIDC) — no long-lived service account
keys are stored anywhere.

| Resource                | Value                                                                     |
| ----------------------- | ------------------------------------------------------------------------- |
| **GCP project**         | `moliveda-gcloudprojects-prod`                                            |
| **Service account**     | `cicd-deployer-prod@moliveda-gcloudprojects-prod.iam.gserviceaccount.com` |
| **WIF pool / provider** | `github-pool` / `github-provider`                                         |
| **IAM roles granted**   | `roles/run.admin`, `roles/iam.serviceAccountUser`                         |

### Required GitHub secrets (`production` environment)

| Secret                           | Description                                     |
| -------------------------------- | ----------------------------------------------- |
| `DOCKERHUB_USERNAME`             | Docker Hub username for image push/pull         |
| `DOCKERHUB_TOKEN`                | Docker Hub personal access token                |
| `GCP_PROJECT_ID`                 | GCP project ID (`moliveda-gcloudprojects-prod`) |
| `GCP_SERVICE_ACCOUNT`            | Deployer service account email                  |
| `GCP_WORKLOAD_IDENTITY_PROVIDER` | Full WIF provider resource name                 |

### CI/CD Pipelines

| Pipeline        | Trigger                               | What it does                                             |
| --------------- | ------------------------------------- | -------------------------------------------------------- |
| **CI**          | PR to `develop`, `release/**`, `main` | Lint → format check → type-check → build → 100% coverage |
| **Deploy Prod** | Manual `workflow_dispatch`            | Tests → build → push to Docker Hub → deploy to Cloud Run |

### Production deployment steps

When `deploy-prod.yml` is triggered manually it:

1. Runs `npm run test:coverage` — must pass at 100%.
2. Builds the Next.js app (`npm run build`).
3. Builds the `production` Docker stage and pushes to **Docker Hub**, tagged with both `latest` and
   the version from `package.json`.
4. Authenticates to **Google Cloud** via Workload Identity Federation.
5. Deploys the image to **Cloud Run** (`us-central1`, port 3000, 512 Mi memory, 1 CPU, 0–3
   instances, public).
6. Writes the live service URL to the GitHub Actions job summary.

---

## Contributing

### Workflow

1. **Fork** the repository and create a branch from `develop`.
2. **Name your branch** using the gitflow convention: `feature/<short-description>`,
   `release/<short-description>`, `hotfix/<short-description>`, or `bugfix/<short-description>`.
3. Make your changes following the code style and architecture rules documented above.
4. **Verify locally** that every CI check passes before opening a PR (see checklist below).
5. Open a **Pull Request** targeting `develop`. Fill in the PR description with what changed and
   why.
6. Address review feedback and keep commits focused and atomic.

### Pre-PR checklist

Run these commands in order before pushing. They mirror exactly what `ci.yml` runs on every PR:

```bash
# 1. Install / sync dependencies
npm ci

# 2. Lint — must produce zero errors
npm run lint

# 3. Format — must produce no diffs
npm run format:check

# 4. Type-check — must produce zero errors
npm run type-check

# 5. Build — must complete without errors
npm run build

# 6. Tests — must reach 100% coverage
npm run test:coverage
```

The CI pipeline runs all six steps in sequence. A PR is blocked from merging until every step is
green and coverage sits at exactly **100%**.

### Commit message format

Commits are validated by the `commit-msg` Husky hook and must follow the
**[Gitmoji](https://gitmoji.dev/)** format:

```text
:<shortcode>: <Capitalized message without trailing period>
```

Rules enforced by the hook:

- Must start with a valid gitmoji shortcode (e.g. `:sparkles:`)
- First word after the shortcode must be capitalized
- Must not end with a period
- Recommended length: under 50 characters (hard limit: 72)

Common shortcodes for this project:

| Shortcode            | When to use                            |
| -------------------- | -------------------------------------- |
| `:sparkles:`         | New feature or component               |
| `:bug:`              | Bug fix                                |
| `:memo:`             | Documentation update                   |
| `:recycle:`          | Refactoring with no behaviour change   |
| `:white_check_mark:` | Adding or updating tests               |
| `:art:`              | Code style / formatting only           |
| `:wrench:`           | Tooling, config, or dependency changes |
| `:lipstick:`         | UI or styling change                   |

**Examples:**

```text
:sparkles: Add DatePicker component page
:bug: Fix sidebar active state on shallow routing
:memo: Update contributing guidelines
:wrench: Upgrade Tailwind CSS to v4.1
```

### Code quality rules to keep in mind

- No `any` — use `unknown` and narrow with type guards.
- No inline `style={{}}` — use Tailwind classes.
- No hardcoded colors — reference CSS variables from `globals.css`.
- Server Components by default — add `"use client"` only when required.
- No `console.log` — use `console.warn` / `console.error` only.
- All new CSS variables must go in `src/app/globals.css` exclusively.

---

## Project Structure

```text
origin-ui_web/
├── .github/
│   └── workflows/
│       ├── ci.yml                  # PR validation (lint, type-check, build)
│       └── deploy-prod.yml         # Manual production deploy → Cloud Run
│
├── .husky/
│   ├── pre-commit                  # Runs lint-staged (ESLint + Prettier)
│   └── commit-msg                  # Validates commit message format
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout (theme providers, Toaster)
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Design tokens (CSS variables) — single source of truth
│   │   ├── components/             # Component documentation pages (63+)
│   │   │   ├── <slug>/page.tsx     # Individual component doc pages
│   │   │   ├── layout.tsx          # Sidebar navigation (Client Component)
│   │   │   ├── page.tsx            # Components index
│   │   │   └── code-block.tsx      # Code snippet display
│   │   ├── fundamentals/           # Design token pages
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── copy-token.tsx      # Token copy utility
│   │   │   └── <section>/page.tsx  # colors, typography, spacing, effects, iconography
│   │   ├── templates/              # Full-page layout templates
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── demos.tsx
│   │   │   └── <slug>/page.tsx
│   │   └── export/                 # Design spec export
│   │       ├── page.tsx
│   │       ├── copy-button.tsx
│   │       └── design-system-content.ts
│   │
│   ├── components/
│   │   ├── ui/                     # 48 shadcn/ui primitives (Base UI backed)
│   │   ├── branding/               # 13 OriginUI custom branded components + index.ts
│   │   ├── site-header.tsx         # Main navigation header
│   │   ├── theme-provider.tsx      # next-themes wrapper
│   │   └── theme-toggle.tsx        # Dark/light mode toggle
│   │
│   ├── hooks/
│   │   └── use-mobile.ts           # Mobile viewport detection (768 px breakpoint)
│   │
│   └── lib/
│       └── utils.ts                # cn() utility (clsx + tailwind-merge)
│
├── design-spec.md                  # Machine-readable design token reference
├── Dockerfile                      # 3-stage production build (node:24-alpine)
├── docker-compose.yml              # Local dev container with hot-reload
├── components.json                 # shadcn config (base-nova / Base UI)
├── eslint.config.mjs               # ESLint 9 flat config
├── next.config.ts                  # Next.js config (standalone output)
├── postcss.config.mjs              # PostCSS config (@tailwindcss/postcss)
├── tsconfig.json                   # TypeScript (strict + noUnusedLocals)
└── package.json
```
