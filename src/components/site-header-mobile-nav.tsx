"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation menu"
                onClick={() => setOpen(true)}
            >
                <Menu className="size-5" />
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Navigation</SheetTitle>
                    </SheetHeader>
                    <nav
                        className="flex flex-col gap-1 px-4"
                        aria-label="Mobile navigation"
                        onClick={() => setOpen(false)}
                    >
                        <Link
                            href="/fundamentals/typography"
                            className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-md px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Fundamentals
                        </Link>
                        <Link
                            href="/components"
                            className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-md px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Components
                        </Link>
                        <Link
                            href="/templates"
                            className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-md px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Templates
                        </Link>
                        <Link
                            href="/export"
                            className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-md px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Export
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </>
    );
}
