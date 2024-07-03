import { externalLinks } from "@/utils/relevantLinks";
import HomePageSectionHeader from "./HomePageSectionHeader";
import HomePageSectionLayout from "@/layouts/HomePageSectionLayout";

export default function HomePage_Links() {
    return (
        <>
            <HomePageSectionLayout>

                <HomePageSectionHeader>Links</HomePageSectionHeader>

                <div className="w-full flex justify-around flex-wrap gap-y-6">

                    {externalLinks.map((link, index) => (
                        <div key={index} className="w-[270px] h-20 bg-white bg-opacity-5 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-white ">
                            <a href={link.link} target="_blank" className={`relative w-full h-full flex items-center bg-gradient-to-tl from-transparent to-purple-400 ps-4`}>
                                <div className="mr-3 w-12 h-12 grid place-items-center rounded-md overflow-hidden">
                                    <img src={link.icon} alt="" className="w-12 h-12" />
                                </div>

                                <div className="h-full flex flex-col justify-center">
                                    <p className={`mt-1 font-semibold ${link.name == "Frontend Mentor" ? 'text-lg' : 'text-xl'} leading-5 text-white font-theme-oxanium`}>
                                        {link.name}
                                    </p>
                                    <p className="font-semibold text-sm leading-4 text-gray-300 font-theme-oxanium">
                                        {link.userID}
                                    </p>
                                </div>

                                <img src="/icons/social-icons/coloured-icons/external-link-svgrepo-com.svg" alt="" className="absolute top-[50%] -translate-y-[50%] right-3 w-6 h-6" />

                            </a>
                        </div>
                    ))}
                </div>
            </HomePageSectionLayout>
        </>
    );
}