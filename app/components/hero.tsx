function Hero() {
    return (
        <section
            className={`
              bg-linear-to-br flex from-zinc-900 items-center justify-center min-h-[90vh] overflow-hidden relative
              to-zinc-900 via-black
            `}
        >
            {/* Decorative blurred shapes */}
            <div className="-left-32 -top-32 absolute bg-purple-600/30 blur-3xl rounded-full size-96" />
            <div className="-bottom-32 -right-32 absolute bg-amber-500/20 blur-3xl rounded-full size-96" />

            {/* Content */}
            <div className="max-w-3xl px-6 relative text-center z-10">
                <h1 className="font-extrabold leading-tight md:text-6xl text-4xl text-white">
                    Play Smart.
                    <span className="block text-amber-400">Win Bigger.</span>
                </h1>

                <p className="mt-6 text-lg text-zinc-300">
                    Experience next-level gaming with fast payouts, secure play, and premium rewards.
                </p>

                <div className="flex gap-4 justify-center mt-8">
                    <button
                        className={`
                          bg-amber-400 font-semibold
                          hover:bg-amber-300
                          px-6 py-3 rounded-xl text-black transition
                        `}
                    >
                        Get Started
                    </button>

                    <button
                        className={`border border-zinc-700 hover:bg-zinc-800 px-6 py-3 rounded-xl text-white transition`}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
