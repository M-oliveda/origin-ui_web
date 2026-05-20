"use client";

import {
    Empty,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
    EmptyDescription,
    EmptyContent,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, Inbox, FolderOpen, Plus, Search } from "lucide-react";

export default function EmptyPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Empty</h1>
                <p className="text-muted-foreground text-sm">
                    A placeholder for sections with no content yet. Composes{" "}
                    <code className="text-xs">EmptyHeader</code>,{" "}
                    <code className="text-xs">EmptyMedia</code>,{" "}
                    <code className="text-xs">EmptyTitle</code>,{" "}
                    <code className="text-xs">EmptyDescription</code>, and{" "}
                    <code className="text-xs">EmptyContent</code> to cover everything from minimal
                    icons to full onboarding prompts.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Empty>"}</code> is a centered flex column with a
                    dashed border. <code className="text-xs">EmptyHeader</code> groups media, title,
                    and description. <code className="text-xs">EmptyContent</code> sits below the
                    header for action buttons or supplemental UI.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <Empty>
                        <EmptyHeader>
                            <EmptyMedia variant="icon">
                                <Inbox aria-hidden />
                            </EmptyMedia>
                            <EmptyTitle>No items</EmptyTitle>
                            <EmptyDescription>Your collection is empty.</EmptyDescription>
                        </EmptyHeader>
                    </Empty>
                    <div className="text-muted-foreground mt-4 flex flex-wrap items-center justify-center gap-4 text-[10px]">
                        <span>Empty (dashed border)</span>
                        <span>EmptyHeader</span>
                        <span>EmptyMedia (variant=&quot;icon&quot;)</span>
                        <span>EmptyTitle / EmptyDescription</span>
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Three common compositions — from minimal to full onboarding.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Icon only</p>
                        <Empty>
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                    <FolderOpen aria-hidden />
                                </EmptyMedia>
                            </EmptyHeader>
                        </Empty>
                    </div>

                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Icon + text</p>
                        <Empty>
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                    <Search aria-hidden />
                                </EmptyMedia>
                                <EmptyTitle>No results</EmptyTitle>
                                <EmptyDescription>
                                    Try adjusting your search filters.
                                </EmptyDescription>
                            </EmptyHeader>
                        </Empty>
                    </div>

                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Full (with action)
                        </p>
                        <Empty>
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                    <Inbox aria-hidden />
                                </EmptyMedia>
                                <EmptyTitle>No messages</EmptyTitle>
                                <EmptyDescription>
                                    Start a conversation to get going.
                                </EmptyDescription>
                            </EmptyHeader>
                            <EmptyContent>
                                <Button size="sm">
                                    <Plus className="size-3.5" />
                                    New message
                                </Button>
                            </EmptyContent>
                        </Empty>
                    </div>
                </div>
            </div>

            {/* Media Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Media Variants</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">EmptyMedia</code> supports two variants for different
                    visual weights.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <code className="text-muted-foreground text-xs">
                            variant=&quot;icon&quot;
                        </code>
                        <Empty>
                            <EmptyHeader>
                                <EmptyMedia variant="icon">
                                    <Inbox aria-hidden />
                                </EmptyMedia>
                                <EmptyTitle>Icon variant</EmptyTitle>
                                <EmptyDescription>
                                    Muted background, size-8 container, icon auto-sized to size-4.
                                </EmptyDescription>
                            </EmptyHeader>
                        </Empty>
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <code className="text-muted-foreground text-xs">
                            variant=&quot;default&quot;
                        </code>
                        <Empty>
                            <EmptyHeader>
                                <EmptyMedia variant="default">
                                    <Inbox className="text-muted-foreground size-8" aria-hidden />
                                </EmptyMedia>
                                <EmptyTitle>Default variant</EmptyTitle>
                                <EmptyDescription>
                                    Transparent background — size the icon yourself via className.
                                </EmptyDescription>
                            </EmptyHeader>
                        </Empty>
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
                                    Include a call-to-action when possible.
                                </strong>{" "}
                                Tell users what to do next — &quot;Create your first project&quot;
                                converts better than a static message.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use an icon to reinforce context.
                                </strong>{" "}
                                Choose an icon related to the content type (Inbox for messages,
                                FolderOpen for files).
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep descriptions short and actionable.
                                </strong>{" "}
                                One sentence max — explain why it&apos;s empty and what to do about
                                it.
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
                                    Don&apos;t show during initial loading.
                                </strong>{" "}
                                Show Skeleton while data is fetching — only show Empty once the
                                fetch confirms no results.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use generic copy.
                                </strong>{" "}
                                &quot;No data&quot; or &quot;Nothing here&quot; is unhelpful. Be
                                specific about what is missing and why.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t stack multiple empty states.
                                </strong>{" "}
                                One empty state per section — multiple signals either a data problem
                                or a layout issue.
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
                            Icon children inside <code className="text-xs">EmptyMedia</code> should
                            use <code className="text-xs">aria-hidden</code> — the title and
                            description already provide the accessible name.
                        </li>
                        <li>
                            Action buttons in <code className="text-xs">EmptyContent</code> must
                            have descriptive labels (avoid &quot;Click here&quot; or
                            &quot;Go&quot;).
                        </li>
                        <li>
                            Data slots: <code className="text-xs">empty</code>,{" "}
                            <code className="text-xs">empty-header</code>,{" "}
                            <code className="text-xs">empty-icon</code>,{" "}
                            <code className="text-xs">empty-title</code>,{" "}
                            <code className="text-xs">empty-description</code>,{" "}
                            <code className="text-xs">empty-content</code>.
                        </li>
                        <li>
                            <code className="text-xs">EmptyDescription</code> supports inline links
                            with automatic underline styling.
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
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty"
import { Inbox, Plus } from "lucide-react"

// Minimal
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Inbox aria-hidden />
    </EmptyMedia>
    <EmptyTitle>No messages</EmptyTitle>
    <EmptyDescription>Your inbox is empty.</EmptyDescription>
  </EmptyHeader>
</Empty>

// With action
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Inbox aria-hidden />
    </EmptyMedia>
    <EmptyTitle>No projects yet</EmptyTitle>
    <EmptyDescription>
      Create a project to get started.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>
      <Plus className="size-4" />
      New project
    </Button>
  </EmptyContent>
</Empty>`}
                />
            </div>
        </div>
    );
}
