"use client";

import { OriginUiPageHeader } from "@/components/branding/origin-ui-page-header";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, Plus, Download, Settings } from "lucide-react";

export default function PageHeaderPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">PageHeader</h1>
                <p className="text-muted-foreground text-sm">
                    A page-level header with a title, optional description, and an optional actions
                    slot. Aligns the title block and actions with{" "}
                    <code className="text-xs">justify-between</code> for a clean page-top layout.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A flex row with <code className="text-xs">justify-between</code>. The left side
                    holds the <code className="text-xs">title</code> (h1) and optional{" "}
                    <code className="text-xs">description</code>. The right side holds the{" "}
                    <code className="text-xs">actions</code> slot — any React node.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <OriginUiPageHeader
                        title="Dashboard"
                        description="Welcome back! Here's an overview of your metrics."
                        actions={
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                    Export
                                </Button>
                                <Button size="sm">Add Widget</Button>
                            </div>
                        }
                    />
                </div>
            </div>

            {/* Variants */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variants</h3>
                <Separator />
                <div className="border-border space-y-6 rounded-lg border p-6">
                    {/* Title only */}
                    <div>
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Title only
                        </p>
                        <OriginUiPageHeader title="Settings" />
                    </div>
                    <Separator />
                    {/* Title + description */}
                    <div>
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Title + description
                        </p>
                        <OriginUiPageHeader
                            title="Projects"
                            description="Manage your active projects and deployments."
                        />
                    </div>
                    <Separator />
                    {/* Title + single action */}
                    <div>
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Title + single action
                        </p>
                        <OriginUiPageHeader
                            title="Team Members"
                            actions={
                                <Button size="sm">
                                    <Plus className="size-4" />
                                    Invite
                                </Button>
                            }
                        />
                    </div>
                    <Separator />
                    {/* Full: title + description + actions */}
                    <div>
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            Full (title + description + actions)
                        </p>
                        <OriginUiPageHeader
                            title="Analytics"
                            description="Track performance across all channels."
                            actions={
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary">Beta</Badge>
                                    <Button variant="outline" size="sm">
                                        <Download className="size-4" />
                                        Export
                                    </Button>
                                    <Button size="sm">
                                        <Settings className="size-4" />
                                        Configure
                                    </Button>
                                </div>
                            }
                        />
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
                                <strong className="text-foreground">Use once per page.</strong> A
                                single PageHeader at the top of each view establishes context
                                immediately.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep the title short and direct.
                                </strong>{" "}
                                One to three words — the title names the page, not describes it.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Limit actions to 1–3 buttons.
                                </strong>{" "}
                                More than three primary actions in the header overwhelm the user.
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
                                    Don&apos;t use multiple PageHeaders per page.
                                </strong>{" "}
                                Section-level headings should use smaller heading tags, not
                                PageHeader.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t put navigation inside the actions slot.
                                </strong>{" "}
                                Breadcrumbs and back buttons belong above the header, not in its
                                actions.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t write a paragraph as the description.
                                </strong>{" "}
                                One short sentence; detailed information belongs in the page body.
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
                            <code className="text-xs">title</code> (required) — rendered as an{" "}
                            <code className="text-xs">{"<h1>"}</code> with{" "}
                            <code className="text-xs">text-2xl font-bold tracking-tight</code>.
                        </li>
                        <li>
                            <code className="text-xs">description</code> (optional) — rendered as a{" "}
                            <code className="text-xs">{"<p>"}</code> with{" "}
                            <code className="text-xs">text-sm text-muted-foreground</code> below the
                            title.
                        </li>
                        <li>
                            <code className="text-xs">actions</code> (optional) — any{" "}
                            <code className="text-xs">React.ReactNode</code> rendered in a{" "}
                            <code className="text-xs">shrink-0</code> flex container on the right.
                        </li>
                        <li>
                            <code className="text-xs">className</code> — applied to the outer flex
                            container.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { OriginUiPageHeader } from "@/components/branding/origin-ui-page-header"

// Title only
<OriginUiPageHeader title="Settings" />

// With description
<OriginUiPageHeader
  title="Projects"
  description="Manage your active projects and deployments."
/>

// Full — title, description, and actions
<OriginUiPageHeader
  title="Dashboard"
  description="Welcome back! Here's an overview of your metrics."
  actions={
    <div className="flex gap-2">
      <Button variant="outline">Export</Button>
      <Button>Add Widget</Button>
    </div>
  }
/>`}
                />
            </div>
        </div>
    );
}
