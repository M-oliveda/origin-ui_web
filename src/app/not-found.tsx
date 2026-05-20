import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/lib/button-variants";

export const metadata: Metadata = {
    title: "404 – Page Not Found | Origin UI",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
            <div className="space-y-6">
                <div className="space-y-3">
                    <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
                        404
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Page not found
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-md text-base">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                </div>
                <Link href="/" className={cn(buttonVariants())}>
                    Back to home
                </Link>
            </div>
        </div>
    );
}
