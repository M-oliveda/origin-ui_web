"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { CodeBlock } from "@/app/components/code-block";

import { CopyToken } from "../copy-token";

const radiusScale = [
    { name: "rounded-xs", class: "rounded-xs", value: "calc(var(--radius) * 0.4)" },
    { name: "rounded-sm", class: "rounded-sm", value: "calc(var(--radius) * 0.6)" },
    { name: "rounded-md", class: "rounded-md", value: "calc(var(--radius) * 0.8)" },
    { name: "rounded-lg", class: "rounded-lg", value: "var(--radius)" },
    { name: "rounded-xl", class: "rounded-xl", value: "calc(var(--radius) * 1.4)" },
    { name: "rounded-2xl", class: "rounded-2xl", value: "calc(var(--radius) * 1.8)" },
    { name: "rounded-3xl", class: "rounded-3xl", value: "calc(var(--radius) * 2.2)" },
    { name: "rounded-4xl", class: "rounded-4xl", value: "calc(var(--radius) * 2.6)" },
    { name: "rounded-full", class: "rounded-full", value: "9999px" },
];

const borderWidths = [
    { name: "border", class: "border", value: "1px" },
    { name: "border-2", class: "border-2", value: "2px" },
    { name: "border-4", class: "border-4", value: "4px" },
    { name: "border-8", class: "border-8", value: "8px" },
];

const boxShadows = [
    {
        name: "shadow-2xs",
        class: "shadow-2xs",
        value: "0 1px rgb(0 0 0 / 0.05)",
    },
    {
        name: "shadow-xs",
        class: "shadow-xs",
        value: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
    {
        name: "shadow-sm",
        class: "shadow-sm",
        value: "0 1px 3px 0 rgb(0 0 0 / 0.1), ...",
    },
    {
        name: "shadow-md",
        class: "shadow-md",
        value: "0 4px 6px -1px rgb(0 0 0 / 0.1), ...",
    },
    {
        name: "shadow-lg",
        class: "shadow-lg",
        value: "0 10px 15px -3px rgb(0 0 0 / 0.1), ...",
    },
    {
        name: "shadow-xl",
        class: "shadow-xl",
        value: "0 20px 25px -5px rgb(0 0 0 / 0.1), ...",
    },
    {
        name: "shadow-2xl",
        class: "shadow-2xl",
        value: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    },
    {
        name: "shadow-none",
        class: "shadow-none",
        value: "none",
    },
];

const dropShadows = [
    {
        name: "drop-shadow-xs",
        class: "drop-shadow-xs",
        value: "0 1px 1px rgb(0 0 0 / 0.05)",
    },
    {
        name: "drop-shadow-sm",
        class: "drop-shadow-sm",
        value: "0 1px 2px rgb(0 0 0 / 0.15)",
    },
    {
        name: "drop-shadow-md",
        class: "drop-shadow-md",
        value: "0 3px 3px rgb(0 0 0 / 0.12)",
    },
    {
        name: "drop-shadow-lg",
        class: "drop-shadow-lg",
        value: "0 8px 8px rgb(0 0 0 / 0.1)",
    },
    {
        name: "drop-shadow-xl",
        class: "drop-shadow-xl",
        value: "0 16px 16px rgb(0 0 0 / 0.1)",
    },
    {
        name: "drop-shadow-2xl",
        class: "drop-shadow-2xl",
        value: "0 24px 24px rgb(0 0 0 / 0.15)",
    },
    {
        name: "drop-shadow-none",
        class: "drop-shadow-none",
        value: "none",
    },
];

const blurScale = [
    { name: "blur-none", class: "blur-none", value: "0px" },
    { name: "blur-xs", class: "blur-xs", value: "4px" },
    { name: "blur-sm", class: "blur-sm", value: "8px" },
    { name: "blur-md", class: "blur-md", value: "12px" },
    { name: "blur-lg", class: "blur-lg", value: "16px" },
    { name: "blur-xl", class: "blur-xl", value: "24px" },
    { name: "blur-2xl", class: "blur-2xl", value: "40px" },
    { name: "blur-3xl", class: "blur-3xl", value: "64px" },
];

const opacityScale = [
    { name: "opacity-0", class: "opacity-0", value: "0%" },
    { name: "opacity-5", class: "opacity-5", value: "5%" },
    { name: "opacity-10", class: "opacity-10", value: "10%" },
    { name: "opacity-20", class: "opacity-20", value: "20%" },
    { name: "opacity-25", class: "opacity-25", value: "25%" },
    { name: "opacity-30", class: "opacity-30", value: "30%" },
    { name: "opacity-40", class: "opacity-40", value: "40%" },
    { name: "opacity-50", class: "opacity-50", value: "50%" },
    { name: "opacity-60", class: "opacity-60", value: "60%" },
    { name: "opacity-70", class: "opacity-70", value: "70%" },
    { name: "opacity-75", class: "opacity-75", value: "75%" },
    { name: "opacity-80", class: "opacity-80", value: "80%" },
    { name: "opacity-90", class: "opacity-90", value: "90%" },
    { name: "opacity-95", class: "opacity-95", value: "95%" },
    { name: "opacity-100", class: "opacity-100", value: "100%" },
];

const animations = [
    {
        name: "animate-spin",
        class: "animate-spin",
        value: "spin 1s linear infinite",
        desc: "Continuous rotation, ideal for loading spinners",
    },
    {
        name: "animate-ping",
        class: "animate-ping",
        value: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        desc: "Scale and fade out, ideal for notification badges",
    },
    {
        name: "animate-pulse",
        class: "animate-pulse",
        value: "pulse 2s ease-in-out infinite",
        desc: "Gentle opacity fade, ideal for skeleton loaders",
    },
    {
        name: "animate-bounce",
        class: "animate-bounce",
        value: "bounce 1s infinite",
        desc: "Vertical bounce, ideal for scroll indicators",
    },
];

const easingCurves = [
    {
        name: "ease-in",
        class: "ease-in",
        value: "cubic-bezier(0.4, 0, 1, 1)",
        desc: "Starts slow, accelerates",
    },
    {
        name: "ease-out",
        class: "ease-out",
        value: "cubic-bezier(0, 0, 0.2, 1)",
        desc: "Starts fast, decelerates",
    },
    {
        name: "ease-in-out",
        class: "ease-in-out",
        value: "cubic-bezier(0.4, 0, 0.2, 1)",
        desc: "Smooth acceleration and deceleration",
    },
    {
        name: "ease-linear",
        class: "ease-linear",
        value: "linear",
        desc: "Constant speed, no acceleration",
    },
];

const transitionDurations = [
    { name: "duration-75", class: "duration-75", value: "75ms" },
    { name: "duration-100", class: "duration-100", value: "100ms" },
    { name: "duration-150", class: "duration-150", value: "150ms" },
    { name: "duration-200", class: "duration-200", value: "200ms" },
    { name: "duration-300", class: "duration-300", value: "300ms" },
    { name: "duration-500", class: "duration-500", value: "500ms" },
    { name: "duration-700", class: "duration-700", value: "700ms" },
    { name: "duration-1000", class: "duration-1000", value: "1000ms" },
];

function EasingDemo({ curve }: { curve: (typeof easingCurves)[number] }) {
    const [playing, setPlaying] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

    function play() {
        setPlaying(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        requestAnimationFrame(() => {
            setPlaying(true);
            timeoutRef.current = setTimeout(() => setPlaying(false), 1000);
        });
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={play}
            className="border-border hover:bg-muted/50 w-full space-y-3 rounded-lg border p-4 text-left transition-colors"
            aria-label={`Preview ${curve.name} easing`}
        >
            <div>
                <p className="text-sm font-medium">{curve.name}</p>
                <p className="text-muted-foreground text-xs">{curve.desc}</p>
                <code className="text-muted-foreground/60 text-[10px]">{curve.value}</code>
            </div>
            <div className="bg-muted relative h-2 rounded-full">
                <div
                    className="bg-primary absolute top-1/2 size-4 -translate-y-1/2 rounded-full transition-all duration-1000"
                    style={{
                        left: playing ? "calc(100% - 16px)" : "0px",
                        transitionTimingFunction: curve.value,
                    }}
                />
            </div>
        </button>
    );
}

export default function EffectsPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Effects</h1>
                <p className="text-muted-foreground text-sm">
                    Border radius, borders, shadows, blur, opacity, animations, and transition
                    tokens.
                </p>
                <Separator />
            </div>

            {/* Border Radius */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Border Radius</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Derived from the base <code className="text-xs">--radius: 0.625rem</code> token.
                    All values scale proportionally.
                </p>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-9">
                    {radiusScale.map((item) => (
                        <div key={item.name} className="flex flex-col items-center gap-2">
                            <div
                                className={`border-primary bg-primary/10 size-16 border-2 ${item.class}`}
                            />
                            <div className="text-center">
                                <CopyToken value={item.name} />
                                <p className="text-muted-foreground/60 text-[10px]">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Border Widths */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Border Widths</h3>
                <Separator />
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {borderWidths.map((item) => (
                        <div key={item.name} className="flex flex-col items-center gap-2">
                            <div
                                className={`border-primary bg-primary/5 size-20 rounded-lg ${item.class}`}
                            />
                            <div className="text-center">
                                <CopyToken value={item.name} />
                                <p className="text-muted-foreground/60 text-xs">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Box Shadows */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Box Shadows</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Elevation levels for cards, modals, and interactive elements. Shadows use{" "}
                    <code className="text-xs">--shadow-*</code> theme tokens.
                </p>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {boxShadows.map((item) => (
                        <div key={item.name} className="flex flex-col items-center gap-3">
                            <div
                                className={`border-border bg-background size-20 rounded-lg border ${item.class}`}
                            />
                            <div className="text-center">
                                <CopyToken value={item.name} />
                                <p className="text-muted-foreground/60 max-w-32 text-[10px] leading-tight">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Drop Shadows */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Drop Shadows</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Filter-based shadows that follow an element&apos;s shape including transparent
                    areas. Applied via CSS <code className="text-xs">filter: drop-shadow()</code>.
                </p>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {dropShadows.map((item) => (
                        <div key={item.name} className="flex flex-col items-center gap-3">
                            <div className={`bg-background size-20 rounded-lg ${item.class}`} />
                            <div className="text-center">
                                <CopyToken value={item.name} />
                                <p className="text-muted-foreground/60 max-w-32 text-[10px] leading-tight">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Blur */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Blur</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Gaussian blur filter values. Use <code className="text-xs">--blur-*</code>{" "}
                    tokens for consistent blur levels.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {blurScale.map((item) => (
                        <div key={item.name} className="flex flex-col items-center gap-2">
                            <div className="border-border relative size-20 overflow-hidden rounded-lg border">
                                <div className="from-primary via-brand-300 to-brand-600 absolute inset-0 bg-linear-to-br" />
                                <div className={`absolute inset-0 ${item.class}`} />
                            </div>
                            <div className="text-center">
                                <CopyToken value={item.name} />
                                <p className="text-muted-foreground/60 text-xs">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Opacity */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Opacity</h3>
                <Separator />
                <div className="grid grid-cols-5 gap-3 sm:grid-cols-8 lg:grid-cols-15">
                    {opacityScale.map((item) => (
                        <div key={item.name} className="flex flex-col items-center gap-1">
                            <div className={`bg-primary size-10 rounded-md ${item.class}`} />
                            <code className="text-muted-foreground text-[10px]">{item.value}</code>
                        </div>
                    ))}
                </div>
            </div>

            {/* Animations */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Animations</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Built-in keyframe animations defined as{" "}
                    <code className="text-xs">--animate-*</code> theme tokens. Hover over each card
                    to see the animation in action.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {animations.map((item) => (
                        <div
                            key={item.name}
                            className="group border-border flex flex-col items-center gap-3 rounded-lg border p-4"
                        >
                            <div
                                className={`bg-primary size-10 rounded-md ${item.class} paused group-hover:running`}
                            />
                            <div className="text-center">
                                <CopyToken value={item.name} />
                                <p className="text-muted-foreground/60 mt-1 text-[10px] leading-tight">
                                    {item.desc}
                                </p>
                                <code className="text-muted-foreground/40 mt-1 block text-[9px]">
                                    {item.value}
                                </code>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border-border bg-muted/30 rounded-lg border p-4">
                    <p className="mb-3 text-sm font-medium">Live Preview</p>
                    <div className="flex items-center justify-around gap-4">
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-primary size-8 animate-spin rounded-md" />
                            <code className="text-muted-foreground text-[10px]">spin</code>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="relative flex size-8 items-center justify-center">
                                <div className="bg-primary/75 absolute size-full animate-ping rounded-full" />
                                <div className="bg-primary size-4 rounded-full" />
                            </div>
                            <code className="text-muted-foreground text-[10px]">ping</code>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-primary size-8 animate-pulse rounded-md" />
                            <code className="text-muted-foreground text-[10px]">pulse</code>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-primary size-8 animate-bounce rounded-md" />
                            <code className="text-muted-foreground text-[10px]">bounce</code>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transition Easing */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Transition Easing</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Timing functions for CSS transitions. Click each card to preview the easing
                    curve. Defined as <code className="text-xs">--ease-*</code> theme tokens.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {easingCurves.map((curve) => (
                        <EasingDemo key={curve.name} curve={curve} />
                    ))}
                </div>
            </div>

            {/* Transition Durations */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Transition Durations</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Standard duration values for transitions and animations. Shorter durations for
                    micro-interactions, longer for page-level transitions.
                </p>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Class</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>CSS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transitionDurations.map((item) => (
                            <TableRow key={item.name}>
                                <TableCell>
                                    <CopyToken value={item.name} />
                                </TableCell>
                                <TableCell className="text-muted-foreground">
                                    {item.value}
                                </TableCell>
                                <TableCell>
                                    <code className="text-muted-foreground text-xs">
                                        transition-duration: {item.value}
                                    </code>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Focus Ring */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Focus Ring</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Tab into the elements below to see the focus ring styles. The ring color uses{" "}
                    <code className="text-xs">--ring</code> (brand-300, golden).
                </p>
                <div className="flex flex-wrap gap-4">
                    <Button variant="outline" aria-label="Demo focus ring on button">
                        Focus me (button)
                    </Button>
                    <Input
                        type="text"
                        placeholder="Focus me (input)"
                        className="w-auto"
                        aria-label="Demo focus ring on input"
                    />
                    <Button
                        variant="outline"
                        nativeButton={false}
                        render={<a href="#" />}
                        aria-label="Demo focus ring on link"
                    >
                        Focus me (link)
                    </Button>
                </div>
            </div>

            {/* Composition Patterns */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Composition Patterns</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Common effect combinations showing how tokens layer together in real components.
                    These patterns create depth and visual hierarchy.
                </p>
                <div className="space-y-4">
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Card elevation levels
                        </p>
                        <div className="flex flex-wrap items-end gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="border-border bg-card size-24 rounded-lg border p-4 shadow-none">
                                    <p className="text-muted-foreground text-[10px]">Flat</p>
                                </div>
                                <code className="text-muted-foreground text-[10px]">
                                    shadow-none
                                </code>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="border-border bg-card size-24 rounded-lg border p-4 shadow-sm">
                                    <p className="text-muted-foreground text-[10px]">Raised</p>
                                </div>
                                <code className="text-muted-foreground text-[10px]">shadow-sm</code>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="border-border bg-card size-24 rounded-lg border p-4 shadow-md">
                                    <p className="text-muted-foreground text-[10px]">Floating</p>
                                </div>
                                <code className="text-muted-foreground text-[10px]">shadow-md</code>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-card size-24 rounded-xl p-4 shadow-xl">
                                    <p className="text-muted-foreground text-[10px]">Overlay</p>
                                </div>
                                <code className="text-muted-foreground text-[10px]">shadow-xl</code>
                            </div>
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Interactive element states
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="border-border bg-card rounded-lg border px-4 py-2 text-sm">
                                Default
                            </div>
                            <div className="border-border bg-accent rounded-lg border px-4 py-2 text-sm shadow-sm">
                                Hover
                            </div>
                            <div className="border-border bg-accent translate-y-px rounded-lg border px-4 py-2 text-sm shadow-xs">
                                Active
                            </div>
                            <div className="border-ring ring-ring/50 rounded-lg border px-4 py-2 text-sm ring-3">
                                Focused
                            </div>
                            <div className="border-border bg-card rounded-lg border px-4 py-2 text-sm opacity-50">
                                Disabled
                            </div>
                        </div>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Glassmorphism
                        </p>
                        <div className="from-primary via-brand-300 to-brand-600 relative h-32 overflow-hidden rounded-lg bg-linear-to-br">
                            <div className="absolute inset-x-4 top-4 rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                                <p className="text-sm font-medium text-white">
                                    Frosted glass overlay
                                </p>
                                <p className="text-xs text-white/70">
                                    backdrop-blur-md + bg-white/10
                                </p>
                            </div>
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
                                    Use shadow to indicate elevation.
                                </strong>{" "}
                                Flat elements sit on the page, raised elements float above. Use{" "}
                                <code className="text-xs">shadow-sm</code> for cards,{" "}
                                <code className="text-xs">shadow-lg</code> for dropdowns, and{" "}
                                <code className="text-xs">shadow-xl</code> for modals.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Match radius to component size.
                                </strong>{" "}
                                Small elements get <code className="text-xs">rounded-sm</code>,
                                medium components get <code className="text-xs">rounded-lg</code>,
                                and large panels get <code className="text-xs">rounded-xl</code>.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use ease-out for entering elements.
                                </strong>{" "}
                                Elements appearing on screen should decelerate.{" "}
                                <code className="text-xs">ease-in</code> is for elements leaving the
                                viewport.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep animations under 300ms for micro-interactions.
                                </strong>{" "}
                                Hover, toggle, and button press animations should feel instant.
                                Reserve <code className="text-xs">duration-500</code>+ for page
                                transitions.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Derive radius from the --radius token.
                                </strong>{" "}
                                The base token ensures all corners stay proportional when the theme
                                is adjusted.
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
                                    Don&apos;t stack multiple shadow layers manually.
                                </strong>{" "}
                                Use the predefined shadow scale instead of combining{" "}
                                <code className="text-xs">shadow-sm</code> with custom box shadows.
                                The scale is designed for consistent elevation.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use blur on text content.
                                </strong>{" "}
                                Blurring text makes it unreadable. Use blur only on background
                                overlays and decorative elements.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t animate layout properties.
                                </strong>{" "}
                                Avoid animating <code className="text-xs">width</code>,{" "}
                                <code className="text-xs">height</code>, or{" "}
                                <code className="text-xs">margin</code>. Use{" "}
                                <code className="text-xs">transform</code> and{" "}
                                <code className="text-xs">opacity</code> for 60fps performance.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use animation for critical information.
                                </strong>{" "}
                                Users with <code className="text-xs">prefers-reduced-motion</code>{" "}
                                may not see animations. Ensure the UI is fully functional without
                                them.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t mix border-radius values within a component.
                                </strong>{" "}
                                If a card uses <code className="text-xs">rounded-lg</code>, inner
                                elements should use <code className="text-xs">rounded-md</code> or
                                smaller for visual nesting.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Developer Reference */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Developer Reference</h3>
                <Separator />
                <div className="space-y-4">
                    <div className="border-border rounded-lg border p-5">
                        <h4 className="mb-2 text-sm font-medium">Accessibility</h4>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                            <li>
                                The focus ring uses <code className="text-xs">focus-visible</code>{" "}
                                &mdash; it only appears on keyboard navigation, not mouse clicks.
                            </li>
                            <li>
                                Respect <code className="text-xs">prefers-reduced-motion</code>. All
                                built-in animations should be wrapped with{" "}
                                <code className="text-xs">motion-safe:animate-*</code> or disabled
                                entirely for users who prefer reduced motion.
                            </li>
                            <li>
                                Never rely on shadow alone to indicate focus or selection. Shadows
                                can be invisible in high-contrast mode. Pair with borders or
                                outlines.
                            </li>
                            <li>
                                <code className="text-xs">opacity</code> values below 50% make
                                content hard to read for low-vision users. Use{" "}
                                <code className="text-xs">text-muted-foreground</code> instead of
                                applying opacity to text.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`// Border radius (derived from --radius: 0.625rem)
<div className="rounded-sm">Small radius</div>
<div className="rounded-lg">Base radius</div>
<div className="rounded-xl">Large radius</div>
<div className="rounded-full">Pill / circle</div>

// Elevation with shadows
<div className="shadow-sm">Card</div>
<div className="shadow-md">Dropdown</div>
<div className="shadow-lg">Popover</div>
<div className="shadow-xl">Modal</div>

// Blur and glass effects
<div className="backdrop-blur-md bg-white/10">
  Frosted glass
</div>

// Animations (hover to play)
<div className="animate-spin">Spinner</div>
<div className="animate-pulse">Skeleton loader</div>

// Transitions
<button className="transition-colors duration-150 ease-out
  hover:bg-accent">
  Hover me
</button>

// Focus ring
<button className="focus-visible:ring-3 focus-visible:ring-ring/50
  focus-visible:border-ring">
  Keyboard focusable
</button>

// Reduced motion support
<div className="motion-safe:animate-bounce">
  Respects user preferences
</div>`}
                />
            </div>
        </div>
    );
}
