"use client";

import {
    Avatar,
    AvatarImage,
    AvatarFallback,
    AvatarBadge,
    AvatarGroup,
    AvatarGroupCount,
} from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, Plus } from "lucide-react";

export default function AvatarPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Avatar</h1>
                <p className="text-muted-foreground text-sm">
                    A circular user image with a graceful fallback to initials when no image is
                    available. Supports three sizes, an optional badge, and group stacking. Built on{" "}
                    <code className="text-xs">@base-ui/react/avatar</code>.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Avatar>"}</code> is the root circle — pass{" "}
                    <code className="text-xs">size</code> (
                    <code className="text-xs">&quot;sm&quot;</code>,{" "}
                    <code className="text-xs">&quot;default&quot;</code>,{" "}
                    <code className="text-xs">&quot;lg&quot;</code>) to control its dimensions.{" "}
                    <code className="text-xs">AvatarImage</code> renders the photo; it waits for the
                    image to load before showing. <code className="text-xs">AvatarFallback</code>{" "}
                    shows until the image is ready — use initials here.{" "}
                    <code className="text-xs">AvatarBadge</code> is an absolute-positioned indicator
                    (online dot, notification count).
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-4">
                            <Avatar size="sm">
                                <AvatarFallback>SM</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <Avatar size="lg">
                                <AvatarFallback>LG</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-4 text-[10px]">
                            <span>size=&quot;sm&quot; (24px)</span>
                            <span>size=&quot;default&quot; (32px)</span>
                            <span>size=&quot;lg&quot; (40px)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="border-border flex flex-col items-start gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With image</p>
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="Jane Doe" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage src="https://i.pravatar.cc/40?img=5" alt="Alex B" />
                                <AvatarFallback>AB</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage src="https://i.pravatar.cc/40?img=8" alt="Sam K" />
                                <AvatarFallback>SK</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                    <div className="border-border flex flex-col items-start gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">With badge</p>
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarFallback>ON</AvatarFallback>
                                <AvatarBadge className="bg-green-500" />
                            </Avatar>
                            <Avatar>
                                <AvatarFallback>OF</AvatarFallback>
                                <AvatarBadge className="bg-muted-foreground" />
                            </Avatar>
                            <Avatar size="lg">
                                <AvatarFallback>IC</AvatarFallback>
                                <AvatarBadge>
                                    <Plus className="size-2" />
                                </AvatarBadge>
                            </Avatar>
                        </div>
                    </div>

                    <div className="border-border flex flex-col items-start gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">Group stacking</p>
                        <AvatarGroup>
                            <Avatar>
                                <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User 1" />
                                <AvatarFallback>U1</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage src="https://i.pravatar.cc/40?img=5" alt="User 2" />
                                <AvatarFallback>U2</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage src="https://i.pravatar.cc/40?img=8" alt="User 3" />
                                <AvatarFallback>U3</AvatarFallback>
                            </Avatar>
                            <AvatarGroupCount>+4</AvatarGroupCount>
                        </AvatarGroup>
                    </div>
                </div>

                {/* Sizes row */}
                <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                    <p className="text-muted-foreground text-xs font-medium">
                        All sizes — fallback only
                    </p>
                    <div className="flex flex-wrap items-end gap-4">
                        <div className="flex flex-col items-center gap-2">
                            <Avatar size="sm">
                                <AvatarFallback>SM</AvatarFallback>
                            </Avatar>
                            <span className="text-muted-foreground text-[10px]">sm</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Avatar>
                                <AvatarFallback>MD</AvatarFallback>
                            </Avatar>
                            <span className="text-muted-foreground text-[10px]">default</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Avatar size="lg">
                                <AvatarFallback>LG</AvatarFallback>
                            </Avatar>
                            <span className="text-muted-foreground text-[10px]">lg</span>
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
                                    Always provide a fallback.
                                </strong>{" "}
                                Images fail — <code className="text-xs">AvatarFallback</code> with
                                initials ensures there&apos;s always something meaningful to
                                display.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use AvatarGroup for team displays.
                                </strong>{" "}
                                Stacking avatars with a count (
                                <code className="text-xs">AvatarGroupCount</code>) communicates
                                collaboration without listing every member.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Match avatar size to context.
                                </strong>{" "}
                                Use <code className="text-xs">sm</code> inline (in tables, lists),{" "}
                                <code className="text-xs">default</code> for most UI, and{" "}
                                <code className="text-xs">lg</code> for profile headers or comment
                                threads.
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
                                    Don&apos;t use more than one badge per avatar.
                                </strong>{" "}
                                <code className="text-xs">AvatarBadge</code> is a single indicator —
                                stacking two statuses creates an unreadable dot cluster.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use avatars without alt text.
                                </strong>{" "}
                                Always pass a descriptive <code className="text-xs">alt</code> to{" "}
                                <code className="text-xs">AvatarImage</code> — it&apos;s the only
                                accessible label for the image.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t show more than 5 avatars in a group.
                                </strong>{" "}
                                Cap the stack at 4–5 and use{" "}
                                <code className="text-xs">AvatarGroupCount</code> for the remainder
                                to keep the UI compact.
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
                            <code className="text-xs">AvatarImage</code> waits for the image to
                            fully load before rendering —{" "}
                            <code className="text-xs">AvatarFallback</code> is shown in the
                            meantime.
                        </li>
                        <li>
                            The <code className="text-xs">size</code> prop on{" "}
                            <code className="text-xs">Avatar</code> sets a{" "}
                            <code className="text-xs">data-size</code> attribute used by child
                            components (<code className="text-xs">AvatarFallback</code>,{" "}
                            <code className="text-xs">AvatarBadge</code>) to scale themselves
                            automatically.
                        </li>
                        <li>
                            <code className="text-xs">AvatarGroup</code> applies negative margin
                            spacing and a ring outline to each child avatar to create the stacked
                            look.
                        </li>
                        <li>
                            <code className="text-xs">AvatarGroupCount</code> inherits its size from
                            the nearest <code className="text-xs">AvatarGroup</code> via the{" "}
                            <code className="text-xs">group-has-data-[size=*]</code> selector.
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
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"

// Basic with image + fallback
<Avatar>
  <AvatarImage src="/avatar.jpg" alt="Jane Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

// Sizes: "sm" | "default" | "lg"
<Avatar size="lg">
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

// With online badge
<Avatar>
  <AvatarFallback>JD</AvatarFallback>
  <AvatarBadge className="bg-green-500" />
</Avatar>

// Group stacking
<AvatarGroup>
  <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
  <AvatarGroupCount>+4</AvatarGroupCount>
</AvatarGroup>`}
                />
            </div>
        </div>
    );
}
