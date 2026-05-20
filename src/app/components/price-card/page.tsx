"use client";

import { OriginUiPriceCard } from "@/components/branding/origin-ui-price-card";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";
import { toast } from "sonner";

export default function PriceCardPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">PriceCard</h1>
                <p className="text-muted-foreground text-sm">
                    A pricing plan card with a name, price, period, description, feature list, and
                    CTA button. A <code className="text-xs">highlighted</code> prop adds a primary
                    border, shadow, and &quot;Most Popular&quot; badge to emphasize a recommended
                    plan.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Built on <code className="text-xs">Card</code>. The header contains plan name,
                    description, and price. The content holds the feature list with check / cross
                    icons. The footer has the CTA button. When{" "}
                    <code className="text-xs">highlighted</code>, a &quot;Most Popular&quot; Badge
                    is absolutely positioned above the card.
                </p>
                <div className="border-border bg-muted/30 flex justify-center rounded-lg border p-10">
                    <div className="w-64">
                        <OriginUiPriceCard
                            name="Pro"
                            price="$29"
                            description="For growing teams."
                            highlighted
                            features={[
                                { text: "Unlimited projects", included: true },
                                { text: "Advanced analytics", included: true },
                                { text: "Priority support", included: true },
                                { text: "Custom domain", included: true },
                                { text: "Up to 10 members", included: true },
                            ]}
                            onCtaClick={() => toast.success("Selected Pro plan")}
                        />
                    </div>
                </div>
            </div>

            {/* Three-tier pricing */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Three-Tier Pricing</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    The standard pricing page pattern — three plans with the middle plan highlighted
                    as the recommended option.
                </p>
                <div className="grid gap-6 pt-4 sm:grid-cols-3">
                    <OriginUiPriceCard
                        name="Starter"
                        price="$9"
                        description="For individuals and small projects."
                        features={[
                            { text: "5 projects", included: true },
                            { text: "Basic analytics", included: true },
                            { text: "Email support", included: true },
                            { text: "Custom domain", included: false },
                            { text: "Team members", included: false },
                        ]}
                        onCtaClick={() => toast.success("Selected Starter plan")}
                    />
                    <OriginUiPriceCard
                        name="Pro"
                        price="$29"
                        description="For growing teams and businesses."
                        highlighted
                        features={[
                            { text: "Unlimited projects", included: true },
                            { text: "Advanced analytics", included: true },
                            { text: "Priority support", included: true },
                            { text: "Custom domain", included: true },
                            { text: "Up to 10 members", included: true },
                        ]}
                        onCtaClick={() => toast.success("Selected Pro plan")}
                    />
                    <OriginUiPriceCard
                        name="Enterprise"
                        price="$99"
                        description="For large organizations."
                        features={[
                            { text: "Unlimited everything", included: true },
                            { text: "Custom analytics", included: true },
                            { text: "24/7 phone support", included: true },
                            { text: "Custom domain", included: true },
                            { text: "Unlimited members", included: true },
                        ]}
                        ctaLabel="Contact Sales"
                        onCtaClick={() => toast.success("Selected Enterprise")}
                    />
                </div>
            </div>

            {/* Custom period */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Custom Period</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    Override the <code className="text-xs">period</code> prop (default:{" "}
                    <code className="text-xs">&quot;/month&quot;</code>) for annual pricing or
                    one-time payments.
                </p>
                <div className="grid max-w-lg gap-6 sm:grid-cols-2">
                    <OriginUiPriceCard
                        name="Annual Pro"
                        price="$290"
                        period="/year"
                        description="Save 2 months with annual billing."
                        features={[
                            { text: "Everything in Pro", included: true },
                            { text: "2 months free", included: true },
                            { text: "Annual invoice", included: true },
                        ]}
                        onCtaClick={() => toast.success("Selected Annual Pro")}
                    />
                    <OriginUiPriceCard
                        name="Lifetime"
                        price="$499"
                        period=" one-time"
                        description="Pay once, use forever."
                        features={[
                            { text: "Lifetime updates", included: true },
                            { text: "All future features", included: true },
                            { text: "Priority support", included: true },
                        ]}
                        ctaLabel="Buy Now"
                        onCtaClick={() => toast.success("Selected Lifetime")}
                    />
                </div>
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
                                    Highlight the plan you want to sell.
                                </strong>{" "}
                                Use <code className="text-xs">highlighted</code> on the middle or
                                most popular plan to guide the user&apos;s eye.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Keep feature lists to 4–6 items.
                                </strong>{" "}
                                More than six features creates visual overload — link to a full
                                comparison table instead.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Add padding above a highlighted card.
                                </strong>{" "}
                                The absolute-positioned badge needs room — add{" "}
                                <code className="text-xs">pt-6</code> to the grid container.
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
                                    Don&apos;t highlight multiple plans.
                                </strong>{" "}
                                Highlighting more than one plan dilutes the &quot;recommended&quot;
                                signal.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use inconsistent feature counts.
                                </strong>{" "}
                                Cards with different numbers of features have different heights —
                                keep counts consistent across plans.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t bury the price.
                                </strong>{" "}
                                The price is the first decision factor — it should be immediately
                                visible, not hidden below a long feature list.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Developer Reference */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Developer Reference</h3>
                <Separator />
                <div className="border-border rounded-lg border p-5">
                    <h4 className="mb-2 text-sm font-medium">Props</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            <code className="text-xs">name</code> (required) — plan name, rendered
                            as <code className="text-xs">CardTitle</code>.
                        </li>
                        <li>
                            <code className="text-xs">price</code> (required) — price string (e.g.
                            &quot;$29&quot;), rendered in{" "}
                            <code className="text-xs">text-4xl font-bold</code>.
                        </li>
                        <li>
                            <code className="text-xs">period</code> (optional, default:
                            &quot;/month&quot;) — appended to price in muted text.
                        </li>
                        <li>
                            <code className="text-xs">description</code> (required) — short plan
                            tagline shown as <code className="text-xs">CardDescription</code>.
                        </li>
                        <li>
                            <code className="text-xs">features</code> (required) — array of{" "}
                            <code className="text-xs">{"{ text: string; included: boolean }"}</code>
                            . <code className="text-xs">included: true</code> shows a success check;{" "}
                            <code className="text-xs">false</code> shows a muted cross.
                        </li>
                        <li>
                            <code className="text-xs">highlighted</code> (optional) — adds{" "}
                            <code className="text-xs">border-primary</code>,{" "}
                            <code className="text-xs">shadow-lg</code>, and a &quot;Most
                            Popular&quot; Badge.
                        </li>
                        <li>
                            <code className="text-xs">ctaLabel</code> (optional, default: &quot;Get
                            Started&quot;) — CTA button text.
                        </li>
                        <li>
                            <code className="text-xs">onCtaClick</code> (optional) — CTA button
                            click handler.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import { OriginUiPriceCard } from "@/components/branding/origin-ui-price-card"

<div className="grid gap-6 pt-4 sm:grid-cols-3">
  <OriginUiPriceCard
    name="Starter"
    price="$9"
    description="For individuals and small projects."
    features={[
      { text: "5 projects", included: true },
      { text: "Email support", included: true },
      { text: "Custom domain", included: false },
    ]}
    onCtaClick={() => router.push("/checkout?plan=starter")}
  />
  <OriginUiPriceCard
    name="Pro"
    price="$29"
    description="For growing teams."
    highlighted   // adds border-primary + "Most Popular" badge
    features={[
      { text: "Unlimited projects", included: true },
      { text: "Priority support", included: true },
      { text: "Custom domain", included: true },
    ]}
    onCtaClick={() => router.push("/checkout?plan=pro")}
  />
  <OriginUiPriceCard
    name="Enterprise"
    price="$99"
    description="For large organizations."
    ctaLabel="Contact Sales"
    features={[
      { text: "Unlimited everything", included: true },
      { text: "24/7 phone support", included: true },
      { text: "Custom domain", included: true },
    ]}
    onCtaClick={() => openSalesForm()}
  />
</div>`}
                />
            </div>
        </div>
    );
}
