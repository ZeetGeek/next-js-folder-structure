import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function TestimonialsSkeleton() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <Skeleton className="h-10 mb-12 mx-auto w-48" />
                <div className="gap-6 grid md:grid-cols-3">
                    {[1, 2, 3].map(i => {
                        return (
                            <Card key={i}>
                                <CardHeader>
                                    <Skeleton className="h-4 mb-2 w-full" />
                                    <Skeleton className="h-4 mb-2 w-full" />
                                    <Skeleton className="h-4 w-3/4" />
                                </CardHeader>
                                <CardContent>
                                    <Skeleton className="h-4 mb-2 w-24" />
                                    <Skeleton className="h-4 w-32" />
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
