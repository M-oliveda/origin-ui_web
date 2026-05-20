# Origin UI — Design Specification

Complete reference of all design tokens derived from the Figma source of truth.

---

## Brand Palette

| Token     | Hex       | HSL           | CSS Variable        | Tailwind Class |
| --------- | --------- | ------------- | ------------------- | -------------- |
| brand-50  | `#FFFFFF` | `0 0% 100%`   | `--color-brand-50`  | `bg-brand-50`  |
| brand-100 | `#EAE0D5` | `31 33% 88%`  | `--color-brand-100` | `bg-brand-100` |
| brand-300 | `#C6AC8F` | `32 33% 67%`  | `--color-brand-300` | `bg-brand-300` |
| brand-600 | `#5E503F` | `33 20% 31%`  | `--color-brand-600` | `bg-brand-600` |
| brand-800 | `#22333B` | `199 27% 18%` | `--color-brand-800` | `bg-brand-800` |
| brand-950 | `#0A0908` | `30 11% 4%`   | `--color-brand-950` | `bg-brand-950` |

---

## Semantic Status Colors

| Token   | Hex       | HSL           | CSS Variable      | Tailwind Class |
| ------- | --------- | ------------- | ----------------- | -------------- |
| success | `#10B981` | `160 84% 39%` | `--color-success` | `bg-success`   |
| warning | `#F59E0B` | `38 92% 50%`  | `--color-warning` | `bg-warning`   |
| error   | `#EF4444` | `0 84% 60%`   | `--color-error`   | `bg-error`     |
| info    | `#5E503F` | `33 20% 31%`  | `--color-info`    | `bg-info`      |

---

## Chart Colors

| Token   | Light Mode | Dark Mode | CSS Variable      |
| ------- | ---------- | --------- | ----------------- |
| chart-1 | brand-800  | brand-300 | `--color-chart-1` |
| chart-2 | brand-600  | brand-100 | `--color-chart-2` |
| chart-3 | brand-300  | brand-600 | `--color-chart-3` |
| chart-4 | brand-100  | brand-800 | `--color-chart-4` |
| chart-5 | brand-950  | brand-950 | `--color-chart-5` |

---

## Sidebar Tokens

### Light Mode (`:root`)

| Token                      | CSS Variable                         | Maps To   | Description                  |
| -------------------------- | ------------------------------------ | --------- | ---------------------------- |
| sidebar                    | `--color-sidebar`                    | brand-50  | White sidebar background     |
| sidebar-foreground         | `--color-sidebar-foreground`         | brand-950 | Near-black sidebar text      |
| sidebar-primary            | `--color-sidebar-primary`            | brand-800 | Dark teal sidebar primary    |
| sidebar-primary-foreground | `--color-sidebar-primary-foreground` | brand-50  | White on sidebar primary     |
| sidebar-accent             | `--color-sidebar-accent`             | brand-100 | Warm beige sidebar accent    |
| sidebar-accent-foreground  | `--color-sidebar-accent-foreground`  | brand-950 | Near-black on sidebar accent |
| sidebar-border             | `--color-sidebar-border`             | brand-100 | Warm beige sidebar border    |
| sidebar-ring               | `--color-sidebar-ring`               | brand-300 | Golden sidebar focus ring    |

### Dark Mode (`.dark`)

| Token                      | CSS Variable                         | Maps To     | Description                   |
| -------------------------- | ------------------------------------ | ----------- | ----------------------------- |
| sidebar                    | `--color-sidebar`                    | brand-950   | Near-black sidebar background |
| sidebar-foreground         | `--color-sidebar-foreground`         | brand-100   | Warm beige sidebar text       |
| sidebar-primary            | `--color-sidebar-primary`            | brand-300   | Golden sidebar primary        |
| sidebar-primary-foreground | `--color-sidebar-primary-foreground` | brand-950   | Near-black on sidebar primary |
| sidebar-accent             | `--color-sidebar-accent`             | 199 20% 12% | Dark teal sidebar accent      |
| sidebar-accent-foreground  | `--color-sidebar-accent-foreground`  | brand-100   | Warm beige on sidebar accent  |
| sidebar-border             | `--color-sidebar-border`             | 199 20% 16% | Dark teal sidebar border      |
| sidebar-ring               | `--color-sidebar-ring`               | brand-300   | Golden sidebar focus ring     |

---

## Semantic Color Mappings

### Semantic Color Mappings: Light Mode (`:root`)

| Token                | CSS Variable                   | Maps To   | Description                 |
| -------------------- | ------------------------------ | --------- | --------------------------- |
| background           | `--color-background`           | brand-50  | White background            |
| foreground           | `--color-foreground`           | brand-950 | Near-black text             |
| card                 | `--color-card`                 | brand-50  | White card background       |
| card-foreground      | `--color-card-foreground`      | brand-950 | Near-black text on card     |
| popover              | `--color-popover`              | brand-50  | White popover background    |
| popover-foreground   | `--color-popover-foreground`   | brand-950 | Near-black text on popover  |
| primary              | `--color-primary`              | brand-800 | Dark teal — strong accent   |
| primary-foreground   | `--color-primary-foreground`   | brand-50  | White on primary            |
| secondary            | `--color-secondary`            | brand-100 | Warm beige                  |
| secondary-foreground | `--color-secondary-foreground` | brand-950 | Text on secondary bg        |
| muted                | `--color-muted`                | brand-100 | Warm beige (muted areas)    |
| muted-foreground     | `--color-muted-foreground`     | brand-600 | Warm brown muted text       |
| accent               | `--color-accent`               | brand-100 | Warm beige (accents)        |
| accent-foreground    | `--color-accent-foreground`    | brand-950 | Text on accent bg           |
| ring                 | `--color-ring`                 | brand-300 | Golden focus ring           |
| destructive          | `--color-destructive`          | error     | Red for destructive actions |
| border               | `--color-border`               | brand-100 | Warm beige border           |
| input                | `--color-input`                | brand-100 | Warm beige input border     |

### Semantic Color Mappings: Dark Mode (`.dark`)

Same CSS variables as light mode; values are overridden under the `.dark` class.

| Token                | CSS Variable                   | Maps To     | Description                 |
| -------------------- | ------------------------------ | ----------- | --------------------------- |
| background           | `--color-background`           | brand-950   | Near-black background       |
| foreground           | `--color-foreground`           | brand-100   | Warm beige text             |
| card                 | `--color-card`                 | 199 27% 14% | Dark teal card bg           |
| card-foreground      | `--color-card-foreground`      | brand-100   | Warm beige on card          |
| popover              | `--color-popover`              | 199 27% 14% | Dark teal popover bg        |
| popover-foreground   | `--color-popover-foreground`   | brand-100   | Warm beige on popover       |
| primary              | `--color-primary`              | brand-100   | Warm beige — inverted       |
| primary-foreground   | `--color-primary-foreground`   | brand-950   | Near-black on primary       |
| secondary            | `--color-secondary`            | 199 20% 12% | Dark teal shade             |
| secondary-foreground | `--color-secondary-foreground` | brand-100   | Warm beige on secondary     |
| muted                | `--color-muted`                | 199 20% 12% | Dark teal shade             |
| muted-foreground     | `--color-muted-foreground`     | brand-300   | Golden muted text           |
| accent               | `--color-accent`               | 199 20% 12% | Dark teal shade             |
| accent-foreground    | `--color-accent-foreground`    | brand-100   | Warm beige on accent        |
| ring                 | `--color-ring`                 | brand-300   | Golden focus ring           |
| destructive          | `--color-destructive`          | error       | Red for destructive actions |
| border               | `--color-border`               | 199 20% 16% | Dark teal border            |
| input                | `--color-input`                | 199 20% 20% | Dark teal input border      |

---

## Typography

### Font Families

| Token | Family                   | CSS Variable   | Tailwind Class |
| ----- | ------------------------ | -------------- | -------------- |
| sans  | Space Grotesk            | `--font-sans`  | `font-sans`    |
| serif | Georgia, Times New Roman | `--font-serif` | `font-serif`   |
| mono  | System monospace stack   | `--font-mono`  | `font-mono`    |

### Type Scale

| Class     | Size  |
| --------- | ----- |
| text-xs   | 12px  |
| text-sm   | 14px  |
| text-base | 16px  |
| text-lg   | 18px  |
| text-xl   | 20px  |
| text-2xl  | 24px  |
| text-3xl  | 30px  |
| text-4xl  | 36px  |
| text-5xl  | 48px  |
| text-6xl  | 60px  |
| text-7xl  | 72px  |
| text-8xl  | 96px  |
| text-9xl  | 128px |

### Font Weights

| Class           | Weight |
| --------------- | ------ |
| font-thin       | 100    |
| font-extralight | 200    |
| font-light      | 300    |
| font-normal     | 400    |
| font-medium     | 500    |
| font-semibold   | 600    |
| font-bold       | 700    |

### Letter Spacing

| Class            | Value    |
| ---------------- | -------- |
| tracking-tighter | -0.05em  |
| tracking-tight   | -0.025em |
| tracking-normal  | 0em      |
| tracking-wide    | 0.025em  |
| tracking-wider   | 0.05em   |
| tracking-widest  | 0.1em    |

### Line Height

| Class           | Value |
| --------------- | ----- |
| leading-none    | 1     |
| leading-tight   | 1.25  |
| leading-snug    | 1.375 |
| leading-normal  | 1.5   |
| leading-relaxed | 1.625 |
| leading-loose   | 2     |

---

## Border Radius

Base variable: `--radius: 0.625rem` (10px). All scale tokens are derived from it.

| Token | CSS Variable    | Value                              | Tailwind Class |
| ----- | --------------- | ---------------------------------- | -------------- |
| xs    | `--radius-xs`   | `calc(var(--radius) * 0.4)` = 4px  | `rounded-xs`   |
| sm    | `--radius-sm`   | `calc(var(--radius) * 0.6)` = 6px  | `rounded-sm`   |
| md    | `--radius-md`   | `calc(var(--radius) * 0.8)` = 8px  | `rounded-md`   |
| lg    | `--radius-lg`   | `var(--radius)` = 10px             | `rounded-lg`   |
| xl    | `--radius-xl`   | `calc(var(--radius) * 1.4)` = 14px | `rounded-xl`   |
| 2xl   | `--radius-2xl`  | `calc(var(--radius) * 1.8)` = 18px | `rounded-2xl`  |
| 3xl   | `--radius-3xl`  | `calc(var(--radius) * 2.2)` = 22px | `rounded-3xl`  |
| 4xl   | `--radius-4xl`  | `calc(var(--radius) * 2.6)` = 26px | `rounded-4xl`  |
| full  | `--radius-full` | `9999px`                           | `rounded-full` |

---

## Breakpoints

| Prefix | Min Width | CSS                          |
| ------ | --------- | ---------------------------- |
| sm     | 640px     | `@media (min-width: 640px)`  |
| md     | 768px     | `@media (min-width: 768px)`  |
| lg     | 1024px    | `@media (min-width: 1024px)` |
| xl     | 1280px    | `@media (min-width: 1280px)` |
| 2xl    | 1536px    | `@media (min-width: 1536px)` |

---

## Spacing Scale

| Token | px    | rem   |
| ----- | ----- | ----- |
| 0     | 0     | 0     |
| px    | 1px   | 1px   |
| 0.5   | 2px   | 0.125 |
| 1     | 4px   | 0.25  |
| 1.5   | 6px   | 0.375 |
| 2     | 8px   | 0.5   |
| 2.5   | 10px  | 0.625 |
| 3     | 12px  | 0.75  |
| 3.5   | 14px  | 0.875 |
| 4     | 16px  | 1     |
| 5     | 20px  | 1.25  |
| 6     | 24px  | 1.5   |
| 7     | 28px  | 1.75  |
| 8     | 32px  | 2     |
| 9     | 36px  | 2.25  |
| 10    | 40px  | 2.5   |
| 11    | 44px  | 2.75  |
| 12    | 48px  | 3     |
| 14    | 56px  | 3.5   |
| 16    | 64px  | 4     |
| 20    | 80px  | 5     |
| 24    | 96px  | 6     |
| 28    | 112px | 7     |
| 32    | 128px | 8     |
| 36    | 144px | 9     |
| 40    | 160px | 10    |
| 44    | 176px | 11    |
| 48    | 192px | 12    |
| 52    | 208px | 13    |
| 56    | 224px | 14    |
| 60    | 240px | 15    |
| 64    | 256px | 16    |
| 72    | 288px | 18    |
| 80    | 320px | 20    |
| 96    | 384px | 24    |
