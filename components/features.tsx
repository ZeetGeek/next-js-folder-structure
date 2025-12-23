import { Code, Shield, Zap } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Simulate a delay to show loading state
async function delay(ms: number) {
    return new Promise(resolve => {
        return setTimeout(resolve, ms);
    });
}

export default async function Features() {
    // Simulate API call or data fetching delay
    await delay(1500);

    const features = [
        {
            description: "Lightning-fast performance with Next.js 16",
            icon: Zap,
            title: "Fast Performance",
        },
        {
            description: "Type-safe development with TypeScript",
            icon: Code,
            title: "Type Safety",
        },
        {
            description: "Secure by default with built-in protections",
            icon: Shield,
            title: "Security First",
        },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="font-bold mb-12 text-3xl text-center">Features</h2>
                <div className="gap-6 grid md:grid-cols-3">
                    {features.map(feature => {
                        const Icon = feature.icon;
                        return (
                            <Card key={feature.title}>
                                <CardHeader>
                                    <div
                                        className={`
                                          bg-primary/10 flex items-center justify-center mb-4 rounded-lg size-12
                                        `}
                                    >
                                        <Icon className="size-6 text-primary" />
                                    </div>
                                    <CardTitle>{feature.title}</CardTitle>
                                    <CardDescription>{feature.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
