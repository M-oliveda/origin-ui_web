import { Check, X } from "lucide-react";

import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";

import { columns, type IPayment } from "./columns";

const payments: IPayment[] = [
    { id: "728ed52f", amount: 100, status: "pending", email: "alice@example.com" },
    { id: "489e1d42", amount: 125, status: "processing", email: "bob@example.com" },
    { id: "a3f5c6d7", amount: 250, status: "success", email: "carol@example.com" },
    { id: "b2e4d8f1", amount: 85, status: "failed", email: "dave@example.com" },
    { id: "c9f1a2b3", amount: 310, status: "success", email: "eve@example.com" },
    { id: "d7e3b9c4", amount: 45, status: "pending", email: "frank@example.com" },
    { id: "e6d2a8f5", amount: 780, status: "processing", email: "grace@example.com" },
    { id: "f5c1b7e6", amount: 200, status: "success", email: "heidi@example.com" },
    { id: "g4b0c6d7", amount: 55, status: "failed", email: "ivan@example.com" },
    { id: "h3a9b5e8", amount: 430, status: "pending", email: "judy@example.com" },
    { id: "i2f8a4d9", amount: 95, status: "success", email: "karl@example.com" },
    { id: "j1e7b3c0", amount: 175, status: "processing", email: "lena@example.com" },
];

export default function DataTablePage() {
    return (
        <div className="max-w-5xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Data Table</h1>
                <p className="text-muted-foreground text-sm">
                    A feature-rich data table built on TanStack Table and shadcn/ui&apos;s{" "}
                    <code className="text-xs">Table</code> primitives. Supports sorting, column
                    filtering, pagination, row selection, column visibility toggling, and row
                    actions out of the box.
                </p>
                <Separator />
            </div>

            {/* Demo */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Demo</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    All features active: type in the filter box to search by email, click column
                    headers to sort, open the <strong className="text-foreground">Columns</strong>{" "}
                    menu to toggle visibility, tick checkboxes to select rows, and use the{" "}
                    <strong className="text-foreground">⋯</strong> button on any row for row-level
                    actions.
                </p>
                <DataTable
                    columns={columns}
                    data={payments}
                    filterColumn="email"
                    filterPlaceholder="Filter emails..."
                />
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
                                    Define columns outside the component.
                                </strong>{" "}
                                Placing <code className="text-xs">columns</code> outside the render
                                function prevents the array reference from changing on every render.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use server-side models for large datasets.
                                </strong>{" "}
                                Pass <code className="text-xs">manualPagination</code> and{" "}
                                <code className="text-xs">manualSorting</code> to TanStack Table and
                                fetch data from a server action or API route.
                            </li>
                            <li>
                                <strong className="text-foreground">Provide stable row IDs.</strong>{" "}
                                Use <code className="text-xs">getRowId</code> to keep selection
                                state stable across pagination and re-fetches.
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
                                    Don&apos;t define columns inline.
                                </strong>{" "}
                                Inline column definitions recreate the array on every render,
                                causing unnecessary reconciliation work.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t load thousands of rows client-side.
                                </strong>{" "}
                                Client-side filtering and sorting works well for small datasets;
                                switch to server-side models for large ones.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t skip accessible labels on icon buttons.
                                </strong>{" "}
                                Checkbox columns and icon-only action buttons need{" "}
                                <code className="text-xs">aria-label</code> or{" "}
                                <code className="text-xs">sr-only</code> text.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Developer Reference */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Developer Reference</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="border-border rounded-lg border p-5">
                        <h4 className="mb-3 text-sm font-medium">DataTable Props</h4>
                        <dl className="space-y-2 text-sm">
                            {[
                                ["data", "Array of row data objects."],
                                ["columns", "TanStack ColumnDef<TData, TValue>[] array."],
                                ["filterColumn?", "Accessor key of the column to filter on."],
                                [
                                    "filterPlaceholder?",
                                    'Placeholder text for the filter input. Default: "Filter..."',
                                ],
                            ].map(([prop, desc]) => (
                                <div key={prop} className="flex gap-2">
                                    <dt className="text-muted-foreground w-40 shrink-0 font-mono text-xs">
                                        {prop}
                                    </dt>
                                    <dd className="text-muted-foreground">{desc}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <h4 className="mb-3 text-sm font-medium">Built-in Column Features</h4>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                            <li>
                                <strong className="text-foreground">Sorting</strong> — call{" "}
                                <code className="text-xs">column.toggleSorting()</code> in the
                                header render function.
                            </li>
                            <li>
                                <strong className="text-foreground">Column hiding</strong> — set{" "}
                                <code className="text-xs">enableHiding: false</code> to pin a column
                                in the Columns menu.
                            </li>
                            <li>
                                <strong className="text-foreground">Row selection</strong> — use{" "}
                                <code className="text-xs">id: &quot;select&quot;</code> with{" "}
                                <code className="text-xs">enableSorting: false</code> and{" "}
                                <code className="text-xs">enableHiding: false</code>.
                            </li>
                            <li>
                                <strong className="text-foreground">Row actions</strong> — use{" "}
                                <code className="text-xs">id: &quot;actions&quot;</code> with a{" "}
                                <code className="text-xs">DropdownMenu</code> in the cell renderer.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
