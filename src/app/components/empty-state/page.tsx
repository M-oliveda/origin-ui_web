"use client";

import { OriginUiEmptyState } from "@/components/branding/origin-ui-empty-state";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, FolderOpen, Inbox, Search, Bell, FileText, Users } from "lucide-react";
import { toast } from "sonner";

export default function EmptyStatePage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">EmptyState</h1>
                <p className="text-muted-foreground text-sm">
                    A placeholder component displayed when a list or data area has no content.
                    Includes an icon, title, optional description, and optional call-to-action
                    button. Renders inside a dashed border container.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A centered flex column inside a dashed rounded border. Top to bottom: icon in a
                    muted circle, bold title, muted description text, and an optional primary
                    button.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <OriginUiEmptyState
                        icon={FolderOpen}
                        title="No projects yet"
                        description="Create your first project to get started."
                        actionLabel="New Project"
                        onAction={() => toast.success("Creating project...")}
                    />
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variants</h3>
                <Separator />
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            With action
                        </p>
                        <OriginUiEmptyState
                            icon={FolderOpen}
                            title="No projects yet"
                            description="Create your first project to get started."
                            actionLabel="New Project"
                            onAction={() => toast.success("Creating project...")}
                        />
                    </div>
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Without action
                        </p>
                        <OriginUiEmptyState
                            icon={Inbox}
                            title="Inbox zero"
                            description="You're all caught up. No new notifications."
                        />
                    </div>
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Search empty
                        </p>
                        <OriginUiEmptyState
                            icon={Search}
                            title="No results found"
                            description="Try adjusting your search or filter criteria."
                        />
                    </div>
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            With CTA
                        </p>
                        <OriginUiEmptyState
                            icon={Users}
                            title="No team members"
                            description="Invite your colleagues to start collaborating."
                            actionLabel="Invite Members"
                            onAction={() => toast("Opening invite dialog...")}
                        />
                    </div>
                </div>
            </div>

            {/* Common contexts */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Common Contexts</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    EmptyState adapts to many data-list scenarios by swapping the icon and copy.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                    <OriginUiEmptyState
                        icon={Bell}
                        title="All caught up"
                        description="No unread notifications."
                    />
                    <OriginUiEmptyState
                        icon={FileText}
                        title="No documents"
                        description="Upload your first document."
                        actionLabel="Upload"
                        onAction={() => toast("Opening file picker...")}
                    />
                    <OriginUiEmptyState
                        icon={Search}
                        title="No results"
                        description="Try a different search term."
                    />
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
                                    Provide a clear CTA when possible.
                                </strong>{" "}
                                Empty states are prime opportunities to guide users to the next
                                action.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use context-specific icons and copy.
                                </strong>{" "}
                                &quot;No projects yet&quot; is more helpful than a generic
                                &quot;Nothing here&quot; message.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use for truly empty states.
                                </strong>{" "}
                                Show this only when a list or view has zero items — not for loading
                                or error states.
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
                                    Don&apos;t use for error states.
                                </strong>{" "}
                                Network or permission errors need different messaging — use an Alert
                                or dedicated error component.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t stack multiple EmptyStates.
                                </strong>{" "}
                                One empty state per view; if multiple sections are empty, show a
                                single top-level message.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t write long descriptions.
                                </strong>{" "}
                                One sentence is enough — the user should understand the situation
                                and what to do next immediately.
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
                    <h4 className="mb-2 text-sm font-medium">Props</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            <code className="text-xs">icon</code> (optional, default:{" "}
                            <code className="text-xs">Inbox</code>) — a{" "}
                            <code className="text-xs">LucideIcon</code> displayed in the muted
                            circle.
                        </li>
                        <li>
                            <code className="text-xs">title</code> (required) — bold heading shown
                            below the icon.
                        </li>
                        <li>
                            <code className="text-xs">description</code> (optional) — muted
                            supporting text below the title.
                        </li>
                        <li>
                            <code className="text-xs">actionLabel</code> (optional) — label for the
                            primary CTA button. Button only renders if this prop is provided.
                        </li>
                        <li>
                            <code className="text-xs">onAction</code> (optional) — click handler for
                            the CTA button.
                        </li>
                        <li>
                            <code className="text-xs">className</code> — applied to the outer
                            container for sizing overrides.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { OriginUiEmptyState } from "@/components/branding/origin-ui-empty-state"
import { FolderOpen, Inbox } from "lucide-react"

// With action button
<OriginUiEmptyState
  icon={FolderOpen}
  title="No projects yet"
  description="Create your first project to get started."
  actionLabel="New Project"
  onAction={() => router.push("/projects/new")}
/>

// Without action
<OriginUiEmptyState
  icon={Inbox}
  title="Inbox zero"
  description="You're all caught up. No new notifications."
/>`}
                />
            </div>
        </div>
    );
}
