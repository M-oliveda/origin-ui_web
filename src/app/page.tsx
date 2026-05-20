import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const sections = [
    {
        title: "Fundamentals",
        description:
            "Typography, color palette, spacing scale, and visual effects — the building blocks of the design system.",
        href: "/fundamentals/typography",
    },
    {
        title: "Components",
        description:
            "Reusable UI components built on shadcn/ui primitives, themed with brand tokens.",
        href: "/components",
    },
    {
        title: "Templates",
        description: "Full-page layout templates and compositions for common application screens.",
        href: "/templates",
    },
    {
        title: "Export",
        description:
            "Copy the full DESIGN.md to clipboard for use in Google Stitch AI or other AI tools.",
        href: "/export",
    },
];

export default function Home() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
            <div className="w-full max-w-3xl space-y-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold tracking-tight">Origin UI</h1>
                    <p className="text-muted-foreground max-w-xl text-lg">
                        A living design system that mirrors the Figma source of truth. Built with
                        Next.js, Tailwind CSS, and shadcn/ui — every token, component, and layout is
                        documented and interactive.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {sections.map((section) => (
                        <Link key={section.title} href={section.href} className="group">
                            <Card className="group-hover:border-ring h-full transition-colors hover:shadow-md">
                                <CardHeader>
                                    <CardTitle className="text-lg">{section.title}</CardTitle>
                                    <CardDescription>{section.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="text-muted-foreground flex items-center gap-3 text-sm">
                    <span className="bg-success inline-block size-2 rounded-full" />
                    <span>
                        Space Grotesk &middot; Tailwind v4 &middot; shadcn/ui &middot; Next.js 16
                    </span>
                </div>
            </div>
        </div>
    );
}
