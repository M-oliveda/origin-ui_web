import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
            <div className="w-full max-w-3xl space-y-8">
                <div className="space-y-4">
                    <Skeleton className="h-12 w-48" />
                    <Skeleton className="h-5 w-full max-w-xl" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <Skeleton className="h-28 rounded-lg" />
                    <Skeleton className="h-28 rounded-lg" />
                    <Skeleton className="h-28 rounded-lg" />
                    <Skeleton className="h-28 rounded-lg" />
                </div>
            </div>
        </div>
    );
}
