"use client";

import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function KbdPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Kbd</h1>
                <p className="text-muted-foreground text-sm">
                    Displays a keyboard key or key combination in a styled chip. Uses the semantic{" "}
                    <code className="text-xs">{"<kbd>"}</code> HTML element for correct
                    screen-reader pronunciation. Use <code className="text-xs">KbdGroup</code> to
                    lay out multi-key combinations with consistent spacing.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Kbd>"}</code> renders a single key chip.{" "}
                    <code className="text-xs">KbdGroup</code> wraps multiple{" "}
                    <code className="text-xs">Kbd</code> elements in a flex row with a gap — use it
                    for combinations like ⌘+K. Both accept standard{" "}
                    <code className="text-xs">className</code> props.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Kbd>⌘</Kbd>
                            <Kbd>K</Kbd>
                            <Kbd>Enter</Kbd>
                            <Kbd>Esc</Kbd>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <KbdGroup>
                                <Kbd>⌘</Kbd>
                                <Kbd>K</Kbd>
                            </KbdGroup>
                            <p className="text-muted-foreground text-[10px]">KbdGroup</p>
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
                            Common shortcuts
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground text-sm">
                                    Open command palette
                                </span>
                                <KbdGroup>
                                    <Kbd>⌘</Kbd>
                                    <Kbd>K</Kbd>
                                </KbdGroup>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground text-sm">Save document</span>
                                <KbdGroup>
                                    <Kbd>⌘</Kbd>
                                    <Kbd>S</Kbd>
                                </KbdGroup>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground text-sm">
                                    Copy selection
                                </span>
                                <KbdGroup>
                                    <Kbd>⌘</Kbd>
                                    <Kbd>C</Kbd>
                                </KbdGroup>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground text-sm">Undo</span>
                                <KbdGroup>
                                    <Kbd>⌘</Kbd>
                                    <Kbd>Z</Kbd>
                                </KbdGroup>
                            </div>
                        </div>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Inline prose usage
                        </p>
                        <div className="text-muted-foreground space-y-3 text-sm">
                            <p>
                                Press <Kbd>Tab</Kbd> to move between fields and <Kbd>Enter</Kbd> to
                                submit.
                            </p>
                            <p>
                                Use{" "}
                                <KbdGroup>
                                    <Kbd>⇧</Kbd>
                                    <Kbd>Tab</Kbd>
                                </KbdGroup>{" "}
                                to go backwards.
                            </p>
                            <p>
                                Hit <Kbd>Esc</Kbd> to dismiss any open modal or popover.
                            </p>
                            <p>
                                Zoom in with{" "}
                                <KbdGroup>
                                    <Kbd>⌘</Kbd>
                                    <Kbd>+</Kbd>
                                </KbdGroup>{" "}
                                or out with{" "}
                                <KbdGroup>
                                    <Kbd>⌘</Kbd>
                                    <Kbd>-</Kbd>
                                </KbdGroup>
                                .
                            </p>
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
                                    Use for discoverability.
                                </strong>{" "}
                                Show shortcuts next to their action in menus and tooltips — users
                                learn shortcuts by seeing them in context, not by reading a help
                                page.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use KbdGroup for multi-key combos.
                                </strong>{" "}
                                Wrap multiple <code className="text-xs">Kbd</code> chips in{" "}
                                <code className="text-xs">KbdGroup</code> rather than putting the
                                full string in one chip — it&apos;s semantically cleaner and
                                visually consistent.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use platform-appropriate symbols.
                                </strong>{" "}
                                Prefer ⌘ over &quot;Ctrl&quot; for Mac, and Ctrl for Windows — or
                                detect the platform and show the right symbol.
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
                                    Don&apos;t use Kbd for non-keyboard input.
                                </strong>{" "}
                                Kbd is for actual keyboard keys — don&apos;t use it for mouse
                                clicks, touch gestures, or decorative badges.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t cram long combinations into one chip.
                                </strong>{" "}
                                <code className="text-xs">{"<Kbd>⌘ + Shift + K</Kbd>"}</code> is
                                harder to read than three separate{" "}
                                <code className="text-xs">Kbd</code> chips in a{" "}
                                <code className="text-xs">KbdGroup</code>.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t show shortcuts users can&apos;t use.
                                </strong>{" "}
                                Only surface keyboard shortcuts for actions that are actually
                                available in the current context.
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
                            <code className="text-xs">Kbd</code> renders a{" "}
                            <code className="text-xs">{"<kbd>"}</code> element — the correct
                            semantic element for keyboard input. Screen readers may announce it
                            differently (e.g. &quot;Command K&quot;).
                        </li>
                        <li>
                            <code className="text-xs">KbdGroup</code> is a plain{" "}
                            <code className="text-xs">{"<div>"}</code> with flex layout — it has no
                            ARIA role. The individual <code className="text-xs">{"<kbd>"}</code>{" "}
                            elements inside carry the semantics.
                        </li>
                        <li>
                            Both components accept all standard HTML props including{" "}
                            <code className="text-xs">className</code> for custom sizing or color
                            overrides.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { Kbd, KbdGroup } from "@/components/ui/kbd"

// Single key
<Kbd>Enter</Kbd>
<Kbd>Esc</Kbd>
<Kbd>⌘</Kbd>

// Multi-key combination
<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>

// Inline in prose
<p>
  Press <Kbd>Tab</Kbd> to move to the next field.
</p>

// In a shortcut table
<div className="flex items-center justify-between">
  <span>Open search</span>
  <KbdGroup>
    <Kbd>⌘</Kbd>
    <Kbd>K</Kbd>
  </KbdGroup>
</div>`}
                />
            </div>
        </div>
    );
}
