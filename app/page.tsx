import Image from "next/image";

import { getBlurData } from "@/lib/getBlurData";

async function getImageFromAPI() {
    const res = await fetch("https://picsum.photos/id/1025/info", {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch image");
    }

    return res.json();
}

export default async function Home() {
    const data = await getImageFromAPI();
    const blurDataURL = await getBlurData(data.download_url);

    return (
        <main style={{ padding: 40 }}>
            <Image
                alt={`Photo by ${data.author}`}
                blurDataURL={blurDataURL}
                height={800}
                placeholder="blur"
                priority
                quality={70}
                sizes="(max-width: 768px) 100vw, 50vw"
                src={data.download_url}
                width={1200}
            />
        </main>
    );
}
