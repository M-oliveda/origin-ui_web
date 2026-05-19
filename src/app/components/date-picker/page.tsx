"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Check, X } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { DatePicker, DateRangePicker, DatePickerWithPresets } from "@/components/ui/date-picker";

function DateOfBirthPicker() {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const currentYear = new Date().getFullYear();

    return (
        <Popover>
            <PopoverTrigger
                render={
                    <Button
                        variant="outline"
                        aria-label={date ? format(date, "PPP") : "Pick your date of birth"}
                        className="w-[240px] justify-start gap-2 text-left font-normal"
                    />
                }
            >
                <CalendarIcon className="text-muted-foreground size-4" />
                {date ? (
                    <span>{format(date, "PPP")}</span>
                ) : (
                    <span className="text-muted-foreground">Date of birth</span>
                )}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    captionLayout="dropdown"
                    startMonth={new Date(currentYear - 100, 0)}
                    endMonth={new Date(currentYear, 11)}
                    defaultMonth={new Date(currentYear - 30, 0)}
                    autoFocus
                />
            </PopoverContent>
        </Popover>
    );
}

export default function DatePickerPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">DatePicker</h1>
                <p className="text-muted-foreground text-sm">
                    A date picker pattern composed from <code className="text-xs">Popover</code>,{" "}
                    <code className="text-xs">Button</code>, and{" "}
                    <code className="text-xs">Calendar</code>. Supports single date selection, date
                    ranges, date-of-birth dropdowns, and quick-select presets.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A <code className="text-xs">{"<Popover>"}</code> wraps a{" "}
                    <code className="text-xs">{"<PopoverTrigger>"}</code> rendered as a{" "}
                    <code className="text-xs">{"<Button>"}</code> and a{" "}
                    <code className="text-xs">{"<PopoverContent>"}</code> containing a{" "}
                    <code className="text-xs">{"<Calendar>"}</code>. The trigger displays the
                    formatted selection or a placeholder when no date is selected.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex justify-center">
                        <DatePicker />
                    </div>
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variants</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">Basic</p>
                        <p className="text-muted-foreground/70 text-xs">
                            Single date via <code className="text-xs">mode=&quot;single&quot;</code>
                            .
                        </p>
                        <div className="border-border bg-muted/30 rounded-lg border p-4">
                            <DatePicker />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">Range</p>
                        <p className="text-muted-foreground/70 text-xs">
                            Start and end date via{" "}
                            <code className="text-xs">mode=&quot;range&quot;</code> with two months
                            visible.
                        </p>
                        <div className="border-border bg-muted/30 rounded-lg border p-4">
                            <DateRangePicker />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">Date of Birth</p>
                        <p className="text-muted-foreground/70 text-xs">
                            Dropdown navigation via{" "}
                            <code className="text-xs">captionLayout=&quot;dropdown&quot;</code> for
                            fast decade navigation.
                        </p>
                        <div className="border-border bg-muted/30 rounded-lg border p-4">
                            <DateOfBirthPicker />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">With Presets</p>
                        <p className="text-muted-foreground/70 text-xs">
                            Quick-select shortcuts (Today, Tomorrow, In 7 days, In 30 days) above
                            the calendar grid.
                        </p>
                        <div className="border-border bg-muted/30 rounded-lg border p-4">
                            <DatePickerWithPresets />
                        </div>
                    </div>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">
                            Default (no selection)
                        </p>
                        <Button
                            variant="outline"
                            aria-label="Pick a date"
                            className="w-[240px] justify-start gap-2 font-normal"
                        >
                            <CalendarIcon className="text-muted-foreground size-4" />
                            <span className="text-muted-foreground">Pick a date</span>
                        </Button>
                    </div>
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">With selection</p>
                        <Button
                            variant="outline"
                            aria-label="January 20th, 2025"
                            className="w-[240px] justify-start gap-2 font-normal"
                        >
                            <CalendarIcon className="text-muted-foreground size-4" />
                            <span>January 20th, 2025</span>
                        </Button>
                    </div>
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">Disabled</p>
                        <DatePicker disabled />
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
                                    Show the selected value in the trigger.
                                </strong>{" "}
                                Format it clearly (e.g. &ldquo;Jan 20, 2025&rdquo;) so users can
                                confirm their choice without reopening the popover.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use dropdown navigation for date of birth.
                                </strong>{" "}
                                <code className="text-xs">captionLayout=&quot;dropdown&quot;</code>{" "}
                                prevents users from clicking through decades of months one at a
                                time.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Add presets for relative dates.
                                </strong>{" "}
                                Shortcuts like &ldquo;Today&rdquo; and &ldquo;In 7 days&rdquo;
                                reduce clicks for common scheduling scenarios.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Provide an accessible trigger label.
                                </strong>{" "}
                                Use <code className="text-xs">aria-label</code> on the trigger
                                button to announce both the current value and role to screen
                                readers.
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
                                    Don&apos;t use a date picker for well-known past dates.
                                </strong>{" "}
                                For fixed historical dates, a masked text input (MM/DD/YYYY) is
                                faster than calendar navigation.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t skip disabled date constraints.
                                </strong>{" "}
                                Pass a <code className="text-xs">disabled</code> matcher to block
                                unavailable dates — e.g.{" "}
                                <code className="text-xs">{`{ before: new Date() }`}</code> for
                                future-only inputs.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t omit <code className="text-xs">autoFocus</code>{" "}
                                    inside a popover.
                                </strong>{" "}
                                Without it, keyboard users must tab multiple times to reach the
                                calendar grid after opening the popover.
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
                    <h4 className="mb-3 text-sm font-medium">Accessibility</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            The trigger button must have an{" "}
                            <code className="text-xs">aria-label</code> reflecting the current
                            selection — the icon alone is not sufficient for screen readers.
                        </li>
                        <li>
                            <code className="text-xs">PopoverContent</code> opens with{" "}
                            <code className="text-xs">role=&quot;dialog&quot;</code>. Pass{" "}
                            <code className="text-xs">autoFocus</code> to{" "}
                            <code className="text-xs">Calendar</code> so focus moves into the grid
                            immediately on open.
                        </li>
                        <li>
                            Arrow keys navigate between days; Page Up / Page Down change months;
                            Home / End jump to the start or end of the week.
                        </li>
                        <li>ESC closes the popover and returns focus to the trigger button.</li>
                        <li>
                            Range endpoints are communicated via{" "}
                            <code className="text-xs">data-range-start</code> and{" "}
                            <code className="text-xs">data-range-end</code> attributes on day
                            buttons.
                        </li>
                    </ul>
                </div>
                <div className="border-border rounded-lg border p-5">
                    <h4 className="mb-3 text-sm font-medium">Prop Reference</h4>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-border border-b">
                                    <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                        Prop
                                    </th>
                                    <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                        Component
                                    </th>
                                    <th className="text-muted-foreground py-3 text-left font-medium">
                                        Purpose
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {(
                                    [
                                        [
                                            "value",
                                            "DatePicker",
                                            "Controlled selected date (Date | undefined)",
                                        ],
                                        [
                                            "onValueChange",
                                            "DatePicker",
                                            "Callback when the selected date changes",
                                        ],
                                        [
                                            "placeholder",
                                            "DatePicker",
                                            'Trigger text when no date is selected (default: "Pick a date")',
                                        ],
                                        ["disabled", "DatePicker", "Disables the trigger button"],
                                        [
                                            "value",
                                            "DateRangePicker",
                                            "Controlled selected range (DateRange | undefined)",
                                        ],
                                        [
                                            "onValueChange",
                                            "DateRangePicker",
                                            "Callback when the selected range changes",
                                        ],
                                        [
                                            "presets",
                                            "DatePickerWithPresets",
                                            "Array of { label, days } shortcuts above the calendar",
                                        ],
                                        [
                                            "autoFocus",
                                            "Calendar",
                                            "Moves DOM focus into the calendar grid on mount",
                                        ],
                                        [
                                            "captionLayout",
                                            "Calendar",
                                            '"label" (default) | "dropdown" — adds month/year selects',
                                        ],
                                        [
                                            "disabled",
                                            "Calendar",
                                            "Matcher to mark dates as unselectable",
                                        ],
                                    ] as const
                                ).map(([prop, component, purpose], i) => (
                                    <tr
                                        key={`${prop}-${i}`}
                                        className="border-border border-b last:border-0"
                                    >
                                        <td className="py-3 pr-4">
                                            <code className="text-xs">{prop}</code>
                                        </td>
                                        <td className="text-muted-foreground py-3 pr-4 text-xs">
                                            {component}
                                        </td>
                                        <td className="text-muted-foreground py-3 text-xs">
                                            {purpose}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { DatePicker, DateRangePicker, DatePickerWithPresets } from "@/components/ui/date-picker"

// Uncontrolled single date
<DatePicker placeholder="Pick a date" />

// Controlled single date
const [date, setDate] = useState<Date | undefined>(undefined)
<DatePicker value={date} onValueChange={setDate} />

// Date range
const [range, setRange] = useState<DateRange | undefined>(undefined)
<DateRangePicker value={range} onValueChange={setRange} />

// With quick-select presets
<DatePickerWithPresets />

// Custom presets
<DatePickerWithPresets
  presets={[
    { label: "Today", days: 0 },
    { label: "Next week", days: 7 },
    { label: "Next month", days: 30 },
  ]}
/>

// Disabled
<DatePicker disabled />

// ── Building from primitives (for custom layouts) ──────────────────────────
import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

const [date, setDate] = useState<Date | undefined>(undefined)

<Popover>
  <PopoverTrigger
    render={
      <Button
        variant="outline"
        aria-label={date ? format(date, "PPP") : "Pick a date"}
        className="w-[240px] justify-start gap-2 font-normal"
      />
    }
  >
    <CalendarIcon className="size-4 text-muted-foreground" />
    {date
      ? <span>{format(date, "PPP")}</span>
      : <span className="text-muted-foreground">Pick a date</span>
    }
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={{ before: new Date() }}
      autoFocus
    />
  </PopoverContent>
</Popover>`}
                />
            </div>
        </div>
    );
}
