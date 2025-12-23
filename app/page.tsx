import dynamic from "next/dynamic";
import { Suspense } from "react";

// CLIENT COMPONENT WRAPPER - Handles dynamic import with ssr: false
import ApiUsersWrapper from "@/components/api-users-wrapper";
// STATIC IMPORT - This component loads immediately with the page
import Hero from "@/components/hero";
// Import skeleton components for fallbacks (must be imported before dynamic imports)
import FeaturesSkeleton from "@/components/skeletons/features-skeleton";
import StatsSkeleton from "@/components/skeletons/stats-skeleton";
import TestimonialsSkeleton from "@/components/skeletons/testimonials-skeleton";

// DYNAMIC IMPORTS - These components are code-split and loaded on demand
// Each dynamic import can have different loading strategies

// Features component with custom loading fallback
const Features = dynamic(
    () => {
        return import("@/components/features");
    },
    {
        loading: () => {
            return <FeaturesSkeleton />;
        },
        // Server-side render this component
        ssr: true,
    },
);

// Stats component with custom loading fallback
const Stats = dynamic(
    () => {
        return import("@/components/stats");
    },
    {
        loading: () => {
            return <StatsSkeleton />;
        },
        ssr: true,
    },
);

// Testimonials component with custom loading fallback
const Testimonials = dynamic(
    () => {
        return import("@/components/testimonials");
    },
    {
        loading: () => {
            return <TestimonialsSkeleton />;
        },
        ssr: true,
    },
);

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* STATIC IMPORT - Loads immediately, no Suspense needed */}
            <Hero />

            {/* DYNAMIC IMPORT with SUSPENSE - Features section */}
            <Suspense fallback={<FeaturesSkeleton />}>
                <Features />
            </Suspense>

            {/* DYNAMIC IMPORT with SUSPENSE - Stats section */}
            <Suspense fallback={<StatsSkeleton />}>
                <Stats />
            </Suspense>

            {/* DYNAMIC IMPORT with SUSPENSE - Testimonials section */}
            <Suspense fallback={<TestimonialsSkeleton />}>
                <Testimonials />
            </Suspense>

            {/* CLIENT COMPONENT - API Users section (wrapper handles Suspense internally) */}
            <ApiUsersWrapper />

            {/* Footer section - also statically imported */}
            <footer className="bg-muted/50 border-t py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-muted-foreground">This landing page demonstrates:</p>
                    <ul className="flex flex-wrap gap-4 justify-center mt-4 text-foreground text-sm">
                        <li className="font-semibold">✓ Static Imports (Hero, Footer)</li>
                        <li className="font-semibold">✓ Dynamic Imports (Features, Stats, Testimonials)</li>
                        <li className="font-semibold">✓ Client Components (API Users with useEffect)</li>
                        <li className="font-semibold">✓ Suspense Boundaries</li>
                        <li className="font-semibold">✓ Skeleton Fallbacks</li>
                    </ul>
                </div>
            </footer>
        </main>
    );
}
