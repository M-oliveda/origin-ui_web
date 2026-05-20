"use client";

import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Line,
    LineChart,
    Pie,
    PieChart,
    XAxis,
    YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

// ── Bar Chart data ────────────────────────────────────────────────────────────
const salesByCountryData = [
    { country: "Colombia", cafe: 4200, aguacate: 1800, cacao: 3100 },
    { country: "México", cafe: 2800, aguacate: 5600, cacao: 1200 },
    { country: "Brasil", cafe: 6100, aguacate: 900, cacao: 2400 },
    { country: "Argentina", cafe: 1500, aguacate: 2200, cacao: 800 },
    { country: "Perú", cafe: 1900, aguacate: 3100, cacao: 4200 },
];

const salesConfig = {
    cafe: { label: "Café", color: "hsl(var(--chart-1))" },
    aguacate: { label: "Aguacate", color: "hsl(var(--chart-2))" },
    cacao: { label: "Cacao", color: "hsl(var(--chart-3))" },
} satisfies ChartConfig;

// ── Line Chart data ───────────────────────────────────────────────────────────
const exportTrendsData = [
    { month: "Ene", cafe: 3800, aguacate: 2100, cacao: 1600 },
    { month: "Feb", cafe: 4200, aguacate: 2400, cacao: 1900 },
    { month: "Mar", cafe: 3900, aguacate: 3100, cacao: 2200 },
    { month: "Abr", cafe: 4800, aguacate: 3600, cacao: 2500 },
    { month: "May", cafe: 5200, aguacate: 4200, cacao: 2800 },
    { month: "Jun", cafe: 4600, aguacate: 4800, cacao: 3100 },
];

// ── Area Chart data ───────────────────────────────────────────────────────────
const quarterlyRevenueData = [
    { quarter: "Q1", brasil: 12400, mexico: 9800, colombia: 7200 },
    { quarter: "Q2", brasil: 14200, mexico: 11200, colombia: 8600 },
    { quarter: "Q3", brasil: 16800, mexico: 13400, colombia: 10100 },
    { quarter: "Q4", brasil: 19200, mexico: 15600, colombia: 12400 },
];

const revenueConfig = {
    brasil: { label: "Brasil", color: "hsl(var(--chart-1))" },
    mexico: { label: "México", color: "hsl(var(--chart-2))" },
    colombia: { label: "Colombia", color: "hsl(var(--chart-3))" },
} satisfies ChartConfig;

// ── Donut Chart data ──────────────────────────────────────────────────────────
const marketShareData = [
    { product: "Café", share: 34, fill: "hsl(var(--chart-1))" },
    { product: "Aguacate", share: 26, fill: "hsl(var(--chart-2))" },
    { product: "Cacao", share: 18, fill: "hsl(var(--chart-3))" },
    { product: "Quinoa", share: 12, fill: "hsl(var(--chart-4))" },
    { product: "Plátano", share: 10, fill: "hsl(var(--chart-5))" },
];

const marketConfig = {
    share: { label: "Participación (%)" },
} satisfies ChartConfig;

function formatThousands(value: unknown): string {
    return `${(Number(value) / 1000).toFixed(1)}k`;
}

function formatCurrency(value: unknown): string {
    return `$${(Number(value) / 1000).toFixed(0)}k`;
}

export default function ChartPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Chart</h1>
                <p className="text-muted-foreground text-sm">
                    Accessible, composable charts built on{" "}
                    <span className="text-foreground font-medium">Recharts</span>. Wrap any Recharts
                    chart in <code className="text-xs">ChartContainer</code> and pass a{" "}
                    <code className="text-xs">ChartConfig</code> to wire up colors, labels, and
                    tooltips from your design tokens.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Define a <code className="text-xs">ChartConfig</code> that maps each data key to
                    a label and a color token. Pass it to{" "}
                    <code className="text-xs">ChartContainer</code> alongside your Recharts chart.{" "}
                    <code className="text-xs">ChartTooltip</code> and{" "}
                    <code className="text-xs">ChartLegend</code> consume the config automatically
                    via context. Reference colors inside the chart as{" "}
                    <code className="text-xs">var(--color-KEY)</code>.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <ChartContainer config={salesConfig} className="h-48 w-full">
                        <BarChart data={salesByCountryData}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="country" tick={{ fontSize: 11 }} />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="cafe" fill="var(--color-cafe)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </div>
            </div>

            {/* Bar Chart */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">
                    Bar Chart — Ventas por País
                </h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Grouped bar chart comparing café, aguacate, and cacao sales (in tonnes) across
                    five Latin American countries. Uses <code className="text-xs">ChartLegend</code>{" "}
                    with <code className="text-xs">ChartLegendContent</code> for an auto-labeled
                    legend driven by the config.
                </p>
                <Card>
                    <CardHeader>
                        <CardTitle>Ventas por País</CardTitle>
                        <CardDescription>Exportaciones 2024 · toneladas métricas</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={salesConfig} className="h-72 w-full">
                            <BarChart data={salesByCountryData} barCategoryGap="20%">
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="country" tick={{ fontSize: 11 }} />
                                <YAxis
                                    tickFormatter={formatThousands}
                                    tick={{ fontSize: 11 }}
                                    width={40}
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend content={<ChartLegendContent />} />
                                <Bar
                                    dataKey="cafe"
                                    fill="var(--color-cafe)"
                                    radius={[4, 4, 0, 0]}
                                />
                                <Bar
                                    dataKey="aguacate"
                                    fill="var(--color-aguacate)"
                                    radius={[4, 4, 0, 0]}
                                />
                                <Bar
                                    dataKey="cacao"
                                    fill="var(--color-cacao)"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Line Chart */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">
                    Line Chart — Tendencia de Exportaciones
                </h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Monthly export trend for the top three LatAm products in the first half of 2024.
                    Dot rendering is disabled for a cleaner look at high data density.
                </p>
                <Card>
                    <CardHeader>
                        <CardTitle>Tendencia de Exportaciones</CardTitle>
                        <CardDescription>Enero – Junio 2024 · toneladas métricas</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={salesConfig} className="h-72 w-full">
                            <LineChart data={exportTrendsData}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                                <YAxis
                                    tickFormatter={formatThousands}
                                    tick={{ fontSize: 11 }}
                                    width={40}
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend content={<ChartLegendContent />} />
                                <Line
                                    type="monotone"
                                    dataKey="cafe"
                                    stroke="var(--color-cafe)"
                                    strokeWidth={2}
                                    dot={false}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="aguacate"
                                    stroke="var(--color-aguacate)"
                                    strokeWidth={2}
                                    dot={false}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="cacao"
                                    stroke="var(--color-cacao)"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Area Chart */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">
                    Area Chart — Ingresos Acumulados por País
                </h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Stacked area chart showing quarterly revenue (USD thousands) across Brasil,
                    México, and Colombia. The shared <code className="text-xs">stackId</code> stacks
                    the three series into a single cumulative shape.
                </p>
                <Card>
                    <CardHeader>
                        <CardTitle>Ingresos Acumulados</CardTitle>
                        <CardDescription>Trimestral 2024 · miles de USD</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={revenueConfig} className="h-72 w-full">
                            <AreaChart data={quarterlyRevenueData}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="quarter" tick={{ fontSize: 11 }} />
                                <YAxis
                                    tickFormatter={formatCurrency}
                                    tick={{ fontSize: 11 }}
                                    width={44}
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend content={<ChartLegendContent />} />
                                <Area
                                    type="monotone"
                                    dataKey="brasil"
                                    stackId="a"
                                    stroke="var(--color-brasil)"
                                    fill="var(--color-brasil)"
                                    fillOpacity={0.4}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="mexico"
                                    stackId="a"
                                    stroke="var(--color-mexico)"
                                    fill="var(--color-mexico)"
                                    fillOpacity={0.4}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="colombia"
                                    stackId="a"
                                    stroke="var(--color-colombia)"
                                    fill="var(--color-colombia)"
                                    fillOpacity={0.4}
                                />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Donut Chart */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">
                    Donut Chart — Participación de Mercado
                </h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Donut chart showing the market share distribution of Latin American export
                    products in 2024. Colors are set per-segment via{" "}
                    <code className="text-xs">Cell</code> and a custom inline legend is rendered
                    below the chart.
                </p>
                <Card>
                    <CardHeader>
                        <CardTitle>Participación de Mercado</CardTitle>
                        <CardDescription>Distribución por producto · 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer
                            config={marketConfig}
                            className="mx-auto h-64 w-full max-w-xs"
                        >
                            <PieChart>
                                <ChartTooltip
                                    content={<ChartTooltipContent nameKey="product" hideLabel />}
                                />
                                <Pie
                                    data={marketShareData}
                                    dataKey="share"
                                    nameKey="product"
                                    innerRadius="55%"
                                    outerRadius="80%"
                                    paddingAngle={2}
                                >
                                    {marketShareData.map((entry) => (
                                        <Cell key={entry.product} fill={entry.fill} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                        <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
                            {marketShareData.map((entry) => (
                                <div
                                    key={entry.product}
                                    className="flex items-center gap-1.5 text-xs"
                                >
                                    <div
                                        className="h-2 w-2 shrink-0 rounded-[2px]"
                                        style={{ backgroundColor: entry.fill }}
                                    />
                                    <span className="text-muted-foreground">{entry.product}</span>
                                    <span className="font-medium tabular-nums">{entry.share}%</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Design Guidelines */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Design Guidelines</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg border-2 border-green-500/30 bg-green-500/5 p-5">
                        <div className="mb-4 flex items-center gap-2">
                            <Check className="size-4 text-green-600 dark:text-green-400" />
                            <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                                Do
                            </p>
                        </div>
                        <ul className="text-muted-foreground space-y-3 text-sm">
                            <li>
                                <strong className="text-foreground">
                                    Use CSS variables for colors.
                                </strong>{" "}
                                Reference <code className="text-xs">var(--color-KEY)</code> inside
                                charts so colors adapt to light/dark mode automatically.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Set a height class on ChartContainer.
                                </strong>{" "}
                                Always provide a <code className="text-xs">h-*</code> or{" "}
                                <code className="text-xs">aspect-*</code> class to avoid a
                                zero-height render.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Include tooltips and legends.
                                </strong>{" "}
                                They are the primary way users read precise chart values.
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-lg border-2 border-red-500/30 bg-red-500/5 p-5">
                        <div className="mb-4 flex items-center gap-2">
                            <X className="size-4 text-red-600 dark:text-red-400" />
                            <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                                Don&apos;t
                            </p>
                        </div>
                        <ul className="text-muted-foreground space-y-3 text-sm">
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t hardcode hex or hsl colors.
                                </strong>{" "}
                                Use <code className="text-xs">hsl(var(--chart-N))</code> from{" "}
                                <code className="text-xs">globals.css</code> instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use ChartContainer in a Server Component.
                                </strong>{" "}
                                Recharts requires the DOM — always co-locate charts inside{" "}
                                <code className="text-xs">&quot;use client&quot;</code> files.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t overcrowd a single chart.
                                </strong>{" "}
                                Split into multiple charts rather than showing more than 5 data
                                series at once.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Developer Reference */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Developer Reference</h3>
                <Separator />
                <div className="border-border space-y-4 rounded-lg border p-5">
                    <div>
                        <h4 className="mb-2 text-sm font-medium">ChartConfig</h4>
                        <p className="text-muted-foreground text-sm">
                            A <code className="text-xs">Record&lt;string, …&gt;</code> where each
                            key matches a Recharts <code className="text-xs">dataKey</code>. Each
                            entry accepts <code className="text-xs">label</code>,{" "}
                            <code className="text-xs">color</code> (a single CSS value), or{" "}
                            <code className="text-xs">theme</code> (an object with{" "}
                            <code className="text-xs">light</code> /{" "}
                            <code className="text-xs">dark</code> values).
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-2 text-sm font-medium">Color scoping</h4>
                        <p className="text-muted-foreground text-sm">
                            <code className="text-xs">ChartStyle</code> injects a{" "}
                            <code className="text-xs">&lt;style&gt;</code> tag scoped to the
                            chart&apos;s unique ID. Inside the chart, reference colors as{" "}
                            <code className="text-xs">var(--color-KEY)</code> — these are not global
                            tokens and are available only within the chart container.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-2 text-sm font-medium">Accessibility</h4>
                        <p className="text-muted-foreground text-sm">
                            Recharts charts are SVG-based. Add an{" "}
                            <code className="text-xs">aria-label</code> to the{" "}
                            <code className="text-xs">ChartContainer</code> wrapper and provide a
                            text summary of the chart&apos;s key insight for screen reader users.
                        </p>
                    </div>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { BarChart, Bar, XAxis, CartesianGrid } from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart";

const config: ChartConfig = {
    cafe:     { label: "Café",     color: "hsl(var(--chart-1))" },
    aguacate: { label: "Aguacate", color: "hsl(var(--chart-2))" },
};

const data = [
    { country: "Colombia", cafe: 4200, aguacate: 1800 },
    { country: "Brasil",   cafe: 6100, aguacate: 900  },
];

<ChartContainer config={config} className="h-64 w-full">
    <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="country" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="cafe"     fill="var(--color-cafe)"     radius={4} />
        <Bar dataKey="aguacate" fill="var(--color-aguacate)" radius={4} />
    </BarChart>
</ChartContainer>`}
                />
            </div>
        </div>
    );
}
