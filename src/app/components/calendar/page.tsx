"use client";

import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function CalendarPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
                <p className="text-muted-foreground text-sm">
                    A date picker calendar component built on react-day-picker. Supports single date
                    selection, date range selection, multiple months, and custom day rendering.
                    Responsive layout switches from vertical to horizontal on wider screens.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Calendar>"}</code> renders a full calendar grid
                    with navigation arrows, weekday headers, and day buttons. Uses{" "}
                    <code className="text-xs">data-slot=&quot;calendar&quot;</code> and provides
                    data attributes for selected, range, today, and outside days.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex justify-center">
                        <Calendar mode="single" className="border-border rounded-lg border" />
                    </div>
                </div>
            </div>

            {/* Modes */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Selection Modes</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The calendar supports single date selection and range selection modes via the{" "}
                    <code className="text-xs">mode</code> prop.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Single selection
                        </p>
                        <Calendar mode="single" className="border-border rounded-lg border" />
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Range selection</p>
                        <Calendar mode="range" className="border-border rounded-lg border" />
                    </div>
                </div>
            </div>

            {/* Enhanced Navigation */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Enhanced Navigation</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Use <code className="text-xs">showTodayButton</code> to add a
                    &ldquo;Today&rdquo; button above the grid that snaps the viewed month back to
                    the current date. Use{" "}
                    <code className="text-xs">captionLayout=&quot;dropdown&quot;</code> with{" "}
                    <code className="text-xs">startMonth</code> /{" "}
                    <code className="text-xs">endMonth</code> to replace the static caption with
                    month and year dropdowns for faster navigation.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Today button + dropdown navigation
                        </p>
                        <Calendar
                            mode="single"
                            showTodayButton
                            captionLayout="dropdown"
                            startMonth={new Date(new Date().getFullYear() - 10, 0)}
                            endMonth={new Date(new Date().getFullYear() + 10, 11)}
                            className="border-border rounded-lg border"
                        />
                    </div>
                    <div className="border-border space-y-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Month &amp; year dropdown only
                        </p>
                        <Calendar
                            mode="single"
                            captionLayout="dropdown"
                            startMonth={new Date(new Date().getFullYear() - 10, 0)}
                            endMonth={new Date(new Date().getFullYear() + 10, 11)}
                            className="border-border rounded-lg border"
                        />
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
                                <strong className="text-foreground">Use for date selection.</strong>{" "}
                                Calendar is ideal when users need to pick a specific date or range
                                visually.
                            </li>
                            <li>
                                <strong className="text-foreground">Show outside days.</strong> The
                                showOutsideDays prop (on by default) helps users understand the date
                                context.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Pair with a Popover for inline use.
                                </strong>{" "}
                                Wrap the calendar in a Popover for space-efficient date pickers.
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
                                    Don&apos;t use for known dates.
                                </strong>{" "}
                                If users are entering a known date (birthday), a text input with
                                date format is faster.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t show too many months.
                                </strong>{" "}
                                More than 2 side-by-side months creates layout issues on smaller
                                screens.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t forget disabled dates.
                                </strong>{" "}
                                Use the disabled prop to prevent selection of unavailable dates.
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
                            Built on react-day-picker &mdash; implements WAI-ARIA date picker
                            pattern.
                        </li>
                        <li>Arrow keys navigate between days, Page Up/Down for months.</li>
                        <li>
                            Day buttons announce their date and selection state to screen readers.
                        </li>
                        <li>
                            Today&apos;s date is highlighted via{" "}
                            <code className="text-xs">data-today</code>.
                        </li>
                        <li>
                            Range selection uses <code className="text-xs">data-range-start</code>,{" "}
                            <code className="text-xs">data-range-end</code>,{" "}
                            <code className="text-xs">data-range-middle</code>.
                        </li>
                        <li>Responsive layout: flex-col on mobile, md:flex-row for multi-month.</li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { Calendar } from "@/components/ui/calendar"

// Single date selection
const [date, setDate] = React.useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-lg border border-border"
/>

// Range selection
const [range, setRange] = React.useState<DateRange | undefined>()

<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
/>

// With Today button — snaps the viewed month back to today
<Calendar
  mode="single"
  showTodayButton
  className="rounded-lg border border-border"
/>

// Month & year dropdown navigation
<Calendar
  mode="single"
  captionLayout="dropdown"
  startMonth={new Date(new Date().getFullYear() - 10, 0)}
  endMonth={new Date(new Date().getFullYear() + 10, 11)}
  className="rounded-lg border border-border"
/>

// Combined: Today button + dropdown navigation
<Calendar
  mode="single"
  showTodayButton
  captionLayout="dropdown"
  startMonth={new Date(new Date().getFullYear() - 10, 0)}
  endMonth={new Date(new Date().getFullYear() + 10, 11)}
  className="rounded-lg border border-border"
/>

// With disabled dates
<Calendar
  mode="single"
  disabled={{ before: new Date() }}
/>

// Multiple months
<Calendar
  mode="single"
  numberOfMonths={2}
/>`}
                />
            </div>
        </div>
    );
}
