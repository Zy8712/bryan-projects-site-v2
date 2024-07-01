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
                        <div key={index} className="w-[270px] h-20 bg-white bg-opacity-10 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-white ">
                            <a href={link.link} target="_blank" className={`w-full h-full flex items-center bg-gradient-to-tr from-transparent to-purple-400 px-3`}>
                                <div className="mr-2 w-16 h-16 border-white border-solid border-2">

                                </div>

                                <div className="h-full flex flex-col justify-center">
                                    <p className="mt-1 font-semibold text-xl leading-5 text-white font-theme-oxanium">
                                        {link.name}
                                    </p>
                                    <p className="font-semibold text-sm leading-4 text-gray-300 font-theme-oxanium">
                                        {link.userID}
                                    </p>
                                </div>

                            </a>
                        </div>
                    ))}
                </div>
            </HomePageSectionLayout>
        </>
    );
}