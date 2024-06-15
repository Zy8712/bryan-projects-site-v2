'use client'
import React from "react";

export default function SearchFilter() {
    return (
        <>
            <div className={`w-full max-w-[580px] h-14 border-white border-2 border-solid rounded-full transition-opacity duration-500 ease-in-out flex justify-center`}>
                <div className="relative w-full h-full flex items-center">
                    <img src="/icons/general-icons/search-folder-svgrepo-com.svg" className="absolute left-6 top-[50%] -translate-y-[50%] w-7" />
                    <input
                        type="text"
                        placeholder="Search by project name or technology..."
                        className="w-full h-full ps-20 font-theme-oxanium bg-transparent rounded-full focus:bg-gradient-to-tr from-gradient-blue to-gradient-purple focus:text-white placeholder:text-white focus:outline-none"
                    />
                    <button className={`absolute right-3 top-[50%] -translate-y-[50%] w-8`}>
                        <img src="/icons/general-icons/close-circle-svgrepo-com.svg" alt="" />
                    </button>
                </div>
            </div>

        </>
    );
}