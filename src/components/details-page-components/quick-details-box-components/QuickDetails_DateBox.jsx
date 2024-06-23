
export default function QuickDetails_DateBox(props) {
    return (
        <>
            <div className="w-36 h-36 bg-gradient-to-tr from-gradient-blue to-gradient-purple rounded-3xl overflow-hidden">
                <div className="w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-40">
                    <img src="/icons/general-icons/calendar-8-svgrepo-com.svg"
                        alt=""
                        className="mt-3 w-16"
                    />
                    <p className="mt-4 text-white font-semibold text-sm leading-4 text-center">
                        {props.date}
                    </p>
                </div>
            </div>
        </>
    );
}