import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// This is a STATIC IMPORT - loaded immediately with the page
export default function Hero() {
    return (
        <section className="bg-gradient-to-b border-b from-background py-16 to-muted/20">
            <div className="container mx-auto px-4">
                <Card className="bg-transparent border-none shadow-none">
                    <CardHeader className="text-center">
                        <CardTitle className="font-bold mb-4 md:text-5xl text-4xl">Welcome to Next.js</CardTitle>
                        <CardDescription className="max-w-2xl mx-auto text-lg">
                            A comprehensive example demonstrating static imports, dynamic imports, Suspense, and
                            skeleton loading states.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-8 text-center">
                        <p className="text-muted-foreground">
                            This hero section is statically imported and loads immediately.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
