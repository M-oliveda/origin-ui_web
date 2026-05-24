"use client";

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
import { useState } from "react";
import { toast } from "sonner";
import {
    Hexagon,
    Activity,
    AlertCircle,
    AlignCenter,
    AlignLeft,
    AlignRight,
    ArrowDownRight,
    ArrowUpRight,
    BarChart3,
    Bell,
    Bold,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    CircleAlert,
    CircleCheck,
    Code,
    Code2,
    Copy,
    CreditCard,
    DollarSign,
    Eye,
    EyeOff,
    FileText,
    FolderOpen,
    Globe,
    Inbox,
    Info,
    Italic,
    Layers,
    LayoutDashboard,
    Loader2,
    Lock,
    LogIn,
    LogOut,
    Mail,
    Megaphone,
    MoreHorizontal,
    OctagonX,
    Package,
    PanelLeft,
    Search,
    Settings,
    Shield,
    Sparkles,
    Star,
    Terminal,
    TrendingDown,
    TrendingUp,
    TriangleAlert,
    Underline,
    User,
    UserCircle,
    Users,
    X,
    Zap,
    type LucideIcon,
} from "lucide-react";

import { CodeBlock } from "@/app/components/code-block";

import { CopyToken } from "../copy-token";

const iconSizes = [
    { name: "size-3", class: "size-3", px: "12px" },
    { name: "size-3.5", class: "size-3.5", px: "14px" },
    { name: "size-4", class: "size-4", px: "16px" },
    { name: "size-5", class: "size-5", px: "20px" },
    { name: "size-6", class: "size-6", px: "24px" },
    { name: "size-8", class: "size-8", px: "32px" },
    { name: "size-10", class: "size-10", px: "40px" },
    { name: "size-12", class: "size-12", px: "48px" },
];

const iconStrokeWidths = [
    { name: "strokeWidth={1}", value: 1, desc: "Thin" },
    { name: "strokeWidth={1.5}", value: 1.5, desc: "Default" },
    { name: "strokeWidth={2}", value: 2, desc: "Medium" },
    { name: "strokeWidth={2.5}", value: 2.5, desc: "Bold" },
];

const iconLibrary: { name: string; icon: LucideIcon; category: string }[] = [
    // Navigation
    { name: "ChevronDown", icon: ChevronDown, category: "Navigation" },
    { name: "ChevronUp", icon: ChevronUp, category: "Navigation" },
    { name: "ChevronLeft", icon: ChevronLeft, category: "Navigation" },
    { name: "ChevronRight", icon: ChevronRight, category: "Navigation" },
    { name: "ArrowUpRight", icon: ArrowUpRight, category: "Navigation" },
    { name: "ArrowDownRight", icon: ArrowDownRight, category: "Navigation" },
    { name: "PanelLeft", icon: PanelLeft, category: "Navigation" },
    { name: "MoreHorizontal", icon: MoreHorizontal, category: "Navigation" },

    // Actions
    { name: "Search", icon: Search, category: "Actions" },
    { name: "Check", icon: Check, category: "Actions" },
    { name: "X", icon: X, category: "Actions" },
    { name: "Copy", icon: Copy, category: "Actions" },
    { name: "Eye", icon: Eye, category: "Actions" },
    { name: "EyeOff", icon: EyeOff, category: "Actions" },
    { name: "LogIn", icon: LogIn, category: "Actions" },
    { name: "LogOut", icon: LogOut, category: "Actions" },
    { name: "Settings", icon: Settings, category: "Actions" },
    { name: "Lock", icon: Lock, category: "Actions" },

    // Status & Feedback
    { name: "CircleCheck", icon: CircleCheck, category: "Status" },
    { name: "CircleAlert", icon: CircleAlert, category: "Status" },
    { name: "AlertCircle", icon: AlertCircle, category: "Status" },
    { name: "TriangleAlert", icon: TriangleAlert, category: "Status" },
    { name: "OctagonX", icon: OctagonX, category: "Status" },
    { name: "Info", icon: Info, category: "Status" },
    { name: "Loader2", icon: Loader2, category: "Status" },

    // Content & Data
    { name: "FileText", icon: FileText, category: "Content" },
    { name: "FolderOpen", icon: FolderOpen, category: "Content" },
    { name: "Inbox", icon: Inbox, category: "Content" },
    { name: "Mail", icon: Mail, category: "Content" },
    { name: "Bell", icon: Bell, category: "Content" },
    { name: "Package", icon: Package, category: "Content" },
    { name: "Layers", icon: Layers, category: "Content" },

    // Text Formatting
    { name: "Bold", icon: Bold, category: "Formatting" },
    { name: "Italic", icon: Italic, category: "Formatting" },
    { name: "Underline", icon: Underline, category: "Formatting" },
    { name: "AlignLeft", icon: AlignLeft, category: "Formatting" },
    { name: "AlignCenter", icon: AlignCenter, category: "Formatting" },
    { name: "AlignRight", icon: AlignRight, category: "Formatting" },
    { name: "Code", icon: Code, category: "Formatting" },
    { name: "Code2", icon: Code2, category: "Formatting" },
    { name: "Terminal", icon: Terminal, category: "Formatting" },

    // Users & Account
    { name: "User", icon: User, category: "Users" },
    { name: "UserCircle", icon: UserCircle, category: "Users" },
    { name: "Users", icon: Users, category: "Users" },
    { name: "CreditCard", icon: CreditCard, category: "Users" },

    // Data & Analytics
    { name: "BarChart3", icon: BarChart3, category: "Analytics" },
    { name: "Activity", icon: Activity, category: "Analytics" },
    { name: "TrendingUp", icon: TrendingUp, category: "Analytics" },
    { name: "TrendingDown", icon: TrendingDown, category: "Analytics" },
    { name: "DollarSign", icon: DollarSign, category: "Analytics" },

    // Feature & Marketing
    { name: "Star", icon: Star, category: "Feature" },
    { name: "Zap", icon: Zap, category: "Feature" },
    { name: "Shield", icon: Shield, category: "Feature" },
    { name: "Globe", icon: Globe, category: "Feature" },
    { name: "Sparkles", icon: Sparkles, category: "Feature" },
    { name: "Megaphone", icon: Megaphone, category: "Feature" },
    { name: "LayoutDashboard", icon: LayoutDashboard, category: "Feature" },

    // Brand
    { name: "Hexagon", icon: Hexagon, category: "Brand" },
];

const categories = [
    "Navigation",
    "Actions",
    "Status",
    "Content",
    "Formatting",
    "Users",
    "Analytics",
    "Feature",
    "Brand",
];

export default function IconographyPage() {
    const [filter, setFilter] = useState("");

    const filteredIcons = filter
        ? iconLibrary.filter(
              (i) =>
                  i.name.toLowerCase().includes(filter.toLowerCase()) ||
                  i.category.toLowerCase().includes(filter.toLowerCase()),
          )
        : iconLibrary;

    const groupedIcons = categories
        .map((cat) => ({
            category: cat,
            icons: filteredIcons.filter((i) => i.category === cat),
        }))
        .filter((g) => g.icons.length > 0);

    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Iconography</h1>
                <p className="text-muted-foreground text-sm">
                    Brand icon, icon library reference, sizing conventions, and usage guidelines.
                </p>
                <Separator />
            </div>

            {/* Origin UI Icon */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Origin UI Icon</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The Origin UI brand mark is a Hexagon set on a{" "}
                    <code className="text-xs">bg-primary</code> background with{" "}
                    <code className="text-xs">text-primary-foreground</code> fill. It adapts
                    automatically to light and dark themes.
                </p>

                {/* Icon showcase */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {/* Light appearance */}
                    <div className="space-y-4">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Light Theme
                        </p>
                        <div className="border-border flex items-center justify-center rounded-lg border bg-white p-10">
                            <div className="bg-brand-800 inline-flex items-center justify-center rounded-xl p-4">
                                <Hexagon className="size-12 text-white" />
                            </div>
                        </div>
                    </div>
                    {/* Dark appearance */}
                    <div className="space-y-4">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Dark Theme
                        </p>
                        <div className="border-border bg-brand-950 flex items-center justify-center rounded-lg border p-10">
                            <div className="bg-brand-100 inline-flex items-center justify-center rounded-xl p-4">
                                <Hexagon className="text-brand-950 size-12" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Size variants */}
                <div className="space-y-3">
                    <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                        Size Variants
                    </p>
                    <div className="border-border flex items-end gap-6 rounded-lg border p-6">
                        {[
                            {
                                label: "sm",
                                iconSize: "size-4",
                                padSize: "p-1",
                                radius: "rounded-md",
                            },
                            {
                                label: "default",
                                iconSize: "size-5",
                                padSize: "p-1.5",
                                radius: "rounded-md",
                            },
                            {
                                label: "lg",
                                iconSize: "size-7",
                                padSize: "p-2",
                                radius: "rounded-lg",
                            },
                            {
                                label: "xl",
                                iconSize: "size-10",
                                padSize: "p-3",
                                radius: "rounded-xl",
                            },
                        ].map((variant) => (
                            <div key={variant.label} className="flex flex-col items-center gap-2">
                                <div
                                    className={`bg-primary inline-flex items-center justify-center ${variant.padSize} ${variant.radius}`}
                                >
                                    <Hexagon
                                        className={`${variant.iconSize} text-primary-foreground`}
                                    />
                                </div>
                                <code className="text-muted-foreground text-[10px]">
                                    {variant.label}
                                </code>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lockup */}
                <div className="space-y-3">
                    <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                        Logo Lockup
                    </p>
                    <div className="border-border flex flex-col gap-4 rounded-lg border p-6">
                        <div className="flex items-center gap-1.5">
                            <div className="bg-primary inline-flex items-center justify-center rounded-md p-1">
                                <Hexagon className="text-primary-foreground size-4" />
                            </div>
                            <span className="text-sm font-semibold tracking-tight">Origin UI</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-primary inline-flex items-center justify-center rounded-md p-1">
                                <Hexagon className="text-primary-foreground size-5" />
                            </div>
                            <span className="text-base font-semibold tracking-tight">
                                Origin UI
                            </span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <div className="bg-primary inline-flex items-center justify-center rounded-lg p-1.5">
                                <Hexagon className="text-primary-foreground size-7" />
                            </div>
                            <span className="text-xl font-semibold tracking-tight">Origin UI</span>
                        </div>
                    </div>
                </div>

                {/* Construction */}
                <div className="space-y-3">
                    <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                        Construction & Specifications
                    </p>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Property</TableHead>
                                <TableHead>Value</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { prop: "Shape", val: "Hexagon (lucide-react)" },
                                {
                                    prop: "Background",
                                    val: "bg-primary (brand-800 light / brand-100 dark)",
                                },
                                {
                                    prop: "Icon color",
                                    val: "text-primary-foreground (brand-50 light / brand-950 dark)",
                                },
                                {
                                    prop: "Corner radius",
                                    val: "rounded-md (sm/default) / rounded-lg (lg) / rounded-xl (xl)",
                                },
                                {
                                    prop: "Padding",
                                    val: "p-1 (sm/default) / p-1.5 (lg) / p-2 (xl)",
                                },
                                {
                                    prop: "Min clear space",
                                    val: "Equal to icon padding on all sides",
                                },
                                {
                                    prop: "Component",
                                    val: "<OriginUiLogo /> from @/components/branding",
                                },
                            ].map((row) => (
                                <TableRow key={row.prop}>
                                    <TableCell className="font-medium">{row.prop}</TableCell>
                                    <TableCell>
                                        <code className="text-muted-foreground text-xs">
                                            {row.val}
                                        </code>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Icons Library */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Icons Library</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    This design system uses{" "}
                    <a
                        href="https://lucide.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium underline underline-offset-4"
                    >
                        Lucide React
                    </a>{" "}
                    (<code className="text-xs">lucide-react</code>) as the sole icon library. Lucide
                    provides 1500+ consistent, pixel-perfect SVG icons with tree-shakeable imports.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-4">
                    <p className="text-muted-foreground mb-2 text-xs font-medium tracking-widest uppercase">
                        Installation & Import
                    </p>
                    <pre className="overflow-x-auto text-sm">
                        <code className="text-foreground">
                            {`import { Hexagon, Search, Check } from "lucide-react";`}
                        </code>
                    </pre>
                </div>
            </div>

            {/* Icon Sizing */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Icon Sizing</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Use Tailwind sizing utilities (<code className="text-xs">size-*</code>) on icons
                    to keep them consistent. The recommended default is{" "}
                    <code className="text-xs">size-4</code> (16px) for inline use and{" "}
                    <code className="text-xs">size-5</code> (20px) for standalone use.
                </p>
                <div className="border-border flex flex-wrap items-end gap-6 rounded-lg border p-6">
                    {iconSizes.map((s) => (
                        <div key={s.name} className="flex flex-col items-center gap-2">
                            <Hexagon className={`${s.class} text-foreground`} />
                            <div className="text-center">
                                <CopyToken value={s.name} className="text-[10px]" />
                                <p className="text-muted-foreground/60 text-[10px]">{s.px}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stroke Widths */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Stroke Widths</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Lucide icons accept a <code className="text-xs">strokeWidth</code> prop. The
                    default is <code className="text-xs">1.5</code>. Adjust for visual weight in
                    different contexts.
                </p>
                <div className="border-border flex flex-wrap items-end gap-8 rounded-lg border p-6">
                    {iconStrokeWidths.map((sw) => (
                        <div key={sw.name} className="flex flex-col items-center gap-2">
                            <Hexagon className="text-foreground size-8" strokeWidth={sw.value} />
                            <div className="text-center">
                                <p className="text-xs font-medium">{sw.desc}</p>
                                <CopyToken value={sw.name} className="text-[10px]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Icon Catalog */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Icon Catalog</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    All {iconLibrary.length} icons currently used in this design system, organized
                    by category. Click any icon to copy its name. For the full Lucide library, visit{" "}
                    <a
                        href="https://lucide.dev/icons"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium underline underline-offset-4"
                    >
                        lucide.dev/icons
                    </a>
                    .
                </p>

                {/* Search filter */}
                <div className="relative">
                    <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                    <Input
                        type="text"
                        placeholder="Filter icons by name or category..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="pl-10"
                        aria-label="Filter icons by name or category"
                    />
                </div>

                {/* Grouped icons */}
                <div className="space-y-8">
                    {groupedIcons.map((group) => (
                        <div key={group.category} className="space-y-3">
                            <h3 className="text-muted-foreground text-sm font-medium">
                                {group.category}
                            </h3>
                            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
                                {group.icons.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <button
                                            type="button"
                                            key={item.name}
                                            onClick={() => {
                                                navigator.clipboard.writeText(item.name);
                                                toast.success(`Copied: ${item.name}`, {
                                                    duration: 1500,
                                                });
                                            }}
                                            className="group hover:border-border hover:bg-muted/50 flex flex-col items-center gap-1.5 rounded-lg border border-transparent p-3 transition-colors"
                                            title={`Click to copy: ${item.name}`}
                                            aria-label={`Copy icon name: ${item.name}`}
                                        >
                                            <Icon className="text-foreground size-5" />
                                            <span className="text-muted-foreground max-w-full truncate text-[10px]">
                                                {item.name}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
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
                                    Use size-4 for icons inside buttons and inputs.
                                </strong>{" "}
                                16px is the standard inline size that aligns with text and maintains
                                optical balance within interactive elements.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use size-5 for standalone icon buttons.
                                </strong>{" "}
                                20px gives icon-only actions enough visual weight to be recognizable
                                without a text label.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep strokeWidth at default (1.5).
                                </strong>{" "}
                                The default weight is optimized for legibility across all sizes.
                                Only adjust in specific UI contexts like toolbars.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Import icons individually for tree-shaking.
                                </strong>{" "}
                                Named imports like{" "}
                                <code className="text-xs">{`import { Check } from "lucide-react"`}</code>{" "}
                                keep bundle size minimal.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Apply color via text-* utilities.
                                </strong>{" "}
                                Lucide icons inherit <code className="text-xs">currentColor</code>{" "}
                                by default. Use <code className="text-xs">text-foreground</code>,{" "}
                                <code className="text-xs">text-muted-foreground</code>, etc.
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
                                    Don&apos;t mix icon libraries.
                                </strong>{" "}
                                Using Font Awesome, Heroicons, or other libraries alongside Lucide
                                creates visual inconsistency in stroke weight and style.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use inline SVGs when a Lucide icon exists.
                                </strong>{" "}
                                Custom SVGs bypass the icon system and won&apos;t match the stroke
                                weight, sizing, or color inheritance of Lucide icons.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t apply fill to stroke-based icons.
                                </strong>{" "}
                                Lucide icons are designed as stroked paths. Adding{" "}
                                <code className="text-xs">fill</code> distorts them. Use{" "}
                                <code className="text-xs">text-*</code> to change stroke color.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use icons smaller than size-3 (12px).
                                </strong>{" "}
                                Below 12px, stroke details become indistinguishable and icons lose
                                meaning, especially at non-retina resolutions.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use icon-only buttons without accessible labels.
                                </strong>{" "}
                                Always add <code className="text-xs">aria-label</code> or a{" "}
                                <code className="text-xs">sr-only</code> span so screen readers can
                                announce the action.
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
                                Decorative icons (next to text labels) should have{" "}
                                <code className="text-xs">aria-hidden=&quot;true&quot;</code> to
                                avoid redundant announcements.
                            </li>
                            <li>
                                Icon-only buttons must include an accessible name via{" "}
                                <code className="text-xs">aria-label</code> or a{" "}
                                <code className="text-xs">
                                    {'<span className="sr-only">Label</span>'}
                                </code>{" "}
                                inside the button.
                            </li>
                            <li>
                                Icons used to convey meaning (status, alerts) should be accompanied
                                by text or <code className="text-xs">aria-label</code> &mdash; color
                                and shape alone are not sufficient for screen readers.
                            </li>
                            <li>
                                Use <code className="text-xs">type LucideIcon</code> from{" "}
                                <code className="text-xs">lucide-react</code> for typing icon props
                                in reusable components.
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
                    code={`import { Search, Check, ChevronRight, type LucideIcon } from "lucide-react"

// Inline icon (inside button)
<Button>
  <Search className="size-4" data-icon="inline-start" />
  Search
</Button>

// Standalone icon button
<Button size="icon" variant="ghost" aria-label="Settings">
  <Settings className="size-5" />
</Button>

// Icon with custom color
<Check className="size-4 text-success" />
<AlertCircle className="size-4 text-error" />

// Icon sizing
<Hexagon className="size-3" />   {/* 12px — minimum */}
<Hexagon className="size-4" />   {/* 16px — inline default */}
<Hexagon className="size-5" />   {/* 20px — standalone default */}
<Hexagon className="size-6" />   {/* 24px — large */}

// Stroke width adjustment
<Hexagon strokeWidth={1} />      {/* Thin */}
<Hexagon strokeWidth={1.5} />    {/* Default */}
<Hexagon strokeWidth={2} />      {/* Medium */}

// Typing icon props
interface NavItemProps {
  icon: LucideIcon
  label: string
}

function NavItem({ icon: Icon, label }: NavItemProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="size-4" />
      <span>{label}</span>
    </div>
  )
}`}
                />
            </div>
        </div>
    );
}
