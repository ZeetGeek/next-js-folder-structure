import Image from "next/image";

import achromaticImage from "@/public/achromatic.jpg";

function Home() {
    return (
        <main>
            <Image
                alt="achromatic"
                className="size-100"
                height={400}
                placeholder="blur"
                quality={70}
                sizes="(max-width: 768px) 100vw, 50vw"
                src={achromaticImage}
                width={400}
            />
        </main>
    );
}

export default Home;
