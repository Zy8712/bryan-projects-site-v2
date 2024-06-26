
export default function PaginationControl({ setCurrentPage, handleNextPage, handlePrevPage, currentPage, totalPages }) {
    return (
        <>
            {/* Pagination controls */}
            <div className="w-full flex justify-center items-center text-base leading-5 font-medium">
                <button
                    className="px-3 py-2 mx-1 bg-light-gray rounded disabled:opacity-50 hover:opacity-85"
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                >
                    <i className="las la-angle-double-left"></i>
                    <span className="hidden custom-sm-ex:inline">First</span>
                </button>
                <button
                    className="px-3 py-2 mx-1 bg-light-gray rounded disabled:opacity-50 hover:opacity-85"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    <i className="las la-angle-left"></i>
                    <span className="hidden custom-sm-ex:inline">Previous</span>
                </button>
                <span className="mx-2">Page {currentPage} of {totalPages}</span>
                <button
                    className="px-3 py-2 mx-1 bg-light-gray rounded disabled:opacity-50 hover:opacity-85"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    <span className="hidden custom-sm-ex:inline">Next</span>
                    <i className="las la-angle-right"></i>
                </button>
                <button
                    className="px-3 py-2 mx-1 bg-light-gray rounded disabled:opacity-50 hover:opacity-85"
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                >
                    <span className="hidden custom-sm-ex:inline">Last</span>
                    <i className="las la-angle-double-right"></i>
                </button>
            </div>
        </>
    );
}