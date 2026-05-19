"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
    SelectSeparator,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function SelectPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Select</h1>
                <p className="text-muted-foreground text-sm">
                    A dropdown select input built on Base UI. Supports grouped options, custom
                    styling, animated transitions, and keyboard navigation. For native mobile
                    behavior, see{" "}
                    <a
                        href="/components/native-select"
                        className="text-primary hover:text-primary/80 underline underline-offset-4"
                    >
                        NativeSelect
                    </a>
                    .
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Select>"}</code> wraps a{" "}
                    <code className="text-xs">{"<SelectTrigger>"}</code> (the button) and{" "}
                    <code className="text-xs">{"<SelectContent>"}</code> (the dropdown). Content
                    holds <code className="text-xs">{"<SelectItem>"}</code> elements, optionally
                    organized with <code className="text-xs">{"<SelectGroup>"}</code> and{" "}
                    <code className="text-xs">{"<SelectLabel>"}</code>.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="mx-auto max-w-sm">
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="cherry">Cherry</SelectItem>
                                <SelectItem value="grape">Grape</SelectItem>
                                <SelectItem value="orange">Orange</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="max-w-sm space-y-6">
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Basic</p>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="cherry">Cherry</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With groups</p>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Engineering</SelectLabel>
                                    <SelectItem value="frontend">Frontend</SelectItem>
                                    <SelectItem value="backend">Backend</SelectItem>
                                    <SelectItem value="fullstack">Full Stack</SelectItem>
                                </SelectGroup>
                                <SelectSeparator />
                                <SelectGroup>
                                    <SelectLabel>Design</SelectLabel>
                                    <SelectItem value="ui">UI Designer</SelectItem>
                                    <SelectItem value="ux">UX Researcher</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="border-border space-y-2 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With label</p>
                        <Label htmlFor="country-select">Country</Label>
                        <Select>
                            <SelectTrigger id="country-select">
                                <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="us">United States</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                                <SelectItem value="de">Germany</SelectItem>
                                <SelectItem value="fr">France</SelectItem>
                            </SelectContent>
                        </Select>
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
                                <strong className="text-foreground">Use for 5+ options.</strong>{" "}
                                Fewer options work better as RadioGroup or ToggleGroup.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Provide a clear placeholder.
                                </strong>{" "}
                                &quot;Select a...&quot; helps users understand what to choose.
                            </li>
                            <li>
                                <strong className="text-foreground">Group related items.</strong>{" "}
                                Use SelectGroup and SelectLabel for categorized lists.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use NativeSelect on mobile-heavy forms.
                                </strong>{" "}
                                Native selects provide better mobile UX with system pickers.
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
                                    Don&apos;t use for searchable lists.
                                </strong>{" "}
                                If users need to type to filter, use Combobox instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t nest selects.
                                </strong>{" "}
                                Avoid putting a select inside another select&apos;s content.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for actions.
                                </strong>{" "}
                                Select is for picking values, not triggering actions &mdash; use
                                DropdownMenu for that.
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
                            Built on Base UI Select &mdash; full ARIA listbox pattern with keyboard
                            navigation.
                        </li>
                        <li>Arrow keys navigate items, Enter/Space selects, Escape closes.</li>
                        <li>Trigger sizing: h-8 sm:h-9 lg:h-10 (matches Input component).</li>
                        <li>
                            <code className="text-xs">aria-invalid</code> triggers destructive ring
                            on the trigger.
                        </li>
                        <li>Content animates with slide-in, fade-in, and zoom-in transitions.</li>
                        <li>Scroll buttons appear when content overflows the viewport.</li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
  SelectGroup, SelectLabel, SelectSeparator
} from "@/components/ui/select"

// Basic
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
  </SelectContent>
</Select>

// Grouped options
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a role" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Engineering</SelectLabel>
      <SelectItem value="frontend">Frontend</SelectItem>
      <SelectItem value="backend">Backend</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Design</SelectLabel>
      <SelectItem value="ui">UI Designer</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

// Controlled
const [value, setValue] = useState("")
<Select value={value} onValueChange={setValue}>
  ...
</Select>`}
                />
            </div>
        </div>
    );
}
