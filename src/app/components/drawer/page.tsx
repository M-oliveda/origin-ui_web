"use client";

import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
    DrawerDescription,
    DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, Share2, GripHorizontal } from "lucide-react";

export default function DrawerPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Drawer</h1>
                <p className="text-muted-foreground text-sm">
                    A bottom sheet with native drag-to-dismiss support. Built on{" "}
                    <code className="text-xs">vaul</code> — designed for mobile-first,
                    touch-friendly workflows. Automatically includes a drag handle and supports
                    velocity-based snap behaviour.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">DrawerContent</code> automatically renders a drag
                    handle bar at the top. <code className="text-xs">DrawerHeader</code> centers
                    text on mobile and left-aligns on desktop.{" "}
                    <code className="text-xs">DrawerClose</code> wraps any element to dismiss the
                    drawer. <code className="text-xs">DrawerFooter</code> stacks buttons vertically
                    on mobile and rows them on desktop.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button variant="outline">Open Drawer</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>Drawer Title</DrawerTitle>
                                    <DrawerDescription>
                                        Drag down or press ESC to dismiss.
                                    </DrawerDescription>
                                </DrawerHeader>
                                <DrawerFooter>
                                    <DrawerClose asChild>
                                        <Button variant="outline">Close</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>drag handle auto-rendered</span>
                            <span>vaul velocity-based dismiss</span>
                            <span>DrawerClose to dismiss</span>
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
                        <p className="text-muted-foreground text-xs font-medium">Basic info</p>
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button size="sm" variant="outline">
                                    View details
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>Item details</DrawerTitle>
                                    <DrawerDescription>
                                        Created 3 days ago · Last modified today.
                                    </DrawerDescription>
                                </DrawerHeader>
                                <div className="px-4 pb-2">
                                    <p className="text-muted-foreground text-sm">
                                        Additional details about this item appear here.
                                    </p>
                                </div>
                                <DrawerFooter>
                                    <DrawerClose asChild>
                                        <Button variant="outline">Close</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Action sheet</p>
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button size="sm" variant="outline">
                                    <Share2 className="size-3.5" />
                                    Share
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>Share</DrawerTitle>
                                    <DrawerDescription>
                                        Choose how to share this item.
                                    </DrawerDescription>
                                </DrawerHeader>
                                <div className="flex flex-col gap-2 px-4 pb-2">
                                    {["Copy link", "Send by email", "Export as PDF"].map(
                                        (action) => (
                                            <DrawerClose key={action} asChild>
                                                <Button variant="outline" className="justify-start">
                                                    {action}
                                                </Button>
                                            </DrawerClose>
                                        ),
                                    )}
                                </div>
                                <DrawerFooter>
                                    <DrawerClose asChild>
                                        <Button variant="ghost">Cancel</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Form drawer</p>
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button size="sm">Quick add</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>Add item</DrawerTitle>
                                    <DrawerDescription>
                                        Fill in the details below.
                                    </DrawerDescription>
                                </DrawerHeader>
                                <div className="space-y-3 px-4 pb-2">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="dr-name">Name</Label>
                                        <Input id="dr-name" placeholder="Item name…" />
                                    </div>
                                </div>
                                <DrawerFooter>
                                    <Button>Add item</Button>
                                    <DrawerClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>

            {/* Drawer vs Sheet */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Drawer vs Sheet</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Both are panel overlays, but they serve different interaction models.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border-border space-y-3 rounded-lg border p-5">
                        <div className="flex items-center gap-2">
                            <GripHorizontal className="text-muted-foreground size-4" />
                            <p className="text-sm font-semibold">Drawer</p>
                        </div>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <Check className="mt-0.5 size-3 shrink-0 text-green-600 dark:text-green-400" />
                                Drag-to-dismiss (vaul)
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="mt-0.5 size-3 shrink-0 text-green-600 dark:text-green-400" />
                                Mobile-first, touch-optimised
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="mt-0.5 size-3 shrink-0 text-green-600 dark:text-green-400" />
                                Bottom only (primary use case)
                            </li>
                            <li className="flex items-start gap-2">
                                <X className="mt-0.5 size-3 shrink-0 text-red-500" />
                                No side directions built-in
                            </li>
                        </ul>
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-5">
                        <div className="flex items-center gap-2">
                            <X className="text-muted-foreground size-4" />
                            <p className="text-sm font-semibold">Sheet</p>
                        </div>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <Check className="mt-0.5 size-3 shrink-0 text-green-600 dark:text-green-400" />
                                All four sides (top/right/bottom/left)
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="mt-0.5 size-3 shrink-0 text-green-600 dark:text-green-400" />
                                Desktop navigation and settings panels
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="mt-0.5 size-3 shrink-0 text-green-600 dark:text-green-400" />
                                More predictable dismiss behaviour
                            </li>
                            <li className="flex items-start gap-2">
                                <X className="mt-0.5 size-3 shrink-0 text-red-500" />
                                No drag handle or snap behaviour
                            </li>
                        </ul>
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
                                    Use for mobile-first flows and action sheets.
                                </strong>{" "}
                                Vaul&apos;s drag-to-dismiss matches native mobile patterns users
                                already know.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep content lightweight.
                                </strong>{" "}
                                Drawers work best for focused tasks — a handful of actions or a
                                short form.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Stack footer buttons vertically on mobile.
                                </strong>{" "}
                                DrawerFooter handles responsive stacking automatically.
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
                                    Don&apos;t use as a desktop navigation panel.
                                </strong>{" "}
                                Sheet&apos;s <code className="text-xs">side=&quot;left&quot;</code>{" "}
                                is better suited for that — Drawer is optimised for bottom/mobile.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t fill with heavily scrollable content.
                                </strong>{" "}
                                Users expect drawers to be lightweight — long content should live on
                                a dedicated page.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t rely on programmatic open alone.
                                </strong>{" "}
                                Always include a visible dismiss path (
                                <code className="text-xs">DrawerClose</code> or drag handle) so
                                users aren&apos;t stranded.
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
                            Vaul manages <code className="text-xs">role=&quot;dialog&quot;</code>,
                            focus trapping, and ESC dismissal internally.
                        </li>
                        <li>
                            Drag handle is a visual affordance — include a{" "}
                            <code className="text-xs">DrawerClose</code> button for keyboard and
                            screen reader users.
                        </li>
                        <li>
                            Velocity-based dismiss: a quick downward drag closes the drawer
                            regardless of distance travelled.
                        </li>
                        <li>
                            <code className="text-xs">DrawerHeader</code> text-aligns to center on
                            mobile (<code className="text-xs">sm:text-left</code> on desktop).
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
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer"

// Basic drawer
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Supporting description.</DrawerDescription>
    </DrawerHeader>
    <div className="px-4 pb-2">{/* content */}</div>
    <DrawerFooter>
      <Button>Confirm</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

// Controlled
const [open, setOpen] = useState(false)
<Drawer open={open} onOpenChange={setOpen}>...</Drawer>`}
                />
            </div>
        </div>
    );
}
