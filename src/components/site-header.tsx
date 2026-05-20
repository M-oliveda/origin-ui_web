import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { OriginUiLogo } from "@/components/branding/origin-ui-logo";
import { MobileNav } from "@/components/site-header-mobile-nav";

export function SiteHeader() {
    return (
        <header className="border-border bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
            <div className="flex h-12 items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-3 sm:gap-4">
                    <Link href="/">
                        <OriginUiLogo size="sm" />
                    </Link>
                    <Separator orientation="vertical" className="hidden h-4 md:block" />
                    <nav className="hidden items-center gap-3 md:flex">
                        <Link
                            href="/fundamentals/typography"
                            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                            Fundamentals
                        </Link>
                        <Link
                            href="/components"
                            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                            Components
                        </Link>
                        <Link
                            href="/templates"
                            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                            Templates
                        </Link>
                        <Link
                            href="/export"
                            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                            Export
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-1">
                    <MobileNav />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
