"use client";

import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function NativeSelectPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">NativeSelect</h1>
                <p className="text-muted-foreground text-sm">
                    A native HTML select element with consistent styling. Uses the browser&apos;s
                    built-in dropdown for maximum mobile compatibility. Ideal for forms where the
                    system picker is preferred over a custom dropdown.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<NativeSelect>"}</code> wraps a native{" "}
                    <code className="text-xs">{"<select>"}</code> inside a styled container with a
                    custom chevron icon. Uses{" "}
                    <code className="text-xs">{"<NativeSelectOption>"}</code> for options and
                    supports <code className="text-xs">{"<NativeSelectOptGroup>"}</code> for
                    grouping.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="mx-auto max-w-sm">
                        <NativeSelect>
                            <NativeSelectOption value="">Select a country</NativeSelectOption>
                            <NativeSelectOption value="us">United States</NativeSelectOption>
                            <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
                            <NativeSelectOption value="de">Germany</NativeSelectOption>
                        </NativeSelect>
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="max-w-sm space-y-4">
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Basic</p>
                        <NativeSelect>
                            <NativeSelectOption value="">Select a fruit</NativeSelectOption>
                            <NativeSelectOption value="apple">Apple</NativeSelectOption>
                            <NativeSelectOption value="banana">Banana</NativeSelectOption>
                            <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
                        </NativeSelect>
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With label</p>
                        <Label htmlFor="ns-country">Country</Label>
                        <NativeSelect id="ns-country">
                            <NativeSelectOption value="">Choose...</NativeSelectOption>
                            <NativeSelectOption value="us">United States</NativeSelectOption>
                            <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
                            <NativeSelectOption value="de">Germany</NativeSelectOption>
                        </NativeSelect>
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Disabled</p>
                        <NativeSelect disabled>
                            <NativeSelectOption value="">Disabled</NativeSelectOption>
                        </NativeSelect>
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
                                    Use for mobile-friendly forms.
                                </strong>{" "}
                                The native picker is optimized for touch devices and assistive
                                technology.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use when no custom styling is needed.
                                </strong>{" "}
                                If the system dropdown is acceptable, native is simpler and more
                                accessible.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Include a blank default option.
                                </strong>{" "}
                                &quot;Select a...&quot; as the first option guides users.
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
                                    Don&apos;t use when you need custom option rendering.
                                </strong>{" "}
                                For rich content in options, use Select or Combobox.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for searchable lists.
                                </strong>{" "}
                                Native selects don&apos;t support type-to-filter well on desktop.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t mix with custom Select in the same form.
                                </strong>{" "}
                                Consistency matters &mdash; pick one pattern.
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
                            Uses native <code className="text-xs">{"<select>"}</code> &mdash; full
                            browser/OS accessibility built-in.
                        </li>
                        <li>Responsive sizing: h-8 sm:h-9 lg:h-10.</li>
                        <li>Custom chevron icon positioned absolutely at right-2.5.</li>
                        <li>
                            <code className="text-xs">aria-invalid</code> triggers destructive ring
                            styling.
                        </li>
                        <li>Selected option uses primary color background.</li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

<NativeSelect>
  <NativeSelectOption value="">Select a country</NativeSelectOption>
  <NativeSelectOption value="us">United States</NativeSelectOption>
  <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
</NativeSelect>

// With optgroup
<NativeSelect>
  <NativeSelectOptGroup label="Fruits">
    <NativeSelectOption value="apple">Apple</NativeSelectOption>
    <NativeSelectOption value="banana">Banana</NativeSelectOption>
  </NativeSelectOptGroup>
  <NativeSelectOptGroup label="Vegetables">
    <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
  </NativeSelectOptGroup>
</NativeSelect>`}
                />
            </div>
        </div>
    );
}
