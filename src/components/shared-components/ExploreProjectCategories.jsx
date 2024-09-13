
export default function ExploreProjectCategories() {
    return (
        <>
            <div className="w-full h-full hidden lg:flex justify-center">
                <div className="relative w-full max-w-[1200px] h-96 flex justify-between rounded-lg bg-white border-white border-4 border-solid overflow-hidden">

                    <div className="relative w-2/5 h-full overflow-hidden">
                        <div className="absolute left-[50%] -translate-x-[50%] w-[500px] h-96">
                            <div className={`w-full h-full bg-center bg-no-repeat bg-cover bg-[url("/project-previews/frontend-mentor-project-previews/fem-guru-previews/audiophile-ecommerce-website/audiophileecommercewebsite-desktop-preview.jpg")]`}>
                                <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
                                    <i className="las la-check-circle text-[200px] text-white mr-24"></i>
                                    <a className="mt-4 mr-24 font-bold text-white text-3xl">Explore Completed</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="absolute left-[50%] -translate-x-[50%] z-10 w-1/3 h-full overflow-hidden -skew-x-12 border-x-8 border-white border-solid border-y-0">
                        <div className="absolute left-[50%] -translate-x-[50%] w-[500px] h-96">
                            <div className={`w-full h-full flex flex-col items-center bg-center bg-no-repeat bg-cover skew-x-12 bg-[url("/project-previews/frontend-mentor-project-previews/fem-advanced-previews/designo-multi-page-website/designomultipagewebsite-desktop-preview.jpg")]`}>
                                <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
                                    <i className="las la-spinner text-[200px] text-white mr-7"></i>
                                    <a className="mt-4 mr-7 font-bold text-white text-3xl">Explore Ongoing</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="relative w-2/5 h-full overflow-hidden">
                        <div className="absolute left-[50%] -translate-x-[50%] w-[500px] h-96">
                            <div className={`w-full h-full bg-center bg-no-repeat bg-cover bg-[url("/project-previews/frontend-mentor-project-previews/fem-guru-previews/kanban-task-management-web-app/kanbantaskmanagementwebapp-desktop-preview.jpg")]`}>
                                <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
                                    <i className="las la-calendar text-[200px] text-white ml-24"></i>
                                    <a className="mt-4 ml-24 font-bold text-white text-3xl">Explore Upcoming</a>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </>
    );
}