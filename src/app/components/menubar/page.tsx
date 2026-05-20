"use client";

import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarLabel,
    MenubarShortcut,
} from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function MenubarPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Menubar</h1>
                <p className="text-muted-foreground text-sm">
                    A horizontal bar of menus, similar to the application menus found in desktop
                    software (File, Edit, View). Each trigger opens a dropdown on click. Built on{" "}
                    <code className="text-xs">@base-ui/react/menu</code> with full keyboard
                    navigation across the bar.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Menubar>"}</code> is the horizontal container. Each
                    menu is a <code className="text-xs">{"<MenubarMenu>"}</code> wrapping a{" "}
                    <code className="text-xs">MenubarTrigger</code> (the tab label) and{" "}
                    <code className="text-xs">MenubarContent</code> (the dropdown). Inside the
                    content use <code className="text-xs">MenubarItem</code> for actions,{" "}
                    <code className="text-xs">MenubarLabel</code> for group headings,{" "}
                    <code className="text-xs">MenubarSeparator</code> for dividers, and{" "}
                    <code className="text-xs">MenubarShortcut</code> for keyboard hints.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>File</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>New Tab</MenubarItem>
                                    <MenubarItem>New Window</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Print</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Edit</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>Undo</MenubarItem>
                                    <MenubarItem>Redo</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>View</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>Zoom In</MenubarItem>
                                    <MenubarItem>Zoom Out</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>MenubarMenu per section</span>
                            <span>MenubarTrigger (tab)</span>
                            <span>MenubarContent (dropdown)</span>
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
                            Editor — with labels and shortcuts
                        </p>
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>File</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        New File <MenubarShortcut>⌘N</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Open… <MenubarShortcut>⌘O</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        Save <MenubarShortcut>⌘S</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>Save As…</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Close Window</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Edit</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarLabel>Clipboard</MenubarLabel>
                                    <MenubarItem>
                                        Cut <MenubarShortcut>⌘X</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Copy <MenubarShortcut>⌘C</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Paste <MenubarShortcut>⌘V</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>View</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Full Screen</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Help</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>Documentation</MenubarItem>
                                    <MenubarItem>Release Notes</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Report an Issue</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Minimal — two menus
                        </p>
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>Account</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>Profile</MenubarItem>
                                    <MenubarItem>Settings</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Sign out</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Help</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>Documentation</MenubarItem>
                                    <MenubarItem>Support</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
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
                                    Use for app-level actions.
                                </strong>{" "}
                                Menubar suits web apps with many features — editors, dashboards,
                                productivity tools — where a persistent action bar makes sense.
                            </li>
                            <li>
                                <strong className="text-foreground">Group items logically.</strong>{" "}
                                Use <code className="text-xs">MenubarLabel</code> and{" "}
                                <code className="text-xs">MenubarSeparator</code> to cluster related
                                items within a menu.
                            </li>
                            <li>
                                <strong className="text-foreground">Add keyboard shortcuts.</strong>{" "}
                                Desktop-app users expect them —{" "}
                                <code className="text-xs">MenubarShortcut</code> shows the binding
                                without adding functionality (wire shortcuts separately).
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
                                    Don&apos;t use for site navigation.
                                </strong>{" "}
                                Menubar is for action menus, not page navigation — use{" "}
                                <code className="text-xs">NavigationMenu</code> for site-level
                                links.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t add too many top-level menus.
                                </strong>{" "}
                                More than 5–6 tabs makes the bar crowded. Merge related categories
                                or move less-used actions to a Settings page.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t rely on it on mobile.
                                </strong>{" "}
                                A horizontal menubar does not work well on small screens — provide
                                an alternative (sheet, bottom nav) for mobile viewports.
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
                            <code className="text-xs">{"<Menubar>"}</code> has{" "}
                            <code className="text-xs">role=&quot;menubar&quot;</code>. Each{" "}
                            <code className="text-xs">MenubarMenu</code> acts as a menu item in the
                            bar.
                        </li>
                        <li>
                            Left / Right arrow keys move focus between{" "}
                            <code className="text-xs">MenubarTrigger</code> tabs. Down arrow or
                            Enter opens the focused menu.
                        </li>
                        <li>
                            Inside an open menu, Up / Down arrow keys navigate items. ESC closes the
                            menu and returns focus to the trigger.
                        </li>
                        <li>
                            <code className="text-xs">MenubarShortcut</code> is presentational only
                            — wire actual keyboard shortcuts with a{" "}
                            <code className="text-xs">keydown</code> listener or a shortcut library.
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
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarShortcut,
} from "@/components/ui/menubar"

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New File <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        Save <MenubarShortcut>⌘S</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Close</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarLabel>Clipboard</MenubarLabel>
      <MenubarItem>Cut</MenubarItem>
      <MenubarItem>Copy</MenubarItem>
      <MenubarItem>Paste</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
                />
            </div>
        </div>
    );
}
