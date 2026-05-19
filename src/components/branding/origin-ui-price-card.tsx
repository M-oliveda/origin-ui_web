import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

export function OriginUiPriceCard({
    name,
    price,
    period = "/month",
    description,
    features,
    ctaLabel = "Get Started",
    highlighted = false,
    onCtaClick,
    className,
}: {
    name: string;
    price: string;
    period?: string;
    description: string;
    features: { text: string; included: boolean }[];
    ctaLabel?: string;
    highlighted?: boolean;
    onCtaClick?: () => void;
    className?: string;
}) {
    return (
        <Card className={cn("relative", highlighted && "border-primary shadow-lg", className)}>
            {highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>Most Popular</Badge>
                </div>
            )}
            <CardHeader className="text-center">
                <CardTitle className="text-xl">{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <div className="mt-4">
                    <span className="text-4xl font-bold">{price}</span>
                    <span className="text-muted-foreground">{period}</span>
                </div>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {features.map((f) => (
                        <li key={f.text} className="flex items-center gap-2 text-sm">
                            {f.included ? (
                                <Check className="text-success size-4" />
                            ) : (
                                <X className="text-muted-foreground/40 size-4" />
                            )}
                            <span className={f.included ? "" : "text-muted-foreground/60"}>
                                {f.text}
                            </span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Button
                    variant={highlighted ? "default" : "outline"}
                    className="w-full"
                    onClick={onCtaClick}
                >
                    {ctaLabel}
                </Button>
            </CardFooter>
        </Card>
    );
}
