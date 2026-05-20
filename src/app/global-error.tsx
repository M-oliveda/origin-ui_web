"use client";

import { Button } from "@/components/ui/button";

interface IGlobalErrorProps {
    error: Error & { digest?: string };
    unstable_retry: () => void;
}

export default function GlobalError({ error, unstable_retry }: IGlobalErrorProps) {
    return (
        <html lang="en">
            <body className="flex min-h-screen flex-col">
                <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <p className="text-sm font-medium tracking-widest uppercase opacity-60">
                                Critical Error
                            </p>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Something went wrong
                            </h1>
                            <p className="mx-auto max-w-md text-base opacity-70">
                                A critical error occurred. Please try reloading the page.
                            </p>
                            {error.digest && (
                                <p className="font-mono text-xs opacity-50">
                                    Error ID: {error.digest}
                                </p>
                            )}
                        </div>
                        <Button onClick={unstable_retry}>Try again</Button>
                    </div>
                </div>
            </body>
        </html>
    );
}
