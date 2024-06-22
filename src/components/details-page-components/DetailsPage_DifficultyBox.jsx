const femLevels = [
    { level: "N", textColor: "text-fem-newbie", highlightColor: "bg-fem-newbie" },
    { level: "J", textColor: "text-fem-junior", highlightColor: "bg-fem-junior" },
    { level: "I", textColor: "text-fem-intermediate", highlightColor: "bg-fem-intermediate" },
    { level: "A", textColor: "text-fem-advanced", highlightColor: "bg-fem-advanced" },
    { level: "G", textColor: "text-fem-guru", highlightColor: "bg-fem-guru" }
];

export default function DetailsPage_DifficultyBox(props) {

    const textShadow = "[text-shadow:_0.8px_0px_white,_0px_0.8px_white,_0.8px_0.8px_white,_-0.8px_-0.8px_white,_-0.8px_0px_white,_0px_-0.8px_white,_-0.8px_0.8px_white,_0.8px_-0.8px_white]";

    return (
        <>
            <div className="w-36 h-36 bg-gradient-to-bl from-gradient-blue to-gradient-purple rounded-3xl overflow-hidden">
                <div className="w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-40">

                    <img src="/icons/general-icons/level-end-flag-svgrepo-com.svg"
                        alt=""
                        className="mt-1 w-20"
                    />
                    {props.source === 1 ? (
                        <div className="mt-2 w-32 h-7 flex justify-around border-white border-2 border-solid rounded-full px-1">
                            {femLevels.map((item, index) => (
                                <span key={index} className={`relative w-6 h-6 flex justify-center items-center font-extrabold text-lg leading-[18px] ${item.textColor} ${textShadow} ${props.difficulty == index + 1 ? item.highlightColor : ''} rounded-full`}>
                                    {item.level}
                                </span>
                            ))}
                        </div>
                    ) : props.source === 6 ? (
                        <div className="mt-2 w-32 h-7 flex justify-around border-white border-2 border-solid rounded-full px-1">
                            Test
                        </div>
                    ) : props.source === 2 || props.source === 4 ? (
                        <div className="mt-2 w-32 h-7 flex justify-around border-white border-2 border-solid rounded-full px-1">
                            Test
                        </div>
                    ) : (
                        <div className="mt-2 w-32 h-7 flex justify-around border-white border-2 border-solid rounded-full px-1">
                            N/A
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
