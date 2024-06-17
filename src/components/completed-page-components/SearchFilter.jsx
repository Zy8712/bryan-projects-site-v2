'use client'
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '@/lib/settings';

export default function SearchFilter() {
    const dispatch = useDispatch();
    const { searchBarQuery } = useSelector(state => state.projects);

    const handleInputChange = (event) => {
        dispatch(setSearchQuery(event.target.value));
    };

    const clearSearch = () =>{
        dispatch(setSearchQuery(""));
    }

    return (
        <>
            <div className={`w-full max-w-[580px] h-14 border-white border-2 border-solid rounded-full transition-opacity duration-500 ease-in-out flex justify-center`}>
                <div className="relative w-full h-full flex items-center">
                    <img src="/icons/general-icons/search-folder-svgrepo-com.svg" className="absolute left-6 top-[50%] -translate-y-[50%] w-7" />
                    <input
                        type="text"
                        placeholder="Search by project name or technology..."
                        value={searchBarQuery}
                        className="w-full h-full ps-20 text-white font-theme-oxanium bg-transparent rounded-full focus:bg-gradient-to-tr from-gradient-blue to-gradient-purple focus:text-white placeholder:text-white focus:outline-none"
                        onChange={handleInputChange}
                    />
                    
                    <button onClick={clearSearch} 
                        className={`absolute right-3 top-[50%] -translate-y-[50%] w-6 ${searchBarQuery != '' ? 'inline' : 'hidden'}`}>
                        <img src="/icons/general-icons/close-circle-svgrepo-com.svg" alt="" />
                    </button>
                </div>
            </div>

        </>
    );
}