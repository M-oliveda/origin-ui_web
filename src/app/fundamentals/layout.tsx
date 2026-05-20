"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "/fundamentals/typography", label: "Typography" },
    { href: "/fundamentals/colors", label: "Colors" },
    { href: "/fundamentals/spacing", label: "Spacing & Grid" },
    { href: "/fundamentals/effects", label: "Effects" },
    { href: "/fundamentals/iconography", label: "Iconography" },
];

export default function FundamentalsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-full flex-col md:flex-row">
            {/* Mobile navigation */}
            <nav
                className="border-border bg-muted/40 flex gap-1 overflow-x-auto border-b px-4 py-2 md:hidden"
                aria-label="Fundamentals navigation"
            >
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "shrink-0 rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
                            pathname === item.href
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            {/* Desktop sidebar */}
            <aside className="border-border bg-muted/40 hidden w-64 shrink-0 border-r p-6 md:block">
                <h2 className="mb-6 text-lg font-semibold tracking-tight">Fundamentals</h2>
                <nav className="flex flex-col gap-1" aria-label="Fundamentals navigation">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                pathname === item.href
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-12">{children}</main>
        </div>
    );
}
