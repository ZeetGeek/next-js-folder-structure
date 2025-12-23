import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function StatsSkeleton() {
    return (
        <section className="bg-muted/30 border-y py-16">
            <div className="container mx-auto px-4">
                <Skeleton className="h-10 mb-12 mx-auto w-48" />
                <div className="gap-6 grid md:grid-cols-4">
                    {[1, 2, 3, 4].map(i => {
                        return (
                            <Card className="text-center" key={i}>
                                <CardHeader>
                                    <Skeleton className="h-12 mb-4 mx-auto w-24" />
                                </CardHeader>
                                <CardContent>
                                    <Skeleton className="h-4 mx-auto w-16" />
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
