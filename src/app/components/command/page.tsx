"use client";

import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import {
    Check,
    X,
    FileText,
    Search,
    Settings,
    Calendar,
    Mail,
    User,
    Terminal,
    Calculator,
} from "lucide-react";

export default function CommandPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Command</h1>
                <p className="text-muted-foreground text-sm">
                    A command palette for searching and executing actions — think ⌘K. Provides a
                    searchable list of commands grouped by category, with built-in keyboard
                    navigation. Often rendered inside a Dialog for a floating Cmd+K experience.
                    Built on <code className="text-xs">cmdk</code>.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Command>"}</code> is the root container (handles
                    filtering logic). <code className="text-xs">CommandInput</code> is the search
                    field. <code className="text-xs">CommandList</code> is the scrollable results
                    area. <code className="text-xs">CommandEmpty</code> renders when no results
                    match. <code className="text-xs">CommandGroup</code> labels a section of items.{" "}
                    <code className="text-xs">CommandItem</code> is a selectable action.{" "}
                    <code className="text-xs">CommandSeparator</code> draws a horizontal divider
                    between groups. <code className="text-xs">CommandShortcut</code> shows a
                    keyboard hint aligned right.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex justify-center">
                        <Command className="border-border w-full max-w-sm rounded-lg border shadow-sm">
                            <CommandInput placeholder="Type a command or search..." />
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup heading="Suggestions">
                                    <CommandItem>
                                        <Calendar className="size-4" /> Calendar
                                    </CommandItem>
                                    <CommandItem>
                                        <Search className="size-4" /> Search
                                    </CommandItem>
                                    <CommandItem>
                                        <Settings className="size-4" /> Settings
                                    </CommandItem>
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </div>
                    <div className="text-muted-foreground mt-4 flex flex-wrap items-center justify-center gap-4 text-[10px]">
                        <span>CommandInput (filtered search)</span>
                        <span>CommandGroup (labeled section)</span>
                        <span>CommandEmpty (no results state)</span>
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
                            Multi-group with shortcuts
                        </p>
                        <Command className="border-border rounded-lg border shadow-sm">
                            <CommandInput placeholder="Search..." />
                            <CommandList>
                                <CommandEmpty>No results.</CommandEmpty>
                                <CommandGroup heading="Navigation">
                                    <CommandItem>
                                        <FileText className="size-4" /> Documents
                                        <CommandShortcut>⌘D</CommandShortcut>
                                    </CommandItem>
                                    <CommandItem>
                                        <Mail className="size-4" /> Inbox
                                        <CommandShortcut>⌘I</CommandShortcut>
                                    </CommandItem>
                                </CommandGroup>
                                <CommandSeparator />
                                <CommandGroup heading="Actions">
                                    <CommandItem>
                                        <User className="size-4" /> Profile
                                        <CommandShortcut>⌘P</CommandShortcut>
                                    </CommandItem>
                                    <CommandItem>
                                        <Settings className="size-4" /> Settings
                                        <CommandShortcut>⌘,</CommandShortcut>
                                    </CommandItem>
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Tools palette</p>
                        <Command className="border-border rounded-lg border shadow-sm">
                            <CommandInput placeholder="Search tools..." />
                            <CommandList>
                                <CommandEmpty>No tools found.</CommandEmpty>
                                <CommandGroup heading="Tools">
                                    <CommandItem>
                                        <Terminal className="size-4" /> Terminal
                                    </CommandItem>
                                    <CommandItem>
                                        <Calculator className="size-4" /> Calculator
                                    </CommandItem>
                                    <CommandItem>
                                        <Search className="size-4" /> Find &amp; Replace
                                    </CommandItem>
                                </CommandGroup>
                                <CommandSeparator />
                                <CommandGroup heading="Recent">
                                    <CommandItem>
                                        <FileText className="size-4" /> README.md
                                    </CommandItem>
                                    <CommandItem>
                                        <FileText className="size-4" /> package.json
                                    </CommandItem>
                                </CommandGroup>
                            </CommandList>
                        </Command>
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
                                    Group items by category.
                                </strong>{" "}
                                Use <code className="text-xs">CommandGroup</code> with a meaningful{" "}
                                <code className="text-xs">heading</code> — categories help users
                                scan and understand the scope of available commands.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Always provide a no-results state.
                                </strong>{" "}
                                <code className="text-xs">CommandEmpty</code> must be present so
                                users know their search returned nothing rather than thinking the
                                palette is broken.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Pair with a Dialog for ⌘K.
                                </strong>{" "}
                                Wrap the Command in a <code className="text-xs">CommandDialog</code>{" "}
                                or a regular Dialog — the floating palette pattern is the most
                                recognized UX for command menus.
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
                                    Don&apos;t embed without a trigger.
                                </strong>{" "}
                                A Command palette sitting inline on a page is unusual — users expect
                                to open it via keyboard shortcut (⌘K) or a visible button.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t overload with hundreds of items.
                                </strong>{" "}
                                The palette is most useful when the item list is well-curated. Use
                                fuzzy filtering to surface relevant results rather than listing
                                everything.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t skip icons for complex lists.
                                </strong>{" "}
                                When many items have similar labels, icons provide a quick visual
                                anchor that speeds up scanning.
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
                            <code className="text-xs">CommandInput</code> filters items
                            automatically — the list re-renders as the user types.
                        </li>
                        <li>
                            Arrow keys navigate between <code className="text-xs">CommandItem</code>{" "}
                            entries. <code className="text-xs">Enter</code> triggers the selected
                            item&apos;s <code className="text-xs">onSelect</code> callback.
                        </li>
                        <li>
                            Each <code className="text-xs">CommandItem</code> accepts an{" "}
                            <code className="text-xs">onSelect</code> prop for the action to run and
                            a <code className="text-xs">value</code> prop that the search filter
                            compares against.
                        </li>
                        <li>
                            <code className="text-xs">CommandDialog</code> is a pre-built wrapper
                            that combines Command with a Dialog for the floating ⌘K pattern.
                        </li>
                        <li>
                            Items not matching the current search query are hidden automatically —
                            no manual filtering needed.
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
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
  CommandDialog,
} from "@/components/ui/command"

// Inline palette
<Command className="rounded-lg border shadow-sm">
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Navigation">
      <CommandItem onSelect={() => router.push("/docs")}>
        Docs
        <CommandShortcut>⌘D</CommandShortcut>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Actions">
      <CommandItem onSelect={() => setTheme("dark")}>
        Toggle Dark Mode
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

// Floating ⌘K dialog
const [open, setOpen] = useState(false)
useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((prev) => !prev)
    }
  }
  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`}
                />
            </div>
        </div>
    );
}
