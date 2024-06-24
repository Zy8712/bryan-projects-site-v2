import Image from "next/image";
import { projectSources } from "@/utils/projectSources";

export default function QuickDetails_SourceBox(props) {
    const imageSource = projectSources[props.source] || null;

    return (
        <>
            <div className="w-36 h-36 bg-gradient-to-tl from-gradient-blue to-gradient-purple rounded-3xl overflow-hidden">
                <div className="relative w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-40">

                    <img src="/icons/general-icons/website-optimization-svgrepo-com.svg" alt="" className="mt-2 w-[72px]" />
                    <div className="absolute top-5 left-6 w-8 h-8 grid place-items-center bg-white rounded-full">
                        {imageSource && (
                            <Image
                                src={imageSource.src}
                                alt={imageSource.alt}
                                className={`rounded-full`}
                                width={28}
                                height={28}
                            />
                        )}
                    </div>
                    <p className={`mt-3 text-white font-semibold text-sm leading-3 text-center`}>
                        {imageSource.name}
                    </p>
                </div>
            </div>
        </>
    );
}