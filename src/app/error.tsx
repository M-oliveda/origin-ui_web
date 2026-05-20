"use client";

import { useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

interface IErrorPageProps {
    error: Error & { digest?: string };
    unstable_retry: () => void;
}

export default function ErrorPage({ error, unstable_retry }: IErrorPageProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
            <div className="space-y-6">
                <div className="space-y-3">
                    <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
                        Error
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Something went wrong
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-md text-base">
                        An unexpected error occurred. Please try again or return home.
                    </p>
                    {error.digest && (
                        <p className="text-muted-foreground font-mono text-xs">
                            Error ID: {error.digest}
                        </p>
                    )}
                </div>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <Button onClick={unstable_retry}>Try again</Button>
                    <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}
