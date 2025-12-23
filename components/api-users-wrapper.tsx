"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

import ApiUsersSkeleton from "@/components/skeletons/api-users-skeleton";

// CLIENT COMPONENT WRAPPER - Handles dynamic import with ssr: false
// This must be a Client Component because ssr: false is not allowed in Server Components
const ApiUsers = dynamic(
    () => {
        return import("@/components/api-users");
    },
    {
        loading: () => {
            return <ApiUsersSkeleton />;
        },
        // Client component - no SSR needed
        ssr: false,
    },
);

export default function ApiUsersWrapper() {
    return (
        <Suspense fallback={<ApiUsersSkeleton />}>
            <ApiUsers />
        </Suspense>
    );
}
