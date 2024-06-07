
export default function FilterCategories() {

    const filterCategoryOptions = [
        { iconClass: "las la-toolbox", filterText: "Technologies" },
        { iconClass: "las la-lightbulb", filterText: "Project Source" },
        { iconClass: "las la-tag", filterText: "Other" }
    ];

    const renderFilterButtons = () => {
        return filterCategoryOptions.map((filter, index) => (
            <button
                key={index}
                aria-label={`${filter.filterText} Filter Option`}
                className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md`}
            >
                <i className={`${filter.iconClass} mr-1`}></i>
                {filter.filterText}
            </button>
        ));
    };

    return (
        <>
            <div className="mt-8 flex justify-center flex-wrap">
                Filter By:{' '}
                {renderFilterButtons()}
            </div>
        </>
    );
}