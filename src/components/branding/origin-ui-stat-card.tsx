import { type LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card";

export function OriginUiStatCard({
    label,
    value,
    change,
    trend,
    icon: Icon,
    className,
}: {
    label: string;
    value: string;
    change?: string;
    trend?: "up" | "down";
    icon: LucideIcon;
    className?: string;
}) {
    return (
        <Card className={className}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardDescription className="text-sm font-medium">{label}</CardDescription>
                <Icon className="text-muted-foreground size-4" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                {change && (
                    <p className="text-muted-foreground flex items-center gap-1 text-xs">
                        {trend === "up" ? (
                            <TrendingUp className="text-success size-3" />
                        ) : trend === "down" ? (
                            <TrendingDown className="text-error size-3" />
                        ) : null}
                        {change}
                    </p>
                )}
            </CardContent>
        </Card>
    );
}
