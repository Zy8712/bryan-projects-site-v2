'use client'
import { useDispatch, useSelector } from 'react-redux';
import { setOptionsFilter, closePopup } from '@/lib/settings';
import { filterOptionsTechnology, filterOptionsSource, filterOptionsOther } from "@/utils/filterIcons"; 

export default function FilterOptions() {
    const dispatch = useDispatch();
    const { activeFilter, categoryFocus, popupCategoriesOpen } = useSelector(state => state.projects);

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