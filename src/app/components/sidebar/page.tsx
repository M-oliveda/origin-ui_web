import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import { SkeletonDemo } from "./skeleton-demo";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import {
    BarChart2,
    Check,
    FolderOpen,
    HelpCircle,
    Home,
    Inbox,
    LogOut,
    MoreHorizontal,
    Plus,
    Settings,
    Users,
    X,
} from "lucide-react";

function BasicDemo() {
    return (
        <div className="border-border h-80 overflow-hidden rounded-lg border">
            <SidebarProvider className="h-full min-h-0">
                <Sidebar collapsible="none">
                    <SidebarHeader>
                        <div className="flex items-center gap-2 px-2 py-1">
                            <div className="bg-sidebar-primary size-6 rounded" />
                            <span className="text-sm font-semibold">Acme Inc</span>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton isActive>
                                            <Home />
                                            <span>Home</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Inbox />
                                            <span>Inbox</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Users />
                                            <span>Team</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <LogOut />
                                    <span>Sign out</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>
                <SidebarInset>
                    <div className="flex h-9 items-center border-b px-4">
                        <p className="text-muted-foreground text-xs">Main content</p>
                    </div>
                    <div className="space-y-2 p-4">
                        {([40, 56, 32] as const).map((w, i) => (
                            <div
                                key={i}
                                className="bg-muted h-3 rounded-sm"
                                style={{ width: `${w}%` }}
                            />
                        ))}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
}

function FullNavigationDemo() {
    return (
        <div className="border-border h-[460px] overflow-hidden rounded-lg border">
            <SidebarProvider className="h-full min-h-0">
                <Sidebar collapsible="none">
                    <SidebarHeader>
                        <div className="flex items-center gap-2 px-2 py-1">
                            <div className="bg-sidebar-primary size-6 rounded" />
                            <span className="text-sm font-semibold">Acme Inc</span>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Platform</SidebarGroupLabel>
                            <SidebarGroupAction title="New project">
                                <Plus />
                            </SidebarGroupAction>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton isActive>
                                            <Home />
                                            <span>Home</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Inbox />
                                            <span>Inbox</span>
                                        </SidebarMenuButton>
                                        <SidebarMenuBadge>5</SidebarMenuBadge>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <FolderOpen />
                                            <span>Projects</span>
                                        </SidebarMenuButton>
                                        <SidebarMenuAction showOnHover title="More options">
                                            <MoreHorizontal />
                                        </SidebarMenuAction>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Users />
                                            <span>Team</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <BarChart2 />
                                            <span>Analytics</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                        <SidebarSeparator />
                        <SidebarGroup>
                            <SidebarGroupLabel>Account</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <Settings />
                                            <span>Settings</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <HelpCircle />
                                            <span>Help</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg">
                                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
                                        JD
                                    </div>
                                    <div className="flex min-w-0 flex-col gap-0.5 text-left leading-none">
                                        <span className="text-sm font-semibold">John Doe</span>
                                        <span className="text-sidebar-foreground/70 truncate text-xs">
                                            john@acme.com
                                        </span>
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>
                <SidebarInset>
                    <div className="flex h-9 items-center border-b px-4">
                        <p className="text-xs font-medium">Dashboard</p>
                    </div>
                    <div className="space-y-3 p-4">
                        {([48, 72, 40, 60] as const).map((w, i) => (
                            <div
                                key={i}
                                className="bg-muted h-3 rounded-sm"
                                style={{ width: `${w}%` }}
                            />
                        ))}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
}

export default function SidebarPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Sidebar</h1>
                <p className="text-muted-foreground text-sm">
                    A composable, collapsible navigation panel for app-level layouts. Built on{" "}
                    <code className="text-xs">SidebarProvider</code> context — manages open/closed
                    state, a mobile-responsive <code className="text-xs">Sheet</code> fallback, and
                    a <kbd className="rounded border px-1 text-[10px]">⌘B</kbd> keyboard shortcut
                    out of the box.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Wrap the entire layout in <code className="text-xs">SidebarProvider</code>, then
                    place <code className="text-xs">Sidebar</code> and{" "}
                    <code className="text-xs">SidebarInset</code> as siblings inside it.{" "}
                    <code className="text-xs">SidebarHeader</code> and{" "}
                    <code className="text-xs">SidebarFooter</code> are sticky;{" "}
                    <code className="text-xs">SidebarContent</code> is the scrollable region.
                </p>
                <BasicDemo />
                <div className="text-muted-foreground flex flex-wrap gap-x-6 gap-y-1 text-[10px]">
                    <span>SidebarProvider → Sidebar + SidebarInset</span>
                    <span>SidebarHeader (sticky top)</span>
                    <span>SidebarContent (scrollable)</span>
                    <span>SidebarFooter (sticky bottom)</span>
                </div>
            </div>

            {/* Navigation structure */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Navigation Structure</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Use <code className="text-xs">SidebarGroup</code> to section content,{" "}
                    <code className="text-xs">SidebarMenu</code> /{" "}
                    <code className="text-xs">SidebarMenuItem</code> for list structure, and{" "}
                    <code className="text-xs">SidebarMenuButton</code> for the interactive element.
                    Compose <code className="text-xs">SidebarMenuBadge</code> and{" "}
                    <code className="text-xs">SidebarMenuAction</code> as siblings of the button
                    inside the same <code className="text-xs">SidebarMenuItem</code>.
                </p>
                <FullNavigationDemo />
                <div className="text-muted-foreground flex flex-wrap gap-x-6 gap-y-1 text-[10px]">
                    <span>SidebarGroupLabel + SidebarGroupAction (top-right)</span>
                    <span>SidebarMenuBadge (Inbox count)</span>
                    <span>SidebarMenuAction showOnHover (Projects)</span>
                    <span>SidebarSeparator between groups</span>
                    <span>size=&quot;lg&quot; user row in footer</span>
                </div>
            </div>

            {/* Loading skeleton */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Loading State</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Render <code className="text-xs">SidebarMenuSkeleton</code> while async nav data
                    loads. The <code className="text-xs">showIcon</code> prop adds an icon
                    placeholder. Each skeleton item randomizes its width to reduce perceived layout
                    shift.
                </p>
                <SkeletonDemo />
            </div>

            {/* Collapsible modes */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Collapsible Modes</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The <code className="text-xs">collapsible</code> prop controls how the sidebar
                    collapses. Pair it with <code className="text-xs">SidebarTrigger</code> in the
                    page header — it is also bound to{" "}
                    <kbd className="rounded border px-1 text-[10px]">⌘B</kbd> /{" "}
                    <kbd className="rounded border px-1 text-[10px]">Ctrl+B</kbd> automatically.
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                    {(
                        [
                            {
                                value: "offcanvas",
                                desc: "Slides fully off-screen. Best default — hides on both mobile and desktop.",
                            },
                            {
                                value: "icon",
                                desc: "Collapses to icon-only width. Labels hide; tooltips appear on hover.",
                            },
                            {
                                value: "none",
                                desc: "Always visible. Use for fixed layouts where the sidebar should never collapse.",
                            },
                        ] as const
                    ).map(({ value, desc }) => (
                        <div key={value} className="border-border space-y-2 rounded-lg border p-4">
                            <code className="text-sidebar-primary text-xs">
                                collapsible=&quot;{value}&quot;
                            </code>
                            <p className="text-muted-foreground text-xs">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variants</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The <code className="text-xs">variant</code> prop controls the visual treatment
                    of the sidebar panel.
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                    {(
                        [
                            {
                                value: "sidebar",
                                desc: "Default. Flush with the edge, separated by a border.",
                            },
                            {
                                value: "floating",
                                desc: "Floating panel with a box-shadow ring and rounded corners.",
                            },
                            {
                                value: "inset",
                                desc: "Main content becomes inset with rounded corners and a shadow.",
                            },
                        ] as const
                    ).map(({ value, desc }) => (
                        <div key={value} className="border-border space-y-2 rounded-lg border p-4">
                            <code className="text-sidebar-primary text-xs">
                                variant=&quot;{value}&quot;
                            </code>
                            <p className="text-muted-foreground text-xs">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Design Guidelines */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Design Guidelines</h3>
                <Separator />
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-lg border-2 border-green-500/30 bg-green-500/5 p-5">
                        <div className="mb-4 flex items-center gap-2">
                            <Check className="size-4 text-green-600 dark:text-green-400" />
                            <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                                Do
                            </p>
                        </div>
                        <ul className="text-muted-foreground space-y-3 text-sm">
                            <li>
                                <strong className="text-foreground">Wrap the root layout.</strong>{" "}
                                Place <code className="text-xs">SidebarProvider</code> in{" "}
                                <code className="text-xs">app/layout.tsx</code> so open state
                                persists across navigations.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use icon mode for dense UIs.
                                </strong>{" "}
                                <code className="text-xs">collapsible=&quot;icon&quot;</code> with{" "}
                                <code className="text-xs">tooltip</code> props keeps navigation
                                accessible while reclaiming screen space.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Place SidebarTrigger in every page header.
                                </strong>{" "}
                                Users expect a collapse toggle at the top-left of every page,
                                alongside breadcrumbs.
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
                                    Don&apos;t skip SidebarProvider.
                                </strong>{" "}
                                All sub-components consume sidebar context — rendering any of them
                                outside the provider throws a runtime error.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t mount it inside a route segment.
                                </strong>{" "}
                                Placing <code className="text-xs">SidebarProvider</code> in a page
                                component resets state on every navigation. Use the shared layout
                                instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t hardcode the sidebar width.
                                </strong>{" "}
                                Adjust via the <code className="text-xs">--sidebar-width</code> CSS
                                variable in the provider&apos;s{" "}
                                <code className="text-xs">style</code> prop — not in class names.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Developer Reference */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Developer Reference</h3>
                <Separator />
                <div className="grid gap-4 lg:grid-cols-2">
                    <div className="border-border rounded-lg border p-5">
                        <h4 className="mb-3 text-sm font-medium">useSidebar hook</h4>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                            <li>
                                <code className="text-xs">state</code> —{" "}
                                <code className="text-xs">
                                    &quot;expanded&quot; | &quot;collapsed&quot;
                                </code>
                            </li>
                            <li>
                                <code className="text-xs">open / setOpen</code> — desktop boolean
                                state
                            </li>
                            <li>
                                <code className="text-xs">openMobile / setOpenMobile</code> — mobile
                                sheet state
                            </li>
                            <li>
                                <code className="text-xs">isMobile</code> — true when viewport &lt;
                                768px
                            </li>
                            <li>
                                <code className="text-xs">toggleSidebar()</code> — toggle for
                                current breakpoint
                            </li>
                        </ul>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <h4 className="mb-3 text-sm font-medium">Accessibility</h4>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                            <li>
                                State exposed via <code className="text-xs">data-state</code> and{" "}
                                <code className="text-xs">data-collapsible</code> — target these for
                                CSS transitions.
                            </li>
                            <li>
                                Mobile renders a <code className="text-xs">Sheet</code> (
                                <code className="text-xs">role=&quot;dialog&quot;</code>) with focus
                                trapping and ESC dismissal.
                            </li>
                            <li>
                                <code className="text-xs">SidebarRail</code> provides a click/drag
                                resize handle; add it as a child of{" "}
                                <code className="text-xs">Sidebar</code>.
                            </li>
                            <li>
                                Keyboard shortcut:{" "}
                                <kbd className="rounded border px-1 text-[10px]">⌘B</kbd> /{" "}
                                <kbd className="rounded border px-1 text-[10px]">Ctrl+B</kbd> —
                                registered automatically by{" "}
                                <code className="text-xs">SidebarProvider</code>.
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
                    code={`// app/layout.tsx — wrap the root layout
import {
    SidebarProvider, Sidebar, SidebarHeader, SidebarContent,
    SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarGroupContent,
    SidebarGroupAction, SidebarMenu, SidebarMenuItem, SidebarMenuButton,
    SidebarMenuBadge, SidebarMenuAction, SidebarInset, SidebarTrigger,
    SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { LayoutDashboard, FolderOpen, MoreHorizontal, Plus } from "lucide-react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <Sidebar collapsible="icon">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" render={<Link href="/" />}>
                                <AppLogo />
                                <span>Acme Inc</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>

                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Platform</SidebarGroupLabel>
                        <SidebarGroupAction title="New project">
                            <Plus />
                        </SidebarGroupAction>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton
                                        isActive
                                        tooltip="Dashboard"
                                        render={<Link href="/dashboard" />}
                                    >
                                        <LayoutDashboard />
                                        <span>Dashboard</span>
                                    </SidebarMenuButton>
                                    <SidebarMenuBadge>3</SidebarMenuBadge>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton
                                        tooltip="Projects"
                                        render={<Link href="/projects" />}
                                    >
                                        <FolderOpen />
                                        <span>Projects</span>
                                    </SidebarMenuButton>
                                    <SidebarMenuAction showOnHover title="More options">
                                        <MoreHorizontal />
                                    </SidebarMenuAction>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>

                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg">
                                <UserAvatar />
                                <div className="flex flex-col text-left leading-none">
                                    <span className="font-semibold">John Doe</span>
                                    <span className="truncate text-xs opacity-70">john@acme.com</span>
                                </div>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>

                <SidebarRail />
            </Sidebar>

            <SidebarInset>
                <header className="flex h-14 items-center gap-4 border-b px-6">
                    <SidebarTrigger />
                    {/* breadcrumbs */}
                </header>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}`}
                />
            </div>
        </div>
    );
}
