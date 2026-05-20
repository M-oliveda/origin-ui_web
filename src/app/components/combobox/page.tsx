"use client";

import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";
import {
    AutoHighlightExample,
    BasicExample,
    CustomItemsExample,
    DisabledExample,
    InvalidExample,
    MultipleExample,
    WithClearExample,
    WithGroupsExample,
} from "./examples";

export default function ComboboxPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Combobox</h1>
                <p className="text-muted-foreground text-sm">
                    A searchable select input that combines a text input with a dropdown list. Built
                    on <code className="text-xs">@base-ui/react</code> with type-to-filter, keyboard
                    navigation, single and multi-select modes, chip display, and animated
                    transitions.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Combobox>"}</code> wraps a{" "}
                    <code className="text-xs">{"<ComboboxInput>"}</code> (search input with optional
                    trigger/clear buttons) and{" "}
                    <code className="text-xs">{"<ComboboxContent>"}</code> (the dropdown). Content
                    holds <code className="text-xs">{"<ComboboxList>"}</code> with{" "}
                    <code className="text-xs">{"<ComboboxItem>"}</code> elements. For multi-select,
                    use <code className="text-xs">{"<ComboboxChips>"}</code> in place of{" "}
                    <code className="text-xs">{"<ComboboxInput>"}</code>.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="mx-auto max-w-sm">
                        <BasicExample />
                    </div>
                </div>
            </div>

            {/* Sub-components */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Sub-components</h3>
                <Separator />
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-border border-b">
                                <th className="text-muted-foreground py-3 pr-4 text-left font-medium">
                                    Component
                                </th>
                                <th className="text-muted-foreground py-3 text-left font-medium">
                                    Purpose
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Combobox", "Root provider (alias for ComboboxPrimitive.Root)"],
                                [
                                    "ComboboxInput",
                                    "Search input with optional trigger/clear buttons (showTrigger, showClear)",
                                ],
                                [
                                    "ComboboxContent",
                                    "Dropdown content with positioning and animation",
                                ],
                                ["ComboboxList", "Scrollable option list"],
                                ["ComboboxItem", "Individual selectable option"],
                                ["ComboboxGroup / ComboboxLabel", "Grouped options with label"],
                                ["ComboboxEmpty", "Empty state shown when no items match"],
                                ["ComboboxSeparator", "Visual divider between groups"],
                                ["ComboboxChips / ComboboxChip", "Multi-select chip display"],
                                [
                                    "ComboboxChipsInput",
                                    "Text input embedded inside the chips container",
                                ],
                                [
                                    "useComboboxAnchor",
                                    "Hook to anchor the popup to the chips container",
                                ],
                            ].map(([name, desc]) => (
                                <tr key={name} className="border-border border-b last:border-0">
                                    <td className="py-3 pr-4">
                                        <code className="text-xs">{name}</code>
                                    </td>
                                    <td className="text-muted-foreground py-3 text-sm">{desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Basic */}
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">Basic</p>
                        <p className="text-muted-foreground/70 text-xs">
                            Single-select with type-to-filter and keyboard navigation.
                        </p>
                        <div className="border-border bg-muted/30 rounded-lg border p-4">
                            <BasicExample />
                        </div>
                    </div>

                    {/* With clear button */}
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">
                            With clear button
                        </p>
                        <p className="text-muted-foreground/70 text-xs">
                            Add <code className="text-xs">showClear</code> to display a reset button
                            once a value is selected.
                        </p>
                        <div className="border-border bg-muted/30 rounded-lg border p-4">
                            <WithClearExample />
                        </div>
                    </div>

                    {/* With groups */}
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">With groups</p>
                        <p className="text-muted-foreground/70 text-xs">
                            Use <code className="text-xs">ComboboxGroup</code>,{" "}
                            <code className="text-xs">ComboboxLabel</code>, and{" "}
                            <code className="text-xs">ComboboxSeparator</code> to organize items
                            into categories.
                        </p>
                        <div className="border-border bg-muted/30 rounded-lg border p-4">
                            <WithGroupsExample />
                        </div>
                    </div>

                    {/* Custom items */}
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">Custom items</p>
                        <p className="text-muted-foreground/70 text-xs">
                            Render any content inside <code className="text-xs">ComboboxItem</code>{" "}
                            — icons, avatars, badges, etc.
                        </p>
                        <div className="border-border bg-muted/30 rounded-lg border p-4">
                            <CustomItemsExample />
                        </div>
                    </div>

                    {/* Multiple */}
                    <div className="space-y-2 lg:col-span-2">
                        <p className="text-muted-foreground text-xs font-medium">
                            Multiple selection (chips)
                        </p>
                        <p className="text-muted-foreground/70 text-xs">
                            Pass <code className="text-xs">multiple</code> to the root and use{" "}
                            <code className="text-xs">ComboboxChips</code> +{" "}
                            <code className="text-xs">useComboboxAnchor</code> to anchor the popup
                            to the chip container.
                        </p>
                        <div className="border-border bg-muted/30 rounded-lg border p-4">
                            <MultipleExample />
                        </div>
                    </div>

                    {/* Disabled */}
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">Disabled</p>
                        <p className="text-muted-foreground/70 text-xs">
                            Pass <code className="text-xs">disabled</code> to{" "}
                            <code className="text-xs">ComboboxInput</code> to prevent interaction.
                        </p>
                        <div className="border-border bg-muted/30 rounded-lg border p-4">
                            <DisabledExample />
                        </div>
                    </div>

                    {/* Invalid */}
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">Invalid state</p>
                        <p className="text-muted-foreground/70 text-xs">
                            Pass <code className="text-xs">aria-invalid</code> to{" "}
                            <code className="text-xs">ComboboxInput</code> for form validation
                            feedback.
                        </p>
                        <div className="border-border bg-muted/30 rounded-lg border p-4">
                            <InvalidExample />
                        </div>
                    </div>

                    {/* Auto highlight */}
                    <div className="space-y-2 lg:col-span-2">
                        <p className="text-muted-foreground text-xs font-medium">Auto highlight</p>
                        <p className="text-muted-foreground/70 text-xs">
                            Pass <code className="text-xs">autoHighlight</code> to the root to
                            automatically highlight the first matching item as the user types.
                        </p>
                        <div className="border-border bg-muted/30 max-w-sm rounded-lg border p-4">
                            <AutoHighlightExample />
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
                                    Use for large option sets.
                                </strong>{" "}
                                When users need to search/filter through many items (countries,
                                users, tags).
                            </li>
                            <li>
                                <strong className="text-foreground">Provide an empty state.</strong>{" "}
                                Show a helpful message via{" "}
                                <code className="text-xs">ComboboxEmpty</code> when no results
                                match.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use chips for multi-select.
                                </strong>{" "}
                                <code className="text-xs">ComboboxChips</code> provides clear visual
                                feedback for selected items.
                            </li>
                            <li>
                                <strong className="text-foreground">Show the trigger icon.</strong>{" "}
                                The dropdown arrow (<code className="text-xs">showTrigger</code>)
                                helps users discover it&apos;s a select-like input.
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
                                    Don&apos;t use for small option sets.
                                </strong>{" "}
                                Under 5 items, a simple Select or RadioGroup is better.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t forget ComboboxEmpty.
                                </strong>{" "}
                                Without it, users see a blank dropdown when nothing matches.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for free-text input.
                                </strong>{" "}
                                Combobox is for selecting from a predefined list, not entering
                                arbitrary values.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Code */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Code</h3>
                <Separator />

                <div className="space-y-6">
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">
                            Basic / clear button
                        </p>
                        <CodeBlock
                            code={`<Combobox>
  {/* showClear reveals an ✕ button once a value is selected */}
  <ComboboxInput placeholder="Search frameworks..." showTrigger showClear />
  <ComboboxContent>
    <ComboboxList>
      <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
      <ComboboxItem value="next">Next.js</ComboboxItem>
      <ComboboxItem value="remix">Remix</ComboboxItem>
      <ComboboxItem value="astro">Astro</ComboboxItem>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
                        />
                    </div>

                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">With groups</p>
                        <CodeBlock
                            code={`<Combobox>
  <ComboboxInput placeholder="Search libraries..." showTrigger />
  <ComboboxContent>
    <ComboboxList>
      <ComboboxEmpty>No results found.</ComboboxEmpty>
      <ComboboxGroup>
        <ComboboxLabel>Frontend</ComboboxLabel>
        <ComboboxItem value="react">React</ComboboxItem>
        <ComboboxItem value="vue">Vue</ComboboxItem>
      </ComboboxGroup>
      <ComboboxSeparator />
      <ComboboxGroup>
        <ComboboxLabel>Backend</ComboboxLabel>
        <ComboboxItem value="express">Express</ComboboxItem>
        <ComboboxItem value="fastify">Fastify</ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
                        />
                    </div>

                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">
                            Multiple selection with chips
                        </p>
                        <CodeBlock
                            code={`const [selected, setSelected] = useState<string[]>([])
const anchor = useComboboxAnchor()

<Combobox multiple value={selected} onValueChange={(val) => setSelected(val)}>
  <ComboboxChips ref={anchor}>
    {selected.map((val) => (
      <ComboboxChip key={val}>{val}</ComboboxChip>
    ))}
    <ComboboxChipsInput placeholder="Search frameworks..." />
  </ComboboxChips>
  <ComboboxContent anchor={anchor}>
    <ComboboxList>
      <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
      <ComboboxItem value="next">Next.js</ComboboxItem>
      <ComboboxItem value="remix">Remix</ComboboxItem>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`}
                        />
                    </div>

                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs font-medium">
                            Disabled / invalid / auto-highlight
                        </p>
                        <CodeBlock
                            code={`{/* Disabled */}
<ComboboxInput disabled showTrigger placeholder="..." />

{/* Invalid — triggers red ring via InputGroup's has-[[aria-invalid=true]] selector */}
<ComboboxInput aria-invalid showTrigger placeholder="..." />

{/* Auto highlight first match while typing */}
<Combobox autoHighlight>
  <ComboboxInput placeholder="Start typing..." showTrigger />
  ...
</Combobox>`}
                        />
                    </div>
                </div>
            </div>

            {/* Accessibility */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Accessibility</h3>
                <Separator />
                <div className="border-border rounded-lg border p-5">
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            Built on Base UI Combobox &mdash; implements the WAI-ARIA combobox
                            pattern.
                        </li>
                        <li>
                            Active item is tracked via{" "}
                            <code className="text-xs">data-highlighted</code>; selected item via{" "}
                            <code className="text-xs">data-selected</code>.
                        </li>
                        <li>
                            Arrow keys navigate, <kbd className="text-xs">Enter</kbd> selects,{" "}
                            <kbd className="text-xs">Escape</kbd> closes.
                        </li>
                        <li>
                            <code className="text-xs">aria-invalid</code> on{" "}
                            <code className="text-xs">ComboboxInput</code> activates the destructive
                            ring via the parent <code className="text-xs">InputGroup</code>&apos;s
                            CSS selector.
                        </li>
                        <li>
                            Popup animates with slide-in, fade-in, and zoom-in on open; reverses on
                            close.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
