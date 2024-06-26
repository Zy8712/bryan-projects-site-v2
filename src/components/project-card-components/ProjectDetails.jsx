import Image from "next/image";
import { projectSources, femLevels } from "@/utils/projectSources";

export default function ProjectDetails(props) {
    const imageSource = projectSources[props.source] || null;
    const femLevel = femLevels[props.difficulty - 1];

    return (
        <div className="w-full flex flex-col justify-between items-center px-6 custom-sm:px-9 text-center relative">
            <span className="w-full block mt-4 mb-2 text-2xl font-medium">{props.name}</span>
            <p className="mb-4">
                {props.project_status}:&nbsp;
                {props.date}&nbsp;
                <span className={`${props.trial > 0 ? 'inline' : 'hidden'}`}>
                    [Trial #{props.trial}]
                </span>
            </p>

            <div className="flex justify-center items-center">
                {props.children}
            </div>

            {props.source !== 0 && imageSource && (
                <div className={`w-9 h-9 flex flex-col justify-start items-end absolute top-0 right-0 
                    bg-gradient-to-tr from-light-gray to-white hover:bg-gradient-to-tr hover:from-gradient-blue hover:to-gradient-purple rounded-bl-full`}>
                    <div className="mt-[2px] mr-[2px] w-7 h-7 flex flex-col justify-start items-end">
                        <a href={props.links.challenge_link} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={imageSource.src}
                                alt={imageSource.alt}
                                className="rounded-full"
                                width={24}
                                height={24}
                            />
                        </a>
                    </div>
                </div>
            )}

            {props.difficulty !== 0 && femLevel && (
                <div className={`w-9 h-9 flex flex-col justify-start items-start absolute top-0 left-0 
                    bg-gradient-to-tl from-light-gray to-white rounded-br-full`}>
                    <div className="mt-[1px] w-7 h-7 flex flex-col justify-center items-center font-theme-oxanium">
                        {props.source === 1 ? (
                            <span className={`ml-[2px] font-extrabold text-lg ${femLevel.color} [text-shadow:_0.2px_0px_white,_0px_0.2px_white,_0.2px_0.2px_white,_-0.2px_-0.2px_white,_-0.2px_0px_white,_0px_-0.2px_white,_-0.2px_0.2px_white,_0.2px_-0.2px_white]`}>
                                {femLevel.level}
                            </span>
                        ) : (
                            <span className="ml-[2px] font-bold text-sm text-yellow-500 [text-shadow:_0.2px_0px_white,_0px_0.2px_white,_0.2px_0.2px_white,_-0.2px_-0.2px_white,_-0.2px_0px_white,_0px_-0.2px_white,_-0.2px_0.2px_white,_0.2px_-0.2px_white]">
                                {props.difficulty}
                                <i className="las la-star"></i>
                            </span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
