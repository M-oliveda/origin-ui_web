import { CopyButton } from "./copy-button";
import { DESIGN_SYSTEM_MARKDOWN } from "./design-system-content";

export default function ExportPage() {
    return (
        <div className="flex flex-1 flex-col">
            {/* Action bar */}
            <div className="border-border bg-muted/30 border-b">
                <div className="mx-auto flex max-w-4xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-lg font-semibold">Export Design System</h1>
                        <p className="text-muted-foreground text-sm">
                            Copy the full DESIGN.md to clipboard, then paste into Google Stitch AI
                            as context.
                        </p>
                    </div>
                    <CopyButton text={DESIGN_SYSTEM_MARKDOWN} />
                </div>
            </div>

            {/* Content preview */}
            <div className="mx-auto w-full max-w-4xl px-6 py-8">
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <pre className="text-foreground/90 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                        {DESIGN_SYSTEM_MARKDOWN}
                    </pre>
                </div>
            </div>
        </div>
    );
}
