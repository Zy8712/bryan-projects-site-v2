'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import HomePageSectionLayout from "@/layouts/HomePageSectionLayout";
import HomePageSectionHeader from "./HomePageSectionHeader";
import MessageBox from './MessageBox';

export default function HomePage_MessageForm() {
    return (
        <>
            <HomePageSectionLayout>
                <HomePageSectionHeader>Contact Me</HomePageSectionHeader>

                <div className="w-full h-full min-h-96 flex flex-col md:flex-row px-1">

                    <div className="w-full md:w-2/3 h-full md:h-auto flex flex-col">
                        <MessageBox />
                    </div>

                    <div className="relative w-full md:w-1/3 h-96 md:h-auto overflow-hidden">
                        <DotLottieReact
                            src="/animations/lottie_ver/Animation-1719178318069.lottie"
                            loop
                            autoplay
                            speed={0.5}
                            className="absolute top-[55%] md:top-1/2 -translate-y-1/2 left-[55%] md:left-[60%] -translate-x-1/2 w-[calc(100%+450px)]"
                        />
                    </div>

                </div>

            </HomePageSectionLayout>
        </>
    );
}