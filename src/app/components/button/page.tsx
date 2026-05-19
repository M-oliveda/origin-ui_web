"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import {
    Bold,
    Italic,
    Underline,
    ChevronDown,
    ChevronRight,
    Mail,
    Settings,
    X,
    Plus,
    Trash,
    Download,
    Loader,
    Check,
} from "lucide-react";

export default function ButtonPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Button</h1>
                <p className="text-muted-foreground text-sm">
                    Interactive controls for actions and navigation. Built on headless primitives
                    with responsive sizing, semantic variants, and composable button groups.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Every button is composed of a single{" "}
                    <code className="text-xs">{"<Button>"}</code> primitive from{" "}
                    <code className="text-xs">@base-ui/react</code>, styled through{" "}
                    <code className="text-xs">class-variance-authority</code> (CVA). The component
                    exposes two variant axes: <code className="text-xs">variant</code> controls
                    visual style and <code className="text-xs">size</code> controls dimensions. Both
                    produce fully responsive output using Tailwind CSS media queries.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex items-center justify-center gap-6">
                        <div className="flex flex-col items-center gap-2">
                            <Button>
                                <Mail data-icon="inline-start" className="size-4" />
                                Send Email
                                <ChevronRight data-icon="inline-end" className="size-4" />
                            </Button>
                            <div className="text-muted-foreground flex items-center gap-4 text-[10px]">
                                <span>inline-start icon</span>
                                <span>label</span>
                                <span>inline-end icon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variants</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Six semantic variants map to levels of visual emphasis. Use higher emphasis
                    sparingly &mdash; a screen should rarely have more than one primary action.
                </p>
                <div className="space-y-3">
                    {[
                        {
                            v: "default" as const,
                            label: "Default (Primary)",
                            desc: "High emphasis. Use for the single most important action on screen.",
                        },
                        {
                            v: "secondary" as const,
                            label: "Secondary",
                            desc: "Medium emphasis. Pair with primary to create visual hierarchy.",
                        },
                        {
                            v: "outline" as const,
                            label: "Outline",
                            desc: "Medium-low emphasis. Works well for cancel, back, or filter actions.",
                        },
                        {
                            v: "ghost" as const,
                            label: "Ghost",
                            desc: "Low emphasis. For tertiary actions, icon buttons in dense UI.",
                        },
                        {
                            v: "destructive" as const,
                            label: "Destructive",
                            desc: "Danger signal. Reserve for irreversible actions like delete or remove.",
                        },
                        {
                            v: "link" as const,
                            label: "Link",
                            desc: "Inline navigation. Renders as underlined text, no background.",
                        },
                    ].map((item) => (
                        <div
                            key={item.v}
                            className="border-border flex items-center gap-4 rounded-lg border p-4"
                        >
                            <div className="w-36 shrink-0">
                                <Button variant={item.v}>{item.label}</Button>
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
                    Three text-button sizes and one icon-only size. Each scales automatically across
                    breakpoints using Tailwind media queries &mdash; no JavaScript, no layout shift.
                    The base (mobile-first) value grows at <code className="text-xs">sm:</code>{" "}
                    (640px) and again at <code className="text-xs">lg:</code> (1024px).
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
                                    label: "Small",
                                    bp: "h-7 / sm:h-8 / lg:h-9",
                                    use: "Compact UI, toolbars, secondary actions on mobile",
                                },
                                {
                                    name: "default" as const,
                                    label: "Default",
                                    bp: "h-8 / sm:h-9 / lg:h-10",
                                    use: "Primary actions, forms, navigation",
                                },
                                {
                                    name: "lg" as const,
                                    label: "Large",
                                    bp: "h-10 / sm:h-11 / lg:h-12",
                                    use: "Hero CTAs, onboarding, marketing pages",
                                },
                            ].map((s) => (
                                <tr key={s.name} className="border-border border-b last:border-0">
                                    <td className="py-3 pr-4">
                                        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                                            size=&quot;{s.name}&quot;
                                        </code>
                                    </td>
                                    <td className="py-3 pr-4">
                                        <Button size={s.name} variant="outline">
                                            {s.label}
                                        </Button>
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
                                    <Button size="icon" variant="outline">
                                        <Plus className="size-4" />
                                    </Button>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        size-8 / sm:size-9 / lg:size-10
                                    </code>
                                </td>
                                <td className="text-muted-foreground py-3 text-sm">
                                    Icon-only actions, close buttons, toggles
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <p className="mb-4 text-sm font-medium">Side-by-side comparison</p>
                    <div className="flex flex-wrap items-end gap-3">
                        <Button size="sm">Small</Button>
                        <Button size="default">Default</Button>
                        <Button size="lg">Large</Button>
                        <Button size="icon" variant="outline">
                            <Plus className="size-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Icons in Buttons */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Icons in Buttons</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Mark icons with{" "}
                    <code className="text-xs">data-icon=&quot;inline-start&quot;</code> or{" "}
                    <code className="text-xs">data-icon=&quot;inline-end&quot;</code> to
                    automatically adjust padding. The button detects icon placement via{" "}
                    <code className="text-xs">has-data-[icon=*]</code> selectors and reduces padding
                    on the icon side for optical balance.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="border-border flex flex-col items-start gap-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Leading icon</p>
                        <Button>
                            <Mail data-icon="inline-start" className="size-4" />
                            Send Email
                        </Button>
                        <code className="text-muted-foreground/60 text-[10px]">
                            data-icon=&quot;inline-start&quot;
                        </code>
                    </div>
                    <div className="border-border flex flex-col items-start gap-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Trailing icon</p>
                        <Button variant="outline">
                            Next
                            <ChevronRight data-icon="inline-end" className="size-4" />
                        </Button>
                        <code className="text-muted-foreground/60 text-[10px]">
                            data-icon=&quot;inline-end&quot;
                        </code>
                    </div>
                    <div className="border-border flex flex-col items-start gap-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Icon only</p>
                        <div className="flex gap-2">
                            <Button size="icon" variant="outline">
                                <Settings className="size-4" />
                            </Button>
                            <Button size="icon" variant="ghost">
                                <X className="size-4" />
                            </Button>
                        </div>
                        <code className="text-muted-foreground/60 text-[10px]">
                            size=&quot;icon&quot;
                        </code>
                    </div>
                </div>
            </div>

            {/* Button Groups */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Button Groups</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Wrap related actions in <code className="text-xs">{"<ButtonGroup>"}</code> to
                    merge borders and radii automatically. Supports horizontal and vertical
                    orientation with an optional{" "}
                    <code className="text-xs">{"<ButtonGroupSeparator>"}</code> between items. See
                    the{" "}
                    <a
                        href="/components/button-group"
                        className="text-primary hover:text-primary/80 underline underline-offset-4"
                    >
                        ButtonGroup page
                    </a>{" "}
                    for full documentation.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Horizontal</p>
                        <ButtonGroup>
                            <Button variant="outline">Left</Button>
                            <Button variant="outline">Center</Button>
                            <Button variant="outline">Right</Button>
                        </ButtonGroup>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Vertical</p>
                        <ButtonGroup orientation="vertical">
                            <Button variant="outline">Top</Button>
                            <Button variant="outline">Middle</Button>
                            <Button variant="outline">Bottom</Button>
                        </ButtonGroup>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With separator</p>
                        <ButtonGroup>
                            <Button variant="outline">Save</Button>
                            <ButtonGroupSeparator />
                            <Button variant="outline" size="icon">
                                <ChevronDown className="size-4" />
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Icon group (toolbar)
                        </p>
                        <ButtonGroup>
                            <Button variant="outline" size="icon">
                                <Bold className="size-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <Italic className="size-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <Underline className="size-4" />
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Buttons respond to focus, hover, active press, and disabled states. The focus
                    ring uses the <code className="text-xs">--ring</code> token (brand-300) for
                    accessibility. Active buttons translate 1px downward for a subtle press effect.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Button>Default</Button>
                        <p className="text-muted-foreground text-[10px]">Resting</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Button className="border-ring ring-ring/50 ring-3">Focused</Button>
                        <p className="text-muted-foreground text-[10px]">focus-visible</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Button disabled>Disabled</Button>
                        <p className="text-muted-foreground text-[10px]">disabled, 50% opacity</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Button>
                            <Loader className="size-4 animate-spin" data-icon="inline-start" />
                            Loading...
                        </Button>
                        <p className="text-muted-foreground text-[10px]">Loading pattern</p>
                    </div>
                </div>
            </div>

            {/* Hierarchy Patterns */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Hierarchy Patterns</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Common pairings that create clear visual hierarchy. The primary action should
                    always stand out, with supporting actions progressively de-emphasized.
                </p>
                <div className="space-y-4">
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Dialog footer
                        </p>
                        <div className="flex items-center justify-end gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button>Save changes</Button>
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Danger zone
                        </p>
                        <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost">Cancel</Button>
                            <Button variant="destructive">
                                <Trash data-icon="inline-start" className="size-4" />
                                Delete account
                            </Button>
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Empty state CTA
                        </p>
                        <div className="flex flex-col items-center gap-3 py-4">
                            <p className="text-muted-foreground text-sm">No projects yet</p>
                            <Button size="lg">
                                <Plus data-icon="inline-start" className="size-5" />
                                Create your first project
                            </Button>
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Toolbar
                        </p>
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon">
                                <Bold className="size-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Italic className="size-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Underline className="size-4" />
                            </Button>
                            <Separator orientation="vertical" className="mx-1 h-6" />
                            <Button variant="ghost" size="sm">
                                <Download data-icon="inline-start" className="size-3.5" />
                                Export
                            </Button>
                        </div>
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
                                        h-7 px-2 text-xs
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        h-8 px-2.5
                                    </code>
                                </td>
                                <td className="py-3">
                                    <code className="text-muted-foreground text-xs">h-9 px-3</code>
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
                                        h-8 px-2.5
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">h-9 px-3</code>
                                </td>
                                <td className="py-3">
                                    <code className="text-muted-foreground text-xs">h-10 px-4</code>
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
                                        h-10 px-4 text-base
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">h-11 px-5</code>
                                </td>
                                <td className="py-3">
                                    <code className="text-muted-foreground text-xs">h-12 px-6</code>
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
                                    One primary per visible area.
                                </strong>{" "}
                                Multiple primary buttons dilute the visual hierarchy and leave users
                                uncertain which action matters most.
                            </li>
                            <li>
                                <strong className="text-foreground">Use verb-first labels.</strong>{" "}
                                &quot;Save changes&quot;, &quot;Delete account&quot;, &quot;Send
                                invite&quot; &mdash; the label should describe the outcome, not the
                                input.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Pair destructive with a confirmation.
                                </strong>{" "}
                                Always gate irreversible actions behind a dialog or undo mechanism.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Let the size scale handle responsive.
                                </strong>{" "}
                                Rely on the built-in breakpoint scaling instead of conditionally
                                swapping size props per viewport.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Maintain 44px minimum touch target.
                                </strong>{" "}
                                Even when the visual size is smaller, ensure the tappable area meets
                                WCAG 2.5.8 on mobile.
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
                                    Don&apos;t use icon-only without a tooltip or sr-only label.
                                </strong>{" "}
                                Icon buttons must have an accessible name via{" "}
                                <code className="text-xs">aria-label</code> or a visually hidden{" "}
                                <code className="text-xs">{"<span>"}</code>.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t override responsive sizes inline.
                                </strong>{" "}
                                Adding manual <code className="text-xs">h-*</code> classes breaks
                                the design token chain and will drift from the system on future
                                updates.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t nest buttons or wrap interactive elements.
                                </strong>{" "}
                                A button inside a link (or vice versa) violates HTML semantics and
                                creates unpredictable behavior for screen readers.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t rely on color alone for destructive intent.
                                </strong>{" "}
                                Combine the destructive variant with a clear label
                                (&quot;Delete&quot;, &quot;Remove&quot;) so the meaning is
                                communicated even without color perception.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t disable without explanation.
                                </strong>{" "}
                                If a button is disabled, surface a tooltip or inline hint explaining
                                why the action is unavailable.
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
                                The focus ring uses <code className="text-xs">focus-visible</code>{" "}
                                &mdash; it only appears on keyboard navigation, not mouse clicks.
                            </li>
                            <li>
                                <code className="text-xs">active:translate-y-px</code> provides a
                                physical press cue, complementing the visual hover state.
                            </li>
                            <li>
                                <code className="text-xs">aria-invalid</code> triggers a destructive
                                ring for form validation contexts.
                            </li>
                            <li>
                                <code className="text-xs">disabled</code> sets{" "}
                                <code className="text-xs">pointer-events: none</code> and 50%
                                opacity. The element remains in the tab order; screen readers
                                announce it as disabled.
                            </li>
                            <li>
                                Always add{" "}
                                <code className="text-xs">
                                    {'<span className="sr-only">Label</span>'}
                                </code>{" "}
                                inside icon-only buttons.
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
                    code={`import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"

// Variants
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>

// Responsive sizes — each scales via Tailwind media queries
// Mobile (base) → Tablet (sm:) → Desktop (lg:)
<Button size="sm">Small</Button>     {/* h-7 → h-8 → h-9 */}
<Button>Default</Button>              {/* h-8 → h-9 → h-10 */}
<Button size="lg">Large</Button>     {/* h-10 → h-11 → h-12 */}
<Button size="icon"><Plus /></Button> {/* size-8 → size-9 → size-10 */}

// Icons with data attributes for optical padding
<Button>
  <Mail data-icon="inline-start" />
  Send Email
</Button>
<Button variant="outline">
  Continue
  <ChevronRight data-icon="inline-end" />
</Button>

// Button groups
<ButtonGroup>
  <Button variant="outline">Save</Button>
  <ButtonGroupSeparator />
  <Button variant="outline" size="icon">
    <ChevronDown />
  </Button>
</ButtonGroup>`}
                />
            </div>
        </div>
    );
}
