"use client";

import dynamic from "next/dynamic";

import Hero from "./components/hero";

const ChartBarInteractive = dynamic(
    () => {
        return import("@/components/chart");
    },
    {
        loading: () => {
            return (
                <div className="bg-card border capitalize h-105.75 p-5 rounded-xl shadow-sm text-card-foreground">
                    Loading...
                </div>
            );
        },
        ssr: false,
    },
);

export default function Home() {
    return (
        <main style={{ padding: 40 }}>
            <Hero />
            <ChartBarInteractive />
        </main>
    );
}
