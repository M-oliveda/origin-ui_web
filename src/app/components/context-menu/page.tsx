"use client";

import {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuGroup,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuShortcut,
} from "@/components/ui/context-menu";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, Copy, Scissors, Clipboard, Trash, FileText } from "lucide-react";

export default function ContextMenuPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">ContextMenu</h1>
                <p className="text-muted-foreground text-sm">
                    A menu triggered by a right-click (or long-press on touch) that surfaces
                    contextual actions for the element under the cursor. Built on{" "}
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
                    <code className="text-xs">{"<ContextMenu>"}</code> is the stateful root.{" "}
                    <code className="text-xs">ContextMenuTrigger</code> wraps the element that
                    should respond to right-click.{" "}
                    <code className="text-xs">ContextMenuContent</code> renders in a portal at the
                    cursor position. <code className="text-xs">ContextMenuItem</code> is an action
                    row. <code className="text-xs">ContextMenuLabel</code> adds a non-interactive
                    heading. <code className="text-xs">ContextMenuSeparator</code> draws a divider.{" "}
                    <code className="text-xs">ContextMenuShortcut</code> displays a keyboard hint
                    aligned to the right.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <ContextMenu>
                            <ContextMenuTrigger className="border-border text-muted-foreground flex h-24 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-sm select-none">
                                Right-click here
                            </ContextMenuTrigger>
                            <ContextMenuContent>
                                <ContextMenuItem>Back</ContextMenuItem>
                                <ContextMenuItem>Forward</ContextMenuItem>
                                <ContextMenuItem>Reload</ContextMenuItem>
                                <ContextMenuSeparator />
                                <ContextMenuItem>View Source</ContextMenuItem>
                            </ContextMenuContent>
                        </ContextMenu>
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>ContextMenuTrigger (right-click zone)</span>
                            <span>ContextMenuContent (portal at cursor)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Text editor actions
                        </p>
                        <ContextMenu>
                            <ContextMenuTrigger className="border-border text-muted-foreground flex h-24 items-center justify-center rounded-lg border border-dashed text-sm select-none">
                                Right-click for text actions
                            </ContextMenuTrigger>
                            <ContextMenuContent>
                                <ContextMenuGroup>
                                    <ContextMenuLabel>Edit</ContextMenuLabel>
                                    <ContextMenuSeparator />
                                    <ContextMenuItem>
                                        <Scissors className="size-4" /> Cut
                                        <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                                    </ContextMenuItem>
                                    <ContextMenuItem>
                                        <Copy className="size-4" /> Copy
                                        <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                                    </ContextMenuItem>
                                    <ContextMenuItem>
                                        <Clipboard className="size-4" /> Paste
                                        <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                                    </ContextMenuItem>
                                </ContextMenuGroup>
                            </ContextMenuContent>
                        </ContextMenu>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">File actions</p>
                        <ContextMenu>
                            <ContextMenuTrigger className="border-border text-muted-foreground flex h-24 items-center justify-center gap-2 rounded-lg border border-dashed text-sm select-none">
                                <FileText className="size-4" /> document.pdf
                            </ContextMenuTrigger>
                            <ContextMenuContent>
                                <ContextMenuItem>Open</ContextMenuItem>
                                <ContextMenuItem>
                                    <Copy className="size-4" /> Duplicate
                                </ContextMenuItem>
                                <ContextMenuItem>Rename</ContextMenuItem>
                                <ContextMenuSeparator />
                                <ContextMenuItem className="text-destructive focus:text-destructive">
                                    <Trash className="size-4" /> Delete
                                </ContextMenuItem>
                            </ContextMenuContent>
                        </ContextMenu>
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
                                    Mirror keyboard shortcuts.
                                </strong>{" "}
                                If an action has a shortcut (Cut: ⌘X), show it in the menu with{" "}
                                <code className="text-xs">ContextMenuShortcut</code> — it reinforces
                                discoverability.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Surface only context-relevant actions.
                                </strong>{" "}
                                The menu should adapt to what the user right-clicked — a text
                                selection menu differs from a file menu.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Place destructive items last.
                                </strong>{" "}
                                Separate delete/remove actions below a{" "}
                                <code className="text-xs">ContextMenuSeparator</code> so users
                                don&apos;t trigger them accidentally.
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
                                    Don&apos;t rely on it as the only path.
                                </strong>{" "}
                                Context menus are hidden by default — critical actions must also be
                                reachable via visible UI elements.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for primary navigation.
                                </strong>{" "}
                                Context menus are for actions on selected content, not for moving
                                between pages or sections.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t show irrelevant items.
                                </strong>{" "}
                                Rendering greyed-out or disabled items for the current context adds
                                noise — hide them instead.
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
                            <code className="text-xs">ContextMenuContent</code> has{" "}
                            <code className="text-xs">role=&quot;menu&quot;</code>; each{" "}
                            <code className="text-xs">ContextMenuItem</code> has{" "}
                            <code className="text-xs">role=&quot;menuitem&quot;</code>.
                        </li>
                        <li>
                            The menu opens at the cursor position on right-click, or at the
                            element&apos;s position on keyboard (
                            <code className="text-xs">Shift+F10</code> or the Menu key).
                        </li>
                        <li>
                            Arrow keys navigate items. <code className="text-xs">Enter</code> /{" "}
                            <code className="text-xs">Space</code> activate.{" "}
                            <code className="text-xs">ESC</code> closes and returns focus to the
                            trigger.
                        </li>
                        <li>
                            <code className="text-xs">ContextMenuTrigger</code> can wrap any element
                            — it adds a <code className="text-xs">contextmenu</code> event listener
                            without altering the element&apos;s semantics.
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
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "@/components/ui/context-menu"

<ContextMenu>
  <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-lg border border-dashed">
    Right-click here
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuGroup>
      <ContextMenuLabel>Actions</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem>
        Copy
        <ContextMenuShortcut>⌘C</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        Paste
        <ContextMenuShortcut>⌘V</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuGroup>
    <ContextMenuSeparator />
    <ContextMenuItem className="text-destructive focus:text-destructive">
      Delete
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
                />
            </div>
        </div>
    );
}
