"use client";

import { AlertCircle, RefreshCw } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Types for API data
interface User {
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}

interface ApiState {
    data: User[] | null;
    error: string | null;
    loading: boolean;
}

// Memoized skeleton component to prevent unnecessary re-renders
const UserCardSkeleton = () => {
    return (
        <Card>
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
};

// Memoized UserCard component to prevent re-renders when parent updates
const UserCard = ({ user }: { user: User }) => {
    // Memoize the image URL to prevent regeneration on every render
    const imageUrl = useMemo(() => {
        // Using Picsum Photos API for random images (free, no API key needed)
        return `https://picsum.photos/seed/${user.id}/200/200`;
    }, [user.id]);

    return (
        <Card className="hover:shadow-md transition-all">
            <CardHeader>
                <div className="flex gap-4 items-center">
                    <Image
                        alt={`${user.name} avatar`}
                        className="object-cover rounded-full size-16"
                        height={64}
                        src={imageUrl}
                        width={64}
                    />
                    <div className="flex-1">
                        <CardTitle className="text-lg">{user.name}</CardTitle>
                        <CardDescription>@{user.username}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-2">
                <p className="text-sm">
                    <span className="font-medium">Email:</span> {user.email}
                </p>
                <p className="text-sm">
                    <span className="font-medium">Phone:</span> {user.phone}
                </p>
                <p className="text-sm">
                    <span className="font-medium">Website:</span>{" "}
                    <a
                        className="hover:underline text-primary"
                        href={`https://${user.website}`}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {user.website}
                    </a>
                </p>
            </CardContent>
        </Card>
    );
};

export default function ApiUsers() {
    const [state, setState] = useState<ApiState>({
        data: null,
        error: null,
        loading: true,
    });

    // Memoized fetch function using useCallback to prevent recreation on every render
    const fetchUsers = useCallback(async () => {
        setState(prev => {
            return { ...prev, error: null, loading: true };
        });

        try {
            // Using JSONPlaceholder API - free, no API key needed
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: User[] = await response.json();

            // Simulate a small delay to show loading state (remove in production)
            await new Promise(resolve => {
                return setTimeout(resolve, 800);
            });

            setState({
                data,
                error: null,
                loading: false,
            });
        } catch (error) {
            setState({
                data: null,
                error: error instanceof Error ? error.message : "Failed to fetch users",
                loading: false,
            });
        }
    }, []);

    // Fetch data on component mount
    useEffect(() => {
        void fetchUsers();
    }, [fetchUsers]);

    // Memoize filtered/sorted data to prevent recalculation on every render
    const sortedUsers = useMemo(() => {
        if (!state.data) {
            return [];
        }
        // Sort users by name alphabetically
        return [...state.data].sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    }, [state.data]);

    // Loading state
    if (state.loading) {
        return (
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-bold text-3xl">API Users (Client Component)</h2>
                        <Skeleton className="h-10 w-24" />
                    </div>
                    <div className="gap-6 grid lg:grid-cols-3 md:grid-cols-2">
                        {Array.from({ length: 6 }).map((_, i) => {
                            return <UserCardSkeleton key={i} />;
                        })}
                    </div>
                </div>
            </section>
        );
    }

    // Error state
    if (state.error) {
        return (
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <Card className="border-destructive">
                        <CardHeader>
                            <div className="flex gap-2 items-center">
                                <AlertCircle className="size-5 text-destructive" />
                                <CardTitle className="text-destructive">Error Loading Users</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4 text-muted-foreground text-sm">{state.error}</p>
                            <button
                                className={`
                                  bg-primary font-medium
                                  hover:bg-primary/90
                                  px-4 py-2 rounded-md text-primary-foreground text-sm transition-colors
                                `}
                                onClick={() => {
                                    void fetchUsers();
                                }}
                                type="button"
                            >
                                <RefreshCw className="inline mr-2 size-4" />
                                Retry
                            </button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        );
    }

    // Success state
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="font-bold text-3xl">API Users (Client Component)</h2>
                        <p className="mt-2 text-muted-foreground text-sm">
                            Fetched from JSONPlaceholder API using useEffect and React hooks
                        </p>
                    </div>
                    <button
                        className={`
                          bg-primary flex font-medium gap-2
                          hover:bg-primary/90
                          items-center px-4 py-2 rounded-md text-primary-foreground text-sm transition-colors
                        `}
                        onClick={() => {
                            void fetchUsers();
                        }}
                        type="button"
                    >
                        <RefreshCw className="size-4" />
                        Refresh
                    </button>
                </div>
                <div className="gap-6 grid lg:grid-cols-3 md:grid-cols-2">
                    {sortedUsers.map(user => {
                        return <UserCard key={user.id} user={user} />;
                    })}
                </div>
            </div>
        </section>
    );
}
