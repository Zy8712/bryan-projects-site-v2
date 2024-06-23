
export default function OverviewBox_Attempt(props) {
    return (
        <>
            <div className="w-[94px] h-24 bg-gradient-to-b from-gradient-blue to-gradient-purple rounded-2xl overflow-hidden">
                <div className="w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-40">
                    <img src="/icons/general-icons/climb-mountain-climb-struggle-challenge-svgrepo-com.svg"
                        alt=""
                        className="w-14"
                    />
                    <p className="mt-1 text-white font-semibold text-xs leading-3 text-center">
                        Attempt #{props.trial}
                    </p>
                </div>
            </div>
        </>
    );
}