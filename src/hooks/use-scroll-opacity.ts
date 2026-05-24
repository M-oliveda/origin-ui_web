import { useSyncExternalStore } from "react";

function subscribe(callback: () => void): () => void {
    window.addEventListener("scroll", callback, { passive: true });
    return () => window.removeEventListener("scroll", callback);
}

export function useScrollOpacity(threshold: number = 64): number {
    return useSyncExternalStore(
        subscribe,
        () => Math.min(window.scrollY / threshold, 1),
        () => 0,
    );
}
