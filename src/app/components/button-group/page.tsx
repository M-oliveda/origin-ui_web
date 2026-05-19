"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignCenter,
    AlignRight,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Check,
    X,
} from "lucide-react";

export default function ButtonGroupPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">ButtonGroup</h1>
                <p className="text-muted-foreground text-sm">
                    Groups multiple buttons into a single visual unit with shared borders and merged
                    radii. Supports horizontal and vertical orientation, visual separators,
                    non-interactive text labels, and composable patterns like split buttons and
                    toolbars. Built with CSS-only border/radius merging via{" "}
                    <code className="text-xs">data-slot</code> selectors.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The <code className="text-xs">{"<ButtonGroup>"}</code> container renders a{" "}
                    <code className="text-xs">{"<div>"}</code> with{" "}
                    <code className="text-xs">role=&quot;group&quot;</code>. It uses{" "}
                    <code className="text-xs">data-slot=&quot;button-group&quot;</code> and{" "}
                    <code className="text-xs">data-orientation</code> attributes for CSS selection.
                    Child buttons automatically have their intermediate border-radii removed and
                    shared borders collapsed via sibling selectors targeting{" "}
                    <code className="text-xs">[data-slot]</code> elements.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <ButtonGroup>
                            <Button variant="outline">First</Button>
                            <ButtonGroupSeparator />
                            <Button variant="outline">Middle</Button>
                            <Button variant="outline">Last</Button>
                        </ButtonGroup>
                        <div className="text-muted-foreground flex items-center gap-6 text-[10px]">
                            <span>role=&quot;group&quot;</span>
                            <span>data-slot=&quot;button-group&quot;</span>
                            <span>data-orientation=&quot;horizontal&quot;</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Orientation */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Orientation</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Set <code className="text-xs">orientation=&quot;vertical&quot;</code> to stack
                    buttons vertically. Horizontal is the default. The group adjusts its
                    border-radius and border-collapse logic automatically based on orientation.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Horizontal (default)
                        </p>
                        <ButtonGroup>
                            <Button variant="outline">Left</Button>
                            <Button variant="outline">Center</Button>
                            <Button variant="outline">Right</Button>
                        </ButtonGroup>
                        <p className="text-muted-foreground/60 text-xs">
                            Inline actions, pagination, segmented controls
                        </p>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Vertical</p>
                        <ButtonGroup orientation="vertical">
                            <Button variant="outline">Top</Button>
                            <Button variant="outline">Middle</Button>
                            <Button variant="outline">Bottom</Button>
                        </ButtonGroup>
                        <p className="text-muted-foreground/60 text-xs">
                            Stacked menus, sidebar actions, mobile layouts
                        </p>
                    </div>
                </div>
            </div>

            {/* Sub-components */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Sub-components</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Two optional sub-components enhance the group:{" "}
                    <code className="text-xs">{"<ButtonGroupSeparator>"}</code> adds a visual
                    divider between buttons, and{" "}
                    <code className="text-xs">{"<ButtonGroupText>"}</code> renders a non-interactive
                    label that participates in the border merging via{" "}
                    <code className="text-xs">useRender</code>.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            ButtonGroupSeparator
                        </p>
                        <ButtonGroup>
                            <Button variant="outline">Save</Button>
                            <ButtonGroupSeparator />
                            <Button variant="outline" size="icon">
                                <ChevronDown className="size-4" />
                            </Button>
                        </ButtonGroup>
                        <p className="text-muted-foreground/60 text-xs">
                            Visual divider between split actions
                        </p>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">ButtonGroupText</p>
                        <ButtonGroup>
                            <ButtonGroupText>Page</ButtonGroupText>
                            <Button variant="outline" size="icon">
                                <ChevronLeft className="size-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <ChevronRight className="size-4" />
                            </Button>
                        </ButtonGroup>
                        <p className="text-muted-foreground/60 text-xs">
                            Non-interactive label via useRender
                        </p>
                    </div>
                </div>
            </div>

            {/* Composition Patterns */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Composition Patterns</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    ButtonGroup is a layout primitive &mdash; compose it with different button
                    configurations to build common UI patterns.
                </p>
                <div className="space-y-4">
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Split button
                        </p>
                        <ButtonGroup>
                            <Button>Publish</Button>
                            <ButtonGroupSeparator />
                            <Button size="icon">
                                <ChevronDown className="size-4" />
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Pagination controls
                        </p>
                        <ButtonGroup>
                            <Button variant="outline" size="icon">
                                <ChevronLeft className="size-4" />
                            </Button>
                            <ButtonGroupText>3 of 12</ButtonGroupText>
                            <Button variant="outline" size="icon">
                                <ChevronRight className="size-4" />
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Formatting toolbar
                        </p>
                        <div className="flex items-center gap-2">
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
                            <ButtonGroup>
                                <Button variant="outline" size="icon">
                                    <AlignLeft className="size-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <AlignCenter className="size-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <AlignRight className="size-4" />
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Segmented control
                        </p>
                        <ButtonGroup>
                            <Button variant="secondary">Day</Button>
                            <Button variant="outline">Week</Button>
                            <Button variant="outline">Month</Button>
                            <Button variant="outline">Year</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Individual buttons within a group maintain their own state. Disabled buttons
                    remain in the group layout. Focused buttons get{" "}
                    <code className="text-xs">z-10</code> via{" "}
                    <code className="text-xs">*:focus-visible:z-10</code> to ensure the focus ring
                    overlaps adjacent buttons.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Disabled button in group
                        </p>
                        <ButtonGroup>
                            <Button variant="outline">Cut</Button>
                            <Button variant="outline" disabled>
                                Copy
                            </Button>
                            <Button variant="outline">Paste</Button>
                        </ButtonGroup>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Focused button</p>
                        <ButtonGroup>
                            <Button variant="outline">A</Button>
                            <Button
                                variant="outline"
                                className="border-ring ring-ring/50 relative z-10 ring-3"
                            >
                                B
                            </Button>
                            <Button variant="outline">C</Button>
                        </ButtonGroup>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Mixed variants</p>
                        <ButtonGroup>
                            <Button variant="outline">Cancel</Button>
                            <Button>Confirm</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>

            {/* Token Map */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Token Map</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    CSS class mappings applied by orientation for border-radius collapsing and
                    border removal on adjacent children.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-border border-b">
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    Orientation
                                </th>
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    All children
                                </th>
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    Last child
                                </th>
                                <th className="text-muted-foreground py-3 text-left font-medium">
                                    Sibling children
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
                                        rounded-r-none
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        rounded-r-lg
                                    </code>
                                </td>
                                <td className="py-3">
                                    <code className="text-muted-foreground text-xs">
                                        rounded-l-none border-l-0
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
                                        rounded-b-none
                                    </code>
                                </td>
                                <td className="py-3 pr-4">
                                    <code className="text-muted-foreground text-xs">
                                        rounded-b-lg
                                    </code>
                                </td>
                                <td className="py-3">
                                    <code className="text-muted-foreground text-xs">
                                        rounded-t-none border-t-0
                                    </code>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="overflow-x-auto">
                    <p className="mb-3 text-sm font-medium">Separator tokens</p>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-border border-b">
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    Orientation
                                </th>
                                <th className="text-muted-foreground py-3 text-left font-medium">
                                    Separator classes
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
                                <td className="py-3">
                                    <code className="text-muted-foreground text-xs">
                                        mx-px w-auto self-stretch bg-input
                                    </code>
                                </td>
                            </tr>
                            <tr className="border-border border-b last:border-0">
                                <td className="py-3 pr-4">
                                    <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
                                        vertical
                                    </code>
                                </td>
                                <td className="py-3">
                                    <code className="text-muted-foreground text-xs">
                                        my-px h-auto self-stretch bg-input
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
                                <strong className="text-foreground">Group related actions.</strong>{" "}
                                Only buttons that operate on the same context or object should share
                                a group.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep groups small (2-5 items).
                                </strong>{" "}
                                Large groups become hard to scan. Split into multiple groups
                                separated by whitespace if needed.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use consistent variants within a group.
                                </strong>{" "}
                                Mixing primary and outline in the same group creates visual noise
                                &mdash; use a split button pattern instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Add aria-label to the group.
                                </strong>{" "}
                                The <code className="text-xs">role=&quot;group&quot;</code>{" "}
                                container should have an accessible label describing the group
                                purpose.
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
                                    Don&apos;t group unrelated actions.
                                </strong>{" "}
                                &quot;Save&quot; and &quot;Help&quot; shouldn&apos;t share a group
                                &mdash; they operate on different contexts.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t exceed 5 buttons in a group.
                                </strong>{" "}
                                Beyond 5 items, consider a dropdown, menu, or toolbar with multiple
                                groups.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t nest ButtonGroups.
                                </strong>{" "}
                                Nested groups create confusing border collisions. Place groups side
                                by side with a gap instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t mix orientations in the same group.
                                </strong>{" "}
                                Pick horizontal or vertical &mdash; mixing creates broken border
                                merging.
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
                                The container uses{" "}
                                <code className="text-xs">role=&quot;group&quot;</code> to
                                communicate the grouping relationship to assistive technologies.
                            </li>
                            <li>
                                Add <code className="text-xs">aria-label</code> to the{" "}
                                <code className="text-xs">{"<ButtonGroup>"}</code> to describe the
                                group purpose (e.g., &quot;Text formatting&quot;, &quot;Pagination
                                controls&quot;).
                            </li>
                            <li>
                                Focused children receive <code className="text-xs">z-10</code> via{" "}
                                <code className="text-xs">*:focus-visible:z-10</code> so the focus
                                ring is never clipped by adjacent buttons.
                            </li>
                            <li>
                                <code className="text-xs">data-orientation</code> is exposed on the
                                container, allowing CSS and JS consumers to detect the layout
                                direction.
                            </li>
                            <li>
                                Focus management is left to the browser &mdash; Tab moves through
                                each button sequentially. For arrow-key navigation (roving
                                tabindex), use <code className="text-xs">ToggleGroup</code> instead.
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
                    code={`import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"

// Basic horizontal group
<ButtonGroup aria-label="Actions">
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</ButtonGroup>

// Vertical group
<ButtonGroup orientation="vertical" aria-label="Options">
  <Button variant="outline">Top</Button>
  <Button variant="outline">Middle</Button>
  <Button variant="outline">Bottom</Button>
</ButtonGroup>

// Split button with separator
<ButtonGroup aria-label="Save options">
  <Button>Save</Button>
  <ButtonGroupSeparator />
  <Button size="icon">
    <ChevronDown />
  </Button>
</ButtonGroup>

// With text label
<ButtonGroup aria-label="Pagination">
  <Button variant="outline" size="icon"><ChevronLeft /></Button>
  <ButtonGroupText>3 of 12</ButtonGroupText>
  <Button variant="outline" size="icon"><ChevronRight /></Button>
</ButtonGroup>

// Formatting toolbar with multiple groups
<div className="flex items-center gap-2">
  <ButtonGroup aria-label="Text style">
    <Button variant="outline" size="icon"><Bold /></Button>
    <Button variant="outline" size="icon"><Italic /></Button>
    <Button variant="outline" size="icon"><Underline /></Button>
  </ButtonGroup>
  <ButtonGroup aria-label="Text alignment">
    <Button variant="outline" size="icon"><AlignLeft /></Button>
    <Button variant="outline" size="icon"><AlignCenter /></Button>
    <Button variant="outline" size="icon"><AlignRight /></Button>
  </ButtonGroup>
</div>`}
                />
            </div>
        </div>
    );
}
