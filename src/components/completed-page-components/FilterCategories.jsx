
export default function FilterCategories() {

    const filterCategoryOptions = [
        { iconClass: "las la-toolbox", filterText: "Technology" },
        { iconClass: "las la-lightbulb", filterText: "Project Source" },
        { iconClass: "las la-tag", filterText: "Other" }
    ];

    const renderFilterButtons = () => {
        return filterCategoryOptions.map((filter, index) => (
            <button
                key={index}
                aria-label={`${filter.filterText} Filter Option`}
                className={`px-3 py-1 mx-1 relative text-white border-white border-2 border-solid rounded-md`}
            >
                <i className={`${filter.iconClass} mr-1`}></i>
                {filter.filterText}
                
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-0 h-0 border-l-8 border-r-8 border-t-[12px] border-transparent border-t-white"></div>
            </button>
        ));
    };

    return (
        <>
            <div className="mt-8 w-[500px] flex justify-center items-center flex-wrap">
                <span className="mr-2 text-white text-lg font-theme-oxanium font-medium">
                    Filter by:
                </span>
                {renderFilterButtons()}
            </div>
        </>
    );
}