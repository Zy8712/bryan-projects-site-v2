'use client'
import { useDispatch, useSelector } from 'react-redux';
import { setOptionsFilter, closePopup } from '@/lib/settings';

export default function FilterOptions() {
    const dispatch = useDispatch();
    const { activeFilter, categoryFocus, popupCategoriesOpen } = useSelector(state => state.projects);

    const filterOptionsTechnology = [
        { iconClass: "las la-file-code", filterText: "HTML/CSS/SASS Excl." },
        { iconClass: "lab la-js-square", filterText: "Vanilla JS" },
        { iconClass: "lab la-react", filterText: "React" },
        { iconClass: "las la-wind", filterText: "Tailwind CSS" },
        { iconClass: "las la-file-alt", filterText: "JSON" },
        { iconClass: "las la-cog", filterText: "API" },
        { iconClass: "lab la-neos", filterText: "Next.js" },
        { iconClass: "lab la-vuejs", filterText: "Vue" },
        { iconClass: "las la-rocket", filterText: "Astro" },
        { iconClass: "las la-route", filterText: "Wouter" }
    ];

    const filterOptionsSource = [
        { iconClass: "las la-laptop-code", filterText: "Frontend Mentor" },
        { iconClass: "las la-file-code", filterText: "iCodeThis" },
        { iconClass: "las la-check-circle", filterText: "Codewell" },
        { iconClass: "las la-user-tie", filterText: "Frontend Pro" },
        { iconClass: "las la-hammer", filterText: "Odin Project" },
        { iconClass: "las la-cocktail", filterText: "Tapioca" },
        { iconClass: "lab la-youtube", filterText: "YouTube" },
        { iconClass: "las la-user", filterText: "Personal" }
    ];

    const filterOptionsOther = [
        { iconClass: "las la-university", filterText: "School" },
        { iconClass: "las la-hands-helping", filterText: "Collab" },
        { iconClass: "las la-business-time", filterText: "Freelance" },
        { iconClass: "las la-layer-group", filterText: "Multi-page" },
        { iconClass: "las la-layer-group", filterText: "Single Page" },
        { iconClass: "las la-layer-group", filterText: "Components" },
        { iconClass: "las la-meteor", filterText: "Recent" },
    ];

    const renderFilterButtons = ({ filteringOptions, value }) => {
        return filteringOptions.map((filter, index) => (
            <button
                key={index}
                aria-label={`${filter.filterText} Filter Option`}
                className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${activeFilter - value === index ? 'bg-gradient-to-tr from-filter-gradient-1 to-filter-gradient-2' : 'bg-white bg-opacity-0 hover:bg-opacity-15'}`}
                onClick={() => dispatch(setOptionsFilter(index + value))}
            >
                <i className={`${filter.iconClass} mr-1`}></i>
                {filter.filterText}
            </button>
        ));
    };

    return (
        <>
            <div className={`absolute z-[99] top-[calc(100%)] mt-2 w-full max-w-[600px] ${(categoryFocus === 2 || categoryFocus === 3 || categoryFocus === 4) && popupCategoriesOpen ? 'flex' : 'hidden'} justify-center flex-wrap gap-y-2 bg-light-gray bg-opacity-80 border-white border-4 border-solid rounded-lg p-2 overflow-hidden`}>
                {categoryFocus === 2
                    ? renderFilterButtons({ filteringOptions: filterOptionsTechnology, value: 100 })
                    : categoryFocus === 3
                        ? renderFilterButtons({ filteringOptions: filterOptionsSource, value: 200 })
                        : renderFilterButtons({ filteringOptions: filterOptionsOther, value: 300 })
                }

                <button className="absolute z-[101] -top-1 -right-1 w-6 h-6 flex flex-col justify-center items-center text-lg text-red-500 bg-white rounded-bl-xl" onClick={() => dispatch(closePopup())}>
                    <i className="las la-times-circle"></i>
                </button>
            </div>
        </>
    );
}