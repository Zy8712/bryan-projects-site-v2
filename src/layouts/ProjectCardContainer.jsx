
export default function ProjectCardContainer(props) {
    return (
        <>
            <div className="mt-20 w-full flex flex-wrap justify-around gap-4 text-center text-white font-theme-oxanium">
                {props.children}
            </div>
        </>
    );
}