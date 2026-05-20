"use client";

import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogMedia,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, AlertTriangle, Trash2, LogOut } from "lucide-react";

export default function AlertDialogPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">AlertDialog</h1>
                <p className="text-muted-foreground text-sm">
                    A confirmation dialog for destructive or irreversible actions. Unlike{" "}
                    <code className="text-xs">Dialog</code>, clicking outside does{" "}
                    <strong>not</strong> dismiss it — the user must make an explicit choice. Built
                    on <code className="text-xs">@base-ui/react/alert-dialog</code>.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">AlertDialogContent</code> optionally leads with{" "}
                    <code className="text-xs">AlertDialogMedia</code> (icon area), followed by{" "}
                    <code className="text-xs">AlertDialogHeader</code> and{" "}
                    <code className="text-xs">AlertDialogFooter</code>.{" "}
                    <code className="text-xs">AlertDialogAction</code> confirms the action;{" "}
                    <code className="text-xs">AlertDialogCancel</code> dismisses. Backdrop click is
                    intentionally disabled.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <AlertDialog>
                            <AlertDialogTrigger render={<Button variant="outline" />}>
                                Open AlertDialog
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>backdrop click disabled</span>
                            <span>AlertDialogCancel + AlertDialogAction</span>
                            <span>size=&quot;default&quot; | &quot;sm&quot;</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Sizes</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Two sizes available. Use <code className="text-xs">size=&quot;sm&quot;</code>{" "}
                    for short, one-line confirmations. Use{" "}
                    <code className="text-xs">size=&quot;default&quot;</code> when more context is
                    needed.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <code className="text-muted-foreground text-xs">
                            size=&quot;default&quot;
                        </code>
                        <div>
                            <AlertDialog>
                                <AlertDialogTrigger render={<Button size="sm" variant="outline" />}>
                                    Open default
                                </AlertDialogTrigger>
                                <AlertDialogContent size="default">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Delete this file?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This will permanently delete the file from your storage.
                                            This action cannot be undone.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>Delete</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                        <p className="text-muted-foreground/80 text-xs">
                            Best for destructive actions needing explanation.
                        </p>
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <code className="text-muted-foreground text-xs">size=&quot;sm&quot;</code>
                        <div>
                            <AlertDialog>
                                <AlertDialogTrigger render={<Button size="sm" variant="outline" />}>
                                    Open small
                                </AlertDialogTrigger>
                                <AlertDialogContent size="sm">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Remove member?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            They will lose access immediately.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>Remove</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                        <p className="text-muted-foreground/80 text-xs">
                            Compact layout for brief confirmations.
                        </p>
                    </div>
                </div>
            </div>

            {/* With Media */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">With Media</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">AlertDialogMedia</code> adds an icon area above the
                    header — use it for high-stakes confirmations where a visual reinforces the
                    severity.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Destructive with icon
                        </p>
                        <AlertDialog>
                            <AlertDialogTrigger render={<Button size="sm" variant="destructive" />}>
                                <Trash2 className="size-3.5" />
                                Delete account
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogMedia>
                                    <Trash2 className="text-destructive size-5" aria-hidden />
                                </AlertDialogMedia>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Delete account?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        All your data will be permanently removed. This action
                                        cannot be undone.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Delete account</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Warning with icon
                        </p>
                        <AlertDialog>
                            <AlertDialogTrigger render={<Button size="sm" variant="outline" />}>
                                <LogOut className="size-3.5" />
                                Sign out
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogMedia>
                                    <AlertTriangle className="size-5 text-amber-500" aria-hidden />
                                </AlertDialogMedia>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Sign out?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        You will be signed out of all active sessions on this
                                        device.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Stay signed in</AlertDialogCancel>
                                    <AlertDialogAction>Sign out</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
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
                                    Reserve for irreversible actions.
                                </strong>{" "}
                                AlertDialog signals high stakes — use it only when the action truly
                                cannot be undone (delete, revoke, remove).
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Label the action with its consequence.
                                </strong>{" "}
                                &quot;Delete&quot;, &quot;Remove&quot;, &quot;Sign out&quot; — not
                                &quot;OK&quot; or &quot;Yes&quot;.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Always provide a clear cancel path.
                                </strong>{" "}
                                <code className="text-xs">AlertDialogCancel</code> must always be
                                present and easy to reach.
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
                                    Don&apos;t use for informational messages.
                                </strong>{" "}
                                If no action is required, use Alert or Toaster — AlertDialog demands
                                a choice.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t make the destructive action the default focus.
                                </strong>{" "}
                                Cancel should visually precede the action button so the safer path
                                is reached first.
                            </li>
                            <li>
                                <strong className="text-foreground">Don&apos;t overuse it.</strong>{" "}
                                If every delete triggers an AlertDialog, users learn to dismiss them
                                without reading.
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
                            <code className="text-xs">role=&quot;alertdialog&quot;</code> with{" "}
                            <code className="text-xs">aria-labelledby</code> and{" "}
                            <code className="text-xs">aria-describedby</code> from title and
                            description.
                        </li>
                        <li>
                            Backdrop click is intentionally disabled — the user must use{" "}
                            <code className="text-xs">AlertDialogCancel</code> or{" "}
                            <code className="text-xs">AlertDialogAction</code>.
                        </li>
                        <li>
                            ESC key closes via <code className="text-xs">AlertDialogCancel</code>{" "}
                            semantics.
                        </li>
                        <li>
                            <code className="text-xs">AlertDialogMedia</code> is decorative — icon
                            children should use <code className="text-xs">aria-hidden</code>.
                        </li>
                        <li>
                            Focus is trapped inside; on close, focus returns to the trigger element.
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
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import { Trash2 } from "lucide-react"

// Basic confirmation
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete this item?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

// With icon media
<AlertDialogContent>
  <AlertDialogMedia>
    <Trash2 aria-hidden />
  </AlertDialogMedia>
  ...
</AlertDialogContent>

// Small size
<AlertDialogContent size="sm">...</AlertDialogContent>`}
                />
            </div>
        </div>
    );
}
