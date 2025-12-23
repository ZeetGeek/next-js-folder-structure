import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Simulate a delay to show loading state
async function delay(ms: number) {
    return new Promise(resolve => {
        return setTimeout(resolve, ms);
    });
}

export default async function Stats() {
    // Simulate API call or data fetching delay
    await delay(2000);

    const stats = [
        { label: "Users", value: "10K+" },
        { label: "Projects", value: "500+" },
        { label: "Downloads", value: "1M+" },
        { label: "Countries", value: "50+" },
    ];

    return (
        <section className="bg-muted/30 border-y py-16">
            <div className="container mx-auto px-4">
                <h2 className="font-bold mb-12 text-3xl text-center">Statistics</h2>
                <div className="gap-6 grid md:grid-cols-4">
                    {stats.map(stat => {
                        return (
                            <Card className="text-center" key={stat.label}>
                                <CardHeader>
                                    <CardTitle className="font-bold text-4xl text-primary">{stat.value}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{stat.label}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
