"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function SwitchPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Switch</h1>
                <p className="text-muted-foreground text-sm">
                    A toggle switch for binary on/off settings. Built on the{" "}
                    <code className="text-xs">@base-ui/react</code> Switch primitive with an
                    animated thumb, expanded click target, and responsive sizing. Best for settings
                    that take immediate effect.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A <code className="text-xs">{"<Switch>"}</code> renders a track with an animated
                    thumb that slides between off (left) and on (right). Uses{" "}
                    <code className="text-xs">data-slot=&quot;switch&quot;</code> and{" "}
                    <code className="text-xs">data-slot=&quot;switch-thumb&quot;</code>. The checked
                    state changes the track color to primary.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-3">
                            <Switch id="anatomy-switch" defaultChecked />
                            <Label htmlFor="anatomy-switch">Enabled</Label>
                        </div>
                        <div className="text-muted-foreground flex items-center gap-4 text-[10px]">
                            <span>data-slot=&quot;switch&quot;</span>
                            <span>animated thumb</span>
                            <span>expanded click target</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="space-y-4">
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Settings list
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="ex-airplane">Airplane Mode</Label>
                                <Switch id="ex-airplane" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor="ex-notifications">Notifications</Label>
                                <Switch id="ex-notifications" defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor="ex-darkmode">Dark Mode</Label>
                                <Switch id="ex-darkmode" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* States */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">States</h3>
                <Separator />
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Switch />
                        <p className="text-muted-foreground text-[10px]">Off</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Switch defaultChecked />
                        <p className="text-muted-foreground text-[10px]">On</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Switch className="border-ring ring-ring/50 ring-3" />
                        <p className="text-muted-foreground text-[10px]">Focused</p>
                    </div>
                    <div className="border-border flex flex-col items-center gap-2 rounded-lg border p-4">
                        <Switch disabled />
                        <p className="text-muted-foreground text-[10px]">Disabled</p>
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
                                    Use for immediate-effect settings.
                                </strong>{" "}
                                The change should apply instantly, like toggling dark mode or
                                notifications.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Place label to the left or above.
                                </strong>{" "}
                                The switch should be on the trailing edge of a row.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Make the on/off state obvious.
                                </strong>{" "}
                                The visual shift (color + position) should be clear.
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
                                    Don&apos;t use for form submissions.
                                </strong>{" "}
                                If the change requires a &quot;Save&quot; action, use Checkbox
                                instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use in groups for multi-select.
                                </strong>{" "}
                                Multiple switches that look like a group should be independent
                                checkboxes.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t place without a label.
                                </strong>{" "}
                                Always provide text describing what the switch controls.
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
                            Built on Base UI Switch &mdash; manages{" "}
                            <code className="text-xs">role=&quot;switch&quot;</code> and{" "}
                            <code className="text-xs">aria-checked</code>.
                        </li>
                        <li>
                            Focus ring uses <code className="text-xs">focus-visible</code> for
                            keyboard-only display.
                        </li>
                        <li>Responsive sizing: h-[18px] w-[32px] base, sm:h-5 sm:w-9.</li>
                        <li>
                            Thumb animates via translate:{" "}
                            <code className="text-xs">translate-x-3.5</code> on checked.
                        </li>
                        <li>After pseudo-element expands click target: -inset-x-3 -inset-y-2.</li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

// Basic with label
<div className="flex items-center gap-3">
  <Switch id="airplane" />
  <Label htmlFor="airplane">Airplane Mode</Label>
</div>

// Pre-checked
<Switch id="notifications" defaultChecked />

// Disabled
<Switch id="disabled" disabled />

// Controlled
const [enabled, setEnabled] = useState(false)
<Switch checked={enabled} onCheckedChange={setEnabled} />

// Settings row pattern
<div className="flex items-center justify-between">
  <Label htmlFor="darkmode">Dark Mode</Label>
  <Switch id="darkmode" />
</div>`}
                />
            </div>
        </div>
    );
}
