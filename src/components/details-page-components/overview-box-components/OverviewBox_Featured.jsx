
export default function OverviewBox_Featured(props) {
    return (
        <>
            <div className="w-[94px] h-24 bg-gradient-to-b from-gradient-blue to-gradient-purple rounded-2xl overflow-hidden">
                <div className="w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-40">
                    <img src="/icons/other-icons/stars-whitesparkle-svgrepo-com.svg" alt="" className={`w-14 ${props.featured ? 'opacity-100' : 'opacity-50'}`} />
                    <p className="mt-1 text-white font-semibold text-xs leading-3 text-center">
                        <span className={`${props.featured ? 'hidden' : 'inline'}`}>Not&nbsp;</span>Featured
                    </p>
                </div>
            </div>
        </>
    );
}