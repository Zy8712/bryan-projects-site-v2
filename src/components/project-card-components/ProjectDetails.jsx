import Image from "next/image";

export default function ProjectDetails(props) {
    return (
        <>
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


                <div className={`w-9 h-9 ${props.source != 0 ? 'flex' : 'hidden'} flex-col justify-start items-end absolute top-0 right-0 
                bg-white hover:bg-gradient-to-tr from-gradient-blue to-gradient-purple border-white border-[0.5px] border-dashed rounded-bl-full`}>
                    <div className="mt-[1px] mr-[2px] w-7 h-7 flex flex-col justify-start items-end">
                        <a href={props.links.challenge_link} target="_blank">
                            <Image
                                src="/icons/project-source-icons/frontend-mentor-logo-transparent.png"
                                alt="frontendmentor_icon"
                                className={`${props.source == 1 ? 'inline' : 'hidden'} rounded-full`}
                                width={24}
                                height={24}
                            />
                            <Image
                                src="/icons/project-source-icons/icodethis-logo.jpg"
                                alt="icodethis_icon"
                                className={`${props.source == 2 ? 'inline' : 'hidden'} rounded-full`}
                                width={24}
                                height={24}
                            />
                            <Image
                                src="/icons/project-source-icons/codewellcc-logo.jpg"
                                alt="codewellcc_icon"
                                className={`${props.source == 3 ? 'inline' : 'hidden'} rounded-full`}
                                width={24}
                                height={24}
                            />
                            <Image
                                src="/icons/project-source-icons/frontendpro-logo.png"
                                alt="frontendpro_icon"
                                className={`${props.source == 4 ? 'inline' : 'hidden'} rounded-full `}
                                width={24}
                                height={24}
                            />
                            <Image
                                src="/icons/project-source-icons/youtube-svgrepo-com.svg"
                                alt="frontendpro_icon"
                                className={`${props.source == 5 ? 'inline' : 'hidden'} rounded-full`}
                                width={24}
                                height={24}
                            />
                        </a>
                    </div>
                </div>
            </div >

        </>
    );
}