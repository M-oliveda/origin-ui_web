"use client";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    CardAction,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, MoreHorizontal } from "lucide-react";

export default function CardPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Card</h1>
                <p className="text-muted-foreground text-sm">
                    A surface component for grouping related content. Composed of{" "}
                    <code className="text-xs">CardHeader</code>,{" "}
                    <code className="text-xs">CardContent</code>, and{" "}
                    <code className="text-xs">CardFooter</code> slots. Supports a{" "}
                    <code className="text-xs">size</code> prop for compact layouts.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Card is a plain <code className="text-xs">{"<div>"}</code> with{" "}
                    <code className="text-xs">data-slot=&quot;card&quot;</code>. Its sub-components
                    use the same slot pattern: <code className="text-xs">CardHeader</code>,{" "}
                    <code className="text-xs">CardTitle</code>,{" "}
                    <code className="text-xs">CardDescription</code>,{" "}
                    <code className="text-xs">CardAction</code>,{" "}
                    <code className="text-xs">CardContent</code>, and{" "}
                    <code className="text-xs">CardFooter</code>.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <Card className="max-w-sm">
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card description goes here.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">
                                Card content with any elements.
                            </p>
                        </CardContent>
                        <CardFooter className="justify-end gap-2">
                            <Button variant="outline" size="sm">
                                Cancel
                            </Button>
                            <Button size="sm">Save</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            {/* Sub-components */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Sub-components</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Each slot is optional. Mix and match to build the card layout your content
                    needs.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>With Action</CardTitle>
                            <CardDescription>
                                CardAction sits to the right of the header row.
                            </CardDescription>
                            <CardAction>
                                <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="size-4" />
                                </Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">Content area.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Notifications</CardTitle>
                            <CardDescription>You have 3 unread messages.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {["New deployment", "User signed up", "Payment received"].map(
                                    (item) => (
                                        <div key={item} className="flex items-center gap-2 text-sm">
                                            <span className="bg-primary size-2 rounded-full" />
                                            {item}
                                        </div>
                                    ),
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Sizes</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The <code className="text-xs">size</code> prop applies to the Card root and
                    cascades to all sub-components via{" "}
                    <code className="text-xs">group-data-[size=sm]</code> selectors.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Default
                        </p>
                        <Card>
                            <CardHeader>
                                <CardTitle>Default Size</CardTitle>
                                <CardDescription>Standard padding and spacing.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">Content area.</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Small
                        </p>
                        <Card size="sm">
                            <CardHeader>
                                <CardTitle>Small Size</CardTitle>
                                <CardDescription>Compact padding, smaller text.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">Content area.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Footer variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">With Footer</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">CardFooter</code> renders with a top border and muted
                    background. It follows the last rounded corner of the card.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Confirm Delete</CardTitle>
                            <CardDescription>This action cannot be undone.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">
                                All associated data will be permanently removed.
                            </p>
                        </CardContent>
                        <CardFooter className="justify-end gap-2">
                            <Button variant="outline" size="sm">
                                Cancel
                            </Button>
                            <Button variant="destructive" size="sm">
                                Delete
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Plan Summary</CardTitle>
                            <CardDescription>Pro plan · billed monthly</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Monthly cost</span>
                                <span className="font-medium">$29/mo</span>
                            </div>
                        </CardContent>
                        <CardFooter className="justify-between">
                            <span className="text-muted-foreground text-xs">
                                Renews Dec 1, 2026
                            </span>
                            <Badge variant="secondary">Active</Badge>
                        </CardFooter>
                    </Card>
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
                                <strong className="text-foreground">Group related content.</strong>{" "}
                                Use cards to visually associate a title, description, and actions
                                that belong together.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use CardFooter for primary actions.
                                </strong>{" "}
                                The footer&apos;s distinct styling separates actions from content at
                                a glance.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use size=&quot;sm&quot; in dense UIs.
                                </strong>{" "}
                                Dashboard grids and sidebars benefit from the reduced padding.
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
                                    Don&apos;t nest cards inside cards.
                                </strong>{" "}
                                It creates visual confusion about the hierarchy of content.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t skip the header for labelled sections.
                                </strong>{" "}
                                A card without a title makes the UI harder to scan.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t put actions only in CardContent.
                                </strong>{" "}
                                Use CardFooter so the action area is predictably placed.
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
                            Card renders as a plain <code className="text-xs">{"<div>"}</code> — no
                            implicit ARIA role. Add{" "}
                            <code className="text-xs">role=&quot;article&quot;</code> when cards
                            represent list items.
                        </li>
                        <li>
                            <code className="text-xs">CardTitle</code> renders as a{" "}
                            <code className="text-xs">{"<div>"}</code> — use{" "}
                            <code className="text-xs">asChild</code> or wrap in a heading tag when
                            semantic hierarchy matters.
                        </li>
                        <li>
                            The <code className="text-xs">CardFooter</code> muted background is
                            purely decorative and does not require an ARIA landmark.
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
  Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardFooter, CardAction
} from "@/components/ui/card"

// Full card
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
    <CardAction>
      <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Content here.</p>
  </CardContent>
  <CardFooter className="justify-end gap-2">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>

// Compact size
<Card size="sm">
  <CardHeader>
    <CardTitle>Small Card</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>`}
                />
            </div>
        </div>
    );
}
