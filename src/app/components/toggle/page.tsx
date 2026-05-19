"use client";

import { Toggle } from "@/components/ui/toggle";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import {
    Bold,
    Italic,
    Underline,
    Star,
    Pin,
    Bookmark,
    Heart,
    Eye,
    Mic,
    MicOff,
    Volume2,
    Check,
    X,
} from "lucide-react";

export default function TogglePage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Toggle</h1>
                <p className="text-muted-foreground text-sm">
                    A two-state button that can be toggled on or off. Built on the{" "}
                    <code className="text-xs">@base-ui/react</code> Toggle primitive with CVA
                    variants for visual style and responsive sizing. Ideal for binary choices like
                    bold/unbold, mute/unmute, or favorite/unfavorite.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Each toggle is a single <code className="text-xs">{"<Toggle>"}</code> element
                    backed by Base UI&apos;s headless Toggle primitive. It manages its own pressed
                    state via <code className="text-xs">aria-pressed</code> and exposes two variant
                    axes: <code className="text-xs">variant</code> (visual style) and{" "}
                    <code className="text-xs">size</code> (dimensions). The pressed state is
                    reflected through both <code className="text-xs">aria-pressed</code> and{" "}
                    <code className="text-xs">data-[state=on]</code> attributes.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-4">
                            <Toggle aria-label="Toggle star" defaultPressed>
                                <Star className="size-4" />
                            </Toggle>
                            <Toggle aria-label="Toggle pin">
                                <Pin className="size-4" />
                            </Toggle>
                        </div>
                        <div className="text-muted-foreground flex items-center gap-6 text-[10px]">
                            <span>aria-pressed=&quot;true&quot;</span>
                            <span>data-slot=&quot;toggle&quot;</span>
                            <span>data-[state=on]</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variants</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Five visual variants control the toggle&apos;s appearance. The pressed state
                    applies <code className="text-xs">bg-muted text-foreground</code> on
                    default/ghost/outline variants, and variant-specific styles on secondary and
                    destructive.
                </p>
                <div className="space-y-3">
                    {[
                        {
                            v: "default" as const,
                            label: "Default",
                            desc: "Transparent background, muted pressed state. The standard choice for toolbars.",
                            icon: Bold,
                        },
                        {
                            v: "outline" as const,
                            label: "Outline",
                            desc: "Visible border in resting state. Use when toggles need to stand out from the background.",
                            icon: Italic,
                        },
                        {
                            v: "secondary" as const,
                            label: "Secondary",
                            desc: "Filled background with secondary color. For toggles that should be visually prominent.",
                            icon: Underline,
                        },
                        {
                            v: "ghost" as const,
                            label: "Ghost",
                            desc: "No visible background or border until hover/press. Ideal for dense icon grids.",
                            icon: Star,
                        },
                        {
                            v: "destructive" as const,
                            label: "Destructive",
                            desc: "Red-tinted for toggles that control dangerous states (e.g., disabling a safety feature).",
                            icon: MicOff,
                        },
                    ].map((item) => (
                        <div
                            key={item.v}
                            className="border-border flex items-center gap-4 rounded-lg border p-4"
                        >
                            <div className="flex w-28 shrink-0 gap-2">
                                <Toggle variant={item.v} aria-label={`${item.label} off`}>
                                    <item.icon className="size-4" />
                                </Toggle>
                                <Toggle
                                    variant={item.v}
                                    aria-label={`${item.label} on`}
                                    defaultPressed
                                >
                                    <item.icon className="size-4" />
                                </Toggle>
                            </div>
                            <div className="min-w-0">
                                <code className="text-muted-foreground text-xs">
                                    variant=&quot;{item.v}&quot;
                                </code>
                                <p className="text-muted-foreground/80 mt-0.5 text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive Sizes */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Responsive Sizes</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Three text sizes and one icon-only size, each scaling across breakpoints. The
                    size system mirrors the Button component for consistency.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-border border-b">
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    Token
                                </th>
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    Preview
                                </th>
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    Responsive Heights
                                </th>
                                <th className="text-muted-foreground py-3 text-left font-medium">
                                    When to Use
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    name: "sm" as const,
                                    bp: "h-7 / sm:h-8 / lg:h-9",
                                    use: "Compact toolbars, inline controls",
                                },
                                {
                                    name: "default" as const,
                                    bp: "h-8 / sm:h-9 / lg:h-10",
                                    use: "Standard toggle actions",
                                },
                                {
                                    name: "lg" as const,
                                    bp: "h-10 / sm:h-11 / lg:h-12",
                                    use: "Prominent standalone toggles",
                                },
                            ].map((s) => (
                                <tr key={s.name} className="border-border border-b last:border-0">
                                    <td className="py-3 pr-4">
                                        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                                            size=&quot;{s.name}&quot;
                                        </code>
                                    </td>
                                    <td className="py-3 pr-4">
                                        <Toggle size={s.name} variant="outline" aria-label="Bold">
                                            <Bold className="size-4" />
                                        </Toggle>
                                    </td>
                                    <td className="py-3 pr-4">
                                        <code className="text-muted-foreground text-xs">
                                            {s.bp}
                                        </code>
                                    </td>
                                    <td className="text-muted-foreground py-3 text-sm">{s.use}</td>
                                </tr>
                            ))}
                            <tr className="border-border border-b last:border-0">
                                <td className="py-3 pr-4">
                                    <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                                        size=&quot;icon&quot;
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <Toggle size="icon" variant="outline" aria-label="Star">
                                        <Star className="size-4" />
                                    </Toggle>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        size-8 / sm:size-9 / lg:size-10
                                    </code>
                                </td>
                                <td className="text-muted-foreground py-3 text-sm">
                                    Square icon-only toggles
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <p className="mb-4 text-sm font-medium">Side-by-side comparison</p>
                    <div className="flex flex-wrap items-end gap-3">
                        <Toggle size="sm" variant="outline" aria-label="Small">
                            <Bold className="size-4" />
                        </Toggle>
                        <Toggle size="default" variant="outline" aria-label="Default">
                            <Bold className="size-4" />
                        </Toggle>
                        <Toggle size="lg" variant="outline" aria-label="Large">
                            <Bold className="size-4" />
                        </Toggle>
                        <Toggle size="icon" variant="outline" aria-label="Icon">
                            <Bold className="size-4" />
                        </Toggle>
                    </div>
                </div>
            </div>

            {/* Common Patterns */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Common Patterns</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Toggles are most useful for binary state controls. Here are typical usage
                    patterns in real interfaces.
                </p>
                <div className="space-y-4">
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Favorite / Bookmark
                        </p>
                        <div className="flex items-center gap-3">
                            <Toggle variant="ghost" aria-label="Favorite">
                                <Heart className="size-4" />
                            </Toggle>
                            <Toggle variant="ghost" aria-label="Bookmark">
                                <Bookmark className="size-4" />
                            </Toggle>
                            <Toggle variant="ghost" aria-label="Pin">
                                <Pin className="size-4" />
                            </Toggle>
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Mute / Visibility
                        </p>
                        <div className="flex items-center gap-3">
                            <Toggle variant="outline" aria-label="Toggle mute">
                                <Mic className="size-4" />
                            </Toggle>
                            <Toggle variant="outline" aria-label="Toggle visibility">
                                <Eye className="size-4" />
                            </Toggle>
                            <Toggle variant="outline" aria-label="Toggle sound">
                                <Volume2 className="size-4" />
                            </Toggle>
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            With text label
                        </p>
                        <div className="flex items-center gap-3">
                            <Toggle variant="outline" aria-label="Toggle bold">
                                <Bold className="size-4" />
                                Bold
                            </Toggle>
                            <Toggle variant="outline" aria-label="Toggle italic">
                                <Italic className="size-4" />
                                Italic
                            </Toggle>
                        </div>
                    </div>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Toggles cycle between resting (off), pressed (on), focused, and disabled. The
                    pressed state is communicated via{" "}
                    <code className="text-xs">aria-pressed=&quot;true&quot;</code> and visual
                    background change.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Toggle variant="outline" aria-label="Off state">
                            <Bold className="size-4" />
                        </Toggle>
                        <p className="text-muted-foreground text-[10px]">Off (resting)</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Toggle variant="outline" aria-label="On state" defaultPressed>
                            <Bold className="size-4" />
                        </Toggle>
                        <p className="text-muted-foreground text-[10px]">On (pressed)</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Toggle
                            variant="outline"
                            className="border-ring ring-ring/50 ring-3"
                            aria-label="Focused"
                        >
                            <Bold className="size-4" />
                        </Toggle>
                        <p className="text-muted-foreground text-[10px]">focus-visible</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Toggle variant="outline" disabled aria-label="Disabled">
                            <Bold className="size-4" />
                        </Toggle>
                        <p className="text-muted-foreground text-[10px]">disabled, 50% opacity</p>
                    </div>
                </div>
            </div>

            {/* Token Map */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Token Map</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Quick reference mapping each size token to its generated Tailwind classes across
                    the three breakpoint tiers.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-border border-b">
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    Size
                                </th>
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    Mobile (base)
                                </th>
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    Tablet (sm:)
                                </th>
                                <th className="text-muted-foreground py-3 text-left font-medium">
                                    Desktop (lg:)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-border border-b">
                                <td className="py-3 pr-4">
                                    <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                                        sm
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        h-7 min-w-7 px-1.5
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        h-8 min-w-8 px-2
                                    </code>
                                </td>
                                <td className="py-3">
                                    <code className="text-muted-foreground text-xs">
                                        h-9 min-w-9 px-2.5
                                    </code>
                                </td>
                            </tr>
                            <tr className="border-border border-b">
                                <td className="py-3 pr-4">
                                    <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                                        default
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        h-8 min-w-8 px-2
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        h-9 min-w-9 px-2.5
                                    </code>
                                </td>
                                <td className="py-3">
                                    <code className="text-muted-foreground text-xs">
                                        h-10 min-w-10 px-3
                                    </code>
                                </td>
                            </tr>
                            <tr className="border-border border-b">
                                <td className="py-3 pr-4">
                                    <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                                        lg
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        h-10 min-w-10 px-3 text-base
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        h-11 min-w-11 px-3.5
                                    </code>
                                </td>
                                <td className="py-3">
                                    <code className="text-muted-foreground text-xs">
                                        h-12 min-w-12 px-4
                                    </code>
                                </td>
                            </tr>
                            <tr className="border-border border-b last:border-0">
                                <td className="py-3 pr-4">
                                    <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                                        icon
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">size-8</code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">size-9</code>
                                </td>
                                <td className="py-3">
                                    <code className="text-muted-foreground text-xs">size-10</code>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Design Guidelines */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Design Guidelines</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg border-2 border-green-500/30 bg-green-500/5 p-5">
                        <div className="mb-4 flex items-center gap-2">
                            <Check className="size-4 text-green-600 dark:text-green-400" />
                            <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                                Do
                            </p>
                        </div>
                        <ul className="text-muted-foreground space-y-3 text-sm">
                            <li>
                                <strong className="text-foreground">
                                    Always provide aria-label.
                                </strong>{" "}
                                Icon-only toggles have no visible text &mdash; the label is required
                                for screen readers to announce the toggle purpose.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Make the on/off states visually distinct.
                                </strong>{" "}
                                The pressed state should be immediately obvious. The built-in
                                background change handles this, but consider adding icon swaps
                                (e.g., eye/eye-off) for extra clarity.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use for binary choices only.
                                </strong>{" "}
                                Toggle is for on/off. For selecting among multiple options, use{" "}
                                <a
                                    href="/components/toggle-group"
                                    className="text-primary hover:text-primary/80 underline underline-offset-4"
                                >
                                    ToggleGroup
                                </a>{" "}
                                instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Group related toggles visually.
                                </strong>{" "}
                                Place related toggles adjacent with consistent spacing. For tighter
                                grouping with shared borders, use ToggleGroup.
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-lg border-2 border-red-500/30 bg-red-500/5 p-5">
                        <div className="mb-4 flex items-center gap-2">
                            <X className="size-4 text-red-600 dark:text-red-400" />
                            <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                                Don&apos;t
                            </p>
                        </div>
                        <ul className="text-muted-foreground space-y-3 text-sm">
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use toggle for navigation or one-shot actions.
                                </strong>{" "}
                                Toggle represents state, not actions. Use{" "}
                                <a
                                    href="/components/button"
                                    className="text-primary hover:text-primary/80 underline underline-offset-4"
                                >
                                    Button
                                </a>{" "}
                                for actions like &quot;Save&quot; or &quot;Submit&quot;.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t forget to indicate the current state.
                                </strong>{" "}
                                Relying solely on subtle color changes can be missed. Pair with icon
                                changes or text labels when the toggle has significant consequences.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t disable without context.
                                </strong>{" "}
                                A disabled toggle with no explanation leaves users confused. Add a
                                tooltip explaining why the toggle is unavailable.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t mix toggle sizes in the same toolbar.
                                </strong>{" "}
                                Inconsistent sizes create visual noise. Use the same size prop for
                                all toggles in a related group.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Developer Reference */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Developer Reference</h3>
                <Separator />
                <div className="space-y-4">
                    <div className="border-border rounded-lg border p-5">
                        <h4 className="mb-2 text-sm font-medium">Accessibility</h4>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                            <li>
                                The underlying primitive manages{" "}
                                <code className="text-xs">aria-pressed</code> automatically. Screen
                                readers announce &quot;Toggle bold, pressed&quot; or &quot;Toggle
                                bold, not pressed&quot;.
                            </li>
                            <li>
                                Focus ring uses <code className="text-xs">focus-visible</code>{" "}
                                &mdash; keyboard-only, not on mouse click.
                            </li>
                            <li>
                                <code className="text-xs">active:translate-y-px</code> provides a
                                physical press cue complementing the visual state change.
                            </li>
                            <li>
                                <code className="text-xs">disabled</code> sets{" "}
                                <code className="text-xs">pointer-events: none</code> and 50%
                                opacity. The element stays in the tab order; screen readers announce
                                it as disabled.
                            </li>
                            <li>
                                Pressed state is reflected via both{" "}
                                <code className="text-xs">aria-pressed</code> and{" "}
                                <code className="text-xs">data-[state=on]</code>, supporting both
                                ARIA queries and CSS selectors.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Star } from "lucide-react"

// Basic toggle (default variant)
<Toggle aria-label="Toggle bold">
  <Bold className="size-4" />
</Toggle>

// Outline variant
<Toggle variant="outline" aria-label="Toggle italic">
  <Italic className="size-4" />
</Toggle>

// With text label
<Toggle variant="outline" aria-label="Toggle bold">
  <Bold className="size-4" />
  Bold
</Toggle>

// Controlled state
const [pressed, setPressed] = useState(false)
<Toggle
  pressed={pressed}
  onPressedChange={setPressed}
  aria-label="Favorite"
>
  <Star className="size-4" />
</Toggle>

// Sizes — responsive scaling via Tailwind
<Toggle size="sm" aria-label="Small">...</Toggle>   {/* h-7 → h-8 → h-9 */}
<Toggle aria-label="Default">...</Toggle>            {/* h-8 → h-9 → h-10 */}
<Toggle size="lg" aria-label="Large">...</Toggle>   {/* h-10 → h-11 → h-12 */}
<Toggle size="icon" aria-label="Icon">...</Toggle>  {/* size-8 → size-9 → size-10 */}

// Variants
<Toggle variant="default">...</Toggle>
<Toggle variant="outline">...</Toggle>
<Toggle variant="secondary">...</Toggle>
<Toggle variant="ghost">...</Toggle>
<Toggle variant="destructive">...</Toggle>`}
                />
            </div>
        </div>
    );
}
