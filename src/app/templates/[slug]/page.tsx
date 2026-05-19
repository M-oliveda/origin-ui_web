"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { Eye, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/app/components/code-block";
import { templateDemos } from "../demos";

export default function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const demo = templateDemos[slug];
    const [view, setView] = useState<"preview" | "code">("preview");

    if (!demo) {
        notFound();
    }

    return (
        <div className="flex flex-col">
            {/* Toolbar */}
            <div className="border-border flex items-center justify-between border-b px-6 py-3">
                <div>
                    <h1 className="text-lg font-semibold">{demo.name}</h1>
                    <p className="text-muted-foreground text-sm">{demo.description}</p>
                </div>
                <div className="border-border flex items-center gap-1 rounded-lg border p-0.5">
                    <button
                        onClick={() => setView("preview")}
                        className={cn(
                            "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                            view === "preview"
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:text-foreground",
                        )}
                    >
                        <Eye className="size-3.5" />
                        Preview
                    </button>
                    <button
                        onClick={() => setView("code")}
                        className={cn(
                            "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                            view === "code"
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:text-foreground",
                        )}
                    >
                        <Code className="size-3.5" />
                        Code
                    </button>
                </div>
            </div>

            {/* Content */}
            {view === "preview" ? (
                <div className="flex-1">{demo.preview}</div>
            ) : (
                <div className="p-6">
                    <CodeBlock code={demo.code} />
                </div>
            )}
        </div>
    );
}
