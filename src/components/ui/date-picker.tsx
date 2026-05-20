"use client";

import { useState } from "react";
import { format } from "date-fns";
import { type DateRange } from "react-day-picker";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface DatePickerProps {
    value?: Date;
    onValueChange?: (date: Date | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

function DatePicker({
    value,
    onValueChange,
    placeholder = "Pick a date",
    disabled = false,
    className,
}: DatePickerProps) {
    const [internalDate, setInternalDate] = useState<Date | undefined>(undefined);
    const isControlled = value !== undefined || onValueChange !== undefined;
    const date = isControlled ? value : internalDate;

    function handleSelect(selected: Date | undefined) {
        if (!isControlled) setInternalDate(selected);
        onValueChange?.(selected);
    }

    return (
        <Popover>
            <PopoverTrigger
                render={
                    <Button
                        variant="outline"
                        disabled={disabled}
                        aria-label={date ? format(date, "PPP") : placeholder}
                        className={cn(
                            "w-[240px] justify-start gap-2 text-left font-normal",
                            className,
                        )}
                    />
                }
            >
                <CalendarIcon className="text-muted-foreground size-4" />
                {date ? (
                    <span>{format(date, "PPP")}</span>
                ) : (
                    <span className="text-muted-foreground">{placeholder}</span>
                )}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={handleSelect} autoFocus />
            </PopoverContent>
        </Popover>
    );
}

interface DateRangePickerProps {
    value?: DateRange;
    onValueChange?: (range: DateRange | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

function DateRangePicker({
    value,
    onValueChange,
    placeholder = "Pick a date range",
    disabled = false,
    className,
}: DateRangePickerProps) {
    const [internalRange, setInternalRange] = useState<DateRange | undefined>(undefined);
    const isControlled = value !== undefined || onValueChange !== undefined;
    const range = isControlled ? value : internalRange;

    function handleSelect(selected: DateRange | undefined) {
        if (!isControlled) setInternalRange(selected);
        onValueChange?.(selected);
    }

    const label = range?.from
        ? range.to
            ? `${format(range.from, "LLL dd, y")} – ${format(range.to, "LLL dd, y")}`
            : format(range.from, "LLL dd, y")
        : placeholder;

    return (
        <Popover>
            <PopoverTrigger
                render={
                    <Button
                        variant="outline"
                        disabled={disabled}
                        aria-label={label}
                        className={cn(
                            "w-[300px] justify-start gap-2 text-left font-normal",
                            className,
                        )}
                    />
                }
            >
                <CalendarIcon className="text-muted-foreground size-4" />
                {range?.from ? (
                    <span>{label}</span>
                ) : (
                    <span className="text-muted-foreground">{placeholder}</span>
                )}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="range"
                    selected={range}
                    onSelect={handleSelect}
                    numberOfMonths={2}
                    autoFocus
                />
            </PopoverContent>
        </Popover>
    );
}

interface DatePickerWithPresetsProps {
    presets?: ReadonlyArray<{ label: string; days: number }>;
    value?: Date;
    onValueChange?: (date: Date | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}

const DEFAULT_PRESETS = [
    { label: "Today", days: 0 },
    { label: "Tomorrow", days: 1 },
    { label: "In 7 days", days: 7 },
    { label: "In 30 days", days: 30 },
] as const;

function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function DatePickerWithPresets({
    presets = DEFAULT_PRESETS,
    value,
    onValueChange,
    placeholder = "Pick a date",
    disabled = false,
    className,
}: DatePickerWithPresetsProps) {
    const [internalDate, setInternalDate] = useState<Date | undefined>(undefined);
    const isControlled = value !== undefined || onValueChange !== undefined;
    const date = isControlled ? value : internalDate;

    function handleSelect(selected: Date | undefined) {
        if (!isControlled) setInternalDate(selected);
        onValueChange?.(selected);
    }

    return (
        <Popover>
            <PopoverTrigger
                render={
                    <Button
                        variant="outline"
                        disabled={disabled}
                        aria-label={date ? format(date, "PPP") : placeholder}
                        className={cn(
                            "w-[240px] justify-start gap-2 text-left font-normal",
                            className,
                        )}
                    />
                }
            >
                <CalendarIcon className="text-muted-foreground size-4" />
                {date ? (
                    <span>{format(date, "PPP")}</span>
                ) : (
                    <span className="text-muted-foreground">{placeholder}</span>
                )}
            </PopoverTrigger>
            <PopoverContent className="flex w-auto flex-col gap-2 p-2">
                <div className="flex flex-col gap-1">
                    {presets.map((p) => (
                        <Button
                            key={p.label}
                            variant="ghost"
                            size="sm"
                            className="justify-start text-xs"
                            onClick={() => handleSelect(addDays(new Date(), p.days))}
                        >
                            {p.label}
                        </Button>
                    ))}
                </div>
                <Separator />
                <Calendar mode="single" selected={date} onSelect={handleSelect} autoFocus />
            </PopoverContent>
        </Popover>
    );
}

export { DatePicker, DateRangePicker, DatePickerWithPresets };
