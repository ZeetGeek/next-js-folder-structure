import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturesSkeleton() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <Skeleton className="h-10 mb-12 mx-auto w-48" />
                <div className="gap-6 grid md:grid-cols-3">
                    {[1, 2, 3].map(i => {
                        return (
                            <Card key={i}>
                                <CardHeader>
                                    <Skeleton className="mb-4 rounded-lg size-12" />
                                    <Skeleton className="h-6 mb-2 w-32" />
                                    <Skeleton className="h-4 w-full" />
                                </CardHeader>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
