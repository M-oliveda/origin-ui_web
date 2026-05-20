"use client";

import {
    Item,
    ItemMedia,
    ItemContent,
    ItemTitle,
    ItemDescription,
    ItemActions,
    ItemGroup,
    ItemSeparator,
    ItemHeader,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import {
    Check,
    X,
    Package,
    Users,
    Home,
    Bell,
    Settings,
    FileText,
    ChevronRight,
    MoreHorizontal,
} from "lucide-react";

export default function ItemPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Item</h1>
                <p className="text-muted-foreground text-sm">
                    A flexible list row with media, content, and action areas. Supports three
                    variants (<code className="text-xs">default</code>,{" "}
                    <code className="text-xs">outline</code>, <code className="text-xs">muted</code>
                    ), three sizes (<code className="text-xs">default</code>,{" "}
                    <code className="text-xs">sm</code>, <code className="text-xs">xs</code>), and
                    icon or image media. Use <code className="text-xs">ItemGroup</code> to stack
                    multiple items with consistent spacing.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Item>"}</code> is the row — accepts{" "}
                    <code className="text-xs">variant</code> and{" "}
                    <code className="text-xs">size</code> and a{" "}
                    <code className="text-xs">render</code> prop to swap the underlying element
                    (e.g. <code className="text-xs">{"<a>"}</code> or a router link).{" "}
                    <code className="text-xs">ItemMedia</code> holds an icon or image (pass{" "}
                    <code className="text-xs">variant=&quot;icon&quot;</code> or{" "}
                    <code className="text-xs">variant=&quot;image&quot;</code>).{" "}
                    <code className="text-xs">ItemContent</code> stacks title and description.{" "}
                    <code className="text-xs">ItemActions</code> floats controls to the right.{" "}
                    <code className="text-xs">ItemHeader</code> and{" "}
                    <code className="text-xs">ItemFooter</code> span the full width for metadata
                    rows.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-4">
                    <Item>
                        <ItemMedia variant="icon">
                            <Package className="size-4" />
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle>Item Title</ItemTitle>
                            <ItemDescription>Supporting description text.</ItemDescription>
                        </ItemContent>
                        <ItemActions>
                            <Button size="sm" variant="ghost">
                                Action
                            </Button>
                        </ItemActions>
                    </Item>
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variants</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">default</p>
                        <Item>
                            <ItemMedia variant="icon">
                                <Package className="size-4" />
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>Default</ItemTitle>
                                <ItemDescription>
                                    No border, transparent background.
                                </ItemDescription>
                            </ItemContent>
                        </Item>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">outline</p>
                        <Item variant="outline">
                            <ItemMedia variant="icon">
                                <Users className="size-4" />
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>Outline</ItemTitle>
                                <ItemDescription>Visible border around the row.</ItemDescription>
                            </ItemContent>
                        </Item>
                    </div>
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">muted</p>
                        <Item variant="muted">
                            <ItemMedia variant="icon">
                                <Home className="size-4" />
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>Muted</ItemTitle>
                                <ItemDescription>Subtle background fill.</ItemDescription>
                            </ItemContent>
                        </Item>
                    </div>
                </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Sizes</h3>
                <Separator />
                <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                    <p className="text-muted-foreground text-xs font-medium">default / sm / xs</p>
                    <ItemGroup>
                        <Item>
                            <ItemMedia variant="icon">
                                <Bell className="size-4" />
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>Default size</ItemTitle>
                                <ItemDescription>Standard padding and text size.</ItemDescription>
                            </ItemContent>
                        </Item>
                        <Item size="sm">
                            <ItemMedia variant="icon">
                                <Settings className="size-4" />
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>Small size</ItemTitle>
                                <ItemDescription>Reduced padding for dense lists.</ItemDescription>
                            </ItemContent>
                        </Item>
                        <Item size="xs">
                            <ItemMedia variant="icon">
                                <FileText className="size-4" />
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>Extra-small size</ItemTitle>
                                <ItemDescription>Compact rows for tight spaces.</ItemDescription>
                            </ItemContent>
                        </Item>
                    </ItemGroup>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Notification list
                        </p>
                        <ItemGroup>
                            <Item variant="outline">
                                <ItemMedia variant="icon">
                                    <Avatar size="sm">
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                </ItemMedia>
                                <ItemContent>
                                    <ItemHeader>
                                        <ItemTitle>Jane Doe</ItemTitle>
                                        <span className="text-muted-foreground text-xs">
                                            2m ago
                                        </span>
                                    </ItemHeader>
                                    <ItemDescription>Commented on your post.</ItemDescription>
                                </ItemContent>
                            </Item>
                            <ItemSeparator />
                            <Item variant="outline">
                                <ItemMedia variant="icon">
                                    <Avatar size="sm">
                                        <AvatarFallback>AB</AvatarFallback>
                                    </Avatar>
                                </ItemMedia>
                                <ItemContent>
                                    <ItemHeader>
                                        <ItemTitle>Alex B</ItemTitle>
                                        <span className="text-muted-foreground text-xs">
                                            15m ago
                                        </span>
                                    </ItemHeader>
                                    <ItemDescription>Mentioned you in a thread.</ItemDescription>
                                </ItemContent>
                            </Item>
                        </ItemGroup>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Navigable list with actions
                        </p>
                        <ItemGroup>
                            {[
                                { icon: Package, label: "Packages", badge: "12" },
                                { icon: Users, label: "Team", badge: "3" },
                                { icon: Bell, label: "Alerts", badge: "5" },
                            ].map(({ icon: Icon, label, badge }) => (
                                <Item key={label} variant="muted">
                                    <ItemMedia variant="icon">
                                        <Icon className="size-4" />
                                    </ItemMedia>
                                    <ItemContent>
                                        <ItemTitle>{label}</ItemTitle>
                                    </ItemContent>
                                    <ItemActions>
                                        <Badge variant="secondary">{badge}</Badge>
                                        <ChevronRight className="text-muted-foreground size-4" />
                                    </ItemActions>
                                </Item>
                            ))}
                        </ItemGroup>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4 sm:col-span-2">
                        <p className="text-muted-foreground text-xs font-medium">
                            With image media
                        </p>
                        <ItemGroup>
                            {["Report Q1", "Report Q2", "Report Q3"].map((title) => (
                                <Item key={title} variant="outline">
                                    <ItemMedia variant="image">
                                        <div className="bg-muted size-full rounded-sm" />
                                    </ItemMedia>
                                    <ItemContent>
                                        <ItemTitle>{title}</ItemTitle>
                                        <ItemDescription>
                                            PDF · 2.4 MB · Updated yesterday
                                        </ItemDescription>
                                    </ItemContent>
                                    <ItemActions>
                                        <Button size="icon" variant="ghost">
                                            <MoreHorizontal className="size-4" />
                                        </Button>
                                    </ItemActions>
                                </Item>
                            ))}
                        </ItemGroup>
                    </div>
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
                                    Use ItemGroup for lists.
                                </strong>{" "}
                                Wrapping Items in <code className="text-xs">ItemGroup</code> applies
                                consistent gap and{" "}
                                <code className="text-xs">role=&quot;list&quot;</code> semantics
                                automatically.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Pick one media variant per list.
                                </strong>{" "}
                                Mixing icon and image variants in the same list creates misaligned
                                columns — pick one and stick with it throughout the group.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use the render prop for navigation.
                                </strong>{" "}
                                Pass <code className="text-xs">render={`<a href="..." />`}</code> or
                                a router link to make the entire row clickable without extra wrapper
                                elements.
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
                                    Don&apos;t put too many actions per item.
                                </strong>{" "}
                                More than two action buttons per row creates visual noise. Use a{" "}
                                <code className="text-xs">DropdownMenu</code> for secondary actions.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t truncate critical information.
                                </strong>{" "}
                                <code className="text-xs">ItemTitle</code> is single-line clamped —
                                if the label can be long and important, allow wrapping or show a
                                tooltip.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t mix sizes within a list.
                                </strong>{" "}
                                Items in the same <code className="text-xs">ItemGroup</code> should
                                share a size — inconsistent row heights look unpolished.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Developer Reference */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Developer Reference</h3>
                <Separator />
                <div className="border-border rounded-lg border p-5">
                    <h4 className="mb-2 text-sm font-medium">Accessibility & Behavior</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            <code className="text-xs">ItemGroup</code> renders with{" "}
                            <code className="text-xs">role=&quot;list&quot;</code>. Individual{" "}
                            <code className="text-xs">Item</code> elements are{" "}
                            <code className="text-xs">{"<div>"}</code>s by default — if they must be
                            list items, pass <code className="text-xs">render={`<li />`}</code>.
                        </li>
                        <li>
                            The <code className="text-xs">render</code> prop on{" "}
                            <code className="text-xs">Item</code> uses Base UI&apos;s{" "}
                            <code className="text-xs">useRender</code> — it merges all props and
                            class names correctly onto the provided element.
                        </li>
                        <li>
                            <code className="text-xs">ItemMedia variant=&quot;image&quot;</code>{" "}
                            applies a fixed size (<code className="text-xs">size-10</code>) that
                            scales with the item&apos;s <code className="text-xs">size</code> prop
                            via <code className="text-xs">data-size</code> selectors.
                        </li>
                        <li>
                            <code className="text-xs">ItemSeparator</code> renders a horizontal{" "}
                            <code className="text-xs">Separator</code> with vertical margin — use it
                            inside an <code className="text-xs">ItemGroup</code> to create visual
                            sections.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemHeader,
} from "@/components/ui/item"

// Basic item
<Item>
  <ItemMedia variant="icon">
    <Package className="size-4" />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Packages</ItemTitle>
    <ItemDescription>Manage your packages.</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button size="sm" variant="ghost">Edit</Button>
  </ItemActions>
</Item>

// As a link
<Item render={<a href="/packages" />}>
  <ItemContent>
    <ItemTitle>Packages</ItemTitle>
  </ItemContent>
</Item>

// Grouped list with separator
<ItemGroup>
  <Item variant="outline">...</Item>
  <ItemSeparator />
  <Item variant="outline">...</Item>
</ItemGroup>

// Variants: "default" | "outline" | "muted"
// Sizes:    "default" | "sm" | "xs"
// Media:    variant="icon" | variant="image"`}
                />
            </div>
        </div>
    );
}
