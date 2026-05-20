"use client";

import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import {
    Check,
    X,
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Copy,
    Trash2,
} from "lucide-react";

export default function TooltipPage() {
    return (
        <TooltipProvider>
            <div className="max-w-4xl space-y-8">
                {/* Header */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tight">Tooltip</h1>
                    <p className="text-muted-foreground text-sm">
                        A small label that appears on hover or keyboard focus to explain an element.
                        Use for icon-only buttons, truncated text, and keyboard shortcuts. Requires{" "}
                        <code className="text-xs">{"<TooltipProvider>"}</code> as an ancestor. Built
                        on <code className="text-xs">@base-ui/react/tooltip</code>.
                    </p>
                    <Separator />
                </div>

                {/* Anatomy */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                    <Separator />
                    <p className="text-muted-foreground text-sm">
                        <code className="text-xs">TooltipProvider</code> sets the shared{" "}
                        <code className="text-xs">delay</code> for all descendant tooltips. Each{" "}
                        <code className="text-xs">Tooltip</code> wraps a{" "}
                        <code className="text-xs">TooltipTrigger</code> and a{" "}
                        <code className="text-xs">TooltipContent</code>. The content includes a
                        built-in positional arrow.
                    </p>
                    <div className="border-border bg-muted/30 rounded-lg border p-6">
                        <div className="flex flex-col items-center gap-4">
                            <Tooltip>
                                <TooltipTrigger render={<Button variant="outline" />}>
                                    Hover me
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>This is a tooltip</p>
                                </TooltipContent>
                            </Tooltip>
                            <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                                <span>TooltipProvider (ancestor)</span>
                                <span>TooltipTrigger</span>
                                <span>TooltipContent + arrow</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Positioning */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold tracking-tight">Positioning</h3>
                    <Separator />
                    <p className="text-muted-foreground text-sm">
                        The <code className="text-xs">side</code> prop controls which side the
                        tooltip appears on (default:{" "}
                        <code className="text-xs">&quot;top&quot;</code>). Auto-flips when space is
                        insufficient.
                    </p>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {(["top", "right", "bottom", "left"] as const).map((side) => (
                            <div
                                key={side}
                                className="border-border flex flex-col items-center gap-3 rounded-lg border p-4"
                            >
                                <Tooltip>
                                    <TooltipTrigger
                                        render={
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full capitalize"
                                            />
                                        }
                                    >
                                        {side}
                                    </TooltipTrigger>
                                    <TooltipContent side={side}>
                                        <p>Opens {side}</p>
                                    </TooltipContent>
                                </Tooltip>
                                <code className="text-muted-foreground text-[10px]">
                                    side=&quot;{side}&quot;
                                </code>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Delay */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold tracking-tight">Delay</h3>
                    <Separator />
                    <p className="text-muted-foreground text-sm">
                        <code className="text-xs">TooltipProvider</code> accepts a{" "}
                        <code className="text-xs">delay</code> prop (ms) applied to all descendant
                        tooltips. Override per-tooltip by wrapping in a separate provider.
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="border-border space-y-3 rounded-lg border p-4">
                            <code className="text-muted-foreground text-xs">
                                delay={"{0}"} — instant
                            </code>
                            <TooltipProvider delay={0}>
                                <Tooltip>
                                    <TooltipTrigger render={<Button size="sm" variant="outline" />}>
                                        Hover for instant tooltip
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>No delay</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <p className="text-muted-foreground/80 text-xs">
                                Best for persistent toolbars.
                            </p>
                        </div>
                        <div className="border-border space-y-3 rounded-lg border p-4">
                            <code className="text-muted-foreground text-xs">
                                delay={"{500}"} — delayed
                            </code>
                            <TooltipProvider delay={500}>
                                <Tooltip>
                                    <TooltipTrigger render={<Button size="sm" variant="outline" />}>
                                        Hover for delayed tooltip
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>500ms delay</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <p className="text-muted-foreground/80 text-xs">
                                Reduces noise on hover-heavy UIs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Examples */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                    <Separator />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="border-border flex flex-col gap-10 rounded-lg border p-4">
                            <p className="text-muted-foreground text-xs font-medium">
                                Icon toolbar
                            </p>
                            <div className="border-border flex items-center gap-1 rounded-md border p-1">
                                {[
                                    { icon: Bold, label: "Bold" },
                                    { icon: Italic, label: "Italic" },
                                    { icon: Underline, label: "Underline" },
                                ].map(({ icon: Icon, label }) => (
                                    <Tooltip key={label}>
                                        <TooltipTrigger
                                            render={
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="size-7 p-0"
                                                    aria-label={label}
                                                />
                                            }
                                        >
                                            <Icon className="size-3.5" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{label}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                                <Separator orientation="vertical" className="mx-1 self-stretch" />
                                {[
                                    { icon: AlignLeft, label: "Align left" },
                                    { icon: AlignCenter, label: "Align center" },
                                    { icon: AlignRight, label: "Align right" },
                                ].map(({ icon: Icon, label }) => (
                                    <Tooltip key={label}>
                                        <TooltipTrigger
                                            render={
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="size-7 p-0"
                                                    aria-label={label}
                                                />
                                            }
                                        >
                                            <Icon className="size-3.5" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{label}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                            </div>
                        </div>

                        <div className="border-border flex flex-col gap-10 rounded-lg border p-4">
                            <p className="text-muted-foreground text-xs font-medium">
                                With keyboard shortcut
                            </p>
                            <div className="flex items-center justify-center gap-2">
                                <Tooltip>
                                    <TooltipTrigger
                                        render={
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="size-7 p-0"
                                                aria-label="Copy"
                                            />
                                        }
                                    >
                                        <Copy className="size-3.5" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="flex items-center gap-2">
                                            Copy
                                            <kbd className="bg-background/20 rounded px-1 py-0.5 font-mono text-[10px]">
                                                ⌘C
                                            </kbd>
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger
                                        render={
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-destructive hover:text-destructive size-7 p-0"
                                                aria-label="Delete"
                                            />
                                        }
                                    >
                                        <Trash2 className="size-3.5" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="flex items-center gap-2">
                                            Delete
                                            <kbd className="bg-background/20 rounded px-1 py-0.5 font-mono text-[10px]">
                                                Del
                                            </kbd>
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>

                        <div className="border-border flex flex-col gap-10 rounded-lg border p-4">
                            <p className="text-muted-foreground text-xs font-medium">
                                Truncated text
                            </p>
                            <Tooltip>
                                <TooltipTrigger
                                    render={
                                        <p className="max-w-[140px] cursor-default truncate text-sm" />
                                    }
                                >
                                    This is a very long filename that gets truncated.txt
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>This is a very long filename that gets truncated.txt</p>
                                </TooltipContent>
                            </Tooltip>
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
                                        Use for icon-only buttons.
                                    </strong>{" "}
                                    Every icon button without a visible label needs a tooltip to
                                    communicate its action.
                                </li>
                                <li>
                                    <strong className="text-foreground">
                                        Include keyboard shortcuts in content.
                                    </strong>{" "}
                                    Showing <code className="text-xs">⌘K</code> or{" "}
                                    <code className="text-xs">Ctrl+S</code> beside the label teaches
                                    users the shortcut naturally.
                                </li>
                                <li>
                                    <strong className="text-foreground">
                                        Keep content to one short phrase.
                                    </strong>{" "}
                                    Tooltips are supplemental — one line max.
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
                                        Don&apos;t put interactive content inside.
                                    </strong>{" "}
                                    Links and buttons inside a tooltip are unreachable on touch
                                    devices — use Popover instead.
                                </li>
                                <li>
                                    <strong className="text-foreground">
                                        Don&apos;t use for required instructions.
                                    </strong>{" "}
                                    Tooltip content is only visible on hover/focus — never put
                                    information users must act on.
                                </li>
                                <li>
                                    <strong className="text-foreground">
                                        Don&apos;t wrap elements that are already labelled.
                                    </strong>{" "}
                                    If the button has visible text, a tooltip is redundant noise.
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
                                <code className="text-xs">role=&quot;tooltip&quot;</code> on the
                                content — linked to the trigger via{" "}
                                <code className="text-xs">aria-describedby</code>.
                            </li>
                            <li>
                                Tooltip is shown on keyboard focus (
                                <code className="text-xs">:focus-visible</code>) in addition to
                                hover — keyboard users see it.
                            </li>
                            <li>
                                <code className="text-xs">TooltipProvider</code> must wrap all
                                tooltip usage — it controls the shared delay and manages group hover
                                behaviour.
                            </li>
                            <li>
                                Arrow element is automatically positioned by the Base UI popup
                                engine.
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
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

// Wrap your app (or section) with TooltipProvider
<TooltipProvider>
  {/* Basic tooltip */}
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="sm" aria-label="Bold">
        <Bold className="size-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Bold</p>
    </TooltipContent>
  </Tooltip>

  {/* With keyboard shortcut */}
  <Tooltip>
    <TooltipTrigger asChild>
      <Button aria-label="Copy">
        <Copy className="size-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p className="flex items-center gap-2">
        Copy <kbd className="rounded bg-muted px-1 text-xs">⌘C</kbd>
      </p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

// Custom delay
<TooltipProvider delay={500}>...</TooltipProvider>

// Positioning
<TooltipContent side="right" align="start">...</TooltipContent>`}
                    />
                </div>
            </div>
        </TooltipProvider>
    );
}
