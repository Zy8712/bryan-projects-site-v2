'use client'
import React from "react";

export default function SearchFilter() {
    return (
        <>
            <div className={`mt-14 w-full max-w-[500px] h-14 border-white border-2 border-solid rounded-full transition-opacity duration-500 ease-in-out flex justify-center`}>
                <div className="relative w-full h-full">
                    <img src="/icons/general-icons/browser-search-svgrepo-com.svg" className="absolute left-5 top-[50%] -translate-y-[50%] w-12" />
                    <input
                        type="text"
                        placeholder="Search by project name or technology..."
                        className="w-full h-full ps-20 font-theme-oxanium bg-white rounded-full focus:bg-gradient-to-tr from-gradient-blue to-gradient-purple focus:text-white focus:placeholder:text-white focus:outline-none"
                    />
                    <button className={`absolute right-3 top-[50%] -translate-y-[50%] w-8`}>
                        <img src="/icons/general-icons/close-circle-svgrepo-com.svg" alt="" />
                    </button>
                </div>
            </div>

        </>
    );
}