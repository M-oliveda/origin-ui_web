"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useScrollOpacity } from "@/hooks/use-scroll-opacity";

const navItems = [
    { href: "/fundamentals/typography", label: "Typography" },
    { href: "/fundamentals/colors", label: "Colors" },
    { href: "/fundamentals/spacing", label: "Spacing & Grid" },
    { href: "/fundamentals/effects", label: "Effects" },
    { href: "/fundamentals/iconography", label: "Iconography" },
];

export default function FundamentalsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const bgOpacity = useScrollOpacity();

    return (
        <div className="flex min-h-full flex-col md:flex-row">
            {/* Mobile navigation */}
            <nav
                className="border-border sticky top-12 z-40 border-b md:hidden"
                aria-label="Fundamentals navigation"
            >
                <div
                    aria-hidden="true"
                    className="bg-muted pointer-events-none absolute inset-0"
                    style={{ opacity: bgOpacity }}
                />
                <div className="relative flex gap-1 overflow-x-auto px-4 py-2">
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
                </div>
            </nav>

            {/* Desktop sidebar */}
            <aside className="border-border sticky top-12 hidden h-[calc(100vh-3rem)] w-64 shrink-0 overflow-y-auto border-r md:block">
                <div
                    aria-hidden="true"
                    className="bg-muted pointer-events-none absolute inset-0"
                    style={{ opacity: bgOpacity }}
                />
                <div className="relative p-6">
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
                </div>
            </aside>

            <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-12">{children}</main>
        </div>
    );
}
