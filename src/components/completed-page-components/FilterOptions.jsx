
export default function FilterOptions() {

    const filterOptionsTechnology = [
        { iconClass: "las la-file-code", filterText: "HTML/CSS/SASS Excl." },
        { iconClass: "lab la-js-square", filterText: "Vanilla JS" },
        { iconClass: "lab la-react", filterText: "React" },
        { iconClass: "las la-wind", filterText: "Tailwind CSS" },
        { iconClass: "las la-file-alt", filterText: "JSON" },
        { iconClass: "las la-cog", filterText: "API" },
        { iconClass: "lab la-vuejs", filterText: "Vue" },
        { iconClass: "las la-rocket", filterText: "Astro" },
        { iconClass: "lab la-angular", filterText: "Angular" },
        { iconClass: "las la-route", filterText: "Wouter" }    
    ];

    const filterOptionsSource = [
        { iconClass: "las la-laptop-code", filterText: "Frontend Mentor" },
        { iconClass: "las la-check-circle", filterText: "Codewell" },
        { iconClass: "las la-user-tie", filterText: "Frontend Pro" },
        { iconClass: "las la-file-code", filterText: "iCodeThis" },
        { iconClass: "las la-hammer", filterText: "Odin Project" },
        { iconClass: "las la-cocktail", filterText: "TryTapioca" },
        { iconClass: "lab la-youtube", filterText: "YouTube" },
        { iconClass: "las la-user", filterText: "Personal" }
    ];

    const filterOptionsOther = [
        { iconClass: "las la-star", filterText: "Featured" },
        { iconClass: "las la-university", filterText: "School" },
        { iconClass: "las la-hands-helping", filterText: "Collab" },
        { iconClass: "las la-business-time", filterText: "Freelance" },
        { iconClass: "las la-layer-group", filterText: "Multi-page" },
        { iconClass: "las la-meteor", filterText: "Recent" }
    ];

    const renderFilterButtons = () => {
        return filterOptionsSource.map((filter, index) => (
            <button
                key={index}
                aria-label={`${filter.filterText} Filter Option`}
                className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md bg-white bg-opacity-0 hover:bg-opacity-15`}
            >
                <i className={`${filter.iconClass} mr-1`}></i>
                {filter.filterText}
            </button>
        ));
    };

    return (
        <>
            <div className="mt-3 w-full max-w-[600px] flex justify-center flex-wrap gap-y-2 bg-white bg-opacity-10 border-white border-4 border-solid rounded-lg p-2">
                {renderFilterButtons()}
            </div>
        </>
    );
}