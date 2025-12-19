import Image from "next/image";

function Home() {
    return (
        <main>
            <div className={`bg-green-500 capitalize hover:bg-red-500 hover:text-white p-5 text-black`}>Hello Word</div>
            <Image alt="Mountain Landscape" height={530} quality={70} src="/mountains.jpg" width={800} />
        </main>
    );
}

export default Home;
