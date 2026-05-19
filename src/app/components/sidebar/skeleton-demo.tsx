"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuItem,
    SidebarProvider,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

const ITEM_WIDTHS = ["62%", "78%", "55%", "70%"] as const;

export function SkeletonDemo() {
    return (
        <div className="border-border h-56 overflow-hidden rounded-lg border">
            <SidebarProvider className="h-full min-h-0">
                <Sidebar collapsible="none">
                    <SidebarHeader>
                        <div className="flex items-center gap-2 px-2 py-1">
                            <Skeleton className="size-6 rounded" />
                            <Skeleton className="h-4 w-20" />
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Loading…</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {ITEM_WIDTHS.map((w, i) => (
                                        <SidebarMenuItem key={i}>
                                            <div className="flex h-8 items-center gap-2 rounded-md px-2">
                                                <Skeleton className="size-4 rounded-md" />
                                                <Skeleton
                                                    className="h-4 flex-1"
                                                    style={{ maxWidth: w }}
                                                />
                                            </div>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <SidebarInset>
                    <div className="flex h-9 items-center border-b px-4">
                        <Skeleton className="h-3 w-24" />
                    </div>
                    <div className="space-y-3 p-4">
                        {([60, 40, 72] as const).map((w, i) => (
                            <Skeleton
                                key={i}
                                className="h-3 rounded-sm"
                                style={{ width: `${w}%` }}
                            />
                        ))}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
}
