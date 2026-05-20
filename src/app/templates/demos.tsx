"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    BarChart3,
    Users,
    DollarSign,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    Search,
    Bell,
    Check,
    X,
    Mail,
    Lock,
    Eye,
    Code2,
    Star,
    Zap,
    Shield,
    Globe,
    Layers,
    Sparkles,
    UserCircle,
} from "lucide-react";
import { OriginInputComponent } from "@/components/branding/origin-ui-input";
import { OriginInputPassword } from "@/components/branding/origin-ui-input-password";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TemplateDemo {
    name: string;
    description: string;
    preview: React.ReactNode;
    code: string;
}

// ---------------------------------------------------------------------------
// 1. DASHBOARD
// ---------------------------------------------------------------------------

const statCards = [
    {
        label: "Total Revenue",
        value: "$45,231.89",
        change: "+20.1%",
        up: true,
        icon: DollarSign,
    },
    {
        label: "Subscriptions",
        value: "+2,350",
        change: "+180.1%",
        up: true,
        icon: Users,
    },
    {
        label: "Sales",
        value: "+12,234",
        change: "+19%",
        up: true,
        icon: BarChart3,
    },
    {
        label: "Active Now",
        value: "+573",
        change: "-2.4%",
        up: false,
        icon: Activity,
    },
];

const recentSales = [
    { name: "Olivia Martin", email: "olivia@email.com", amount: "+$1,999.00", initials: "OM" },
    { name: "Jackson Lee", email: "jackson@email.com", amount: "+$39.00", initials: "JL" },
    { name: "Isabella Nguyen", email: "isabella@email.com", amount: "+$299.00", initials: "IN" },
    { name: "William Kim", email: "will@email.com", amount: "+$99.00", initials: "WK" },
    { name: "Sofia Davis", email: "sofia@email.com", amount: "+$39.00", initials: "SD" },
];

const transactions = [
    {
        id: "TXN001",
        customer: "Olivia Martin",
        status: "Completed",
        date: "2024-12-14",
        amount: "$1,999.00",
    },
    {
        id: "TXN002",
        customer: "Jackson Lee",
        status: "Pending",
        date: "2024-12-13",
        amount: "$39.00",
    },
    {
        id: "TXN003",
        customer: "Isabella Nguyen",
        status: "Completed",
        date: "2024-12-12",
        amount: "$299.00",
    },
    {
        id: "TXN004",
        customer: "William Kim",
        status: "Failed",
        date: "2024-12-11",
        amount: "$99.00",
    },
    {
        id: "TXN005",
        customer: "Sofia Davis",
        status: "Completed",
        date: "2024-12-10",
        amount: "$39.00",
    },
];

function DashboardTemplate() {
    return (
        <div className="space-y-6 p-6 lg:p-8">
            {/* Top bar */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
                    <p className="text-muted-foreground text-sm">
                        Welcome back. Here&apos;s an overview of your business.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
                        <Input placeholder="Search..." className="w-48 pl-8" />
                    </div>
                    <Button variant="ghost" size="icon">
                        <Bell className="size-4" />
                    </Button>
                    <Avatar>
                        <AvatarFallback>MO</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            {/* Stat cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {statCards.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.label}>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardDescription className="text-sm font-medium">
                                    {stat.label}
                                </CardDescription>
                                <Icon className="text-muted-foreground size-4" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p className="text-muted-foreground flex items-center gap-1 text-xs">
                                    {stat.up ? (
                                        <ArrowUpRight className="text-success size-3" />
                                    ) : (
                                        <ArrowDownRight className="text-error size-3" />
                                    )}
                                    {stat.change} from last month
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Main grid */}
            <div className="grid gap-4 lg:grid-cols-7">
                {/* Transactions table */}
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Recent Transactions</CardTitle>
                            <Button variant="outline">View All</Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Transaction</TableHead>
                                    <TableHead>Customer</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {transactions.map((tx) => (
                                    <TableRow key={tx.id}>
                                        <TableCell className="font-medium">{tx.id}</TableCell>
                                        <TableCell>{tx.customer}</TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    tx.status === "Completed"
                                                        ? "secondary"
                                                        : tx.status === "Pending"
                                                          ? "outline"
                                                          : "destructive"
                                                }
                                            >
                                                {tx.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground">
                                            {tx.date}
                                        </TableCell>
                                        <TableCell className="text-right">{tx.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Recent sales */}
                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <CardDescription>You made 265 sales this month.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentSales.map((sale) => (
                                <div key={sale.email} className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarFallback>{sale.initials}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-0.5">
                                        <p className="text-sm font-medium">{sale.name}</p>
                                        <p className="text-muted-foreground text-xs">
                                            {sale.email}
                                        </p>
                                    </div>
                                    <span className="text-sm font-medium">{sale.amount}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Custom Components */}
            <div>
                <h3 className="mb-4 text-lg font-semibold tracking-tight">Custom Components</h3>
                <div className="grid gap-6 lg:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Validated Input</CardTitle>
                            <CardDescription>
                                Input with icon and validation states.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <OriginInputComponent
                                label="Username"
                                icon={UserCircle}
                                placeholder="Enter your username"
                                validationState="idle"
                            />
                            <OriginInputComponent
                                label="Email (valid)"
                                icon={Mail}
                                placeholder="you@example.com"
                                defaultValue="mauricio@example.com"
                                validationState="success"
                                successMessage="Email is available"
                            />
                            <OriginInputComponent
                                label="Email (error)"
                                icon={Mail}
                                placeholder="you@example.com"
                                defaultValue="invalid-email"
                                validationState="error"
                                errorMessage="Please enter a valid email address"
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Password with Rules</CardTitle>
                            <CardDescription>
                                Password input with real-time validation rules.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <OriginInputPassword
                                label="Create Password"
                                placeholder="Enter a strong password"
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 2. LOGIN
// ---------------------------------------------------------------------------

function LoginTemplate() {
    return (
        <div className="flex min-h-[calc(100vh-3rem)] items-center justify-center p-6">
            <div className="w-full max-w-sm space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
                    <p className="text-muted-foreground text-sm">
                        Enter your credentials to access your account
                    </p>
                </div>

                <Card>
                    <CardContent className="pt-6">
                        <div className="space-y-4">
                            {/* Social login */}
                            <div className="grid grid-cols-2 gap-3">
                                <Button variant="outline" className="w-full">
                                    <Code2 className="size-4" />
                                    GitHub
                                </Button>
                                <Button variant="outline" className="w-full">
                                    <Mail className="size-4" />
                                    Google
                                </Button>
                            </div>

                            <div className="relative">
                                <Separator />
                                <span className="bg-card text-muted-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-xs">
                                    or continue with
                                </span>
                            </div>

                            {/* Email form */}
                            <div className="space-y-2">
                                <Label htmlFor="login-email">Email</Label>
                                <div className="relative">
                                    <Mail className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                                    <Input
                                        id="login-email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="pl-9"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="login-password">Password</Label>
                                    <a
                                        href="#"
                                        className="text-muted-foreground hover:text-foreground text-xs underline underline-offset-4"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="relative">
                                    <Lock className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                                    <Input
                                        id="login-password"
                                        type="password"
                                        placeholder="Enter your password"
                                        className="pl-9"
                                    />
                                    <button className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2">
                                        <Eye className="size-4" />
                                    </button>
                                </div>
                            </div>

                            <Button className="w-full">Sign In</Button>
                        </div>
                    </CardContent>
                </Card>

                <p className="text-muted-foreground text-center text-xs">
                    Don&apos;t have an account?{" "}
                    <a
                        href="#"
                        className="text-foreground font-medium underline underline-offset-4"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 3. SETTINGS
// ---------------------------------------------------------------------------

function SettingsTemplate() {
    return (
        <div className="mx-auto max-w-2xl space-y-8 p-6 lg:p-8">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground text-sm">
                    Manage your account settings and preferences.
                </p>
            </div>

            <Separator />

            {/* Profile section */}
            <section className="space-y-4">
                <h3 className="text-lg font-semibold">Profile</h3>
                <div className="flex items-center gap-4">
                    <Avatar className="size-16">
                        <AvatarFallback className="text-lg">MO</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <p className="text-sm font-medium">Mauricio Oliveda</p>
                        <p className="text-muted-foreground text-xs">mauricio@example.com</p>
                    </div>
                    <Button variant="outline" className="ml-auto">
                        Change Avatar
                    </Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="settings-first">First Name</Label>
                        <Input id="settings-first" defaultValue="Mauricio" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="settings-last">Last Name</Label>
                        <Input id="settings-last" defaultValue="Oliveda" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="settings-email">Email</Label>
                    <Input id="settings-email" type="email" defaultValue="mauricio@example.com" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="settings-bio">Bio</Label>
                    <Textarea
                        id="settings-bio"
                        placeholder="Tell us about yourself..."
                        defaultValue="Design system enthusiast. Building Origin UI."
                    />
                    <p className="text-muted-foreground text-xs">
                        Brief description for your profile. Max 160 characters.
                    </p>
                </div>
            </section>

            <Separator />

            {/* Notifications section */}
            <section className="space-y-4">
                <h3 className="text-lg font-semibold">Notifications</h3>
                <div className="space-y-3">
                    {[
                        {
                            title: "Email Notifications",
                            desc: "Receive emails about account activity.",
                            defaultChecked: true,
                        },
                        {
                            title: "Push Notifications",
                            desc: "Receive push notifications on your devices.",
                            defaultChecked: false,
                        },
                        {
                            title: "Marketing Emails",
                            desc: "Receive emails about new features and updates.",
                            defaultChecked: false,
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="border-border flex items-center justify-between rounded-lg border p-4"
                        >
                            <div>
                                <p className="text-sm font-medium">{item.title}</p>
                                <p className="text-muted-foreground text-xs">{item.desc}</p>
                            </div>
                            <Switch defaultChecked={item.defaultChecked} />
                        </div>
                    ))}
                </div>
            </section>

            <Separator />

            {/* Appearance section */}
            <section className="space-y-4">
                <h3 className="text-lg font-semibold">Appearance</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label>Language</Label>
                        <Select defaultValue="en">
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en">English</SelectItem>
                                <SelectItem value="es">Spanish</SelectItem>
                                <SelectItem value="fr">French</SelectItem>
                                <SelectItem value="de">German</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Timezone</Label>
                        <Select defaultValue="utc-5">
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="utc-8">Pacific (UTC-8)</SelectItem>
                                <SelectItem value="utc-5">Eastern (UTC-5)</SelectItem>
                                <SelectItem value="utc+0">UTC</SelectItem>
                                <SelectItem value="utc+1">Central European (UTC+1)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>

            <Separator />

            {/* Danger zone */}
            <section className="space-y-4">
                <h3 className="text-destructive text-lg font-semibold">Danger Zone</h3>
                <div className="border-destructive/30 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium">Delete Account</p>
                            <p className="text-muted-foreground text-xs">
                                Permanently delete your account and all data.
                            </p>
                        </div>
                        <Button variant="destructive">Delete Account</Button>
                    </div>
                </div>
            </section>

            {/* Footer actions */}
            <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 4. MARKETING HERO
// ---------------------------------------------------------------------------

function MarketingTemplate() {
    return (
        <div>
            {/* Hero */}
            <section className="px-6 py-20 text-center lg:py-28">
                <Badge variant="secondary" className="mb-4">
                    <Sparkles className="size-3" /> New Release
                </Badge>
                <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight lg:text-6xl">
                    Build beautiful products{" "}
                    <span className="text-brand-300">faster than ever</span>
                </h1>
                <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg">
                    Origin UI gives your team a complete design system with brand tokens, ready-made
                    components, and page templates — all in one place.
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                    <Button>
                        Get Started
                        <ArrowUpRight className="size-4" />
                    </Button>
                    <Button variant="outline">View Demo</Button>
                </div>
            </section>

            <Separator />

            {/* Features */}
            <section className="px-6 py-16 lg:py-20">
                <div className="mx-auto max-w-5xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight">Everything you need</h2>
                        <p className="text-muted-foreground mt-2">
                            A complete toolkit for building consistent, branded interfaces.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: Layers,
                                title: "56 Components",
                                desc: "Every shadcn/ui component, themed with your brand tokens and ready to use.",
                            },
                            {
                                icon: Zap,
                                title: "Design Tokens",
                                desc: "Colors, typography, spacing, and effects defined once, used everywhere.",
                            },
                            {
                                icon: Shield,
                                title: "Dark Mode",
                                desc: "Full light and dark mode support baked in. Every token adapts automatically.",
                            },
                            {
                                icon: Globe,
                                title: "Accessible",
                                desc: "Built on Base UI primitives with WAI-ARIA patterns out of the box.",
                            },
                            {
                                icon: Star,
                                title: "Figma Synced",
                                desc: "Tokens derived directly from Figma, so design and code always match.",
                            },
                            {
                                icon: Code2,
                                title: "Open Source",
                                desc: "You own the code. Modify, extend, and deploy with no lock-in.",
                            },
                        ].map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <Card key={feature.title}>
                                    <CardHeader>
                                        <div className="bg-primary/10 text-primary mb-2 inline-flex size-10 items-center justify-center rounded-lg">
                                            <Icon className="size-5" />
                                        </div>
                                        <CardTitle className="text-base">{feature.title}</CardTitle>
                                        <CardDescription>{feature.desc}</CardDescription>
                                    </CardHeader>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Separator />

            {/* CTA */}
            <section className="px-6 py-16 text-center lg:py-20">
                <h2 className="text-3xl font-bold tracking-tight">Ready to get started?</h2>
                <p className="text-muted-foreground mt-2">
                    Start building with Origin UI today. No credit card required.
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                    <Button>Start Free</Button>
                    <Button variant="outline">Talk to Sales</Button>
                </div>
            </section>
        </div>
    );
}

// ---------------------------------------------------------------------------
// 5. PRICING
// ---------------------------------------------------------------------------

const plans = [
    {
        name: "Starter",
        price: "$0",
        period: "/month",
        description: "For individuals getting started.",
        features: [
            { text: "5 projects", included: true },
            { text: "1 team member", included: true },
            { text: "Basic analytics", included: true },
            { text: "Email support", included: true },
            { text: "Custom domain", included: false },
            { text: "Priority support", included: false },
        ],
        cta: "Get Started",
        variant: "outline" as const,
        highlighted: false,
    },
    {
        name: "Pro",
        price: "$29",
        period: "/month",
        description: "For growing teams and businesses.",
        features: [
            { text: "Unlimited projects", included: true },
            { text: "10 team members", included: true },
            { text: "Advanced analytics", included: true },
            { text: "Priority support", included: true },
            { text: "Custom domain", included: true },
            { text: "API access", included: false },
        ],
        cta: "Start Free Trial",
        variant: "default" as const,
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "$99",
        period: "/month",
        description: "For large-scale organizations.",
        features: [
            { text: "Unlimited everything", included: true },
            { text: "Unlimited team members", included: true },
            { text: "Custom analytics", included: true },
            { text: "Dedicated support", included: true },
            { text: "Custom domain", included: true },
            { text: "Full API access", included: true },
        ],
        cta: "Contact Sales",
        variant: "outline" as const,
        highlighted: false,
    },
];

function PricingTemplate() {
    return (
        <div className="px-6 py-16 lg:py-20">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="text-center">
                    <Badge variant="secondary" className="mb-4">
                        Pricing
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tight">
                        Simple, transparent pricing
                    </h1>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                {/* Plan cards */}
                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={plan.highlighted ? "border-primary relative shadow-lg" : ""}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <Badge>Most Popular</Badge>
                                </div>
                            )}
                            <CardHeader className="text-center">
                                <CardTitle className="text-xl">{plan.name}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-muted-foreground">{plan.period}</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature.text}
                                            className="flex items-center gap-2 text-sm"
                                        >
                                            {feature.included ? (
                                                <Check className="text-success size-4" />
                                            ) : (
                                                <X className="text-muted-foreground/40 size-4" />
                                            )}
                                            <span
                                                className={
                                                    feature.included
                                                        ? ""
                                                        : "text-muted-foreground/60"
                                                }
                                            >
                                                {feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant={plan.variant} className="w-full">
                                    {plan.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* FAQ hint */}
                <div className="mt-12 text-center">
                    <p className="text-muted-foreground text-sm">
                        Have questions?{" "}
                        <a
                            href="#"
                            className="text-foreground font-medium underline underline-offset-4"
                        >
                            Check our FAQ
                        </a>{" "}
                        or{" "}
                        <a
                            href="#"
                            className="text-foreground font-medium underline underline-offset-4"
                        >
                            contact support
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

export const templateDemos: Record<string, TemplateDemo> = {
    dashboard: {
        name: "Dashboard",
        description:
            "An analytics dashboard with stat cards, transaction table, and recent activity.",
        preview: <DashboardTemplate />,
        code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DollarSign, Users, BarChart3, Activity, ArrowUpRight, Search, Bell } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="space-y-6 p-6 lg:p-8">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-sm text-muted-foreground">
            Welcome back. Here's an overview of your business.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Input placeholder="Search..." className="w-48" />
          <Avatar><AvatarFallback>MO</AvatarFallback></Avatar>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Total Revenue</CardDescription>
            <DollarSign className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        {/* ...more stat cards */}
      </div>

      {/* Transactions table + Recent sales sidebar */}
      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>TXN001</TableCell>
                  <TableCell>Olivia Martin</TableCell>
                  <TableCell><Badge variant="secondary">Completed</Badge></TableCell>
                  <TableCell className="text-right">$1,999.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Avatar + name + amount rows */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}`,
    },

    login: {
        name: "Login",
        description:
            "An authentication page with social login, email/password form, and forgot password link.",
        preview: <LoginTemplate />,
        code: `import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Code2, Mail, Lock, Eye } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Social login */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline"><Code2 className="size-4" /> GitHub</Button>
                <Button variant="outline"><Mail className="size-4" /> Google</Button>
              </div>

              <div className="relative">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                  or continue with
                </span>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>

              <Button className="w-full">Sign In</Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground">
          Don't have an account? <a href="#" className="underline">Sign up</a>
        </p>
      </div>
    </div>
  )
}`,
    },

    settings: {
        name: "Settings",
        description:
            "An account settings page with profile, notifications, appearance, and danger zone sections.",
        preview: <SettingsTemplate />,
        code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 p-6 lg:p-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-sm text-muted-foreground">Manage your account.</p>
      </div>

      <Separator />

      {/* Profile */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Profile</h3>
        <div className="flex items-center gap-4">
          <Avatar className="size-16"><AvatarFallback>MO</AvatarFallback></Avatar>
          <Button variant="outline">Change Avatar</Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>First Name</Label>
            <Input defaultValue="Mauricio" />
          </div>
          <div className="space-y-2">
            <Label>Last Name</Label>
            <Input defaultValue="Oliveda" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Bio</Label>
          <Textarea defaultValue="Design system enthusiast." />
        </div>
      </section>

      <Separator />

      {/* Notifications */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div>
            <p className="text-sm font-medium">Email Notifications</p>
            <p className="text-xs text-muted-foreground">Activity emails.</p>
          </div>
          <Switch defaultChecked />
        </div>
      </section>

      <Separator />

      {/* Danger zone */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-destructive">Danger Zone</h3>
        <div className="rounded-lg border border-destructive/30 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Delete Account</p>
            <Button variant="destructive">Delete</Button>
          </div>
        </div>
      </section>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}`,
    },

    marketing: {
        name: "Marketing Hero",
        description: "A landing page with hero section, feature grid, and call-to-action.",
        preview: <MarketingTemplate />,
        code: `import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sparkles, Layers, Zap, Shield, Globe, Star, Code2, ArrowUpRight } from "lucide-react"

export default function MarketingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 py-20 text-center lg:py-28">
        <Badge variant="secondary" className="mb-4">
          <Sparkles className="size-3" /> New Release
        </Badge>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight lg:text-6xl">
          Build beautiful products{" "}
          <span className="text-brand-300">faster than ever</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          A complete design system with brand tokens, components, and templates.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button>Get Started <ArrowUpRight className="size-4" /></Button>
          <Button variant="outline">View Demo</Button>
        </div>
      </section>

      <Separator />

      {/* Features */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Everything you need</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Layers className="size-5 text-primary" />
                <CardTitle>56 Components</CardTitle>
                <CardDescription>Themed with your brand tokens.</CardDescription>
              </CardHeader>
            </Card>
            {/* ...more feature cards */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Ready to get started?</h2>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button>Start Free</Button>
          <Button variant="outline">Talk to Sales</Button>
        </div>
      </section>
    </div>
  )
}`,
    },

    pricing: {
        name: "Pricing",
        description:
            "A pricing page with three tiered plan cards, feature comparison, and FAQ link.",
        preview: <PricingTemplate />,
        code: `import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const plans = [
  {
    name: "Starter", price: "$0", period: "/month",
    description: "For individuals getting started.",
    features: [
      { text: "5 projects", included: true },
      { text: "1 team member", included: true },
      { text: "Basic analytics", included: true },
      { text: "Custom domain", included: false },
    ],
    cta: "Get Started", variant: "outline", highlighted: false,
  },
  {
    name: "Pro", price: "$29", period: "/month",
    description: "For growing teams and businesses.",
    features: [
      { text: "Unlimited projects", included: true },
      { text: "10 team members", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom domain", included: true },
    ],
    cta: "Start Free Trial", variant: "default", highlighted: true,
  },
  {
    name: "Enterprise", price: "$99", period: "/month",
    description: "For large-scale organizations.",
    features: [
      { text: "Unlimited everything", included: true },
      { text: "Unlimited team members", included: true },
      { text: "Custom analytics", included: true },
      { text: "Full API access", included: true },
    ],
    cta: "Contact Sales", variant: "outline", highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <Badge variant="secondary" className="mb-4">Pricing</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Simple, transparent pricing</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Choose the plan that fits your needs.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.highlighted ? "border-primary shadow-lg" : ""}>
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2 text-sm">
                      {f.included ? <Check className="size-4 text-success" /> : <X className="size-4 text-muted-foreground/40" />}
                      {f.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={plan.variant} className="w-full">{plan.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}`,
    },
};
