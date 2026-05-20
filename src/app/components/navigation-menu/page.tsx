"use client";

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, BarChart3, Zap, Shield, Globe } from "lucide-react";

export default function NavigationMenuPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">NavigationMenu</h1>
                <p className="text-muted-foreground text-sm">
                    A top-level navigation bar with rich dropdown content panels — suited for
                    site-wide navigation in headers. Triggers open panels that can contain links,
                    descriptions, and any custom layout. Built on{" "}
                    <code className="text-xs">@base-ui/react/navigation-menu</code> with animated
                    panel transitions and full keyboard navigation.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<NavigationMenu>"}</code> is the root — it also
                    renders the internal <code className="text-xs">NavigationMenuPositioner</code>{" "}
                    and portal. <code className="text-xs">NavigationMenuList</code> is the
                    horizontal flex list. Each entry is a{" "}
                    <code className="text-xs">NavigationMenuItem</code> containing either a{" "}
                    <code className="text-xs">NavigationMenuTrigger</code> + optional{" "}
                    <code className="text-xs">NavigationMenuContent</code> (for dropdown panels) or
                    a standalone <code className="text-xs">NavigationMenuLink</code> (for direct
                    page links). The <code className="text-xs">align</code> prop on the root
                    controls panel alignment (default:{" "}
                    <code className="text-xs">&quot;start&quot;</code>).
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[280px] gap-1 p-2">
                                            <NavigationMenuLink href="#">
                                                Analytics
                                            </NavigationMenuLink>
                                            <NavigationMenuLink href="#">
                                                Automation
                                            </NavigationMenuLink>
                                            <NavigationMenuLink href="#">
                                                Security
                                            </NavigationMenuLink>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="#">Docs</NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>NavigationMenuTrigger → NavigationMenuContent (panel)</span>
                            <span>NavigationMenuLink (direct link)</span>
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
                            Rich panel — with icons and descriptions
                        </p>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[360px] grid-cols-2 gap-1 p-2">
                                            <NavigationMenuLink
                                                href="#"
                                                className="flex-col items-start gap-1"
                                            >
                                                <div className="text-foreground flex items-center gap-2 font-medium">
                                                    <BarChart3 className="size-4" /> Analytics
                                                </div>
                                                <p className="text-muted-foreground text-xs font-normal">
                                                    Real-time data insights
                                                </p>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink
                                                href="#"
                                                className="flex-col items-start gap-1"
                                            >
                                                <div className="text-foreground flex items-center gap-2 font-medium">
                                                    <Zap className="size-4" /> Automation
                                                </div>
                                                <p className="text-muted-foreground text-xs font-normal">
                                                    Workflow automation tools
                                                </p>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink
                                                href="#"
                                                className="flex-col items-start gap-1"
                                            >
                                                <div className="text-foreground flex items-center gap-2 font-medium">
                                                    <Shield className="size-4" /> Security
                                                </div>
                                                <p className="text-muted-foreground text-xs font-normal">
                                                    Enterprise-grade protection
                                                </p>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink
                                                href="#"
                                                className="flex-col items-start gap-1"
                                            >
                                                <div className="text-foreground flex items-center gap-2 font-medium">
                                                    <Globe className="size-4" /> CDN
                                                </div>
                                                <p className="text-muted-foreground text-xs font-normal">
                                                    Global edge network
                                                </p>
                                            </NavigationMenuLink>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[200px] gap-1 p-2">
                                            <NavigationMenuLink href="#">
                                                Documentation
                                            </NavigationMenuLink>
                                            <NavigationMenuLink href="#">Blog</NavigationMenuLink>
                                            <NavigationMenuLink href="#">
                                                Changelog
                                            </NavigationMenuLink>
                                            <NavigationMenuLink href="#">Status</NavigationMenuLink>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Simple — direct links only (no panels)
                        </p>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="#" data-active>
                                        Home
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="#">About</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="#">Blog</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="#">Contact</NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
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
                                    Use for site-level navigation.
                                </strong>{" "}
                                NavigationMenu belongs in headers where it provides the primary
                                wayfinding structure for an entire site or app.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep panel content scannable.
                                </strong>{" "}
                                Use icons, short labels, and brief descriptions. Users skim panels —
                                walls of text will go unread.
                            </li>
                            <li>
                                <strong className="text-foreground">Mark the active link.</strong>{" "}
                                Pass <code className="text-xs">data-active</code> to the{" "}
                                <code className="text-xs">NavigationMenuLink</code> matching the
                                current page so users know where they are.
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
                                    Don&apos;t use for in-page action menus.
                                </strong>{" "}
                                NavigationMenu is for navigation, not actions — use{" "}
                                <code className="text-xs">DropdownMenu</code> or{" "}
                                <code className="text-xs">Menubar</code> for action lists.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t put too many top-level items.
                                </strong>{" "}
                                More than 6–7 triggers makes the header crowded. Group related
                                destinations inside a panel instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t hide critical links inside panels.
                                </strong>{" "}
                                Your most important destinations (Pricing, Sign Up) should be
                                directly visible in the bar, not buried in a submenu.
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
                    <h4 className="mb-2 text-sm font-medium">Accessibility & Behavior</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            Tab key moves focus between top-level triggers and direct links. Enter
                            or Space opens a trigger&apos;s panel. Arrow keys navigate inside the
                            open panel.
                        </li>
                        <li>ESC closes the open panel and returns focus to the trigger.</li>
                        <li>
                            <code className="text-xs">NavigationMenuContent</code> renders in a
                            portal positioned below its trigger. The panel slides and fades with
                            directional awareness (left ↔ right) as the user moves between triggers.
                        </li>
                        <li>
                            The <code className="text-xs">align</code> prop on{" "}
                            <code className="text-xs">NavigationMenu</code> (default:{" "}
                            <code className="text-xs">&quot;start&quot;</code>) controls how panels
                            align relative to their trigger —{" "}
                            <code className="text-xs">&quot;center&quot;</code> or{" "}
                            <code className="text-xs">&quot;end&quot;</code> are also valid.
                        </li>
                        <li>
                            <code className="text-xs">NavigationMenuLink</code> accepts a{" "}
                            <code className="text-xs">data-active</code> attribute to apply the
                            active style for the current route.
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
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

<NavigationMenu>
  <NavigationMenuList>
    {/* Trigger with dropdown panel */}
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[300px] gap-1 p-2">
          <NavigationMenuLink href="/analytics">Analytics</NavigationMenuLink>
          <NavigationMenuLink href="/automation">Automation</NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>

    {/* Direct link (no panel) */}
    <NavigationMenuItem>
      <NavigationMenuLink href="/pricing">Pricing</NavigationMenuLink>
    </NavigationMenuItem>

    {/* Active link */}
    <NavigationMenuItem>
      <NavigationMenuLink href="/" data-active>Home</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

// Right-aligned panels
<NavigationMenu align="end">...</NavigationMenu>`}
                />
            </div>
        </div>
    );
}
