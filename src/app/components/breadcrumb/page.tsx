"use client";

import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function BreadcrumbDocPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Breadcrumb</h1>
                <p className="text-muted-foreground text-sm">
                    A navigation aid that shows the user&apos;s current location within a hierarchy.
                    Each item links back to a parent page, with the last item representing the
                    current page. Built on semantic <code className="text-xs">{"<nav>"}</code> and{" "}
                    <code className="text-xs">{"<ol>"}</code> elements.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Breadcrumb>"}</code> is the{" "}
                    <code className="text-xs">{"<nav>"}</code> wrapper.{" "}
                    <code className="text-xs">BreadcrumbList</code> is the ordered list. Each step
                    is a <code className="text-xs">BreadcrumbItem</code> containing either a{" "}
                    <code className="text-xs">BreadcrumbLink</code> (clickable ancestor) or a{" "}
                    <code className="text-xs">BreadcrumbPage</code> (current, non-linked).{" "}
                    <code className="text-xs">BreadcrumbSeparator</code> renders between items.{" "}
                    <code className="text-xs">BreadcrumbEllipsis</code> collapses long paths.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>BreadcrumbLink (ancestor)</span>
                            <span>BreadcrumbSeparator</span>
                            <span>BreadcrumbPage (current)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-4">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Simple — two levels
                        </p>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Settings</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Deep path — four levels
                        </p>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/docs/components">
                                        Components
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Collapsed — with ellipsis
                        </p>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbEllipsis />
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/docs/components">
                                        Components
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
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
                                    Always show the current page.
                                </strong>{" "}
                                The last item should be{" "}
                                <code className="text-xs">BreadcrumbPage</code> — non-linked — so
                                users know where they are.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Collapse long paths with an ellipsis.
                                </strong>{" "}
                                When the hierarchy is deeper than 3–4 levels, use{" "}
                                <code className="text-xs">BreadcrumbEllipsis</code> to keep the
                                trail scannable.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Mirror your URL structure.
                                </strong>{" "}
                                Each breadcrumb item should map to a real, navigable URL so the back
                                trail is reliable.
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
                                    Don&apos;t link the current page.
                                </strong>{" "}
                                Making the last item clickable is confusing — it goes nowhere
                                meaningful.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for flat navigation.
                                </strong>{" "}
                                If your app has no hierarchy (single-level nav), a breadcrumb adds
                                clutter without value.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t duplicate the page title.
                                </strong>{" "}
                                The breadcrumb is a trail, not a heading — keep it concise and
                                distinct from the page&apos;s{" "}
                                <code className="text-xs">{"<h1>"}</code>.
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
                            <code className="text-xs">{"<Breadcrumb>"}</code> renders a{" "}
                            <code className="text-xs">{"<nav>"}</code> with{" "}
                            <code className="text-xs">aria-label=&quot;breadcrumb&quot;</code>.
                        </li>
                        <li>
                            <code className="text-xs">BreadcrumbList</code> renders an{" "}
                            <code className="text-xs">{"<ol>"}</code> so screen readers announce
                            item count.
                        </li>
                        <li>
                            <code className="text-xs">BreadcrumbPage</code> has{" "}
                            <code className="text-xs">aria-current=&quot;page&quot;</code> and{" "}
                            <code className="text-xs">aria-disabled=&quot;true&quot;</code> — it is
                            not a link.
                        </li>
                        <li>
                            <code className="text-xs">BreadcrumbSeparator</code> and{" "}
                            <code className="text-xs">BreadcrumbEllipsis</code> are both{" "}
                            <code className="text-xs">aria-hidden</code> so they are skipped by
                            screen readers.
                        </li>
                        <li>
                            <code className="text-xs">BreadcrumbLink</code> accepts a{" "}
                            <code className="text-xs">render</code> prop to swap in a router link
                            (e.g. Next.js <code className="text-xs">{"<Link>"}</code>).
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
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"

// Basic three-level path
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

// Collapsed with ellipsis
<BreadcrumbItem>
  <BreadcrumbEllipsis />
</BreadcrumbItem>

// With Next.js Link
<BreadcrumbLink render={<Link href="/components" />}>
  Components
</BreadcrumbLink>`}
                />
            </div>
        </div>
    );
}
