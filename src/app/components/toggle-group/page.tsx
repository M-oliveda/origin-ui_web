"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    List,
    ListOrdered,
    Grid2x2,
    LayoutList,
    LayoutGrid,
    Check,
    X,
} from "lucide-react";

export default function ToggleGroupPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">ToggleGroup</h1>
                <p className="text-muted-foreground text-sm">
                    A group of toggle buttons where one or multiple can be active at a time. Built
                    on <code className="text-xs">@base-ui/react</code>&apos;s ToggleGroup primitive
                    with roving tabindex keyboard navigation, shared variant/size context, optional
                    spacing, and horizontal or vertical orientation.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A <code className="text-xs">{"<ToggleGroup>"}</code> wraps multiple{" "}
                    <code className="text-xs">{"<ToggleGroupItem>"}</code> children. The group
                    manages selection state (single or multiple) and passes variant/size context
                    down via React context so items inherit the group&apos;s styling. Uses{" "}
                    <code className="text-xs">data-slot=&quot;toggle-group&quot;</code> and{" "}
                    <code className="text-xs">data-orientation</code> for CSS selection. Items use{" "}
                    <code className="text-xs">data-slot=&quot;toggle-group-item&quot;</code> with{" "}
                    <code className="text-xs">data-variant</code> and{" "}
                    <code className="text-xs">data-size</code> reflecting inherited values.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <ToggleGroup defaultValue={["center"]}>
                            <ToggleGroupItem value="left" aria-label="Align left">
                                <AlignLeft className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="center" aria-label="Align center">
                                <AlignCenter className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="right" aria-label="Align right">
                                <AlignRight className="size-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>
                        <div className="text-muted-foreground flex items-center gap-6 text-[10px]">
                            <span>data-slot=&quot;toggle-group&quot;</span>
                            <span>data-orientation</span>
                            <span>defaultValue</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Selection Modes */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Selection Modes</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    ToggleGroup supports both single selection (radio-like, one active at a time)
                    and multiple selection (checkbox-like, any combination). Pass{" "}
                    <code className="text-xs">multiple</code> to the group to allow several items to
                    be active simultaneously.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Single selection
                        </p>
                        <ToggleGroup defaultValue={["center"]}>
                            <ToggleGroupItem value="left" aria-label="Align left">
                                <AlignLeft className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="center" aria-label="Align center">
                                <AlignCenter className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="right" aria-label="Align right">
                                <AlignRight className="size-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>
                        <p className="text-muted-foreground/60 text-xs">
                            Alignment, view mode, sort direction
                        </p>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Multiple selection
                        </p>
                        <ToggleGroup multiple defaultValue={["bold", "italic"]}>
                            <ToggleGroupItem value="bold" aria-label="Bold">
                                <Bold className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="italic" aria-label="Italic">
                                <Italic className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="underline" aria-label="Underline">
                                <Underline className="size-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>
                        <p className="text-muted-foreground/60 text-xs">
                            Text formatting, filter tags, feature toggles
                        </p>
                    </div>
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variants</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Pass <code className="text-xs">variant</code> to the group to set the style for
                    all items. Individual items can override with their own variant prop if needed.
                </p>
                <div className="space-y-3">
                    {[
                        { v: "default" as const, label: "Default" },
                        { v: "outline" as const, label: "Outline" },
                        { v: "secondary" as const, label: "Secondary" },
                        { v: "ghost" as const, label: "Ghost" },
                    ].map((item) => (
                        <div
                            key={item.v}
                            className="border-border flex items-center gap-4 rounded-lg border p-4"
                        >
                            <div className="w-40 shrink-0">
                                <ToggleGroup variant={item.v} defaultValue={["bold"]}>
                                    <ToggleGroupItem value="bold" aria-label="Bold">
                                        <Bold className="size-4" />
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="italic" aria-label="Italic">
                                        <Italic className="size-4" />
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="underline" aria-label="Underline">
                                        <Underline className="size-4" />
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </div>
                            <code className="text-muted-foreground text-xs">
                                variant=&quot;{item.v}&quot;
                            </code>
                        </div>
                    ))}
                </div>
            </div>

            {/* Orientation */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Orientation</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Set <code className="text-xs">orientation=&quot;vertical&quot;</code> to stack
                    items vertically. Arrow key navigation follows the orientation automatically.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Horizontal (default)
                        </p>
                        <ToggleGroup variant="outline" defaultValue={["grid"]}>
                            <ToggleGroupItem value="list" aria-label="List view">
                                <LayoutList className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="grid" aria-label="Grid view">
                                <LayoutGrid className="size-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Vertical</p>
                        <ToggleGroup
                            orientation="vertical"
                            variant="outline"
                            defaultValue={["grid"]}
                        >
                            <ToggleGroupItem value="list" aria-label="List view">
                                <LayoutList className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="grid" aria-label="Grid view">
                                <LayoutGrid className="size-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </div>
            </div>

            {/* Spacing */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Spacing</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    By default, items are flush with shared borders (spacing=0). Set the{" "}
                    <code className="text-xs">spacing</code> prop to add a gap between items. When
                    spacing is 0, items share borders and have their intermediate radii removed.
                    With spacing &gt; 0, each item retains its full border-radius.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            No spacing (default)
                        </p>
                        <ToggleGroup variant="outline" defaultValue={["bold"]}>
                            <ToggleGroupItem value="bold" aria-label="Bold">
                                <Bold className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="italic" aria-label="Italic">
                                <Italic className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="underline" aria-label="Underline">
                                <Underline className="size-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>
                        <code className="text-muted-foreground/60 text-[10px]">
                            spacing=0 — shared borders
                        </code>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With spacing</p>
                        <ToggleGroup variant="outline" spacing={1} defaultValue={["bold"]}>
                            <ToggleGroupItem value="bold" aria-label="Bold">
                                <Bold className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="italic" aria-label="Italic">
                                <Italic className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="underline" aria-label="Underline">
                                <Underline className="size-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>
                        <code className="text-muted-foreground/60 text-[10px]">
                            spacing=1 — individual borders
                        </code>
                    </div>
                </div>
            </div>

            {/* Composition Patterns */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Composition Patterns</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Common patterns combining ToggleGroup with different configurations.
                </p>
                <div className="space-y-4">
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Text formatting toolbar
                        </p>
                        <div className="flex items-center gap-2">
                            <ToggleGroup multiple variant="outline" defaultValue={["bold"]}>
                                <ToggleGroupItem value="bold" aria-label="Bold">
                                    <Bold className="size-4" />
                                </ToggleGroupItem>
                                <ToggleGroupItem value="italic" aria-label="Italic">
                                    <Italic className="size-4" />
                                </ToggleGroupItem>
                                <ToggleGroupItem value="underline" aria-label="Underline">
                                    <Underline className="size-4" />
                                </ToggleGroupItem>
                                <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
                                    <Strikethrough className="size-4" />
                                </ToggleGroupItem>
                            </ToggleGroup>
                            <Separator orientation="vertical" className="mx-1 h-6" />
                            <ToggleGroup variant="outline" defaultValue={["left"]}>
                                <ToggleGroupItem value="left" aria-label="Align left">
                                    <AlignLeft className="size-4" />
                                </ToggleGroupItem>
                                <ToggleGroupItem value="center" aria-label="Align center">
                                    <AlignCenter className="size-4" />
                                </ToggleGroupItem>
                                <ToggleGroupItem value="right" aria-label="Align right">
                                    <AlignRight className="size-4" />
                                </ToggleGroupItem>
                                <ToggleGroupItem value="justify" aria-label="Justify">
                                    <AlignJustify className="size-4" />
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            View switcher
                        </p>
                        <ToggleGroup variant="outline" defaultValue={["grid"]}>
                            <ToggleGroupItem value="list" aria-label="List view">
                                <List className="size-4" />
                                List
                            </ToggleGroupItem>
                            <ToggleGroupItem value="grid" aria-label="Grid view">
                                <Grid2x2 className="size-4" />
                                Grid
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            List type selector
                        </p>
                        <ToggleGroup variant="outline" spacing={1} defaultValue={["unordered"]}>
                            <ToggleGroupItem value="unordered" aria-label="Bullet list">
                                <List className="size-4" />
                                Bullet
                            </ToggleGroupItem>
                            <ToggleGroupItem value="ordered" aria-label="Numbered list">
                                <ListOrdered className="size-4" />
                                Numbered
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Individual items within a group manage their own pressed, focused, and disabled
                    states. The group handles selection logic (toggling items on/off).
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Active item</p>
                        <ToggleGroup variant="outline" defaultValue={["bold"]}>
                            <ToggleGroupItem value="bold" aria-label="Bold">
                                <Bold className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="italic" aria-label="Italic">
                                <Italic className="size-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>
                        <p className="text-muted-foreground text-[10px]">
                            aria-pressed=&quot;true&quot;
                        </p>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Focused item</p>
                        <ToggleGroup variant="outline" defaultValue={[]}>
                            <ToggleGroupItem
                                value="bold"
                                aria-label="Bold"
                                className="border-ring ring-ring/50 relative z-10 ring-3"
                            >
                                <Bold className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="italic" aria-label="Italic">
                                <Italic className="size-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>
                        <p className="text-muted-foreground text-[10px]">focus-visible z-10</p>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Disabled item</p>
                        <ToggleGroup variant="outline" defaultValue={["bold"]}>
                            <ToggleGroupItem value="bold" aria-label="Bold">
                                <Bold className="size-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="italic" aria-label="Italic" disabled>
                                <Italic className="size-4" />
                            </ToggleGroupItem>
                        </ToggleGroup>
                        <p className="text-muted-foreground text-[10px]">disabled, 50% opacity</p>
                    </div>
                </div>
            </div>

            {/* Token Map */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Token Map</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    ToggleGroupItem inherits the same size tokens as Toggle. The group container
                    adds border-collapse logic when <code className="text-xs">spacing=0</code>.
                </p>
                <div className="overflow-x-auto">
                    <p className="mb-3 text-sm font-medium">Group container (spacing=0)</p>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-border border-b">
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    Orientation
                                </th>
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    First item
                                </th>
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    Middle items
                                </th>
                                <th className="text-muted-foreground py-3 text-left font-medium">
                                    Last item
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-border border-b">
                                <td className="py-3 pr-4">
                                    <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                                        horizontal
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        rounded-l-lg
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        rounded-none border-l-0
                                    </code>
                                </td>
                                <td className="py-3">
                                    <code className="text-muted-foreground text-xs">
                                        rounded-r-lg
                                    </code>
                                </td>
                            </tr>
                            <tr className="border-border border-b last:border-0">
                                <td className="py-3 pr-4">
                                    <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                                        vertical
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        rounded-t-lg
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        rounded-none border-t-0
                                    </code>
                                </td>
                                <td className="py-3">
                                    <code className="text-muted-foreground text-xs">
                                        rounded-b-lg
                                    </code>
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
                                    Use for mutually exclusive options.
                                </strong>{" "}
                                Single-selection ToggleGroup is ideal for choosing one option from a
                                small set (2-5 items) like alignment or view mode.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Provide aria-label on items.
                                </strong>{" "}
                                Each ToggleGroupItem needs an accessible label, especially for
                                icon-only items.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep items visually consistent.
                                </strong>{" "}
                                Use the same variant and size for all items in a group. The group
                                context handles this automatically when you set props on the parent.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Separate unrelated groups.
                                </strong>{" "}
                                Use a Separator or gap between logically distinct toggle groups
                                (e.g., text style vs. alignment in a toolbar).
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
                                    Don&apos;t use for more than 5-6 options.
                                </strong>{" "}
                                Large groups are hard to scan. Use a Select, RadioGroup, or other
                                component for longer lists.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t mix icon-only and text items.
                                </strong>{" "}
                                Inconsistent item widths create visual imbalance. Either use all
                                icons or all text labels within a group.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for navigation.
                                </strong>{" "}
                                ToggleGroup represents state, not navigation. Use Tabs or
                                NavigationMenu for switching between views/pages.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t forget keyboard navigation.
                                </strong>{" "}
                                The roving tabindex is built-in &mdash; but if you wrap items in
                                custom elements, ensure focus management isn&apos;t broken.
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
                                Uses roving tabindex: Tab enters the group, then arrow keys move
                                between items. This follows the WAI-ARIA toolbar pattern.
                            </li>
                            <li>
                                Each item manages <code className="text-xs">aria-pressed</code>{" "}
                                automatically. Screen readers announce items as &quot;Bold toggle,
                                pressed&quot; or &quot;Bold toggle, not pressed&quot;.
                            </li>
                            <li>
                                <code className="text-xs">data-orientation</code> is exposed on the
                                container, and arrow key direction follows: left/right for
                                horizontal, up/down for vertical.
                            </li>
                            <li>
                                Focused items receive <code className="text-xs">z-10</code> so the
                                focus ring is never clipped by adjacent flush items.
                            </li>
                            <li>
                                Disabled items are skipped during keyboard navigation but remain
                                visible in the layout.
                            </li>
                        </ul>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <h4 className="mb-2 text-sm font-medium">Context Inheritance</h4>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                            <li>
                                <code className="text-xs">variant</code> and{" "}
                                <code className="text-xs">size</code> are passed from the group to
                                items via React context. Items use the group value unless they
                                specify their own override.
                            </li>
                            <li>
                                <code className="text-xs">spacing</code> controls the CSS variable{" "}
                                <code className="text-xs">--gap</code> on the container. When 0,
                                border-collapse CSS kicks in.
                            </li>
                            <li>
                                <code className="text-xs">orientation</code> maps to{" "}
                                <code className="text-xs">data-orientation</code> and controls flex
                                direction (<code className="text-xs">flex-row</code> vs{" "}
                                <code className="text-xs">flex-col</code>).
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
                    code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react"

// Single selection (radio-like)
<ToggleGroup defaultValue={["center"]}>
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>

// Multiple selection (checkbox-like)
<ToggleGroup multiple defaultValue={["bold", "italic"]}>
  <ToggleGroupItem value="bold" aria-label="Bold">
    <Bold className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic">
    <Italic className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Underline">
    <Underline className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>

// With variant and size
<ToggleGroup variant="outline" size="sm" defaultValue={["bold"]}>
  <ToggleGroupItem value="bold" aria-label="Bold">
    <Bold className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>

// Vertical orientation
<ToggleGroup orientation="vertical" variant="outline" defaultValue={["grid"]}>
  <ToggleGroupItem value="list" aria-label="List view">...</ToggleGroupItem>
  <ToggleGroupItem value="grid" aria-label="Grid view">...</ToggleGroupItem>
</ToggleGroup>

// With spacing (individual borders)
<ToggleGroup variant="outline" spacing={1} defaultValue={["bold"]}>
  <ToggleGroupItem value="bold" aria-label="Bold">
    <Bold className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic">
    <Italic className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>

// Controlled
const [value, setValue] = useState(["center"])
<ToggleGroup value={value} onValueChange={setValue}>
  ...
</ToggleGroup>`}
                />
            </div>
        </div>
    );
}
