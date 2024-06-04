
export default function ProjectDetails(props) {
    return (
        <>
            <div className="w-full flex flex-col justify-between items-center px-6 custom-sm:px-11 text-center relative">
                <span className="block mt-4 mb-2 text-2xl font-medium">{props.name}</span>
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

                <div className={`w-[30px] ${props.source != 0 ? 'flex' : 'hidden'} flex-col absolute top-4 right-[2px] custom-sm:right-2 
                bg-white border-2 border-solid border-transparent rounded-full hover:bg-nav-gradient-1`}>
                    <a href={props.links.challenge_link} target="_blank">
                        <img src="/icons/general-icons/info-svgrepo-com.svg" alt="info_icon" className="mb-1" />
                        <img src="/icons/general-icons/frontend-mentor-logo-transparent.png" alt="frontendmentor_icon" className={`${props.source == 1 ? 'inline' : 'hidden'}`} />
                        <img src="/icons/general-icons/icodethis-logo.jpg" alt="icodethis_icon" className={`${props.source == 2 ? 'inline' : 'hidden'} rounded-full`} />
                        <img src="/icons/general-icons/codewellcc-logo.jpg" alt="codewellcc_icon" className={`${props.source == 3 ? 'inline' : 'hidden'} border-[0.3px] border-gray-400 border-solid rounded-full`} />
                        <img src="/icons/general-icons/frontendpro-logo.png" alt="frontendpro_icon" className={`${props.source == 4 ? 'inline' : 'hidden'} `}/>
                        <img src="/icons/general-icons/youtube-svgrepo-com.svg" alt="frontendpro_icon" className={`${props.source == 5 ? 'inline' : 'hidden'} `}/>
                    </a>
                </div>
            </div >

        </>
    );
}