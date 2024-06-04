import Image from "next/image";

import SocialIcons from "@/components/shared-components/navbar-components/SocialIconsReduced";

export default function HomeHero() {
    return (
        <>
            <div className="relative w-full h-full min-h-screen flex flex-col justify-center items-center border-red-500 border-2 border-solid text-center text-white font-theme-orbitron py-16">
                <div className="w-96 h-96 block custom-sm:hidden">
                    <Image
                        src="/icons/general-icons/difficulty-svgrepo-com.svg"
                        alt=""
                        width={384}
                        height={384}
                    />
                </div>

                <h1 className="w-full mt-0 custom-sm:mt-10 text-[40px] custom-sm:text-5xl sm:text-6xl custom-md:text-[80px] lg:text-8xl font-bold custom-sm:font-semibold leading-[48px] custom-sm:leading-[56px] sm:leading-[72px] custom-md:leading-[100px] lg:leading-[120px]">
                    Explore Bryan&apos;s{' '}
                    <span className="text-blue-400 [text-shadow:_2px_0px_white,_0px_2px_white,_2px_2px_white,_-2px_-2px_white,_-2px_0px_white,_0px_-2px_white,_-2px_2px_white,_2px_-2px_white]">
                        Completed
                    </span>{' '}
                    and{' '}
                    <span className="text-blue-400 [text-shadow:_2px_0px_white,_0px_2px_white,_2px_2px_white,_-2px_-2px_white,_-2px_0px_white,_0px_-2px_white,_-2px_2px_white,_2px_-2px_white]">
                        Upcoming Projects
                    </span>
                </h1>

                <div className="w-auto sm:w-[480px] md:w-[550px] lg:w-[700px] h-36 sm:h-auto mt-10 sm:mt-14 flex flex-col sm:flex-row justify-between sm:justify-between items-center transition-all duration-500 ease-in-out">

                    <a href="/featured" className="flex justify-center items-center w-72 sm:w-auto h-16 sm:h-auto px-0 sm:px-5 py-0 sm:py-3 text-xl md:text-xl lg:text-2xl font-semibold uppercase border-white border-4 border-solid rounded-lg hover:bg-gradient-to-tr from-blue-500 to-purple-500">
                        <i className="las la-star text-3xl md:text-3xl lg:text-4xl mr-2"></i>
                        Featured Items
                    </a>

                    <a href="/completed" className="flex justify-center items-center w-72 sm:w-auto h-16 sm:h-auto px-0 sm:px-5 py-0 sm:py-3 text-xl md:text-xl lg:text-2xl font-semibold uppercase border-white border-4 border-solid rounded-lg hover:bg-gradient-to-tr from-blue-500 to-purple-500">
                        <i className="las la-compass text-3xl md:text-3xl lg:text-4xl mr-2"></i>
                        Explore All
                    </a>

                </div>

                <div className="absolute z-50 bottom-4 xl:hidden">
                    <SocialIcons />
                </div>

            </div>

        </>
    );
}