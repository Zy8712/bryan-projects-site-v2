import FilterOptions from "@/components/completed-page-components/FilterOptions";

export default function FilterCategories() {

    const filterCategoryOptions = [
        { iconClass: "las la-expand", filterText: "All" },
        { iconClass: "las la-star", filterText: "Featured" },
        { iconClass: "las la-toolbox", filterText: "Technology" },
        { iconClass: "las la-lightbulb", filterText: "Project Source" },
        { iconClass: "las la-plus", filterText: "" }
    ];

    const renderFilterButtons = () => {
        return filterCategoryOptions.map((filter, index) => (
            <button
                key={index}
                aria-label={`${filter.filterText} Filter Option`}
                className={`px-3 py-1 mx-1 relative text-white border-white border-2 border-solid rounded-md bg-white bg-opacity-0 hover:bg-opacity-15`}
            >
                <i className={`${filter.iconClass} ${index == 4 ? 'mr-0' : 'mr-1'}`}></i>
                {filter.filterText}
                
                <div className={`absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-[8px] border-transparent border-t-white ${index == 0 || index == 1 ? 'hidden' : ''}`}></div>
            </button>
        ));
    };

    return (
        <>
            <div className="relative mt-4 w-[665px] flex justify-center items-center flex-wrap">
                <span className="mr-2 text-white text-lg font-theme-oxanium font-medium">
                    Filter by:
                </span>
                {renderFilterButtons()}
                <FilterOptions />
            </div>
            <div className="my-9 w-full flex justify-center font-medium text-white text-lg">
.
            </div>
        </>
    );
}