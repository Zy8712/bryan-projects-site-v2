'use client'
import React, { useState } from 'react';
import ProjectPreview from "./ProjectPreview";
import ProjectDetails from "./ProjectDetails";
import ProjectPrimaryIcons from "./ProjectPrimaryIcons";
import ProjectWorkLinks from "./ProjectWorkLinks";

export default function UltimateProjectCardV0({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of items per page

    // Calculate the indices for the items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Handlers for pagination controls
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            {currentItems.map((item, index) => (
                <div className="group box w-[360px] custom-sm:w-[400px] h-[470px] custom-sm:h-[505px] overflow-hidden font-theme-rubik bg-white rounded-2xl 
                      border-none mb-8 cursor-pointer relative hover:shadow-2xl hover:shadow-white" key={index}>
                    <div className="w-full h-[252.3px] custom-sm:h-[293.333333px]   ">
                        <ProjectPreview {...item} />
                    </div>

                    <div className="h-[217.7px] custom-sm:h-[211.67px] text-white flex flex-col relative bg-gradient-to-b from-light-gray to-very-dark-blue">
                        <ProjectDetails {...item}>
                            <ProjectPrimaryIcons {...item.technologies} />
                        </ProjectDetails>
                        <ProjectWorkLinks {...item} />
                    </div>
                </div>
            ))}

            {/* Pagination controls */}
            <div className="flex justify-center mt-4">
                <button
                    className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="mx-2">Page {currentPage} of {totalPages}</span>
                <button
                    className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    );
}
