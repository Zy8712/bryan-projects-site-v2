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

    const featureIcons = [
        "/icons/general-icons/search-folder-svgrepo-com.svg", 
        "/icons/general-icons/filter-svgrepo-com.svg", 
        "/icons/general-icons/adv-filter-svgrepo-com.svg", 
        "/icons/general-icons/info-italic-svgrepo-com.svg", 
        "/icons/general-icons/preview-svgrepo-com.svg", 
        "/icons/general-icons/link-svgrepo-com.svg",
        "/icons/general-icons/grid-search-svgrepo-com.svg"
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
            <div className="w-full h-full min-h-96 flex flex-col items-center py-16 mb-10">
                <div className="relative w-full h-full flex flex-col min-h-96">

                    <HomePageSectionHeader>Site Features</HomePageSectionHeader>
                    <div className="relative w-full h-full min-h-96 flex gap-x-6 overflow-hidden" ref={containerRef}>
                        {items.map((item, index) => (
                            <div key={index} className="w-72 h-96 flex-shrink-0 flex-grow-0 border-white border-2 border-solid rounded-2xl flex flex-col justify-center items-center text-xl text-white font-semibold">
                                <img src={featureIcons[index]} alt="" className="w-52 mb-6" />
                                {item}
                            </div>
                        ))}

                    </div>

                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-24 flex justify-between">
                        <button className="w-10 h-10 grid place-items-center text-3xl leading-9 bg-white rounded-full" onClick={scrollLeft}>
                            <i className="las la-arrow-circle-left"></i>
                        </button>
                        <button className="w-10 h-10 grid place-items-center text-3xl leading-9 bg-white rounded-full" onClick={scrollRight}>
                            <i className="las la-arrow-circle-right"></i>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}