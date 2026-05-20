"use client";

import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
    SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, Settings, SlidersHorizontal, Menu } from "lucide-react";

export default function SheetPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Sheet</h1>
                <p className="text-muted-foreground text-sm">
                    A panel that slides in from any edge of the screen. Built on the{" "}
                    <code className="text-xs">@base-ui/react/dialog</code> primitive — inherits full
                    accessibility, focus trapping, and ESC dismissal. Best for secondary workflows
                    that don&apos;t fully replace the current context.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">SheetContent</code> accepts a{" "}
                    <code className="text-xs">side</code> prop that controls which edge the panel
                    slides from (default: <code className="text-xs">&quot;right&quot;</code>
                    ). <code className="text-xs">showCloseButton</code> toggles the built-in X
                    button. <code className="text-xs">SheetClose</code> can wrap any element for
                    custom dismiss actions.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <Sheet>
                            <SheetTrigger render={<Button variant="outline" />}>
                                Open Sheet
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Sheet Title</SheetTitle>
                                    <SheetDescription>
                                        Slides in from the right edge by default.
                                    </SheetDescription>
                                </SheetHeader>
                                <p className="text-muted-foreground p-4 text-sm">
                                    Body content fills the remaining space.
                                </p>
                            </SheetContent>
                        </Sheet>
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>side=&quot;right&quot; (default)</span>
                            <span>SheetHeader + SheetFooter</span>
                            <span>showCloseButton prop</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sides */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Sides</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The <code className="text-xs">side</code> prop controls which edge the panel
                    slides from. Each direction uses a matching slide animation.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {(["right", "left", "top", "bottom"] as const).map((side) => (
                        <div key={side} className="border-border space-y-3 rounded-lg border p-4">
                            <code className="text-muted-foreground text-xs">
                                side=&quot;{side}&quot;
                            </code>
                            <div>
                                <Sheet>
                                    <SheetTrigger
                                        render={
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="w-full capitalize"
                                            />
                                        }
                                    >
                                        {side}
                                    </SheetTrigger>
                                    <SheetContent side={side}>
                                        <SheetHeader>
                                            <SheetTitle>
                                                {side.charAt(0).toUpperCase() + side.slice(1)} Sheet
                                            </SheetTitle>
                                            <SheetDescription>
                                                Slides in from the {side}.
                                            </SheetDescription>
                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Navigation menu</p>
                        <Sheet>
                            <SheetTrigger render={<Button size="sm" variant="outline" />}>
                                <Menu className="size-3.5" />
                                Menu
                            </SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader>
                                    <SheetTitle>Navigation</SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col gap-1 py-4">
                                    {["Dashboard", "Projects", "Team", "Settings"].map((item) => (
                                        <SheetClose
                                            key={item}
                                            render={
                                                <Button variant="ghost" className="justify-start" />
                                            }
                                        >
                                            {item}
                                        </SheetClose>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Settings panel</p>
                        <Sheet>
                            <SheetTrigger render={<Button size="sm" variant="outline" />}>
                                <Settings className="size-3.5" />
                                Settings
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Settings</SheetTitle>
                                    <SheetDescription>Adjust your preferences.</SheetDescription>
                                </SheetHeader>
                                <div className="space-y-4 py-4">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="s-name">Display name</Label>
                                        <Input id="s-name" defaultValue="John Doe" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="s-email">Email</Label>
                                        <Input
                                            id="s-email"
                                            type="email"
                                            defaultValue="john@example.com"
                                        />
                                    </div>
                                </div>
                                <SheetFooter>
                                    <SheetClose render={<Button variant="outline" />}>
                                        Cancel
                                    </SheetClose>
                                    <Button>Save</Button>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Filter panel</p>
                        <Sheet>
                            <SheetTrigger render={<Button size="sm" variant="outline" />}>
                                <SlidersHorizontal className="size-3.5" />
                                Filters
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Filter results</SheetTitle>
                                    <SheetDescription>Narrow down by criteria.</SheetDescription>
                                </SheetHeader>
                                <div className="space-y-4 py-4">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="s-search">Search</Label>
                                        <Input id="s-search" placeholder="Filter by name…" />
                                    </div>
                                </div>
                                <SheetFooter>
                                    <SheetClose render={<Button variant="outline" />}>
                                        Reset
                                    </SheetClose>
                                    <Button>Apply</Button>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
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
                                    Use right/left for navigation and settings.
                                </strong>{" "}
                                These sides feel natural for panels that supplement the main content
                                without replacing it.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use bottom for mobile-style action sheets.
                                </strong>{" "}
                                Bottom sheets feel familiar on touch devices and pair well with
                                lists of actions.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Prefer Sheet over Dialog for multi-step flows.
                                </strong>{" "}
                                Sheets give more space and feel less interruptive for longer tasks.
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
                                    Don&apos;t use for short confirmations.
                                </strong>{" "}
                                If you only need a yes/no answer, Dialog is the right tool — Sheet
                                is for content, not prompts.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t overfill top/bottom sheets.
                                </strong>{" "}
                                These directions have constrained height — keep content brief or use
                                right/left for scrollable content.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t open Sheet from inside a Dialog.
                                </strong>{" "}
                                Nested overlays break focus management; restructure the flow
                                instead.
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
                    <h4 className="mb-2 text-sm font-medium">Accessibility</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            Inherits <code className="text-xs">role=&quot;dialog&quot;</code> from
                            the dialog primitive with{" "}
                            <code className="text-xs">aria-labelledby</code> /{" "}
                            <code className="text-xs">aria-describedby</code>.
                        </li>
                        <li>
                            Keyboard focus is trapped; ESC and backdrop click dismiss the sheet.
                        </li>
                        <li>
                            Animations use <code className="text-xs">data-starting-style</code> and{" "}
                            <code className="text-xs">data-ending-style</code> — side-specific
                            translate transforms.
                        </li>
                        <li>
                            <code className="text-xs">SheetClose asChild</code> allows any element
                            (Button, link) to dismiss the sheet.
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
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"

// Right sheet (default)
<Sheet>
  <SheetTrigger asChild>
    <Button>Open Settings</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
      <SheetDescription>Adjust your preferences.</SheetDescription>
    </SheetHeader>
    <div className="py-4">{/* content */}</div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">Cancel</Button>
      </SheetClose>
      <Button>Save</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>

// Left navigation sheet
<SheetContent side="left">...</SheetContent>

// Bottom action sheet
<SheetContent side="bottom">...</SheetContent>

// Without close button
<SheetContent showCloseButton={false}>...</SheetContent>`}
                />
            </div>
        </div>
    );
}
