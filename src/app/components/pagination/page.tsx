"use client";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function PaginationPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Pagination</h1>
                <p className="text-muted-foreground text-sm">
                    Navigation controls for moving through paginated content. Provides previous/next
                    arrows, numbered page links, and an ellipsis for skipping large page ranges.
                    Renders as a semantic <code className="text-xs">{"<nav>"}</code> with{" "}
                    <code className="text-xs">aria-label=&quot;pagination&quot;</code>.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Pagination>"}</code> is the{" "}
                    <code className="text-xs">{"<nav>"}</code> wrapper.{" "}
                    <code className="text-xs">PaginationContent</code> is the flex{" "}
                    <code className="text-xs">{"<ul>"}</code>. Each control lives inside a{" "}
                    <code className="text-xs">PaginationItem</code>.{" "}
                    <code className="text-xs">PaginationLink</code> renders a numbered page anchor —
                    pass <code className="text-xs">isActive</code> to highlight the current page.{" "}
                    <code className="text-xs">PaginationPrevious</code> and{" "}
                    <code className="text-xs">PaginationNext</code> are pre-styled arrow links.{" "}
                    <code className="text-xs">PaginationEllipsis</code> represents a gap in the page
                    sequence.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>PaginationPrevious / PaginationNext</span>
                            <span>PaginationLink isActive</span>
                            <span>PaginationEllipsis</span>
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
                            Simple — previous / next only
                        </p>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Numbered — active on first page
                        </p>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        1
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">4</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">5</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            With ellipsis — active on middle page
                        </p>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">4</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        5
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">6</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">20</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
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
                                    Always mark the active page.
                                </strong>{" "}
                                Pass <code className="text-xs">isActive</code> to the current{" "}
                                <code className="text-xs">PaginationLink</code> so users know where
                                they are.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use ellipsis for large ranges.
                                </strong>{" "}
                                Show a window of 3–5 pages around the active page and collapse the
                                rest with <code className="text-xs">PaginationEllipsis</code>.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Disable Previous on page 1, Next on last page.
                                </strong>{" "}
                                Prevent navigation to non-existent pages by omitting or disabling
                                the relevant arrow.
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
                                    Don&apos;t show all pages for large datasets.
                                </strong>{" "}
                                Listing 100 page links is unusable — always collapse with ellipsis.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use pagination for infinite scroll.
                                </strong>{" "}
                                If content loads automatically on scroll, a pagination control is
                                contradictory and confusing.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t omit the page count context.
                                </strong>{" "}
                                When possible pair pagination with a &quot;Page X of Y&quot; label
                                so users understand the total scope.
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
                            <code className="text-xs">{"<Pagination>"}</code> renders a{" "}
                            <code className="text-xs">{"<nav>"}</code> with{" "}
                            <code className="text-xs">aria-label=&quot;pagination&quot;</code>.
                        </li>
                        <li>
                            <code className="text-xs">PaginationPrevious</code> has{" "}
                            <code className="text-xs">
                                aria-label=&quot;Go to previous page&quot;
                            </code>{" "}
                            and <code className="text-xs">PaginationNext</code> has{" "}
                            <code className="text-xs">aria-label=&quot;Go to next page&quot;</code>.
                        </li>
                        <li>
                            The active <code className="text-xs">PaginationLink</code> renders with{" "}
                            <code className="text-xs">aria-current=&quot;page&quot;</code>.
                        </li>
                        <li>
                            <code className="text-xs">PaginationEllipsis</code> is{" "}
                            <code className="text-xs">aria-hidden</code> — it contains a visually
                            hidden &quot;More pages&quot; label for screen readers.
                        </li>
                        <li>
                            All links accept standard <code className="text-xs">{"<a>"}</code> props
                            — pass an <code className="text-xs">onClick</code> handler for
                            client-side pagination instead of <code className="text-xs">href</code>.
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
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

// Client-side pagination (no href)
<PaginationLink onClick={() => setPage(2)}>2</PaginationLink>`}
                />
            </div>
        </div>
    );
}
