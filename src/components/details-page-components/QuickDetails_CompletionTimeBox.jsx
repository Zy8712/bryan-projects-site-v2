
export default function QuickDetails_CompletionTimeBox(props) {
    return (
        <>
            <div className="w-36 h-36 bg-gradient-to-br from-gradient-blue to-gradient-purple rounded-3xl overflow-hidden">
                <div className="w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-40">
                    <img src="/icons/general-icons/stopwatch-svgrepo-com.svg"
                        alt=""
                        className="mt-1 w-20"
                    />
                    <p className="mt-3 text-white font-semibold text-sm leading-4 text-center">
                        Approx. {props.time} hours
                    </p>
                </div>
            </div>
        </>
    );
}