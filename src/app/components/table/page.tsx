"use client";

import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableRow,
    TableHead,
    TableCell,
    TableCaption,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

const invoices = [
    { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
    { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
    { id: "INV003", status: "Overdue", method: "Bank Transfer", amount: "$350.00" },
    { id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
];

const statusVariant: Record<string, "secondary" | "outline" | "destructive"> = {
    Paid: "secondary",
    Pending: "outline",
    Overdue: "destructive",
};

export default function TablePage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Table</h1>
                <p className="text-muted-foreground text-sm">
                    A structured data table built from semantic HTML elements. Supports headers,
                    body rows, an optional footer for summaries, and an optional caption. No sorting
                    or pagination built in — compose those separately.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Table>"}</code> is the scrollable wrapper around a{" "}
                    <code className="text-xs">{"<table>"}</code>.{" "}
                    <code className="text-xs">TableHeader</code> wraps the{" "}
                    <code className="text-xs">{"<thead>"}</code> section.{" "}
                    <code className="text-xs">TableBody</code> wraps{" "}
                    <code className="text-xs">{"<tbody>"}</code>.{" "}
                    <code className="text-xs">TableFooter</code> wraps{" "}
                    <code className="text-xs">{"<tfoot>"}</code> for summary rows.{" "}
                    <code className="text-xs">TableRow</code> is a{" "}
                    <code className="text-xs">{"<tr>"}</code>,{" "}
                    <code className="text-xs">TableHead</code> a{" "}
                    <code className="text-xs">{"<th>"}</code>, and{" "}
                    <code className="text-xs">TableCell</code> a{" "}
                    <code className="text-xs">{"<td>"}</code>.{" "}
                    <code className="text-xs">TableCaption</code> renders an accessible caption
                    above the table.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-24">Invoice</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.slice(0, 2).map((inv) => (
                                <TableRow key={inv.id}>
                                    <TableCell className="font-medium">{inv.id}</TableCell>
                                    <TableCell>
                                        <Badge variant={statusVariant[inv.status]}>
                                            {inv.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{inv.method}</TableCell>
                                    <TableCell className="text-right">{inv.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-4">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Full table — header, body, footer
                        </p>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-24">Invoice</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((inv) => (
                                    <TableRow key={inv.id}>
                                        <TableCell className="font-medium">{inv.id}</TableCell>
                                        <TableCell>
                                            <Badge variant={statusVariant[inv.status]}>
                                                {inv.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{inv.method}</TableCell>
                                        <TableCell className="text-right">{inv.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={3}>Total</TableCell>
                                    <TableCell className="text-right">$1,200.00</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With caption</p>
                        <Table>
                            <TableCaption>Recent invoices for your account.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Invoice</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.slice(0, 3).map((inv) => (
                                    <TableRow key={inv.id}>
                                        <TableCell className="font-medium">{inv.id}</TableCell>
                                        <TableCell>{inv.method}</TableCell>
                                        <TableCell className="text-right">{inv.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
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
                                    Right-align numeric columns.
                                </strong>{" "}
                                Numbers are easier to compare when they share the same right edge —
                                use{" "}
                                <code className="text-xs">className=&quot;text-right&quot;</code> on
                                both the header and cells.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use TableFooter for totals.
                                </strong>{" "}
                                Summary rows belong in <code className="text-xs">{"<tfoot>"}</code>{" "}
                                — this is semantically correct and visually distinct.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Add a TableCaption for data tables.
                                </strong>{" "}
                                Captions improve accessibility — screen readers announce them before
                                reading the table.
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
                                    Don&apos;t put too many columns on mobile.
                                </strong>{" "}
                                Tables don&apos;t reflow — wrap them in a scroll container or hide
                                less important columns at small breakpoints.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use tables for layout.
                                </strong>{" "}
                                Tables are for structured data. Use CSS grid or flexbox for page
                                layout.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t skip the header row.
                                </strong>{" "}
                                Every data table needs a{" "}
                                <code className="text-xs">TableHeader</code> — it communicates
                                column semantics to assistive technology.
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
                            <code className="text-xs">TableHead</code> renders{" "}
                            <code className="text-xs">{'<th scope="col">'}</code> — screen readers
                            use this to associate header cells with data cells.
                        </li>
                        <li>
                            <code className="text-xs">TableCaption</code> renders a{" "}
                            <code className="text-xs">{"<caption>"}</code> element, which is
                            announced before the table content by screen readers.
                        </li>
                        <li>
                            The <code className="text-xs">{"<Table>"}</code> wrapper adds{" "}
                            <code className="text-xs">overflow-x-auto</code> so wide tables scroll
                            horizontally rather than breaking the layout.
                        </li>
                        <li>
                            For sortable columns, add <code className="text-xs">aria-sort</code> to
                            the relevant <code className="text-xs">TableHead</code> and update it on
                            interaction.
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
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table"

<Table>
  <TableCaption>Recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((inv) => (
      <TableRow key={inv.id}>
        <TableCell className="font-medium">{inv.id}</TableCell>
        <TableCell>{inv.status}</TableCell>
        <TableCell className="text-right">{inv.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">$1,200.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
                />
            </div>
        </div>
    );
}
