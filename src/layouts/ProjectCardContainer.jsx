
export default function ProjectCardContainer(props) {
    return (
        <>
            <div className="w-full min-h-screen flex flex-wrap justify-around gap-4 text-center text-white font-theme-oxanium">
                {props.children}
            </div>
        </>
    );
}