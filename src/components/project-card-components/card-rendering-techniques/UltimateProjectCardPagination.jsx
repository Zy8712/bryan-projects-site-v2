'use client'
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UltimateProjectCard from '../UltimateProjectCard';
import { PaginationControl } from "@/utils/projectCardComponents";

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
            {currentItems.map((project, index) => (
                <UltimateProjectCard project={project} index={index} />
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
