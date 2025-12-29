"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/packages", label: "Packages" },
        { href: "/features", label: "Features" },
    ] as const;

    return (
        <header className="backdrop-blur-sm bg-black/80 border-b border-neutral-700 text-white top-0 w-full z-50">
            <nav className="container flex h-14 items-center mx-auto">
                <div className="flex mr-4">
                    <Link className="flex items-center mr-6 space-x-2" href="/">
                        <span className="font-bold">Next.js Starter Kit</span>
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-between md:justify-end space-x-2">
                    <nav className="flex items-center space-x-6">
                        {navItems.map(item => {
                            const isActive =
                                item.href === "/" ?
                                    pathname === "/"
                                :   pathname === item.href || pathname.startsWith(`${item.href}/`);

                            return (
                                <Link
                                    className={`font-medium text-sm transition-colors ${
                                        isActive ? "text-white" : "hover:text-white/80 text-white/60"
                                    }`}
                                    href={item.href}
                                    key={item.href}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </nav>
        </header>
    );
}
