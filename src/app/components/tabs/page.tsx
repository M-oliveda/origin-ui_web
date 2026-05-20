"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, User, Lock, Bell } from "lucide-react";

export default function TabsPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
                <p className="text-muted-foreground text-sm">
                    A tabbed interface for switching between views of related content. Built on{" "}
                    <code className="text-xs">@base-ui/react/tabs</code>. Supports{" "}
                    <code className="text-xs">default</code> and{" "}
                    <code className="text-xs">line</code> list variants, plus{" "}
                    <code className="text-xs">horizontal</code> and{" "}
                    <code className="text-xs">vertical</code> orientations.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Tabs>"}</code> is the root; it contains a{" "}
                    <code className="text-xs">{"<TabsList>"}</code> with one or more{" "}
                    <code className="text-xs">{"<TabsTrigger>"}</code> elements, and a corresponding{" "}
                    <code className="text-xs">{"<TabsContent>"}</code> for each trigger value.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <Tabs defaultValue="tab1">
                        <TabsList>
                            <TabsTrigger value="tab1">Tab One</TabsTrigger>
                            <TabsTrigger value="tab2">Tab Two</TabsTrigger>
                            <TabsTrigger value="tab3">Tab Three</TabsTrigger>
                        </TabsList>
                        <TabsContent value="tab1" className="mt-4">
                            <p className="text-muted-foreground text-sm">Content for Tab One.</p>
                        </TabsContent>
                        <TabsContent value="tab2" className="mt-4">
                            <p className="text-muted-foreground text-sm">Content for Tab Two.</p>
                        </TabsContent>
                        <TabsContent value="tab3" className="mt-4">
                            <p className="text-muted-foreground text-sm">Content for Tab Three.</p>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variants</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The <code className="text-xs">variant</code> prop on{" "}
                    <code className="text-xs">TabsList</code> controls the visual style of the tab
                    bar.
                </p>
                <div className="border-border space-y-6 rounded-lg border p-6">
                    <div>
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Default
                        </p>
                        <Tabs defaultValue="account">
                            <TabsList>
                                <TabsTrigger value="account">Account</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                                <TabsTrigger value="settings">Settings</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account" className="mt-4">
                                <p className="text-muted-foreground text-sm">
                                    Manage your account details here.
                                </p>
                            </TabsContent>
                            <TabsContent value="password" className="mt-4">
                                <p className="text-muted-foreground text-sm">
                                    Change your password here.
                                </p>
                            </TabsContent>
                            <TabsContent value="settings" className="mt-4">
                                <p className="text-muted-foreground text-sm">
                                    Adjust your settings here.
                                </p>
                            </TabsContent>
                        </Tabs>
                    </div>
                    <Separator />
                    <div>
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Line
                        </p>
                        <Tabs defaultValue="overview">
                            <TabsList variant="line">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                                <TabsTrigger value="reports">Reports</TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview" className="mt-4">
                                <p className="text-muted-foreground text-sm">
                                    High-level summary of your metrics.
                                </p>
                            </TabsContent>
                            <TabsContent value="analytics" className="mt-4">
                                <p className="text-muted-foreground text-sm">
                                    Detailed analytics and charts.
                                </p>
                            </TabsContent>
                            <TabsContent value="reports" className="mt-4">
                                <p className="text-muted-foreground text-sm">
                                    Downloadable reports and exports.
                                </p>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>

            {/* Vertical orientation */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Vertical Orientation</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Pass <code className="text-xs">orientation=&quot;vertical&quot;</code> to the{" "}
                    <code className="text-xs">{"<Tabs>"}</code> root to stack the tab list alongside
                    the content.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <Tabs defaultValue="profile" orientation="vertical" className="max-w-md">
                        <TabsList className="h-fit">
                            <TabsTrigger value="profile" className="justify-start">
                                <User className="size-4" />
                                Profile
                            </TabsTrigger>
                            <TabsTrigger value="security" className="justify-start">
                                <Lock className="size-4" />
                                Security
                            </TabsTrigger>
                            <TabsTrigger value="notifications" className="justify-start">
                                <Bell className="size-4" />
                                Notifications
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="profile" className="px-4">
                            <p className="text-muted-foreground text-sm">
                                Manage your profile information.
                            </p>
                        </TabsContent>
                        <TabsContent value="security" className="px-4">
                            <p className="text-muted-foreground text-sm">
                                Update password and 2FA settings.
                            </p>
                        </TabsContent>
                        <TabsContent value="notifications" className="px-4">
                            <p className="text-muted-foreground text-sm">
                                Control what notifications you receive.
                            </p>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <div className="border-border rounded-lg border p-6">
                    <Tabs defaultValue="active">
                        <TabsList>
                            <TabsTrigger value="active">Active</TabsTrigger>
                            <TabsTrigger value="hover">Hover me</TabsTrigger>
                            <TabsTrigger value="disabled" disabled>
                                Disabled
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="active" className="mt-4">
                            <p className="text-muted-foreground text-sm">
                                This tab is currently active.
                            </p>
                        </TabsContent>
                        <TabsContent value="hover" className="mt-4">
                            <p className="text-muted-foreground text-sm">You hovered this tab.</p>
                        </TabsContent>
                    </Tabs>
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
                                    Use for parallel, peer-level views.
                                </strong>{" "}
                                Tabs work best when each panel contains different content about the
                                same subject.
                            </li>
                            <li>
                                <strong className="text-foreground">Keep tab labels short.</strong>{" "}
                                One or two words per trigger — long labels cause overflow and
                                misalignment.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Choose line variant for page-level navigation.
                                </strong>{" "}
                                The default pill style suits settings panels; line suits page-level
                                sections.
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
                                    Don&apos;t use tabs for sequential steps.
                                </strong>{" "}
                                Use a stepper component for multi-step flows where order matters.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t add more than 7 tabs.
                                </strong>{" "}
                                Too many tabs overwhelm users and break on small screens. Consider a
                                dropdown instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t nest tabs inside tabs.
                                </strong>{" "}
                                It creates a confusing hierarchy that is hard to navigate.
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
                            Implements the WAI-ARIA Tabs pattern —{" "}
                            <code className="text-xs">role=&quot;tablist&quot;</code>,{" "}
                            <code className="text-xs">role=&quot;tab&quot;</code>,{" "}
                            <code className="text-xs">role=&quot;tabpanel&quot;</code>, and{" "}
                            <code className="text-xs">aria-selected</code> are managed
                            automatically.
                        </li>
                        <li>
                            Keyboard: <kbd className="rounded border px-1 text-xs">←</kbd> /{" "}
                            <kbd className="rounded border px-1 text-xs">→</kbd> (horizontal) or{" "}
                            <kbd className="rounded border px-1 text-xs">↑</kbd> /{" "}
                            <kbd className="rounded border px-1 text-xs">↓</kbd> (vertical) cycle
                            through tabs.
                        </li>
                        <li>
                            Each <code className="text-xs">TabsContent</code> panel is associated
                            with its trigger via <code className="text-xs">aria-controls</code> and{" "}
                            <code className="text-xs">aria-labelledby</code> automatically.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

// Default variant
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings…</TabsContent>
  <TabsContent value="password">Password settings…</TabsContent>
</Tabs>

// Line variant
<Tabs defaultValue="overview">
  <TabsList variant="line">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content…</TabsContent>
  <TabsContent value="analytics">Analytics content…</TabsContent>
</Tabs>

// Vertical orientation
<Tabs defaultValue="profile" orientation="vertical">
  <TabsList>
    <TabsTrigger value="profile">Profile</TabsTrigger>
    <TabsTrigger value="security">Security</TabsTrigger>
  </TabsList>
  <TabsContent value="profile">Profile content…</TabsContent>
  <TabsContent value="security">Security content…</TabsContent>
</Tabs>`}
                />
            </div>
        </div>
    );
}
