"use client";

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverTitle,
    PopoverDescription,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, Info, Settings2, Bell } from "lucide-react";

export default function PopoverPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Popover</h1>
                <p className="text-muted-foreground text-sm">
                    A floating panel anchored to a trigger element. Click to open, click-outside or
                    ESC to dismiss. Use for contextual actions, mini-forms, or rich inline info that
                    doesn&apos;t warrant a full dialog. Built on{" "}
                    <code className="text-xs">@base-ui/react/popover</code>.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">PopoverContent</code> is a floating panel with a
                    default width of <code className="text-xs">w-72</code>. It accepts{" "}
                    <code className="text-xs">side</code>, <code className="text-xs">align</code>,
                    and <code className="text-xs">sideOffset</code> for positioning. Optional
                    helpers <code className="text-xs">PopoverHeader</code>,{" "}
                    <code className="text-xs">PopoverTitle</code>, and{" "}
                    <code className="text-xs">PopoverDescription</code> provide consistent internal
                    layout.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <Popover>
                            <PopoverTrigger render={<Button variant="outline" />}>
                                Open Popover
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader>
                                    <PopoverTitle>Popover Title</PopoverTitle>
                                    <PopoverDescription>
                                        Content anchored below the trigger by default.
                                    </PopoverDescription>
                                </PopoverHeader>
                            </PopoverContent>
                        </Popover>
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>side=&quot;bottom&quot; (default)</span>
                            <span>align=&quot;center&quot; (default)</span>
                            <span>w-72 default width</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Positioning */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Positioning</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The <code className="text-xs">side</code> prop controls which side of the
                    trigger the panel appears on. The popover auto-flips if there isn&apos;t enough
                    space in the preferred direction.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {(["top", "right", "bottom", "left"] as const).map((side) => (
                        <div key={side} className="border-border space-y-3 rounded-lg border p-4">
                            <code className="text-muted-foreground text-xs">
                                side=&quot;{side}&quot;
                            </code>
                            <div>
                                <Popover>
                                    <PopoverTrigger
                                        render={
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="w-full capitalize"
                                            />
                                        }
                                    >
                                        {side}
                                    </PopoverTrigger>
                                    <PopoverContent side={side} className="w-40">
                                        <p className="text-muted-foreground text-xs">
                                            Opens to the {side}
                                        </p>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Alignment */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Alignment</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The <code className="text-xs">align</code> prop shifts the panel relative to the
                    trigger along the cross-axis.
                </p>
                <div className="grid grid-cols-3 gap-3">
                    {(["start", "center", "end"] as const).map((align) => (
                        <div key={align} className="border-border space-y-3 rounded-lg border p-4">
                            <code className="text-muted-foreground text-xs">
                                align=&quot;{align}&quot;
                            </code>
                            <div>
                                <Popover>
                                    <PopoverTrigger
                                        render={
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="w-full capitalize"
                                            />
                                        }
                                    >
                                        {align}
                                    </PopoverTrigger>
                                    <PopoverContent align={align} className="w-36">
                                        <p className="text-muted-foreground text-xs">
                                            Aligned {align}
                                        </p>
                                    </PopoverContent>
                                </Popover>
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
                        <p className="text-muted-foreground text-xs font-medium">Mini-form</p>
                        <Popover>
                            <PopoverTrigger render={<Button size="sm" variant="outline" />}>
                                <Settings2 className="size-3.5" />
                                Dimensions
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader>
                                    <PopoverTitle>Layer dimensions</PopoverTitle>
                                </PopoverHeader>
                                <div className="mt-3 grid gap-2">
                                    <div className="grid grid-cols-3 items-center gap-3">
                                        <Label className="text-xs">Width</Label>
                                        <Input
                                            className="col-span-2 h-7 text-xs"
                                            defaultValue="100%"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-3">
                                        <Label className="text-xs">Height</Label>
                                        <Input
                                            className="col-span-2 h-7 text-xs"
                                            defaultValue="auto"
                                        />
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Info panel</p>
                        <Popover>
                            <PopoverTrigger
                                render={<Button size="sm" variant="ghost" className="size-7 p-0" />}
                            >
                                <Info className="size-3.5" />
                                <span className="sr-only">More info</span>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader>
                                    <PopoverTitle>About this field</PopoverTitle>
                                    <PopoverDescription>
                                        This value is derived from your plan settings and updates
                                        automatically each billing cycle.
                                    </PopoverDescription>
                                </PopoverHeader>
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Notification config
                        </p>
                        <Popover>
                            <PopoverTrigger render={<Button size="sm" variant="outline" />}>
                                <Bell className="size-3.5" />
                                Notify
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader>
                                    <PopoverTitle>Notification channels</PopoverTitle>
                                    <PopoverDescription>
                                        Choose how you want to be notified.
                                    </PopoverDescription>
                                </PopoverHeader>
                                <div className="mt-3 flex flex-col gap-1">
                                    {["Email", "Push", "Slack"].map((ch) => (
                                        <Button
                                            key={ch}
                                            variant="ghost"
                                            size="sm"
                                            className="justify-start text-xs"
                                        >
                                            {ch}
                                        </Button>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>
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
                                    Use for contextual forms and inline info.
                                </strong>{" "}
                                Popovers are anchored — they make sense for editing a specific value
                                or explaining a specific element.
                            </li>
                            <li>
                                <strong className="text-foreground">Keep content focused.</strong> A
                                popover should serve one purpose. If it grows complex, promote it to
                                a Dialog or Sheet.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use <code className="text-xs">sideOffset</code> for visual
                                    breathing room.
                                </strong>{" "}
                                The default of 4px provides a natural separation from the trigger.
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
                                    Don&apos;t use as a dropdown menu.
                                </strong>{" "}
                                For lists of actions use{" "}
                                <code className="text-xs">DropdownMenu</code> — it handles keyboard
                                navigation, roles, and item focus automatically.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t put too much content inside.
                                </strong>{" "}
                                If the popover scrolls, it&apos;s trying to be a Dialog — use one
                                instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t rely on hover to trigger.
                                </strong>{" "}
                                Hover-based popovers are inaccessible on touch devices — use{" "}
                                <code className="text-xs">HoverCard</code> only for supplemental
                                previews.
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
                            <code className="text-xs">role=&quot;dialog&quot;</code> — focus moves
                            into the popover on open.
                        </li>
                        <li>ESC key and clicking outside both dismiss the panel.</li>
                        <li>
                            Renders in a portal — visually floats above the page, still in the
                            accessible DOM tree.
                        </li>
                        <li>
                            <code className="text-xs">PopoverHeader</code>,{" "}
                            <code className="text-xs">PopoverTitle</code>,{" "}
                            <code className="text-xs">PopoverDescription</code> are layout helpers
                            that do not add semantic roles — use them for consistent spacing.
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover"

// Basic
<Popover>
  <PopoverTrigger asChild>
    <Button>Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Title</PopoverTitle>
      <PopoverDescription>Supporting text.</PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>

// Positioning
<PopoverContent side="top" align="start" sideOffset={8}>
  ...
</PopoverContent>

// Custom width
<PopoverContent className="w-96">
  ...
</PopoverContent>

// Controlled
const [open, setOpen] = useState(false)
<Popover open={open} onOpenChange={setOpen}>...</Popover>`}
                />
            </div>
        </div>
    );
}
