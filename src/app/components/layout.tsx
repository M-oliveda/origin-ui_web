"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const categories = [
    {
        name: "Actions",
        items: [
            { slug: "button", label: "Button" },
            { slug: "button-group", label: "ButtonGroup" },
            { slug: "toggle", label: "Toggle" },
            { slug: "toggle-group", label: "ToggleGroup" },
        ],
    },
    {
        name: "Form Inputs",
        items: [
            { slug: "input", label: "Input" },
            { slug: "input-group", label: "InputGroup" },
            { slug: "input-otp", label: "InputOTP" },
            { slug: "textarea", label: "Textarea" },
            { slug: "checkbox", label: "Checkbox" },
            { slug: "radio-group", label: "RadioGroup" },
            { slug: "switch", label: "Switch" },
            { slug: "slider", label: "Slider" },
            { slug: "select", label: "Select" },
            { slug: "native-select", label: "NativeSelect" },
            { slug: "combobox", label: "Combobox" },
            { slug: "calendar", label: "Calendar" },
            { slug: "date-picker", label: "DatePicker" },
            { slug: "label", label: "Label" },
            { slug: "field", label: "Field" },
        ],
    },
    {
        name: "Feedback",
        items: [
            { slug: "badge", label: "Badge" },
            { slug: "alert", label: "Alert" },
            { slug: "progress", label: "Progress" },
            { slug: "skeleton", label: "Skeleton" },
            { slug: "spinner", label: "Spinner" },
            { slug: "empty", label: "Empty" },
        ],
    },
    {
        name: "Overlays",
        items: [
            { slug: "dialog", label: "Dialog" },
            { slug: "alert-dialog", label: "AlertDialog" },
            { slug: "sheet", label: "Sheet" },
            { slug: "drawer", label: "Drawer" },
            { slug: "popover", label: "Popover" },
            { slug: "tooltip", label: "Tooltip" },
            { slug: "hover-card", label: "HoverCard" },
        ],
    },
    {
        name: "Data Display",
        items: [
            { slug: "table", label: "Table" },
            { slug: "data-table", label: "DataTable" },
            { slug: "chart", label: "Chart" },
            { slug: "avatar", label: "Avatar" },
            { slug: "kbd", label: "Kbd" },
            { slug: "carousel", label: "Carousel" },
            { slug: "item", label: "Item" },
        ],
    },
    {
        name: "Navigation",
        items: [
            { slug: "breadcrumb", label: "Breadcrumb" },
            { slug: "pagination", label: "Pagination" },
            { slug: "sidebar", label: "Sidebar" },
            { slug: "dropdown-menu", label: "DropdownMenu" },
            { slug: "context-menu", label: "ContextMenu" },
            { slug: "menubar", label: "Menubar" },
            { slug: "command", label: "Command" },
            { slug: "navigation-menu", label: "NavigationMenu" },
        ],
    },
    {
        name: "Layout",
        items: [
            { slug: "card", label: "Card" },
            { slug: "separator", label: "Separator" },
            { slug: "accordion", label: "Accordion" },
            { slug: "tabs", label: "Tabs" },
            { slug: "collapsible", label: "Collapsible" },
            { slug: "scroll-area", label: "ScrollArea" },
            { slug: "aspect-ratio", label: "AspectRatio" },
            { slug: "resizable", label: "Resizable" },
        ],
    },
    {
        name: "Toaster",
        items: [{ slug: "toaster", label: "Toaster" }],
    },
    {
        name: "OriginUI",
        items: [
            { slug: "logo", label: "Logo" },
            { slug: "stat-card", label: "StatCard" },
            { slug: "page-header", label: "PageHeader" },
            { slug: "empty-state", label: "EmptyState" },
            { slug: "notification-item", label: "NotificationItem" },
            { slug: "user-menu", label: "UserMenu" },
            { slug: "search-bar", label: "SearchBar" },
            { slug: "feature-card", label: "FeatureCard" },
            { slug: "price-card", label: "PriceCard" },
            { slug: "origin-input", label: "Input" },
            { slug: "input-password", label: "InputPassword" },
        ],
    },
];

interface INavCategory {
    name: string;
    items: { slug: string; label: string }[];
}

interface IComponentNavProps {
    filter: string;
    onFilterChange: (value: string) => void;
    filteredCategories: INavCategory[];
    pathname: string;
    onLinkClick?: () => void;
}

function ComponentNav({
    filter,
    onFilterChange,
    filteredCategories,
    pathname,
    onLinkClick,
}: IComponentNavProps) {
    return (
        <>
            <div className="relative mb-4">
                <Search className="text-muted-foreground absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2" />
                <Input
                    placeholder="Filter..."
                    value={filter}
                    onChange={(e) => onFilterChange(e.target.value)}
                    className="h-7 pl-8 text-xs"
                />
            </div>
            <nav className="space-y-4">
                {filteredCategories.map((cat) => (
                    <div key={cat.name}>
                        <p className="text-muted-foreground mb-1 px-2 text-xs font-medium tracking-widest uppercase">
                            {cat.name}
                        </p>
                        <div className="flex flex-col gap-0.5">
                            {cat.items.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/components/${item.slug}`}
                                    onClick={onLinkClick}
                                    className={cn(
                                        "rounded-md px-2 py-1.5 text-sm transition-colors",
                                        pathname === `/components/${item.slug}`
                                            ? "bg-primary text-primary-foreground font-medium"
                                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
                {filteredCategories.length === 0 && (
                    <p className="text-muted-foreground px-2 text-xs">No components found.</p>
                )}
            </nav>
        </>
    );
}

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [filter, setFilter] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

    const filteredCategories = useMemo(() => {
        const query = filter.toLowerCase().trim();
        if (!query) return categories;

        return categories
            .map((cat) => ({
                ...cat,
                items: cat.items.filter(
                    (item) =>
                        item.label.toLowerCase().includes(query) ||
                        item.slug.toLowerCase().includes(query),
                ),
            }))
            .filter((cat) => cat.items.length > 0);
    }, [filter]);

    return (
        <div className="flex min-h-full flex-col md:flex-row">
            {/* Mobile top bar */}
            <div className="border-border flex h-10 items-center border-b px-4 md:hidden">
                <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2"
                    aria-label="Open components navigation"
                    onClick={() => setMobileOpen(true)}
                >
                    <Menu className="size-4" />
                    <span className="text-sm font-medium">Components</span>
                </Button>
            </div>

            {/* Mobile Sheet sidebar */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Components</SheetTitle>
                    </SheetHeader>
                    <div className="flex-1 overflow-y-auto px-4 pb-4">
                        <ComponentNav
                            filter={filter}
                            onFilterChange={setFilter}
                            filteredCategories={filteredCategories}
                            pathname={pathname}
                            onLinkClick={() => setMobileOpen(false)}
                        />
                    </div>
                </SheetContent>
            </Sheet>

            {/* Desktop sidebar */}
            <aside className="origin-sidebar border-border bg-muted/40 hidden w-56 shrink-0 border-r p-4 md:block">
                <h2 className="mb-3 px-2 text-lg font-semibold tracking-tight">Components</h2>
                <ComponentNav
                    filter={filter}
                    onFilterChange={setFilter}
                    filteredCategories={filteredCategories}
                    pathname={pathname}
                />
            </aside>

            <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-12">{children}</main>
        </div>
    );
}
