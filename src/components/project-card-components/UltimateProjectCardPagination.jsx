'use client'
import React, { useState, useEffect } from 'react';
import ProjectPreview from "./ProjectPreview";
import ProjectDetails from "./ProjectDetails";
import ProjectPrimaryIcons from "./ProjectPrimaryIcons";
import ProjectWorkLinks from "./ProjectWorkLinks";
import PaginationControl from './PaginationControl';
import { useSelector } from 'react-redux';


export default function UltimateProjectCardPagination({ data }) {

    const { activeFilter } = useSelector(state => state.projects);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Number of items per page

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

    useEffect(() => {
        setCurrentPage(1);
    }, [activeFilter]);

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

            <div className="w-full mt-3">
                <PaginationControl
                    setCurrentPage={setCurrentPage}
                    handleNextPage={handleNextPage}
                    handlePrevPage={handlePrevPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            </div>
        </>
    );
}
