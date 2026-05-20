"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/app/components/code-block";
import { Bell, Check, Mail, Rocket, X } from "lucide-react";
import { toast } from "sonner";

export default function ToasterPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Toaster</h1>
                <p className="text-muted-foreground text-sm">
                    Toast notifications powered by <code className="text-xs">sonner</code>. The{" "}
                    <code className="text-xs">{"<Toaster>"}</code> component is already mounted in
                    the root layout with design-system tokens and themed icons. Trigger toasts
                    anywhere via the <code className="text-xs">toast()</code> function from sonner.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Mount <code className="text-xs">{"<Toaster richColors />"}</code> once in your
                    root layout. The wrapper overrides Sonner&apos;s internal CSS variables with
                    design-system tokens — normal background, text, border, and border-radius — so
                    all toasts automatically follow the brand palette and respect dark mode.
                </p>
                <div className="border-border bg-muted/30 flex flex-wrap gap-3 rounded-lg border p-6">
                    <Button
                        variant="outline"
                        onClick={() =>
                            toast("This is a default toast", {
                                description: "Neutral message for general feedback.",
                            })
                        }
                    >
                        Show toast
                    </Button>
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variants</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Five semantic variants, each mapped to a custom Lucide icon registered on the
                    Toaster instance. <code className="text-xs">richColors</code> is enabled
                    globally so success/error/warning/info toasts use accessible color schemes.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                        Semantic types
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast("Default", { description: "General purpose notification." })
                            }
                        >
                            Default
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast.success("Success", {
                                    description: "Your changes have been saved.",
                                })
                            }
                        >
                            Success
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast.error("Error", {
                                    description: "Something went wrong. Please try again.",
                                })
                            }
                        >
                            Error
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast.warning("Warning", {
                                    description: "This action cannot be undone.",
                                })
                            }
                        >
                            Warning
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast.info("Info", { description: "A new version is available." })
                            }
                        >
                            Info
                        </Button>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Action Button</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Pass an <code className="text-xs">action</code> object to add a high-emphasis
                    inline button — useful for undo flows. Use{" "}
                    <code className="text-xs">toast.promise()</code> for async operations that
                    should automatically transition through loading, success, and error states.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast("File deleted", {
                                    description: "The file has been moved to trash.",
                                    action: {
                                        label: "Undo",
                                        onClick: () => toast.success("File restored!"),
                                    },
                                })
                            }
                        >
                            With Undo
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
                                    loading: "Uploading file...",
                                    success: "Upload complete!",
                                    error: "Upload failed.",
                                })
                            }
                        >
                            Promise Toast
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast("Deployment queued", {
                                    description: "Your changes will be live in ~2 minutes.",
                                    action: {
                                        label: "View status",
                                        onClick: () => toast.info("Opening deployment logs..."),
                                    },
                                })
                            }
                        >
                            With Action
                        </Button>
                    </div>
                </div>
            </div>

            {/* Cancel Button */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Cancel Button</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The <code className="text-xs">cancel</code> option adds a secondary dismiss
                    button styled with a muted background. Unlike{" "}
                    <code className="text-xs">action</code>, it signals a non-destructive exit — use
                    it alongside <code className="text-xs">action</code> when the user needs an
                    explicit opt-out.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast("Save changes?", {
                                    description: "Your unsaved changes will be lost.",
                                    action: {
                                        label: "Save",
                                        onClick: () => toast.success("Changes saved."),
                                    },
                                    cancel: {
                                        label: "Discard",
                                        onClick: () => toast("Changes discarded."),
                                    },
                                })
                            }
                        >
                            Save / Discard
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast("Enable notifications?", {
                                    description: "Stay up to date with project activity.",
                                    action: {
                                        label: "Enable",
                                        onClick: () => toast.success("Notifications enabled."),
                                    },
                                    cancel: {
                                        label: "Not now",
                                        onClick: () => {},
                                    },
                                })
                            }
                        >
                            Enable / Not now
                        </Button>
                    </div>
                </div>
            </div>

            {/* Loading */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Loading</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Use <code className="text-xs">toast.loading()</code> to show a persistent
                    spinner toast. Every <code className="text-xs">toast()</code> call returns an{" "}
                    <code className="text-xs">id</code> — pass it to any subsequent toast call to
                    update the same element in place rather than stacking a new one.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant="outline"
                            onClick={() => {
                                const id = toast.loading("Processing...");
                                setTimeout(() => toast.success("Done!", { id }), 2500);
                            }}
                        >
                            Loading → Success
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => {
                                const id = toast.loading("Deleting...");
                                setTimeout(() => toast.error("Failed to delete.", { id }), 2000);
                            }}
                        >
                            Loading → Error
                        </Button>
                    </div>
                </div>
            </div>

            {/* Custom Icon */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Custom Icon</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Override the default icon on any individual toast via the{" "}
                    <code className="text-xs">icon</code> option. Pass any React node — a Lucide
                    icon, an avatar, or a status indicator. Pass{" "}
                    <code className="text-xs">null</code> to suppress the icon entirely.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast("New message received", {
                                    description: "You have 3 unread messages in Inbox.",
                                    icon: <Mail className="text-primary size-4" />,
                                })
                            }
                        >
                            Mail icon
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast.success("Deployed to production", {
                                    description: "Build #428 is live.",
                                    icon: <Rocket className="size-4" />,
                                })
                            }
                        >
                            Rocket icon
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast("Task completed", {
                                    description: "No icon shown.",
                                    icon: null,
                                })
                            }
                        >
                            No icon
                        </Button>
                    </div>
                </div>
            </div>

            {/* Close Button */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Close Button</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Add a visible × button to a toast using the{" "}
                    <code className="text-xs">closeButton</code> option. Most useful on persistent
                    toasts (<code className="text-xs">duration: Infinity</code>) where auto-dismiss
                    is disabled and the user must act explicitly.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast("Update available", {
                                    description: "Version 2.4.0 is ready to install.",
                                    duration: Infinity,
                                    closeButton: true,
                                    action: {
                                        label: "Install now",
                                        onClick: () => toast.success("Installing update..."),
                                    },
                                })
                            }
                        >
                            Persistent + close
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast.info("Tip of the day", {
                                    description: "Press ⌥T to toggle the command palette.",
                                    closeButton: true,
                                })
                            }
                        >
                            Info with close
                        </Button>
                    </div>
                </div>
            </div>

            {/* Custom Toast */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Custom Toast</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">toast.custom()</code> renders arbitrary JSX with no
                    Sonner styling applied — you own every pixel. The render function receives the
                    toast <code className="text-xs">id</code> so you can dismiss it programmatically
                    from within the content.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast.custom((id) => (
                                    <div className="border-border bg-card flex w-[356px] items-center gap-3 rounded-lg border px-4 py-3 shadow-sm">
                                        <div className="bg-primary/10 flex size-8 shrink-0 items-center justify-center rounded-full">
                                            <Bell className="text-primary size-4" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-card-foreground text-sm font-medium">
                                                Team invite
                                            </p>
                                            <p className="text-muted-foreground text-xs">
                                                Alex invited you to{" "}
                                                <strong className="text-foreground">
                                                    Origin UI
                                                </strong>
                                                .
                                            </p>
                                        </div>
                                        <div className="flex shrink-0 gap-2">
                                            <button
                                                onClick={() => {
                                                    toast.dismiss(id);
                                                    toast.success("Joined the workspace!");
                                                }}
                                                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
                                            >
                                                Accept
                                            </button>
                                            <button
                                                onClick={() => toast.dismiss(id)}
                                                className="border-border text-muted-foreground hover:text-foreground rounded-md border px-2.5 py-1 text-xs font-medium transition-colors"
                                            >
                                                Decline
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        >
                            Team invite card
                        </Button>
                    </div>
                </div>
            </div>

            {/* Dismiss */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Dismiss</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Call <code className="text-xs">toast.dismiss(id)</code> to remove a specific
                    toast by its returned ID. Call <code className="text-xs">toast.dismiss()</code>{" "}
                    with no argument to clear every active toast at once.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant="outline"
                            onClick={() => {
                                const id = toast("Scheduled task", {
                                    description: "Will be dismissed by code in 3 seconds.",
                                    duration: Infinity,
                                });
                                setTimeout(() => toast.dismiss(id), 3000);
                            }}
                        >
                            Code-dismiss in 3s
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => {
                                toast.success("First notification");
                                toast.warning("Second notification");
                                toast.error("Third notification");
                            }}
                        >
                            Stack 3 toasts
                        </Button>
                        <Button variant="outline" onClick={() => toast.dismiss()}>
                            Dismiss all
                        </Button>
                    </div>
                </div>
            </div>

            {/* Duration */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Duration</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Control how long a toast stays on screen with the{" "}
                    <code className="text-xs">duration</code> option (milliseconds). The default is
                    4000ms. Pass <code className="text-xs">Infinity</code> for a toast that never
                    auto-dismisses — combine it with <code className="text-xs">closeButton</code> or
                    a custom dismiss action.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                        Duration examples
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast("Short toast", {
                                    description: "Dismisses in 1 second.",
                                    duration: 1000,
                                })
                            }
                        >
                            1 second
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast("Long toast", {
                                    description: "Dismisses in 10 seconds.",
                                    duration: 10000,
                                })
                            }
                        >
                            10 seconds
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() =>
                                toast("Persistent toast", {
                                    description: "Only dismissed by user interaction.",
                                    duration: Infinity,
                                    closeButton: true,
                                })
                            }
                        >
                            Persistent
                        </Button>
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
                                    Match the variant to the semantic weight.
                                </strong>{" "}
                                Use <code className="text-xs">success</code> for completed actions,{" "}
                                <code className="text-xs">error</code> for failures that need
                                attention.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep descriptions short.
                                </strong>{" "}
                                One sentence maximum — toasts are transient and users won&apos;t
                                read a paragraph.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use toast.promise() for async operations.
                                </strong>{" "}
                                It automatically handles all three states and avoids manual state
                                management.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use cancel alongside action for reversible decisions.
                                </strong>{" "}
                                Give users a low-friction escape path when confirming intent.
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
                                    Don&apos;t use for critical errors.
                                </strong>{" "}
                                If a user needs to act on an error, use an inline Alert or Dialog —
                                not a transient toast.
                            </li>
                            <li>
                                <strong className="text-foreground">Don&apos;t spam toasts.</strong>{" "}
                                Multiple rapid toasts confuse users and create visual noise.
                                Deduplicate or throttle them.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t put complex content in styled toasts.
                                </strong>{" "}
                                Long messages, lists, or interactive forms belong in a Dialog or
                                Sheet — or use <code className="text-xs">toast.custom()</code>.
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
                        <h4 className="mb-2 text-sm font-medium">Setup & Accessibility</h4>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                            <li>
                                Mount <code className="text-xs">{"<Toaster richColors />"}</code>{" "}
                                once in <code className="text-xs">app/layout.tsx</code>. Already
                                configured in this project.
                            </li>
                            <li>
                                Toasts are announced to screen readers via a live region —{" "}
                                <code className="text-xs">aria-live=&quot;polite&quot;</code> for
                                non-error toasts,{" "}
                                <code className="text-xs">aria-live=&quot;assertive&quot;</code> for
                                errors.
                            </li>
                            <li>
                                Every <code className="text-xs">toast()</code> call returns an{" "}
                                <code className="text-xs">id: string | number</code>. Pass it back
                                to any <code className="text-xs">toast()</code> call or{" "}
                                <code className="text-xs">toast.dismiss(id)</code> to update or
                                remove that specific toast.
                            </li>
                        </ul>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <h4 className="mb-2 text-sm font-medium">Key Options</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-border border-b">
                                        <th className="text-muted-foreground py-2 pr-4 text-left font-medium">
                                            Option
                                        </th>
                                        <th className="text-muted-foreground py-2 pr-4 text-left font-medium">
                                            Type
                                        </th>
                                        <th className="text-muted-foreground py-2 text-left font-medium">
                                            Notes
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-muted-foreground">
                                    {[
                                        {
                                            opt: "description",
                                            type: "ReactNode",
                                            note: "Secondary line below the title.",
                                        },
                                        {
                                            opt: "duration",
                                            type: "number",
                                            note: "Ms until auto-dismiss. Default 4000. Infinity disables.",
                                        },
                                        {
                                            opt: "action",
                                            type: "{ label, onClick }",
                                            note: "High-emphasis inline button (primary style).",
                                        },
                                        {
                                            opt: "cancel",
                                            type: "{ label, onClick }",
                                            note: "Low-emphasis dismiss button (muted style).",
                                        },
                                        {
                                            opt: "icon",
                                            type: "ReactNode | null",
                                            note: "Overrides the default icon. null hides it.",
                                        },
                                        {
                                            opt: "closeButton",
                                            type: "boolean",
                                            note: "Shows a × button. Most useful with Infinity duration.",
                                        },
                                        {
                                            opt: "id",
                                            type: "string | number",
                                            note: "Targets an existing toast to update it in place.",
                                        },
                                        {
                                            opt: "dismissible",
                                            type: "boolean",
                                            note: "Whether the toast can be swiped away. Default true.",
                                        },
                                    ].map((row) => (
                                        <tr
                                            key={row.opt}
                                            className="border-border border-b last:border-0"
                                        >
                                            <td className="py-2 pr-4">
                                                <code className="text-xs">{row.opt}</code>
                                            </td>
                                            <td className="py-2 pr-4">
                                                <code className="text-xs">{row.type}</code>
                                            </td>
                                            <td className="py-2 text-xs">{row.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { toast } from "sonner"
// <Toaster richColors /> is already in app/layout.tsx

// Basic
toast("Saved successfully.")

// With description
toast("File deleted", {
  description: "The file has been moved to trash.",
})

// Semantic variants
toast.success("Changes saved!")
toast.error("Failed to save.", { description: "Please try again." })
toast.warning("Unsaved changes will be lost.")
toast.info("A new version is available.")

// Action button (primary style)
toast("Item deleted", {
  action: { label: "Undo", onClick: () => toast.success("Restored!") },
})

// Cancel button (muted style) alongside action
toast("Save changes?", {
  action: { label: "Save", onClick: () => toast.success("Saved.") },
  cancel: { label: "Discard", onClick: () => {} },
})

// Promise (loading → success/error automatically)
toast.promise(saveData(), {
  loading: "Saving...",
  success: "Saved!",
  error: "Failed to save.",
})

// Loading → update in place via id
const id = toast.loading("Uploading...")
await upload()
toast.success("Upload complete!", { id })

// Per-toast custom icon (pass null to hide)
toast("New message", { icon: <MailIcon className="size-4 text-primary" /> })
toast("No icon", { icon: null })

// Close button (useful with persistent toasts)
toast("Update available", {
  duration: Infinity,
  closeButton: true,
  action: { label: "Install", onClick: () => {} },
})

// Custom duration
toast("Quick note", { duration: 1000 })     // 1 second
toast("Persistent",  { duration: Infinity }) // never auto-dismisses

// Custom JSX toast — full control, no Sonner styling applied
toast.custom((id) => (
  <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
    <p className="text-sm font-medium">Custom content</p>
    <button onClick={() => toast.dismiss(id)}>Dismiss</button>
  </div>
))

// Dismiss
toast.dismiss(id)   // remove specific toast
toast.dismiss()     // remove all active toasts`}
                />
            </div>
        </div>
    );
}
