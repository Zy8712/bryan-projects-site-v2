
export default function ProjSectionPageTitle(props) {
    return (
        <>
            <h1 className="mt-8 mb-16 text-white text-center text-5xl custom-sm:text-6xl sm:text-7xl md:text-8xl font-semibold font-theme-orbitron">
                {props.children}
            </h1>
        </>
    );
}