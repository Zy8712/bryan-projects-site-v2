'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SocialIcons from "@/components/shared-components/navbar-components/SocialIconsReduced";

export default function HomeHero() {

    const textShadow = "[text-shadow:_1.5px_0px_white,_0px_1.5px_white,_1.5px_1.5px_white,_-1.5px_-1.5px_white,_-1.5px_0px_white,_0px_-1.5px_white,_-1.5px_1.5px_white,_1.5px_-1.5px_white]";

    return (
        <>
            <div className="relative w-full h-full min-h-[780px] custom-sm-ex:min-h-[890px] flex justify-center items-center">

                <div className="w-full max-w-[1300px] h-full min-h-[660px] custom-sm-ex:min-h-[890px] flex flex-col custom-xl:flex-row-reverse justify-between items-center py-10 custom-sm-ex:py-20 custom-xl:py-0">

                    <div className="w-full max-w-full custom-xl:max-w-[600px] h-full min-h-72 custom-sm-ex:min-h-[375px] custom-xl:min-h-[850px] flex flex-col justify-end custom-xl:justify-center items-center">
                        <div className="relative w-full custom-xl:max-w-full h-80 custom-sm-ex:h-[375px] custom-xl:h-[475px] overflow-hidden">
                            <DotLottieReact
                                src="/animations/Animation1719195618226.lottie"
                                loop={false}
                                autoplay
                                speed={0.4}
                                className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-[calc(100%+750px)] max-w-[800px] custom-sm-ex:max-w-[1000px] custom-xl:max-w-[1400px]"
                            />
                        </div>
                    </div>


                    <div className="w-full custom-xl:w-[calc(100%-600px)] min-h-64 custom-sm-ex:min-h-80 custom-lg:min-h-[400px] custom-xl:min-h-[850px] flex flex-col justify-center">
                        
                        <div className="w-full max-w-full custom-xl:max-w-[800px] h-full min-h-64 custom-sm-ex:min-h-80 custom-lg:min-h-[400px] custom-xl:min-h-[475px] flex flex-col justify-center items-center custom-xl:items-start text-center custom-xl:text-start">
                            <h1 className="w-full max-w-[800px] custom-xl:max-w-full text-3xl custom-sm-ex:text-4xl sm:text-5xl custom-lg:text-6xl custom-xl:text-7xl custom-sm-ex:leading-[44px] sm:leading-[56px] custom-lg:leading-[76px] font-semibold font-theme-orbitron text-white">
                                Explore{' '}
                                <span className={`text-blue-400 ${textShadow}`}>
                                    Completed
                                </span>{' '}
                                and{' '}
                                <span className={`text-blue-400 ${textShadow}`}>
                                    Upcoming
                                </span>{' '}
                                Projects
                            </h1>

                            <p className="mt-6 custom-lg:mt-8 w-full max-w-[600px] md:max-w-[750px] text-white font-theme-oxanium text-sm custom-sm:text-base custom-lg:text-lg px-5 custom-sm-ex:px-0">
                                Explore my completed, ongoing, and upcoming projects. From design to code to the final product, see how each idea comes to life. <span className="hidden custom-sm-ex:inline">Check out featured items, follow the progress of current projects, and get a sneak peek at what&apos;s next. Dive in and discover the journey from concept to completion!
                                </span>
                            </p>

                            <div className="mt-6 custom-lg:mt-8 w-[340px] custom-sm-ex:w-[400px] h-12 flex justify-between font-theme-orbitron text-white">
                                <a href="/featured" className="w-[150px] custom-sm-ex:w-44 h-11 custom-sm-ex:h-12 flex justify-center items-center font-medium text-base custom-sm-ex:text-lg p-1 border-white border-2 border-solid rounded-lg hover:hover:bg-gradient-to-tr from-blue-500 to-purple-500">
                                    <i className="las la-star mr-1 custom-sm-ex:mr-2"></i>
                                    Featured
                                    <i className="las la-angle-double-right ml-1 custom-sm-ex:ml-2"></i>
                                </a>

                                <a href="/completed" className="w-[150px] custom-sm-ex:w-44 h-11 custom-sm-ex:h-12 flex justify-center items-center font-medium text-base custom-sm-ex:text-lg p-1 border-white border-2 border-solid rounded-lg hover:hover:bg-gradient-to-tr from-blue-500 to-purple-500">
                                    <i className="las la-compass text-xl mr-1 custom-sm-ex:mr-2"></i>
                                    Explore
                                    <i className="las la-angle-double-right ml-1 custom-sm-ex:ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="absolute z-50 bottom-4 xl:hidden">
                    <SocialIcons />
                </div>

            </div>
        </>
    );
}