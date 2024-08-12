export default function ProjectWorkLinks(props) {

    const detailsLink = "/details/" +props.id;

    return (
        <>
            <div className="w-full h-[50px] flex absolute bottom-0 px-5 sm:px-8">

                <div className={`w-1/4 h-full flex justify-start items-center ${props.project_status != "Completed" ? 'opacity-0' : ''}`}>
                    <a className="link-custom" href={detailsLink} rel="noopener noreferrer">
                        <i className="las la-info-circle mr-1"></i>
                        Details
                    </a>
                </div>

                <div className={`w-2/4 h-full flex justify-center items-center ${props.links.github_link == "" ? 'opacity-0' : ''}`}>
                    <a className="link-custom" href={props.links.github_link} target="_blank" rel="noopener noreferrer">
                        <i className="lab la-github mr-1"></i>
                        GitHub Repo
                    </a>
                </div>

                <div className={`w-1/4 h-full flex justify-end items-center ${props.links.website_preview_link == "" ? 'opacity-0' : ''}`}>
                    <a className="link-custom" href={props.links.website_preview_link} target="_blank" rel="noopener noreferrer">
                        <i className="las la-external-link-alt mr-1"></i>
                        Preview
                    </a>
                </div>
            </div>
        </>
    );
}