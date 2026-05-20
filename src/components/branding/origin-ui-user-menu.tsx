"use client";

import { User, Settings, LogOut, CreditCard } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function OriginUiUserMenu({
    name = "User",
    email = "user@example.com",
    initials = "U",
    onProfile,
    onBilling,
    onSettings,
    onLogout,
}: {
    name?: string;
    email?: string;
    initials?: string;
    onProfile?: () => void;
    onBilling?: () => void;
    onSettings?: () => void;
    onLogout?: () => void;
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus-visible:ring-ring/50 rounded-full outline-none focus-visible:ring-2">
                <Avatar>
                    <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-muted-foreground text-xs">{email}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onProfile}>
                    <User className="size-4" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onBilling}>
                    <CreditCard className="size-4" /> Billing
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onSettings}>
                    <Settings className="size-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout}>
                    <LogOut className="size-4" /> Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
