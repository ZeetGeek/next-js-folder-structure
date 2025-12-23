import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

// Simulate a delay to show loading state
async function delay(ms: number) {
    return new Promise(resolve => {
        return setTimeout(resolve, ms);
    });
}

export default async function Testimonials() {
    // Simulate API call or data fetching delay
    await delay(1000);

    const testimonials = [
        {
            author: "Sarah Johnson",
            company: "Tech Corp",
            content: "Next.js has transformed how we build web applications. The performance is incredible!",
        },
        {
            author: "Mike Chen",
            company: "StartupXYZ",
            content: "The developer experience with Next.js is unmatched. Highly recommend!",
        },
        {
            author: "Emily Davis",
            company: "Design Studio",
            content: "Building with Next.js makes our workflow so much smoother and faster.",
        },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="font-bold mb-12 text-3xl text-center">What People Say</h2>
                <div className="gap-6 grid md:grid-cols-3">
                    {testimonials.map((testimonial, index) => {
                        return (
                            <Card key={index}>
                                <CardHeader>
                                    <CardDescription className="text-base">{testimonial.content}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <p className="font-semibold">{testimonial.author}</p>
                                        <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
