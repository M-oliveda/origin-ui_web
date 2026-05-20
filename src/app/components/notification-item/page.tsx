"use client";

import { OriginUiNotificationItem } from "@/components/branding/origin-ui-notification-item";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X, Bell, Shield, CreditCard, User, Package, AlertCircle } from "lucide-react";

export default function NotificationItemPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">NotificationItem</h1>
                <p className="text-muted-foreground text-sm">
                    A list item for notification feeds. Shows an icon, title, description,
                    timestamp, and an optional unread indicator dot. The unread state applies a
                    subtle primary tint to the background.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    A flex row with a rounded icon container on the left and a text block on the
                    right. The text block stacks title + unread dot, description, and timestamp
                    vertically.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="max-w-md">
                        <OriginUiNotificationItem
                            icon={Bell}
                            title="New comment on your post"
                            description="Sarah left a comment: 'Great article!'"
                            time="2 min ago"
                            unread
                        />
                    </div>
                </div>
            </div>

            {/* Unread vs read */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Read vs Unread</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The <code className="text-xs">unread</code> prop applies a primary tint to the
                    background and icon container, bolds the title, and shows a status dot.
                </p>
                <div className="max-w-md space-y-2">
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Unread
                        </p>
                        <OriginUiNotificationItem
                            icon={Bell}
                            title="New comment on your post"
                            description="Sarah left a comment: 'Great article!'"
                            time="2 min ago"
                            unread
                        />
                    </div>
                    <div className="space-y-1">
                        <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                            Read
                        </p>
                        <OriginUiNotificationItem
                            icon={CreditCard}
                            title="Payment received"
                            description="You received $250.00 from Acme Corp."
                            time="Yesterday"
                        />
                    </div>
                </div>
            </div>

            {/* Notification feed */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Notification Feed</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Stack multiple NotificationItems directly — no additional wrapper needed. Each
                    item has its own border.
                </p>
                <div className="max-w-md space-y-1">
                    <OriginUiNotificationItem
                        icon={Bell}
                        title="New comment on your post"
                        description="Sarah left a comment: 'Great article!'"
                        time="2 min ago"
                        unread
                    />
                    <OriginUiNotificationItem
                        icon={Shield}
                        title="Security alert"
                        description="A new device logged into your account."
                        time="1 hour ago"
                        unread
                    />
                    <OriginUiNotificationItem
                        icon={CreditCard}
                        title="Payment received"
                        description="You received $250.00 from Acme Corp."
                        time="Yesterday"
                    />
                    <OriginUiNotificationItem
                        icon={User}
                        title="Profile updated"
                        description="Your profile photo was changed successfully."
                        time="2 days ago"
                    />
                    <OriginUiNotificationItem
                        icon={Package}
                        title="Shipment delivered"
                        description="Your order #4521 has been delivered."
                        time="3 days ago"
                    />
                </div>
            </div>

            {/* In a panel */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">In a Notification Panel</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Wrap the feed in a Card or popover panel with a header for a complete
                    notification center.
                </p>
                <div className="border-border max-w-md rounded-lg border shadow-sm">
                    <div className="border-border flex items-center justify-between border-b px-4 py-3">
                        <h4 className="text-sm font-semibold">Notifications</h4>
                        <span className="text-muted-foreground text-xs">Mark all read</span>
                    </div>
                    <div className="divide-border divide-y">
                        <OriginUiNotificationItem
                            icon={AlertCircle}
                            title="Action required"
                            description="Your subscription will expire in 3 days."
                            time="Just now"
                            unread
                            className="rounded-none border-0"
                        />
                        <OriginUiNotificationItem
                            icon={Bell}
                            title="New follower"
                            description="@david started following you."
                            time="5 min ago"
                            unread
                            className="rounded-none border-0"
                        />
                        <OriginUiNotificationItem
                            icon={CreditCard}
                            title="Invoice paid"
                            description="Invoice #INV-0024 has been paid."
                            time="1 day ago"
                            className="rounded-none border-0"
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
                                <strong className="text-foreground">
                                    Sort unread items to the top.
                                </strong>{" "}
                                Visual priority should match reading priority — unread first, oldest
                                read last.
                            </li>
                            <li>
                                <strong className="text-foreground">Use contextual icons.</strong>{" "}
                                The icon should immediately communicate the notification category
                                without reading the text.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep description under two lines.
                                </strong>{" "}
                                Notifications are scanned, not read — truncate long descriptions.
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
                                    Don&apos;t show more than 20 items without pagination.
                                </strong>{" "}
                                Infinite notification lists create an unusable interface.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use the same icon for every notification.
                                </strong>{" "}
                                Identical icons eliminate the quick-scan benefit of the icon column.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use vague titles.
                                </strong>{" "}
                                &quot;You have a notification&quot; is unhelpful — describe the
                                event specifically.
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
                            <code className="text-xs">icon</code> (required) — a{" "}
                            <code className="text-xs">LucideIcon</code> shown in the leading circle
                            container.
                        </li>
                        <li>
                            <code className="text-xs">title</code> (required) — short notification
                            title. Bold when <code className="text-xs">unread</code> is true.
                        </li>
                        <li>
                            <code className="text-xs">description</code> (required) — supporting
                            detail text, shown in muted foreground.
                        </li>
                        <li>
                            <code className="text-xs">time</code> (required) — relative or absolute
                            timestamp string.
                        </li>
                        <li>
                            <code className="text-xs">unread</code> (optional, default: false) —
                            applies primary tint to background and icon, shows status dot, bolds
                            title.
                        </li>
                        <li>
                            <code className="text-xs">className</code> — forwarded to the root
                            container. Use <code className="text-xs">rounded-none border-0</code>{" "}
                            for panel usage without individual card borders.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { OriginUiNotificationItem } from "@/components/branding/origin-ui-notification-item"
import { Bell, Shield, CreditCard } from "lucide-react"

<OriginUiNotificationItem
  icon={Bell}
  title="New comment on your post"
  description="Sarah left a comment: 'Great article!'"
  time="2 min ago"
  unread
/>

<OriginUiNotificationItem
  icon={Shield}
  title="Security alert"
  description="A new device logged into your account."
  time="1 hour ago"
  unread
/>

<OriginUiNotificationItem
  icon={CreditCard}
  title="Payment received"
  description="You received $250.00 from Acme Corp."
  time="Yesterday"
/>`}
                />
            </div>
        </div>
    );
}
