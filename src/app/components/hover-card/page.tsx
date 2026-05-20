"use client";

import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, CalendarDays, ExternalLink, Star, GitFork } from "lucide-react";

export default function HoverCardPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">HoverCard</h1>
                <p className="text-muted-foreground text-sm">
                    A rich floating card that appears on hover over a link or inline element. Built
                    on the <code className="text-xs">@base-ui/react/preview-card</code> primitive.
                    Use for user profiles, link previews, and rich contextual data where a Tooltip
                    is too small.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">HoverCardContent</code> is a floating card with a
                    default width of <code className="text-xs">w-64</code>. It accepts{" "}
                    <code className="text-xs">side</code>, <code className="text-xs">align</code>,{" "}
                    <code className="text-xs">sideOffset</code>, and{" "}
                    <code className="text-xs">alignOffset</code> for positioning. Content is fully
                    custom — compose whatever layout fits the preview.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <HoverCard>
                            <HoverCardTrigger className="hover:text-muted-foreground cursor-pointer text-sm font-medium underline underline-offset-4">
                                @origin-ui
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <div className="flex gap-3">
                                    <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
                                        OU
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-semibold">@origin-ui</p>
                                        <p className="text-muted-foreground text-xs">
                                            The living design system for your brand.
                                        </p>
                                        <div className="text-muted-foreground flex items-center gap-1 text-xs">
                                            <CalendarDays className="size-3" />
                                            Joined December 2024
                                        </div>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>hover to open</span>
                            <span>side=&quot;bottom&quot; (default)</span>
                            <span>w-64 default width</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">User profile</p>
                        <HoverCard>
                            <HoverCardTrigger className="cursor-pointer text-sm font-medium underline underline-offset-4">
                                @janedoe
                            </HoverCardTrigger>
                            <HoverCardContent className="w-72">
                                <div className="flex gap-3">
                                    <div className="bg-primary text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
                                        JD
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-semibold">Jane Doe</p>
                                        <p className="text-muted-foreground text-xs">@janedoe</p>
                                        <p className="text-muted-foreground text-xs">
                                            Product designer · San Francisco
                                        </p>
                                        <div className="text-muted-foreground flex items-center gap-1 text-xs">
                                            <CalendarDays className="size-3" />
                                            Joined March 2022
                                        </div>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Link preview</p>
                        <HoverCard>
                            <HoverCardTrigger className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium underline underline-offset-4">
                                origin-ui/docs
                                <ExternalLink className="size-3" />
                            </HoverCardTrigger>
                            <HoverCardContent className="w-72">
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold">Origin UI Documentation</p>
                                    <p className="text-muted-foreground text-xs">
                                        Component references, design tokens, theming guide, and
                                        installation instructions.
                                    </p>
                                    <p className="text-muted-foreground text-xs">
                                        origin-ui.com/docs
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Repository stats
                        </p>
                        <HoverCard>
                            <HoverCardTrigger className="cursor-pointer text-sm font-medium underline underline-offset-4">
                                origin-ui/components
                            </HoverCardTrigger>
                            <HoverCardContent className="w-64">
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold">origin-ui/components</p>
                                    <p className="text-muted-foreground text-xs">
                                        A comprehensive UI component library built with Tailwind CSS
                                        and Base UI.
                                    </p>
                                    <div className="text-muted-foreground flex items-center gap-3 text-xs">
                                        <span className="flex items-center gap-1">
                                            <Star className="size-3" />
                                            2.4k
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <GitFork className="size-3" />
                                            184
                                        </span>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                </div>
            </div>

            {/* Positioning */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Positioning</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">side</code> and <code className="text-xs">align</code>{" "}
                    work the same as Popover.
                    <code className="text-xs">alignOffset</code> (default: 4) provides horizontal
                    inset from the trigger edge.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {(["bottom", "top"] as const).map((side) => (
                        <div key={side} className="border-border space-y-3 rounded-lg border p-4">
                            <code className="text-muted-foreground text-xs">
                                side=&quot;{side}&quot;
                            </code>
                            <div>
                                <HoverCard>
                                    <HoverCardTrigger className="cursor-pointer text-sm font-medium underline underline-offset-4">
                                        Hover to see {side} card
                                    </HoverCardTrigger>
                                    <HoverCardContent side={side}>
                                        <p className="text-muted-foreground text-xs">
                                            Card appears {side} of the trigger.
                                        </p>
                                    </HoverCardContent>
                                </HoverCard>
                            </div>
                        </div>
                    ))}
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
                                    Use for supplemental rich previews.
                                </strong>{" "}
                                HoverCard shines for user @mentions, repository links, and inline
                                entities where hover previews add genuine value.
                            </li>
                            <li>
                                <strong className="text-foreground">Keep content concise.</strong> A
                                profile card, a link preview, a few stats — not a full page of
                                information.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Ensure the trigger is independently accessible.
                                </strong>{" "}
                                The card only shows on hover — the underlying link or element must
                                work without it.
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
                                    Don&apos;t use as a Tooltip replacement.
                                </strong>{" "}
                                Tooltip is for short labels; HoverCard is for rich previews. Mixing
                                the two confuses the interaction model.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t put interactive content users must click.
                                </strong>{" "}
                                HoverCard dismisses on mouse leave — buttons and links inside may be
                                unreachable before the card disappears.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t rely on it for critical info.
                                </strong>{" "}
                                Content is invisible to keyboard-only and touch users — it is
                                supplemental, never essential.
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
                            Built on <code className="text-xs">@base-ui/react/preview-card</code> —
                            uses <code className="text-xs">role=&quot;dialog&quot;</code>{" "}
                            internally.
                        </li>
                        <li>
                            HoverCard content is not keyboard-reachable by default — the trigger
                            element (link/button) must independently provide the same information or
                            navigation.
                        </li>
                        <li>
                            Hover delay is controlled by the Base UI primitive — no{" "}
                            <code className="text-xs">TooltipProvider</code> needed.
                        </li>
                        <li>
                            Decorative images or avatars inside the card should use{" "}
                            <code className="text-xs">aria-hidden</code>.
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
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"
import { CalendarDays } from "lucide-react"

// User profile preview
<HoverCard>
  <HoverCardTrigger asChild>
    <a href="/users/janedoe" className="underline underline-offset-4">
      @janedoe
    </a>
  </HoverCardTrigger>
  <HoverCardContent className="w-72">
    <div className="flex gap-3">
      <img src="/avatars/janedoe.png" alt="" aria-hidden className="size-10 rounded-full" />
      <div className="space-y-1">
        <p className="text-sm font-semibold">Jane Doe</p>
        <p className="text-xs text-muted-foreground">Product designer</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <CalendarDays className="size-3" />
          Joined March 2022
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>

// Positioning
<HoverCardContent side="top" align="start" sideOffset={8}>
  ...
</HoverCardContent>`}
                />
            </div>
        </div>
    );
}
