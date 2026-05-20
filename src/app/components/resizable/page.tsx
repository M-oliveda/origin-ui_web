"use client";

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function ResizablePage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Resizable</h1>
                <p className="text-muted-foreground text-sm">
                    Drag-to-resize panel groups powered by{" "}
                    <code className="text-xs">react-resizable-panels</code>. Supports horizontal and
                    vertical layouts, nested groups, and optional handle grip indicators.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<ResizablePanelGroup>"}</code> is the root
                    container. It holds <code className="text-xs">{"<ResizablePanel>"}</code>{" "}
                    elements separated by <code className="text-xs">{"<ResizableHandle>"}</code>{" "}
                    dividers. The direction is controlled by the{" "}
                    <code className="text-xs">orientation</code> prop.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <ResizablePanelGroup
                        orientation="horizontal"
                        className="border-border min-h-[120px] rounded-lg border"
                    >
                        <ResizablePanel defaultSize={50}>
                            <div className="flex h-full items-center justify-center p-4 text-sm font-medium">
                                Panel A
                            </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={50}>
                            <div className="flex h-full items-center justify-center p-4 text-sm font-medium">
                                Panel B
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>
            </div>

            {/* Horizontal */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Horizontal</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Side-by-side panels. Drag the vertical divider to redistribute the available
                    width between them.
                </p>
                <ResizablePanelGroup
                    orientation="horizontal"
                    className="border-border min-h-[200px] rounded-lg border"
                >
                    <ResizablePanel defaultSize={30} minSize={20}>
                        <div className="flex h-full flex-col gap-1 p-4">
                            <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                                Sidebar
                            </p>
                            <div className="mt-2 space-y-1">
                                {["Dashboard", "Projects", "Settings"].map((item) => (
                                    <div
                                        key={item}
                                        className="text-muted-foreground hover:bg-muted rounded-md px-2 py-1.5 text-sm"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={70}>
                        <div className="text-muted-foreground flex h-full items-center justify-center p-6 text-sm">
                            Main content area
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>

            {/* Vertical */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Vertical</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Stacked panels. Drag the horizontal divider to redistribute height.
                </p>
                <ResizablePanelGroup
                    orientation="vertical"
                    className="border-border min-h-[280px] rounded-lg border"
                >
                    <ResizablePanel defaultSize={40} minSize={20}>
                        <div className="flex h-full items-center justify-center p-4 text-sm font-medium">
                            Top Panel
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={60}>
                        <div className="flex h-full items-center justify-center p-4 text-sm font-medium">
                            Bottom Panel
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>

            {/* Three panels */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Three Panels</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Add more panels with handles between each pair. Set{" "}
                    <code className="text-xs">minSize</code> to prevent panels from collapsing too
                    far.
                </p>
                <ResizablePanelGroup
                    orientation="horizontal"
                    className="border-border min-h-[180px] rounded-lg border"
                >
                    <ResizablePanel defaultSize={25} minSize={15}>
                        <div className="flex h-full items-center justify-center p-4 text-sm font-medium">
                            Left
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={50} minSize={20}>
                        <div className="flex h-full items-center justify-center p-4 text-sm font-medium">
                            Center
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={25} minSize={15}>
                        <div className="flex h-full items-center justify-center p-4 text-sm font-medium">
                            Right
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
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
                                    Set minSize on every panel.
                                </strong>{" "}
                                Without a minimum, panels can collapse to zero and become impossible
                                to re-expand.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use withHandle for discoverability.
                                </strong>{" "}
                                The grip indicator tells users the divider is draggable, especially
                                for less familiar users.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use for complex layout tools.
                                </strong>{" "}
                                Code editors, dashboards, and file explorers are natural fits.
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
                                    Don&apos;t use on mobile without a fallback.
                                </strong>{" "}
                                Drag handles are difficult to use on touch devices — provide a fixed
                                layout on small screens.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for simple two-column layouts.
                                </strong>{" "}
                                CSS grid or flex is easier to maintain; resizable panels are for
                                user-controlled layouts.
                            </li>
                            <li>
                                <strong className="text-foreground">Don&apos;t nest deeply.</strong>{" "}
                                More than two levels of nested panel groups creates confusing resize
                                behavior.
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
                    <h4 className="mb-2 text-sm font-medium">Accessibility & Key Props</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            <code className="text-xs">ResizableHandle</code> renders with{" "}
                            <code className="text-xs">role=&quot;separator&quot;</code> and{" "}
                            <code className="text-xs">aria-orientation</code> set automatically.
                        </li>
                        <li>
                            Keyboard: <kbd className="rounded border px-1 text-xs">←</kbd> /{" "}
                            <kbd className="rounded border px-1 text-xs">→</kbd> (horizontal) or{" "}
                            <kbd className="rounded border px-1 text-xs">↑</kbd> /{" "}
                            <kbd className="rounded border px-1 text-xs">↓</kbd> (vertical) resize
                            panels when the handle is focused.
                        </li>
                        <li>
                            <code className="text-xs">defaultSize</code> — percentage (0–100) of the
                            group to allocate to this panel initially.
                        </li>
                        <li>
                            <code className="text-xs">minSize</code> /{" "}
                            <code className="text-xs">maxSize</code> — clamp the panel&apos;s
                            resizable range.
                        </li>
                        <li>
                            <code className="text-xs">withHandle</code> on{" "}
                            <code className="text-xs">ResizableHandle</code> shows the grip dot
                            indicator.
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
  ResizablePanelGroup, ResizablePanel, ResizableHandle
} from "@/components/ui/resizable"

// Horizontal split
<ResizablePanelGroup orientation="horizontal" className="min-h-[200px] rounded-lg border">
  <ResizablePanel defaultSize={30} minSize={20}>
    <div className="p-4">Sidebar</div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={70}>
    <div className="p-4">Main content</div>
  </ResizablePanel>
</ResizablePanelGroup>

// Vertical split
<ResizablePanelGroup orientation="vertical" className="min-h-[300px] rounded-lg border">
  <ResizablePanel defaultSize={40} minSize={20}>
    <div className="p-4">Top</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={60}>
    <div className="p-4">Bottom</div>
  </ResizablePanel>
</ResizablePanelGroup>`}
                />
            </div>
        </div>
    );
}
