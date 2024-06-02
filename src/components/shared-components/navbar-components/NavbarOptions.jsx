'use client'

import { usePathname } from 'next/navigation'

export default function NavbarOptions() {

    const pathname = usePathname()

    return (
        <>
            <div className="w-[200px] custom-xl:w-[600px] h-12 flex justify-between items-center text-white text-lg font-semibold">
                <a href="/featured" className={`flex items-center hover:text-violet-500 ${pathname === '/featured' ? 'text-blue-500 pointer-events-none' : ''}`}>
                    <i className="las la-star text-4xl custom-xl:text-2xl mr-2"></i>
                    <span className={`hidden custom-xl:inline ${pathname === '/featured' ? 'underline underline-offset-8' : ''}`}>Featured</span>
                </a>
                <a href="/completed" className={`flex items-center hover:text-violet-500 ${pathname === '/completed' ? 'text-blue-500 pointer-events-none' : ''}`}>
                    <i className="las la-check-circle text-4xl custom-xl:text-2xl mr-1"></i>
                    <span className={`hidden custom-xl:inline ${pathname === '/completed' ? 'underline underline-offset-8' : ''}`}>Completed</span>
                </a>
                <a href="/in-progress" className={`flex items-center hover:text-violet-500 ${pathname === '/in-progress' ? 'text-blue-500 pointer-events-none' : ''}`}>
                    <i className="las la-spinner text-4xl custom-xl:text-2xl mr-1"></i>
                    <span className={`hidden custom-xl:inline ${pathname === '/in-progress' ? 'underline underline-offset-8' : ''}`}>In Progress</span>
                </a>
                <a href="/upcoming" className={`flex items-center hover:text-violet-500 ${pathname === '/upcoming' ? 'text-blue-500 pointer-events-none' : ''}`}>
                    <i className="las la-calendar text-4xl custom-xl:text-2xl mr-1"></i>
                    <span className={`hidden custom-xl:inline ${pathname === '/upcoming' ? 'underline underline-offset-8' : ''}`}>Upcoming</span>
                </a>
            </div>
        </>
    );
}