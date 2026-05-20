"use client";

import { OriginUiSearchBar } from "@/components/branding/origin-ui-search-bar";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function SearchBarPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">SearchBar</h1>
                <p className="text-muted-foreground text-sm">
                    A search input with a leading search icon and an optional keyboard shortcut
                    badge on the right. Built on top of <code className="text-xs">Input</code> and{" "}
                    <code className="text-xs">Kbd</code>. Accepts all standard{" "}
                    <code className="text-xs">{"<input>"}</code> props.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A relative-positioned wrapper containing an{" "}
                    <code className="text-xs">Input</code> with left padding for the icon and right
                    padding for the optional shortcut badge. The search icon is absolutely
                    positioned on the left; the <code className="text-xs">Kbd</code> is absolutely
                    positioned on the right.
                </p>
                <div className="border-border bg-muted/30 flex justify-center rounded-lg border p-6">
                    <div className="w-full max-w-xs">
                        <OriginUiSearchBar placeholder="Search components..." shortcut="⌘K" />
                    </div>
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variants</h3>
                <Separator />
                <div className="border-border space-y-4 rounded-lg border p-6">
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            With shortcut
                        </p>
                        <OriginUiSearchBar placeholder="Search components..." shortcut="⌘K" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Without shortcut
                        </p>
                        <OriginUiSearchBar placeholder="Search documentation..." />
                    </div>
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Different shortcut keys
                        </p>
                        <div className="space-y-2">
                            <OriginUiSearchBar placeholder="Search files..." shortcut="⌘P" />
                            <OriginUiSearchBar placeholder="Search commands..." shortcut="⌘/" />
                            <OriginUiSearchBar placeholder="Filter by name..." shortcut="Ctrl+F" />
                        </div>
                    </div>
                </div>
            </div>

            {/* In context */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">In a Navigation Bar</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    SearchBar is commonly used in site navigation and sidebar headers.
                </p>
                <div className="border-border rounded-lg border">
                    <div className="border-border flex items-center gap-4 border-b px-4 py-3">
                        <span className="shrink-0 text-sm font-semibold">My App</span>
                        <div className="max-w-xs flex-1">
                            <OriginUiSearchBar placeholder="Search..." shortcut="⌘K" />
                        </div>
                    </div>
                    <div className="text-muted-foreground flex h-20 items-center justify-center p-4 text-sm">
                        Page content
                    </div>
                </div>
            </div>

            {/* Sidebar filter */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Sidebar Filter</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Without a shortcut hint — ideal for filtering local lists inside sidebars or
                    popovers.
                </p>
                <div className="border-border max-w-xs rounded-lg border">
                    <div className="border-border border-b p-3">
                        <OriginUiSearchBar placeholder="Filter components..." />
                    </div>
                    <div className="space-y-0.5 p-2">
                        {["Button", "Badge", "Card", "Input", "Select"].map((item) => (
                            <div
                                key={item}
                                className="text-muted-foreground hover:bg-muted rounded-md px-2 py-1.5 text-sm"
                            >
                                {item}
                            </div>
                        ))}
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
                                    Show the shortcut when a keyboard binding exists.
                                </strong>{" "}
                                The Kbd badge sets user expectations and improves discoverability.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use a specific placeholder.
                                </strong>{" "}
                                &quot;Search components...&quot; tells users exactly what
                                they&apos;re searching — more helpful than a generic
                                &quot;Search...&quot;.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Wire the shortcut to a focus handler.
                                </strong>{" "}
                                The badge is informational only — implement the keyboard listener
                                separately.
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
                                    Don&apos;t show a shortcut badge without the keyboard listener.
                                </strong>{" "}
                                Users who press the key and nothing happens lose trust in the UI.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for form search inputs.
                                </strong>{" "}
                                For search forms with a submit button, use a regular Input with a
                                search button instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t make it full-width everywhere.
                                </strong>{" "}
                                A 240–320px max-width is appropriate for most sidebar and nav bar
                                placements.
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
                    <h4 className="mb-2 text-sm font-medium">Props</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            <code className="text-xs">shortcut</code> (optional) — a string
                            displayed in a <code className="text-xs">Kbd</code> on the right edge.
                            E.g. <code className="text-xs">&quot;⌘K&quot;</code>.
                        </li>
                        <li>
                            <code className="text-xs">placeholder</code> (optional) — forwarded to
                            the <code className="text-xs">Input</code> element.
                        </li>
                        <li>
                            <code className="text-xs">className</code> — applied to the outer
                            wrapper div.
                        </li>
                        <li>
                            All other props are forwarded to the underlying{" "}
                            <code className="text-xs">{"<Input>"}</code> (e.g.{" "}
                            <code className="text-xs">value</code>,{" "}
                            <code className="text-xs">onChange</code>,{" "}
                            <code className="text-xs">disabled</code>).
                        </li>
                        <li>
                            Implement keyboard focus yourself via{" "}
                            <code className="text-xs">useEffect</code> +{" "}
                            <code className="text-xs">
                                window.addEventListener(&quot;keydown&quot;, ...)
                            </code>
                            .
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { OriginUiSearchBar } from "@/components/branding/origin-ui-search-bar"
import { useRef, useEffect } from "react"

// With keyboard shortcut badge
<OriginUiSearchBar
  placeholder="Search components..."
  shortcut="⌘K"
/>

// Without shortcut
<OriginUiSearchBar placeholder="Search documentation..." />

// Controlled with keyboard focus
const ref = useRef<HTMLInputElement>(null)

useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault()
      ref.current?.focus()
    }
  }
  window.addEventListener("keydown", down)
  return () => window.removeEventListener("keydown", down)
}, [])

<OriginUiSearchBar
  ref={ref}
  placeholder="Search..."
  shortcut="⌘K"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>`}
                />
            </div>
        </div>
    );
}
