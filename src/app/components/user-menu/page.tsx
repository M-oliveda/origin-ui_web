"use client";

import { OriginUiUserMenu } from "@/components/branding/origin-ui-user-menu";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";
import { toast } from "sonner";

export default function UserMenuPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">UserMenu</h1>
                <p className="text-muted-foreground text-sm">
                    An avatar-triggered dropdown menu with user identity and account actions
                    (profile, billing, settings, logout). Built on{" "}
                    <code className="text-xs">DropdownMenu</code> and{" "}
                    <code className="text-xs">Avatar</code>.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The trigger is an <code className="text-xs">Avatar</code> showing the
                    user&apos;s initials. The dropdown opens on click and displays: a header with
                    name and email, then grouped menu items for profile, billing, settings, and a
                    log out action.
                </p>
                <div className="border-border bg-muted/30 flex items-center gap-4 rounded-lg border p-6">
                    <p className="text-muted-foreground text-sm">Click the avatar →</p>
                    <OriginUiUserMenu
                        name="Mauricio Oliveda"
                        email="mauricio@example.com"
                        initials="MO"
                        onProfile={() => toast("Navigate to profile")}
                        onBilling={() => toast("Navigate to billing")}
                        onSettings={() => toast("Navigate to settings")}
                        onLogout={() => toast("Logging out...")}
                    />
                </div>
            </div>

            {/* With different users */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Different Users</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Pass any name, email, and initials. Initials are shown in the avatar fallback
                    when no image is provided.
                </p>
                <div className="border-border flex flex-wrap items-start gap-8 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-2">
                        <OriginUiUserMenu
                            name="Alice Johnson"
                            email="alice@example.com"
                            initials="AJ"
                            onProfile={() => toast("Profile")}
                            onLogout={() => toast("Logout")}
                        />
                        <p className="text-muted-foreground text-xs">Alice Johnson</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <OriginUiUserMenu
                            name="Bob Smith"
                            email="bob@acme.com"
                            initials="BS"
                            onProfile={() => toast("Profile")}
                            onLogout={() => toast("Logout")}
                        />
                        <p className="text-muted-foreground text-xs">Bob Smith</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <OriginUiUserMenu
                            name="Carol Davis"
                            email="carol@startup.io"
                            initials="CD"
                            onProfile={() => toast("Profile")}
                            onLogout={() => toast("Logout")}
                        />
                        <p className="text-muted-foreground text-xs">Carol Davis</p>
                    </div>
                </div>
            </div>

            {/* In a navigation bar */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">In a Navigation Bar</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The UserMenu is typically placed at the end of a top navigation bar or in the
                    footer of a sidebar.
                </p>
                <div className="border-border rounded-lg border">
                    <div className="border-border flex items-center justify-between border-b px-4 py-3">
                        <span className="text-sm font-semibold">My App</span>
                        <div className="flex items-center gap-3">
                            <span className="text-muted-foreground hidden text-sm sm:block">
                                mauricio@example.com
                            </span>
                            <OriginUiUserMenu
                                name="Mauricio Oliveda"
                                email="mauricio@example.com"
                                initials="MO"
                                onProfile={() => toast("Profile")}
                                onBilling={() => toast("Billing")}
                                onSettings={() => toast("Settings")}
                                onLogout={() => toast("Logout")}
                            />
                        </div>
                    </div>
                    <div className="text-muted-foreground flex h-24 items-center justify-center p-4 text-sm">
                        Page content
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
                                    Place at the top-right of the navigation.
                                </strong>{" "}
                                This is where users expect to find their account controls.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Show full name and email in the dropdown header.
                                </strong>{" "}
                                Users need to confirm which account they&apos;re signed in as.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep menu items to fewer than 6.
                                </strong>{" "}
                                Group by category (account actions / destructive actions) with a
                                separator.
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
                                    Don&apos;t put navigation items in the user menu.
                                </strong>{" "}
                                Page-level navigation belongs in the sidebar or main nav, not the
                                account dropdown.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t skip the logout item.
                                </strong>{" "}
                                Users need a clear path to sign out, especially on shared devices.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use only an icon without the dropdown header.
                                </strong>{" "}
                                The name and email in the header prevent confusion on multi-account
                                setups.
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
                            <code className="text-xs">name</code> (optional, default:
                            &quot;User&quot;) — displayed in the dropdown label.
                        </li>
                        <li>
                            <code className="text-xs">email</code> (optional, default:
                            &quot;user@example.com&quot;) — displayed in the dropdown label below
                            the name.
                        </li>
                        <li>
                            <code className="text-xs">initials</code> (optional, default:
                            &quot;U&quot;) — shown in the{" "}
                            <code className="text-xs">AvatarFallback</code>.
                        </li>
                        <li>
                            <code className="text-xs">
                                onProfile / onBilling / onSettings / onLogout
                            </code>{" "}
                            — click handlers for each menu item. Omitting a handler still renders
                            the item.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { OriginUiUserMenu } from "@/components/branding/origin-ui-user-menu"

<OriginUiUserMenu
  name="Mauricio Oliveda"
  email="mauricio@example.com"
  initials="MO"
  onProfile={() => router.push("/profile")}
  onBilling={() => router.push("/billing")}
  onSettings={() => router.push("/settings")}
  onLogout={() => signOut()}
/>`}
                />
            </div>
        </div>
    );
}
