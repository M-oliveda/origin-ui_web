"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function CarouselPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Carousel</h1>
                <p className="text-muted-foreground text-sm">
                    A touch-friendly content slider with previous/next navigation. Supports
                    horizontal and vertical orientations, multi-slide views, and looping. Built on{" "}
                    <a
                        href="https://www.embla-carousel.com/"
                        className="hover:text-foreground underline underline-offset-4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Embla Carousel
                    </a>
                    .
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<Carousel>"}</code> is the root — pass{" "}
                    <code className="text-xs">opts</code> (Embla options),{" "}
                    <code className="text-xs">plugins</code>, and{" "}
                    <code className="text-xs">orientation</code> here.{" "}
                    <code className="text-xs">CarouselContent</code> is the slide track. Each slide
                    is a <code className="text-xs">CarouselItem</code> — use Tailwind{" "}
                    <code className="text-xs">basis-*</code> classes on it to control how many
                    slides are visible at once. <code className="text-xs">CarouselPrevious</code>{" "}
                    and <code className="text-xs">CarouselNext</code> are the arrow buttons.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="mx-auto max-w-xs px-12">
                        <Carousel>
                            <CarouselContent>
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <CarouselItem key={i}>
                                        <div className="border-border bg-background flex aspect-square items-center justify-center rounded-lg border">
                                            <span className="text-muted-foreground text-3xl font-semibold">
                                                {i}
                                            </span>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                    <div className="text-muted-foreground mt-4 flex flex-wrap items-center justify-center gap-4 text-[10px]">
                        <span>CarouselContent (slide track)</span>
                        <span>CarouselItem (one slide)</span>
                        <span>CarouselPrevious / CarouselNext</span>
                    </div>
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Examples</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-4">
                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Multi-slide — two visible at once
                        </p>
                        <div className="mx-auto w-full max-w-lg px-12">
                            <Carousel>
                                <CarouselContent>
                                    {["A", "B", "C", "D", "E", "F"].map((letter) => (
                                        <CarouselItem key={letter} className="basis-1/2">
                                            <div className="border-border bg-muted/50 flex aspect-square items-center justify-center rounded-lg border">
                                                <span className="text-muted-foreground text-2xl font-semibold">
                                                    {letter}
                                                </span>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Looping — with loop option
                        </p>
                        <div className="mx-auto max-w-xs px-12">
                            <Carousel opts={{ loop: true }}>
                                <CarouselContent>
                                    {["Red", "Green", "Blue", "Purple"].map((color) => (
                                        <CarouselItem key={color}>
                                            <div className="border-border bg-muted/50 flex h-24 items-center justify-center rounded-lg border">
                                                <span className="text-muted-foreground text-sm font-medium">
                                                    {color}
                                                </span>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>

                    <div className="border-border flex flex-col gap-3 rounded-lg border p-4">
                        <p className="text-muted-foreground text-xs font-medium">
                            Vertical orientation
                        </p>
                        <div className="mx-auto flex h-64 max-w-xs flex-col items-center justify-center py-8">
                            <Carousel orientation="vertical" className="h-48 w-full max-w-xs">
                                <CarouselContent className="mt-0 h-48">
                                    {[1, 2, 3, 4].map((i) => (
                                        <CarouselItem key={i} className="pt-2">
                                            <div className="border-border bg-muted/50 flex h-16 items-center justify-center rounded-lg border">
                                                <span className="text-muted-foreground text-sm font-medium">
                                                    Slide {i}
                                                </span>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>
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
                                    Use for browsing sequences.
                                </strong>{" "}
                                Carousels work best for visually similar, ordered content — images,
                                testimonials, product cards — where the user actively wants to
                                browse.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Show partial next slide.
                                </strong>{" "}
                                Peeking the edge of the next slide signals that there&apos;s more
                                content to scroll — it&apos;s a natural affordance for swiping.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Use basis-* for multi-slide layouts.
                                </strong>{" "}
                                Set <code className="text-xs">basis-1/2</code> or{" "}
                                <code className="text-xs">basis-1/3</code> on{" "}
                                <code className="text-xs">CarouselItem</code> to show multiple
                                slides at once without extra configuration.
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
                                    Don&apos;t auto-play without user consent.
                                </strong>{" "}
                                Auto-advancing carousels disorient users and violate WCAG 2.1
                                (motion). If you need it, provide pause controls.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for critical content.
                                </strong>{" "}
                                Users miss content in carousels. Important information should be
                                always visible, not hidden behind a next button.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t add too many slides.
                                </strong>{" "}
                                Beyond 5–7 items the carousel becomes tedious to navigate. Consider
                                a grid layout instead for large collections.
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
                    <h4 className="mb-2 text-sm font-medium">Accessibility & Behavior</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            The <code className="text-xs">{"<Carousel>"}</code> root renders with{" "}
                            <code className="text-xs">role=&quot;region&quot;</code> and{" "}
                            <code className="text-xs">
                                aria-roledescription=&quot;carousel&quot;
                            </code>
                            . Each <code className="text-xs">CarouselItem</code> has{" "}
                            <code className="text-xs">role=&quot;group&quot;</code> and{" "}
                            <code className="text-xs">aria-roledescription=&quot;slide&quot;</code>.
                        </li>
                        <li>
                            Arrow keys (Left/Right or Up/Down for vertical) navigate between slides
                            when the carousel is focused.
                        </li>
                        <li>
                            <code className="text-xs">CarouselPrevious</code> and{" "}
                            <code className="text-xs">CarouselNext</code> are automatically disabled
                            when there are no more slides to scroll (unless{" "}
                            <code className="text-xs">opts.loop</code> is enabled).
                        </li>
                        <li>
                            Access the Embla API via the <code className="text-xs">setApi</code>{" "}
                            prop to imperatively control scroll position, listen to events, or build
                            custom indicators.
                        </li>
                        <li>
                            <code className="text-xs">opts</code> accepts any{" "}
                            <a
                                href="https://www.embla-carousel.com/api/options/"
                                className="underline underline-offset-2"
                            >
                                Embla Carousel option
                            </a>
                            : <code className="text-xs">loop</code>,{" "}
                            <code className="text-xs">align</code>,{" "}
                            <code className="text-xs">skipSnaps</code>,{" "}
                            <code className="text-xs">dragFree</code>, etc.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

// Basic carousel
<Carousel>
  <CarouselContent>
    {items.map((item) => (
      <CarouselItem key={item.id}>
        <div className="aspect-square rounded-lg bg-muted">{item.label}</div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

// Multi-slide: two per view
<Carousel>
  <CarouselContent>
    {items.map((item) => (
      <CarouselItem key={item.id} className="basis-1/2">
        {item.label}
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

// Looping
<Carousel opts={{ loop: true }}>...</Carousel>

// Vertical
<Carousel orientation="vertical">...</Carousel>

// Access Embla API
const [api, setApi] = useState<CarouselApi>()
<Carousel setApi={setApi}>...</Carousel>`}
                />
            </div>
        </div>
    );
}
