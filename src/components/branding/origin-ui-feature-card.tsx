import { type LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function OriginUiFeatureCard({
    icon: Icon,
    title,
    description,
    className,
}: {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}) {
    return (
        <Card className={cn("hover:border-ring transition-colors", className)}>
            <CardHeader>
                <div className="bg-primary/10 text-primary mb-2 inline-flex size-10 items-center justify-center rounded-lg">
                    <Icon className="size-5" />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>
    );
}
