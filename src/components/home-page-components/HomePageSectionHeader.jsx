
export default function HomePageSectionHeader(props){
    return(
        <>
            <h2 className="mb-14 font-theme-orbitron text-5xl custom-sm-ex:text-8xl text-white text-center">
                {props.children}
            </h2>
        </>
    );
}