"use client";

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, HelpCircle, Settings, Shield } from "lucide-react";

export default function AccordionPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Accordion</h1>
                <p className="text-muted-foreground text-sm">
                    A vertically stacked set of interactive headings that each reveal an associated
                    panel. Built on <code className="text-xs">@base-ui/react/accordion</code>.
                    Panels open and close with animated transitions.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The root <code className="text-xs">{"<Accordion>"}</code> wraps one or more{" "}
                    <code className="text-xs">{"<AccordionItem>"}</code> elements. Each item
                    contains an <code className="text-xs">{"<AccordionTrigger>"}</code> (the
                    clickable header) and an <code className="text-xs">{"<AccordionContent>"}</code>{" "}
                    (the collapsible body).
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <Accordion className="w-full">
                        <AccordionItem value="anatomy-1">
                            <AccordionTrigger>Trigger — click to expand</AccordionTrigger>
                            <AccordionContent>
                                This is the AccordionContent panel. It animates open and closed.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            {/* Basic usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Basic Usage</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Multiple items stack vertically. Each item collapses independently.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <Accordion className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern with full keyboard
                                navigation and screen reader support.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It comes with default styles that match your design system and
                                can be overridden with className.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is it animated?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It animates open and closed using CSS height transitions.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            {/* FAQ pattern */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">FAQ Pattern</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A common use case for accordions is FAQ sections on marketing or help pages.
                </p>
                <div className="border-border rounded-lg border p-6">
                    <Accordion className="w-full">
                        <AccordionItem value="faq-1">
                            <AccordionTrigger>
                                <span className="flex items-center gap-2">
                                    <HelpCircle className="text-muted-foreground size-4 shrink-0" />
                                    How do I reset my password?
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                Go to the login page and click &quot;Forgot password&quot;.
                                You&apos;ll receive an email with a reset link valid for 24 hours.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-2">
                            <AccordionTrigger>
                                <span className="flex items-center gap-2">
                                    <Settings className="text-muted-foreground size-4 shrink-0" />
                                    Can I change my plan at any time?
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes. You can upgrade or downgrade your plan from the billing
                                settings page. Changes take effect on the next billing cycle.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-3">
                            <AccordionTrigger>
                                <span className="flex items-center gap-2">
                                    <Shield className="text-muted-foreground size-4 shrink-0" />
                                    Is my data secure?
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                All data is encrypted at rest and in transit using AES-256 and TLS
                                1.3. We are SOC 2 Type II certified.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
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
                                    Use for progressive disclosure.
                                </strong>{" "}
                                Accordions are ideal when users need some details but not all at
                                once.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep trigger labels concise.
                                </strong>{" "}
                                The trigger should describe the content clearly so users know
                                whether to expand it.
                            </li>
                            <li>
                                <strong className="text-foreground">Group related items.</strong>{" "}
                                All accordion items should belong to the same conceptual category.
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
                                    Don&apos;t hide critical information.
                                </strong>{" "}
                                If users need content to complete a task, show it directly rather
                                than behind a trigger.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t nest accordions inside accordions.
                                </strong>{" "}
                                It creates confusing depth and is hard to navigate with a keyboard.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for primary navigation.
                                </strong>{" "}
                                Use tabs or a sidebar instead — accordions are for secondary,
                                optional details.
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
                            Built on the WAI-ARIA Accordion pattern —{" "}
                            <code className="text-xs">aria-expanded</code> and{" "}
                            <code className="text-xs">aria-controls</code> are managed
                            automatically.
                        </li>
                        <li>
                            Keyboard navigation:{" "}
                            <kbd className="rounded border px-1 text-xs">Space</kbd> /{" "}
                            <kbd className="rounded border px-1 text-xs">Enter</kbd> toggle the
                            focused item; <kbd className="rounded border px-1 text-xs">↑</kbd> /{" "}
                            <kbd className="rounded border px-1 text-xs">↓</kbd> move between
                            triggers.
                        </li>
                        <li>
                            The <code className="text-xs">AccordionTrigger</code> renders as a{" "}
                            <code className="text-xs">{"<button>"}</code> inside an{" "}
                            <code className="text-xs">{"<h3>"}</code> header — no additional heading
                            markup needed.
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
  Accordion, AccordionItem, AccordionTrigger, AccordionContent
} from "@/components/ui/accordion"

<Accordion className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
                />
            </div>
        </div>
    );
}
