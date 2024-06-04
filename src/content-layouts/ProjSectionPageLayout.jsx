
export default function ProjSectionPageLayout(props) {
    return (
        <>
            <div className="w-full h-full min-h-screen flex justify-center pt-24 px-0 custom-sm:px-6 custom-lg:px-8 pb-14 transition-all duration-500 ease-in-out">
                <div className="w-full max-w-[1400px] h-full flex flex-col items-center">
                    {props.children}
                </div>
            </div>
        </>
    );
}
