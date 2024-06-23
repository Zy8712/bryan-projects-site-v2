
export default function DetailsPage_Header(props) {
    return (
        <>
            <div className="relative w-full h-80">
                <div className="relative w-full h-80 flex flex-col justify-center items-center border-b-white border-b-4 overflow-hidden rounded-b-[48px] px-5">
                    <img src={props.preview_image} alt="" className="absolute -z-20 w-full opacity-40" />
                    <h1 className="text-white text-7xl font-theme-orbitron font-semibold leading-[80px] text-center">
                        {props.name}
                    </h1>
                </div>

                <div className="absolute -bottom-7 left-[50%] -translate-x-[50%] w-72 h-14 flex justify-around items-center">
                    <div className="w-14 h-14 bg-gradient-to-tr from-gradient-blue to-gradient-purple border-white border-[3px] border-solid rounded-full overflow-hidden">
                        <a href={props.links.challenge_link} target="_blank" className="w-full h-full grid place-items-center bg-white bg-opacity-25 p-2">
                            <img src="/icons/general-icons/info-italic-svgrepo-com.svg" alt="" className="w-full h-full" />
                        </a>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-tr from-gradient-blue to-gradient-purple border-white border-[3px] border-solid rounded-full overflow-hidden">
                        <a href={props.links.github_link} target="_blank"  className="w-full h-full grid place-items-center bg-white bg-opacity-25 p-2">
                            <img src="/icons/social-icons/github-142-svgrepo-com.svg" alt="" className="w-full h-full" />
                        </a>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-tr from-gradient-blue to-gradient-purple border-white border-[3px] border-solid rounded-full overflow-hidden">
                        <a href={props.links.website_preview_link} target="_blank"  className="w-full h-full grid place-items-center bg-white bg-opacity-25 p-2">
                            <img src="/icons/general-icons/website-click-svgrepo-com.svg" alt="" className="w-full h-full" />
                        </a>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-tr from-gradient-blue to-gradient-purple border-white border-[3px] border-solid rounded-full overflow-hidden">
                        <a className="w-full h-full grid place-items-center bg-white bg-opacity-25 p-2">
                            <img src="/icons/general-icons/link-svgrepo-com.svg" alt="" className="w-full h-full" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}