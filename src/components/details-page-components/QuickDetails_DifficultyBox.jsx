const femLevels = [
    { level: "N", textColor: "text-fem-newbie", highlightColor: "bg-fem-newbie" },
    { level: "J", textColor: "text-fem-junior", highlightColor: "bg-fem-junior" },
    { level: "I", textColor: "text-fem-intermediate", highlightColor: "bg-fem-intermediate" },
    { level: "A", textColor: "text-fem-advanced", highlightColor: "bg-fem-advanced" },
    { level: "G", textColor: "text-fem-guru", highlightColor: "bg-fem-guru" }
];

export default function QuickDetails_DifficultyBox(props) {

    const textShadow = "[text-shadow:_0.8px_0px_white,_0px_0.8px_white,_0.8px_0.8px_white,_-0.8px_-0.8px_white,_-0.8px_0px_white,_0px_-0.8px_white,_-0.8px_0.8px_white,_0.8px_-0.8px_white]";

    return (
        <>
            <div className="w-36 h-36 bg-gradient-to-bl from-gradient-blue to-gradient-purple rounded-3xl overflow-hidden">
                <div className="w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-40 text-white font-semibold text-sm">

                    <img src="/icons/general-icons/level-end-flag-svgrepo-com.svg"
                        alt=""
                        className="mt-1 w-20"
                    />
                    <div className="mt-2 w-32 h-7 flex justify-around items-center border-white border-2 border-solid rounded-full px-1">
                        {props.source === 1 ? (
                            femLevels.map((item, index) => (
                                <span key={index} className={`relative w-6 h-6 flex justify-center items-center font-extrabold text-lg leading-[18px] ${props.difficulty == index + 1 ? item.highlightColor +" " +item.textColor +" "+textShadow : 'text-white'} rounded-full`}>
                                    {item.level}
                                </span>
                            ))
                        ) : props.source === 6 ? (
                            <span>
                                <i className="las la-star mr-1"></i>
                                {props.difficulty} / 5
                            </span>
                        ) : props.source === 2 || props.source === 4 ? (
                            <span>
                                <i className="las la-star mr-1"></i>
                                {props.difficulty} / 3
                            </span>
                        ) : (
                            <span>
                                N/A
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
