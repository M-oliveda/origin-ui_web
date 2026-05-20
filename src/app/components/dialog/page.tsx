"use client";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function DialogPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Dialog</h1>
                <p className="text-muted-foreground text-sm">
                    A modal window that interrupts the current flow to capture user attention.
                    Blocks background interaction, traps keyboard focus, and dismisses on ESC or
                    clicking the overlay. Built on{" "}
                    <code className="text-xs">@base-ui/react/dialog</code>.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Dialog>"}</code> is the stateful root.{" "}
                    <code className="text-xs">DialogTrigger</code> opens it,{" "}
                    <code className="text-xs">DialogContent</code> renders in a portal with an
                    overlay. <code className="text-xs">DialogHeader</code> and{" "}
                    <code className="text-xs">DialogFooter</code> are layout helpers.{" "}
                    <code className="text-xs">DialogClose</code> dismisses from anywhere inside the
                    content. The <code className="text-xs">showCloseButton</code> prop on{" "}
                    <code className="text-xs">DialogContent</code> controls the built-in X button
                    (default: <code className="text-xs">true</code>).
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <Dialog>
                            <DialogTrigger render={<Button variant="outline" />}>
                                Open Dialog
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Dialog Title</DialogTitle>
                                    <DialogDescription>
                                        DialogHeader wraps DialogTitle and DialogDescription.
                                    </DialogDescription>
                                </DialogHeader>
                                <p className="text-muted-foreground text-sm">
                                    Body content goes between header and footer.
                                </p>
                                <DialogFooter>
                                    <DialogClose render={<Button variant="outline" />}>
                                        Cancel
                                    </DialogClose>
                                    <Button>Confirm</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>DialogTrigger → portal</span>
                            <span>DialogHeader + DialogFooter</span>
                            <span>showCloseButton (default: true)</span>
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
                        <p className="text-muted-foreground text-xs font-medium">Form dialog</p>
                        <Dialog>
                            <DialogTrigger render={<Button size="sm" />}>
                                Edit Profile
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Edit Profile</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-2">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="d-name">Name</Label>
                                        <Input id="d-name" defaultValue="John Doe" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="d-email">Email</Label>
                                        <Input
                                            id="d-email"
                                            type="email"
                                            defaultValue="john@example.com"
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose render={<Button variant="outline" />}>
                                        Cancel
                                    </DialogClose>
                                    <Button>Save changes</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Confirmation</p>
                        <Dialog>
                            <DialogTrigger render={<Button size="sm" variant="outline" />}>
                                Publish
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Publish changes?</DialogTitle>
                                    <DialogDescription>
                                        This will make your changes visible to all users
                                        immediately.
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <DialogClose render={<Button variant="outline" />}>
                                        Cancel
                                    </DialogClose>
                                    <Button>Publish</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">No close button</p>
                        <Dialog>
                            <DialogTrigger render={<Button size="sm" variant="ghost" />}>
                                View info
                            </DialogTrigger>
                            <DialogContent showCloseButton={false}>
                                <DialogHeader>
                                    <DialogTitle>Release notes</DialogTitle>
                                    <DialogDescription>
                                        Version 2.1.0 — performance improvements and bug fixes.
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <DialogClose render={<Button />}>Got it</DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>

            {/* Close Button Prop */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Close Button</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">showCloseButton</code> on{" "}
                    <code className="text-xs">DialogContent</code> toggles the built-in X button in
                    the header area. Disable it when the footer already provides a clear dismiss
                    path.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <code className="text-muted-foreground text-xs">
                            showCloseButton={"{true}"} (default)
                        </code>
                        <div>
                            <Dialog>
                                <DialogTrigger render={<Button size="sm" variant="outline" />}>
                                    Open
                                </DialogTrigger>
                                <DialogContent showCloseButton={true}>
                                    <DialogHeader>
                                        <DialogTitle>With X button</DialogTitle>
                                        <DialogDescription>
                                            The X button appears in the top-right corner.
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <code className="text-muted-foreground text-xs">
                            showCloseButton={"{false}"}
                        </code>
                        <div>
                            <Dialog>
                                <DialogTrigger render={<Button size="sm" variant="outline" />}>
                                    Open
                                </DialogTrigger>
                                <DialogContent showCloseButton={false}>
                                    <DialogHeader>
                                        <DialogTitle>Without X button</DialogTitle>
                                        <DialogDescription>
                                            Use a footer action as the primary dismiss path.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <DialogClose render={<Button />}>Close</DialogClose>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
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
                                    Use for tasks needing a decision.
                                </strong>{" "}
                                Dialogs are best when the user must complete an action before
                                returning — forms, confirmations, settings.
                            </li>
                            <li>
                                <strong className="text-foreground">Keep dialogs focused.</strong>{" "}
                                One task per dialog. If the content sprawls, consider a Sheet or a
                                dedicated page instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Always provide a cancel path.
                                </strong>{" "}
                                Include a <code className="text-xs">DialogClose</code> or cancel
                                button — never force the user to complete the action.
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
                                    Don&apos;t nest dialogs.
                                </strong>{" "}
                                Opening a dialog from inside a dialog breaks focus management and
                                confuses users.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for simple notifications.
                                </strong>{" "}
                                If no decision is needed, use a Toaster or inline Alert instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t block critical workflows.
                                </strong>{" "}
                                Avoid wrapping common actions in dialogs — reserve them for
                                genuinely interruptive tasks.
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
                            <code className="text-xs">role=&quot;dialog&quot;</code> with{" "}
                            <code className="text-xs">aria-labelledby</code> and{" "}
                            <code className="text-xs">aria-describedby</code> wired to{" "}
                            <code className="text-xs">DialogTitle</code> and{" "}
                            <code className="text-xs">DialogDescription</code>.
                        </li>
                        <li>
                            Keyboard focus is trapped inside the open dialog — Tab cycles through
                            focusable elements only.
                        </li>
                        <li>ESC key and clicking the backdrop both dismiss the dialog.</li>
                        <li>
                            <code className="text-xs">DialogClose</code> can wrap any element via{" "}
                            <code className="text-xs">asChild</code> to create custom dismiss
                            triggers.
                        </li>
                        <li>
                            Content renders into a portal — it is visually above the page but
                            remains in the accessible tree.
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
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"

// Form dialog
<Dialog>
  <DialogTrigger asChild>
    <Button>Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>Make changes and click save.</DialogDescription>
    </DialogHeader>
    <div className="space-y-4 py-2">
      <Input placeholder="Name" />
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// Without close button
<DialogContent showCloseButton={false}>...</DialogContent>

// Controlled
const [open, setOpen] = useState(false)
<Dialog open={open} onOpenChange={setOpen}>...</Dialog>`}
                />
            </div>
        </div>
    );
}
