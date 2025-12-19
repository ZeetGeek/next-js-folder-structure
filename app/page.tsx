import Image from "next/image";

function Home() {
    return (
        <main>
            <div className={`bg-green-500 capitalize hover:bg-red-500 hover:text-white p-5 text-black`}>Hello Word</div>
            <Image
                alt="Mountain Landscape"
                className="object-cover size-200"
                height={2048}
                quality={70}
                src="/mountains.jpg"
                width={3089}
            />
        </main>
    );
}

export default Home;
