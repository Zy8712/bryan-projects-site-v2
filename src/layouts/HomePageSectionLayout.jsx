
export default function HomePageSectionLayout(props) {
    return (
        <>
            <div className="relative w-full h-full min-h-96 flex flex-col items-center py-16">
                <div className="w-full max-w-[1200px] h-full flex flex-col min-h-96">
                    {props.children}
                </div>
            </div>
        </>
    );
}