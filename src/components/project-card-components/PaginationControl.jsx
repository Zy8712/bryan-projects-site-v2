
export default function PaginationControl({setCurrentPage, handleNextPage, handlePrevPage, currentPage, totalPages}) {
    return (
        <>
            {/* Pagination controls */}
            <div className="w-full flex justify-center items-center">
                <button
                    className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                >
                    <i className="las la-angle-double-left"></i>
                    First
                </button>
                <button
                    className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    <i className="las la-angle-left"></i>
                    Previous
                </button>
                <span className="mx-2">Page {currentPage} of {totalPages}</span>
                <button
                    className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                    <i className="las la-angle-right"></i>
                </button>
                <button
                    className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                >
                    Last
                    <i className="las la-angle-double-right"></i>
                </button>
            </div>
        </>
    );
}