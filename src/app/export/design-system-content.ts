export const DESIGN_SYSTEM_MARKDOWN = `# Origin UI — Design System Reference

> This document is the single source of truth for the Origin UI design system.
> Any generated UI must ONLY use the tokens, colors, components, and patterns described here.
> Do NOT invent colors, fonts, spacing values, or components that are not listed below.

---

## 1. Typography

### Font Families

| Token | Family | Usage |
|-------|--------|-------|
| \`font-sans\` | **Space Grotesk** | Primary font for all UI text |
| \`font-serif\` | Georgia, "Times New Roman", serif | Long-form content (optional) |
| \`font-mono\` | ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas | Code, technical values |
| \`font-heading\` | Space Grotesk (alias of font-sans) | \`CardTitle\` and heading-specific overrides |

### Type Scale

| Class | Size | Use case |
|-------|------|----------|
| \`text-xs\` | 12px | Captions, labels, metadata |
| \`text-sm\` | 14px | Secondary text, descriptions |
| \`text-base\` | 16px | Body text (default) |
| \`text-lg\` | 18px | Emphasized body text |
| \`text-xl\` | 20px | Small headings, card titles |
| \`text-2xl\` | 24px | Section headings |
| \`text-3xl\` | 30px | Page sub-headings |
| \`text-4xl\` | 36px | Page headings |
| \`text-5xl\` | 48px | Hero headings |
| \`text-6xl\` | 60px | Display headings |
| \`text-7xl\` | 72px | Large display |
| \`text-8xl\` | 96px | Extra large display |
| \`text-9xl\` | 128px | Jumbo display |

### Font Weights

| Class | Weight | Usage |
|-------|--------|-------|
| \`font-thin\` | 100 | Decorative only |
| \`font-extralight\` | 200 | Decorative only |
| \`font-light\` | 300 | Subtle text |
| \`font-normal\` | 400 | Body text (default) |
| \`font-medium\` | 500 | Labels, navigation |
| \`font-semibold\` | 600 | Headings, emphasis |
| \`font-bold\` | 700 | Strong headings, CTAs |

### Letter Spacing

| Class | Value |
|-------|-------|
| \`tracking-tighter\` | -0.05em |
| \`tracking-tight\` | -0.025em |
| \`tracking-normal\` | 0em |
| \`tracking-wide\` | 0.025em |
| \`tracking-wider\` | 0.05em |
| \`tracking-widest\` | 0.1em |

### Line Height

| Class | Value |
|-------|-------|
| \`leading-none\` | 1 |
| \`leading-tight\` | 1.25 |
| \`leading-snug\` | 1.375 |
| \`leading-normal\` | 1.5 |
| \`leading-relaxed\` | 1.625 |
| \`leading-loose\` | 2 |

---

## 2. Color Palette

### Brand Colors (ONLY use these)

| Token | Hex | HSL | Tailwind Class | Usage |
|-------|-----|-----|----------------|-------|
| brand-50 | \`#FFFFFF\` | 0 0% 100% | \`bg-brand-50\` / \`text-brand-50\` | White, light backgrounds |
| brand-100 | \`#EAE0D5\` | 31 33% 88% | \`bg-brand-100\` / \`text-brand-100\` | Warm beige, muted areas, secondary |
| brand-300 | \`#C6AC8F\` | 32 33% 67% | \`bg-brand-300\` / \`text-brand-300\` | Golden, focus rings, accents |
| brand-600 | \`#5E503F\` | 33 20% 31% | \`bg-brand-600\` / \`text-brand-600\` | Warm brown, muted foreground |
| brand-800 | \`#22333B\` | 199 27% 18% | \`bg-brand-800\` / \`text-brand-800\` | Dark teal, primary in light mode |
| brand-950 | \`#0A0908\` | 30 11% 4% | \`bg-brand-950\` / \`text-brand-950\` | Near-black, foreground in light mode |

### Semantic Colors (theme-aware, change between light/dark)

| Token | Light Mode | Dark Mode | Tailwind Class |
|-------|------------|-----------|----------------|
| background | brand-50 (white) | brand-950 (near-black) | \`bg-background\` |
| foreground | brand-950 | brand-100 | \`text-foreground\` |
| primary | brand-800 (dark teal) | brand-100 (warm beige) | \`bg-primary\` / \`text-primary\` |
| primary-foreground | brand-50 | brand-950 | \`text-primary-foreground\` |
| secondary | brand-100 (beige) | dark teal shade | \`bg-secondary\` |
| secondary-foreground | brand-950 | brand-100 | \`text-secondary-foreground\` |
| muted | brand-100 | dark teal shade | \`bg-muted\` |
| muted-foreground | brand-600 | brand-300 | \`text-muted-foreground\` |
| accent | brand-100 | dark teal shade | \`bg-accent\` |
| accent-foreground | brand-950 | brand-100 | \`text-accent-foreground\` |
| destructive | error red | error red | \`bg-destructive\` / \`text-destructive\` |
| border | brand-100 | dark teal 16% | \`border-border\` |
| input | brand-100 | dark teal 20% | \`border-input\` |
| ring | brand-300 (golden) | brand-300 (golden) | \`ring-ring\` |
| card | brand-50 | dark teal 14% | \`bg-card\` |
| card-foreground | brand-950 | brand-100 | \`text-card-foreground\` |
| popover | brand-50 | dark teal 14% | \`bg-popover\` |
| popover-foreground | brand-950 | brand-100 | \`text-popover-foreground\` |

### Status Colors

| Token | Hex | HSL | Tailwind Class | Usage |
|-------|-----|-----|----------------|-------|
| success | \`#10B981\` | 160 84% 39% | \`bg-success\` / \`text-success\` | Positive states, confirmations |
| warning | \`#F59E0B\` | 38 92% 50% | \`bg-warning\` / \`text-warning\` | Caution states, alerts |
| error | \`#EF4444\` | 0 84% 60% | \`bg-error\` / \`text-error\` | Error states, destructive |
| info | \`#5E503F\` | 33 20% 31% | \`bg-info\` / \`text-info\` | Informational states |

**IMPORTANT**: Do NOT use arbitrary hex colors like \`bg-[#ff0000]\` or \`text-[#333]\`. Always use the tokens above.

### Chart Colors (used by the Chart component)

| Token | Light Mode | Dark Mode | Tailwind Class |
|-------|------------|-----------|----------------|
| chart-1 | brand-800 (dark teal) | brand-300 (golden) | \`fill-chart-1\` / \`stroke-chart-1\` |
| chart-2 | brand-600 (warm brown) | brand-100 (warm beige) | \`fill-chart-2\` / \`stroke-chart-2\` |
| chart-3 | brand-300 (golden) | brand-600 (warm brown) | \`fill-chart-3\` / \`stroke-chart-3\` |
| chart-4 | brand-100 (warm beige) | brand-800 (dark teal) | \`fill-chart-4\` / \`stroke-chart-4\` |
| chart-5 | brand-950 (near-black) | brand-950 (near-black) | \`fill-chart-5\` / \`stroke-chart-5\` |

### Sidebar Colors (used by the Sidebar component)

| Token | Light Mode | Dark Mode | Tailwind Class |
|-------|------------|-----------|----------------|
| sidebar | brand-50 (white) | brand-950 (near-black) | \`bg-sidebar\` |
| sidebar-foreground | brand-950 | brand-100 | \`text-sidebar-foreground\` |
| sidebar-primary | brand-800 (dark teal) | brand-300 (golden) | \`bg-sidebar-primary\` |
| sidebar-primary-foreground | brand-50 | brand-950 | \`text-sidebar-primary-foreground\` |
| sidebar-accent | brand-100 (beige) | dark teal 12% | \`bg-sidebar-accent\` |
| sidebar-accent-foreground | brand-950 | brand-100 | \`text-sidebar-accent-foreground\` |
| sidebar-border | brand-100 | dark teal 16% | \`border-sidebar-border\` |
| sidebar-ring | brand-300 (golden) | brand-300 (golden) | \`ring-sidebar-ring\` |

---

## 3. Spacing

Use Tailwind's default spacing scale. Common values:

| Token | Value | Usage |
|-------|-------|-------|
| \`0\` | 0px | No spacing |
| \`px\` | 1px | Hairline |
| \`0.5\` | 2px | Micro spacing |
| \`1\` | 4px | Tight spacing |
| \`1.5\` | 6px | Compact spacing |
| \`2\` | 8px | Small spacing |
| \`3\` | 12px | Default gap |
| \`4\` | 16px | Standard spacing |
| \`5\` | 20px | Medium spacing |
| \`6\` | 24px | Section gap |
| \`8\` | 32px | Large spacing |
| \`10\` | 40px | Extra large spacing |
| \`12\` | 48px | Section padding |
| \`16\` | 64px | Page padding |
| \`20\` | 80px | Large page sections |
| \`24\` | 96px | Hero sections |

Apply with: \`p-4\`, \`m-6\`, \`gap-3\`, \`space-y-4\`, etc.

---

## 4. Border Radius

| Class | Value | Usage |
|-------|-------|-------|
| \`rounded-xs\` | 4px | Tiny elements (badges) |
| \`rounded-sm\` | 6px | Small elements |
| \`rounded-md\` | 8px | Inputs, small cards |
| \`rounded-lg\` | 10px | Cards, containers (default) |
| \`rounded-xl\` | 14px | Large cards |
| \`rounded-2xl\` | 18px | Modal dialogs |
| \`rounded-3xl\` | 22px | Hero cards |
| \`rounded-4xl\` | 26px | Featured sections |
| \`rounded-full\` | 9999px | Pills, avatars, circles |

---

## 5. Breakpoints

| Prefix | Min Width | Usage |
|--------|-----------|-------|
| \`sm:\` | 640px | Mobile landscape |
| \`md:\` | 768px | Tablets |
| \`lg:\` | 1024px | Desktop |
| \`xl:\` | 1280px | Wide desktop |
| \`2xl:\` | 1536px | Ultra-wide |

---

## 6. Available Components

All components are from shadcn/ui (base-nova style) and use the brand tokens above. Below is every component available, with its variants where applicable.

### Layout & Structure

| Component | Import | Notes |
|-----------|--------|-------|
| \`Card\` | \`@/components/ui/card\` | Sub-parts: \`CardHeader\`, \`CardTitle\`, \`CardDescription\`, \`CardContent\`, \`CardFooter\`, \`CardAction\`. Sizes: \`default\`, \`sm\`. |
| \`Separator\` | \`@/components/ui/separator\` | Horizontal/vertical divider line. |
| \`AspectRatio\` | \`@/components/ui/aspect-ratio\` | Constrains child to a given aspect ratio. |
| \`ScrollArea\` | \`@/components/ui/scroll-area\` | Custom scrollbar wrapper. Sub-parts: \`ScrollBar\`. |
| \`Resizable\` | \`@/components/ui/resizable\` | Resizable panels. Sub-parts: \`ResizablePanelGroup\`, \`ResizablePanel\`, \`ResizableHandle\`. |
| \`Collapsible\` | \`@/components/ui/collapsible\` | Expandable section. Sub-parts: \`CollapsibleTrigger\`, \`CollapsibleContent\`. |
| \`Accordion\` | \`@/components/ui/accordion\` | Multi-section expandable. Sub-parts: \`AccordionItem\`, \`AccordionTrigger\`, \`AccordionContent\`. |
| \`Tabs\` | \`@/components/ui/tabs\` | Tabbed interface. Sub-parts: \`TabsList\`, \`TabsTrigger\`, \`TabsContent\`. List variants: \`default\`, \`line\`. |
| \`Sidebar\` | \`@/components/ui/sidebar\` | Full sidebar layout. Many sub-parts. Button variants: \`default\`, \`outline\`. Sizes: \`default\`, \`sm\`, \`lg\`. |

### Actions & Inputs

| Component | Import | Variants |
|-----------|--------|----------|
| \`Button\` | \`@/components/ui/button\` | **variant**: \`default\`, \`outline\`, \`secondary\`, \`ghost\`, \`destructive\`, \`link\`. **size**: \`default\`, \`sm\`, \`lg\`, \`icon\`. |
| \`ButtonGroup\` | \`@/components/ui/button-group\` | **orientation**: \`horizontal\`, \`vertical\`. Sub-parts: \`ButtonGroupSeparator\`, \`ButtonGroupText\`. |
| \`Toggle\` | \`@/components/ui/toggle\` | **variant**: \`default\`, \`outline\`. **size**: \`default\`, \`sm\`, \`lg\`. |
| \`ToggleGroup\` | \`@/components/ui/toggle-group\` | Group of toggles. **orientation**: \`horizontal\`, \`vertical\`. Sub-parts: \`ToggleGroupItem\`. |
| \`Input\` | \`@/components/ui/input\` | Standard text input. |
| \`InputGroup\` | \`@/components/ui/input-group\` | Input with addons. Sub-parts: \`InputGroupAddon\`, \`InputGroupButton\`, \`InputGroupText\`, \`InputGroupInput\`, \`InputGroupTextarea\`. Addon align: \`inline-start\`, \`inline-end\`, \`block-start\`, \`block-end\`. |
| \`InputOTP\` | \`@/components/ui/input-otp\` | OTP input. Sub-parts: \`InputOTPGroup\`, \`InputOTPSlot\`, \`InputOTPSeparator\`. |
| \`Textarea\` | \`@/components/ui/textarea\` | Multi-line text input. |
| \`Checkbox\` | \`@/components/ui/checkbox\` | Checkbox control. |
| \`RadioGroup\` | \`@/components/ui/radio-group\` | Radio button group. Sub-parts: \`RadioGroupItem\`. |
| \`Switch\` | \`@/components/ui/switch\` | Toggle switch. Sizes: \`sm\`, \`default\`. |
| \`Slider\` | \`@/components/ui/slider\` | Range slider. |
| \`Select\` | \`@/components/ui/select\` | Dropdown select. Sub-parts: \`SelectTrigger\`, \`SelectValue\`, \`SelectContent\`, \`SelectGroup\`, \`SelectLabel\`, \`SelectItem\`, \`SelectSeparator\`. Sizes: \`sm\`, \`default\`. |
| \`NativeSelect\` | \`@/components/ui/native-select\` | Native HTML select. Sizes: \`sm\`, \`default\`. |
| \`Combobox\` | \`@/components/ui/combobox\` | Searchable select. Sub-parts: \`ComboboxInput\`, \`ComboboxContent\`, \`ComboboxList\`, \`ComboboxItem\`, \`ComboboxGroup\`, \`ComboboxLabel\`, \`ComboboxEmpty\`, \`ComboboxSeparator\`, \`ComboboxChips\`, \`ComboboxChip\`, \`ComboboxTrigger\`, \`ComboboxValue\`. |
| \`Calendar\` | \`@/components/ui/calendar\` | Date picker calendar. |
| \`Label\` | \`@/components/ui/label\` | Form label. |
| \`Field\` | \`@/components/ui/field\` | Form field wrapper. **orientation**: \`vertical\`, \`horizontal\`, \`responsive\`. Sub-parts: \`FieldLabel\`, \`FieldDescription\`, \`FieldError\`, \`FieldGroup\`, \`FieldLegend\`, \`FieldSeparator\`, \`FieldSet\`, \`FieldContent\`, \`FieldTitle\`. |
| \`Form\` | \`@/components/ui/form\` | React Hook Form integration (if installed). |

### Feedback & Indicators

| Component | Import | Variants |
|-----------|--------|----------|
| \`Badge\` | \`@/components/ui/badge\` | **variant**: \`default\`, \`secondary\`, \`destructive\`, \`outline\`, \`ghost\`, \`link\`. |
| \`Alert\` | \`@/components/ui/alert\` | **variant**: \`default\`, \`destructive\`. Sub-parts: \`AlertTitle\`, \`AlertDescription\`, \`AlertAction\`. |
| \`Progress\` | \`@/components/ui/progress\` | Progress bar. Sub-parts: \`ProgressTrack\`, \`ProgressIndicator\`, \`ProgressLabel\`, \`ProgressValue\`. |
| \`Skeleton\` | \`@/components/ui/skeleton\` | Loading placeholder. |
| \`Spinner\` | \`@/components/ui/spinner\` | Loading spinner. |
| \`Sonner\` (Toaster) | \`@/components/ui/sonner\` | Toast notifications. Use \`toast()\` from \`sonner\` to trigger. |
| \`Empty\` | \`@/components/ui/empty\` | Empty state. **media variant**: \`default\`, \`icon\`. Sub-parts: \`EmptyHeader\`, \`EmptyTitle\`, \`EmptyDescription\`, \`EmptyContent\`, \`EmptyMedia\`. |

### Overlays & Dialogs

| Component | Import | Notes |
|-----------|--------|-------|
| \`Dialog\` | \`@/components/ui/dialog\` | Modal dialog. Sub-parts: \`DialogTrigger\`, \`DialogContent\`, \`DialogHeader\`, \`DialogTitle\`, \`DialogDescription\`, \`DialogFooter\`, \`DialogClose\`. |
| \`AlertDialog\` | \`@/components/ui/alert-dialog\` | Confirmation dialog. Sub-parts: \`AlertDialogTrigger\`, \`AlertDialogContent\`, \`AlertDialogHeader\`, \`AlertDialogTitle\`, \`AlertDialogDescription\`, \`AlertDialogFooter\`, \`AlertDialogAction\`, \`AlertDialogCancel\`. Sizes: \`default\`, \`sm\`. |
| \`Sheet\` | \`@/components/ui/sheet\` | Slide-in panel. Sub-parts: \`SheetTrigger\`, \`SheetContent\`, \`SheetHeader\`, \`SheetTitle\`, \`SheetDescription\`, \`SheetFooter\`, \`SheetClose\`. |
| \`Drawer\` | \`@/components/ui/drawer\` | Bottom drawer. Sub-parts: \`DrawerTrigger\`, \`DrawerContent\`, \`DrawerHeader\`, \`DrawerTitle\`, \`DrawerDescription\`, \`DrawerFooter\`, \`DrawerClose\`. |
| \`Popover\` | \`@/components/ui/popover\` | Popover floating content. Sub-parts: \`PopoverTrigger\`, \`PopoverContent\`, \`PopoverHeader\`, \`PopoverTitle\`, \`PopoverDescription\`. |
| \`Tooltip\` | \`@/components/ui/tooltip\` | Tooltip on hover. Sub-parts: \`TooltipTrigger\`, \`TooltipContent\`. |
| \`HoverCard\` | \`@/components/ui/hover-card\` | Rich hover tooltip. Sub-parts: \`HoverCardTrigger\`, \`HoverCardContent\`. |

### Navigation

| Component | Import | Notes |
|-----------|--------|-------|
| \`NavigationMenu\` | \`@/components/ui/navigation-menu\` | Top navigation menu. Sub-parts: \`NavigationMenuList\`, \`NavigationMenuItem\`, \`NavigationMenuTrigger\`, \`NavigationMenuContent\`, \`NavigationMenuLink\`. |
| \`Breadcrumb\` | \`@/components/ui/breadcrumb\` | Breadcrumb trail. Sub-parts: \`BreadcrumbList\`, \`BreadcrumbItem\`, \`BreadcrumbLink\`, \`BreadcrumbPage\`, \`BreadcrumbSeparator\`, \`BreadcrumbEllipsis\`. |
| \`Pagination\` | \`@/components/ui/pagination\` | Page navigation. Sub-parts: \`PaginationContent\`, \`PaginationItem\`, \`PaginationLink\`, \`PaginationPrevious\`, \`PaginationNext\`, \`PaginationEllipsis\`. |
| \`Menubar\` | \`@/components/ui/menubar\` | Desktop menu bar. Sub-parts: \`MenubarMenu\`, \`MenubarTrigger\`, \`MenubarContent\`, \`MenubarItem\`, \`MenubarSeparator\`, \`MenubarLabel\`, \`MenubarCheckboxItem\`, \`MenubarRadioGroup\`, \`MenubarRadioItem\`, \`MenubarSub\`, \`MenubarSubTrigger\`, \`MenubarSubContent\`, \`MenubarShortcut\`. |
| \`DropdownMenu\` | \`@/components/ui/dropdown-menu\` | Dropdown menu. Sub-parts: \`DropdownMenuTrigger\`, \`DropdownMenuContent\`, \`DropdownMenuItem\`, \`DropdownMenuCheckboxItem\`, \`DropdownMenuRadioGroup\`, \`DropdownMenuRadioItem\`, \`DropdownMenuLabel\`, \`DropdownMenuSeparator\`, \`DropdownMenuShortcut\`, \`DropdownMenuGroup\`, \`DropdownMenuSub\`, \`DropdownMenuSubTrigger\`, \`DropdownMenuSubContent\`. |
| \`ContextMenu\` | \`@/components/ui/context-menu\` | Right-click menu. Sub-parts: \`ContextMenuTrigger\`, \`ContextMenuContent\`, \`ContextMenuItem\`, \`ContextMenuCheckboxItem\`, \`ContextMenuRadioItem\`, \`ContextMenuLabel\`, \`ContextMenuSeparator\`, \`ContextMenuShortcut\`, \`ContextMenuSub\`, \`ContextMenuSubTrigger\`, \`ContextMenuSubContent\`. |
| \`Command\` | \`@/components/ui/command\` | Command palette (⌘K). Sub-parts: \`CommandInput\`, \`CommandList\`, \`CommandEmpty\`, \`CommandGroup\`, \`CommandItem\`, \`CommandShortcut\`, \`CommandSeparator\`, \`CommandDialog\`. |

### Data Display

| Component | Import | Notes |
|-----------|--------|-------|
| \`Table\` | \`@/components/ui/table\` | Data table. Sub-parts: \`TableHeader\`, \`TableBody\`, \`TableFooter\`, \`TableRow\`, \`TableHead\`, \`TableCell\`, \`TableCaption\`. |
| \`Avatar\` | \`@/components/ui/avatar\` | User avatar. Sub-parts: \`AvatarImage\`, \`AvatarFallback\`. |
| \`Kbd\` | \`@/components/ui/kbd\` | Keyboard shortcut display. Sub-parts: \`KbdGroup\`. |
| \`Carousel\` | \`@/components/ui/carousel\` | Content carousel. Sub-parts: \`CarouselContent\`, \`CarouselItem\`, \`CarouselPrevious\`, \`CarouselNext\`. |
| \`Chart\` | \`@/components/ui/chart\` | Chart container using Recharts. |
| \`Item\` | \`@/components/ui/item\` | List item. **variant**: \`default\`, \`outline\`, \`muted\`. **size**: \`default\`, \`sm\`, \`xs\`. **media variant**: \`default\`, \`icon\`, \`image\`. Sub-parts: \`ItemMedia\`, \`ItemContent\`, \`ItemActions\`, \`ItemGroup\`, \`ItemSeparator\`, \`ItemTitle\`, \`ItemDescription\`, \`ItemHeader\`, \`ItemFooter\`. |

### Utilities

| Component | Import | Notes |
|-----------|--------|-------|
| \`DirectionProvider\` | \`@/components/ui/direction\` | RTL/LTR context provider. |

---

## 7. Dark Mode

Dark mode is toggled via the \`.dark\` class on the \`<html>\` element using \`next-themes\`.
All semantic tokens (\`bg-background\`, \`text-foreground\`, \`bg-primary\`, etc.) automatically switch values.

**Rules:**
- Always use semantic tokens (\`bg-background\`, \`text-foreground\`, etc.) instead of raw color values
- If you need a brand color directly, use \`bg-brand-800\` etc., but prefer semantic tokens
- Never hardcode light-only or dark-only colors — the token system handles both

---

## 8. Icon Library

Icons come from **Lucide React** (\`lucide-react\`).

Usage:
\`\`\`tsx
import { ChevronRight, Search, X } from "lucide-react"

<ChevronRight className="size-4" />
\`\`\`

Always use \`size-4\` (16px) for inline icons, \`size-5\` (20px) for action icons, \`size-6\` (24px) for feature icons.

---

## 9. General Rules for AI Generation

1. **Colors**: ONLY use the brand palette (brand-50 through brand-950) and semantic tokens listed above. Never invent hex codes.
2. **Typography**: ONLY use Space Grotesk (\`font-sans\`). Do not use other fonts.
3. **Components**: ONLY use the components listed in Section 6. Do not create custom components when a shadcn/ui component exists.
4. **Spacing**: Use the Tailwind spacing scale. Prefer \`gap\`, \`space-y\`, \`p-\`, \`m-\` utilities.
5. **Border Radius**: Use the radius tokens (\`rounded-sm\` through \`rounded-4xl\`). Default for cards is \`rounded-lg\`.
6. **Shadows**: Use Tailwind shadow utilities (\`shadow-sm\`, \`shadow\`, \`shadow-md\`, \`shadow-lg\`).
7. **Transitions**: Use \`transition-colors\` or \`transition-all\` for hover/focus states.
8. **Focus states**: Use \`focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50\`.
9. **Import paths**: Always use \`@/components/ui/[component]\` for shadcn components.
10. **Dark mode**: Do NOT use \`dark:\` prefix on colors when semantic tokens are available. The tokens handle both modes.
`;
