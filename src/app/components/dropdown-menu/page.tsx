"use client";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import {
    Check,
    X,
    ChevronDown,
    User,
    CreditCard,
    Settings,
    LogOut,
    MoreHorizontal,
    Trash,
    Download,
    Copy,
} from "lucide-react";

export default function DropdownMenuPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">DropdownMenu</h1>
                <p className="text-muted-foreground text-sm">
                    A menu that opens on click, displaying a list of actions or navigation options.
                    Closes on selection or clicking outside. Built on{" "}
                    <code className="text-xs">@base-ui/react/menu</code> with full keyboard
                    navigation and ARIA menu role.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<DropdownMenu>"}</code> is the stateful root.{" "}
                    <code className="text-xs">DropdownMenuTrigger</code> is the element that opens
                    it. <code className="text-xs">DropdownMenuContent</code> renders in a portal.
                    Inside, use <code className="text-xs">DropdownMenuItem</code> for actions,{" "}
                    <code className="text-xs">DropdownMenuLabel</code> for group headings,{" "}
                    <code className="text-xs">DropdownMenuSeparator</code> for visual dividers, and{" "}
                    <code className="text-xs">DropdownMenuShortcut</code> for keyboard hints.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger render={<Button variant="outline" />}>
                                Open Menu <ChevronDown className="size-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                        <User className="size-4" /> Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard className="size-4" /> Billing
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="size-4" /> Settings
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut className="size-4" /> Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>DropdownMenuTrigger</span>
                            <span>DropdownMenuLabel + DropdownMenuSeparator</span>
                            <span>DropdownMenuItem with icon</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With shortcuts</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger render={<Button size="sm" variant="outline" />}>
                                File
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Download className="size-4" /> Save
                                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Copy className="size-4" /> Duplicate
                                    <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive focus:text-destructive">
                                    <Trash className="size-4" /> Delete
                                    <DropdownMenuShortcut>⌫</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Icon trigger (more actions)
                        </p>
                        <DropdownMenu>
                            <DropdownMenuTrigger render={<Button size="icon" variant="ghost" />}>
                                <MoreHorizontal className="size-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive focus:text-destructive">
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Account menu</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger render={<Button size="sm" />}>
                                <User className="size-4" /> Account
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>john@example.com</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                        <User className="size-4" /> Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="size-4" /> Settings
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut className="size-4" /> Sign out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
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
                                    Group related actions with separators.
                                </strong>{" "}
                                Use <code className="text-xs">DropdownMenuSeparator</code> to
                                cluster actions by category — destructive items should always be in
                                their own group at the bottom.
                            </li>
                            <li>
                                <strong className="text-foreground">Use icons consistently.</strong>{" "}
                                Either all items have icons or none do — mixing creates visual
                                imbalance.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Style destructive items visibly.
                                </strong>{" "}
                                Apply <code className="text-xs">text-destructive</code> to
                                delete/remove actions so users notice the risk before clicking.
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
                                    Don&apos;t overload with items.
                                </strong>{" "}
                                A dropdown with 15+ items is hard to scan. Split into sub-menus or
                                reconsider the information architecture.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for primary actions.
                                </strong>{" "}
                                If an action is the most important thing a user can do, give it a
                                dedicated Button — don&apos;t hide it in a dropdown.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t nest menus more than one level.
                                </strong>{" "}
                                Sub-menus add cognitive load. Prefer flat lists or separate pages
                                for deeply nested actions.
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
                            <code className="text-xs">DropdownMenuContent</code> has{" "}
                            <code className="text-xs">role=&quot;menu&quot;</code>; each{" "}
                            <code className="text-xs">DropdownMenuItem</code> has{" "}
                            <code className="text-xs">role=&quot;menuitem&quot;</code>.
                        </li>
                        <li>
                            Arrow keys move focus between items.{" "}
                            <code className="text-xs">Enter</code> /{" "}
                            <code className="text-xs">Space</code> activate the focused item.{" "}
                            <code className="text-xs">ESC</code> closes the menu and returns focus
                            to the trigger.
                        </li>
                        <li>
                            The menu renders in a portal so it is always above other content, but
                            remains in the accessible DOM tree.
                        </li>
                        <li>
                            <code className="text-xs">DropdownMenuTrigger</code> accepts a{" "}
                            <code className="text-xs">render</code> prop — pass any element (e.g.{" "}
                            <code className="text-xs">Button</code>) to use as the trigger without
                            an extra wrapper.
                        </li>
                        <li>
                            <code className="text-xs">align</code> prop on{" "}
                            <code className="text-xs">DropdownMenuContent</code> controls horizontal
                            alignment: <code className="text-xs">&quot;start&quot;</code> |{" "}
                            <code className="text-xs">&quot;center&quot;</code> |{" "}
                            <code className="text-xs">&quot;end&quot;</code>.
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
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline" />}>
    Open Menu
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>
        Settings
        <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive focus:text-destructive">
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

// Right-aligned content
<DropdownMenuContent align="end">...</DropdownMenuContent>`}
                />
            </div>
        </div>
    );
}
