'use client'
import { useRef } from "react";

import HomePageSectionLayout from "@/layouts/HomePageSectionLayout";
import HomePageSectionHeader from "./HomePageSectionHeader";

export default function HomePage_SiteFeatures() {

    const items = [
        "Search",
        "Basic Filtering",
        "Advanced Filtering",
        "Project Details",
        "Preview Gallery",
        "Relative Links",
        "Project Suggestions"
    ];

    const containerRef = useRef(null);

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -410, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 410, behavior: 'smooth' });
    };

    return (
        <>
            <div className="w-full h-full min-h-96 flex flex-col items-center py-16">
                <div className="relative w-full h-full flex flex-col min-h-96">

                    <HomePageSectionHeader>Site Features</HomePageSectionHeader>
                    <div className="relative w-full h-full min-h-96 flex gap-x-6 overflow-hidden" ref={containerRef}>
                        {items.map((item, index) => (
                            <div key={index} className="w-72 h-96 flex-shrink-0 flex-grow-0 border-white border-2 border-solid rounded-2xl flex justify-center items-center">
                                {item}
                            </div>
                        ))}

                    </div>

                    <div className="absolute top-3 right-5 w-24 flex justify-between">
                        <button className="w-10 h-10 border-white border-2 border-solid rounded-full" onClick={scrollLeft}>←

                        </button>
                        <button className="w-10 h-10 border-white border-2 border-solid rounded-full" onClick={scrollRight}>→

                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}