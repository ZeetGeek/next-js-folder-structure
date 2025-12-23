import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ApiUsersSkeleton() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <div className="space-y-2">
                        <Skeleton className="h-8 w-64" />
                        <Skeleton className="h-4 w-96" />
                    </div>
                    <Skeleton className="h-10 w-24" />
                </div>
                <div className="gap-6 grid lg:grid-cols-3 md:grid-cols-2">
                    {Array.from({ length: 6 }).map((_, i) => {
                        return (
                            <Card key={i}>
                                <CardHeader>
                                    <div className="flex gap-4 items-center">
                                        <Skeleton className="rounded-full size-16" />
                                        <div className="flex-1 space-y-2">
                                            <Skeleton className="h-5 w-32" />
                                            <Skeleton className="h-4 w-24" />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <Skeleton className="h-4 mb-2 w-full" />
                                    <Skeleton className="h-4 mb-2 w-3/4" />
                                    <Skeleton className="h-4 w-1/2" />
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
