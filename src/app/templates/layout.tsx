"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, LogIn, Settings, Megaphone, CreditCard } from "lucide-react";

const templates = [
    { slug: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { slug: "login", label: "Login", icon: LogIn },
    { slug: "settings", label: "Settings", icon: Settings },
    { slug: "marketing", label: "Marketing Hero", icon: Megaphone },
    { slug: "pricing", label: "Pricing", icon: CreditCard },
];

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-full">
            <aside className="origin-sidebar border-border bg-muted/40 w-56 shrink-0 border-r p-4">
                <h2 className="mb-4 px-2 text-lg font-semibold tracking-tight">Templates</h2>
                <nav className="flex flex-col gap-0.5">
                    {templates.map((t) => {
                        const Icon = t.icon;
                        return (
                            <Link
                                key={t.slug}
                                href={`/templates/${t.slug}`}
                                className={cn(
                                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                                    pathname === `/templates/${t.slug}`
                                        ? "bg-primary text-primary-foreground font-medium"
                                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                )}
                            >
                                <Icon className="size-4" />
                                {t.label}
                            </Link>
                        );
                    })}
                </nav>
            </aside>
            <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
    );
}
