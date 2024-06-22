const femLevels = [
    { level: "N", textColor: "text-fem-newbie", highlightColor: "bg-fem-newbie" },
    { level: "J", textColor: "text-fem-junior", highlightColor: "bg-fem-junior" },
    { level: "I", textColor: "text-fem-intermediate", highlightColor: "bg-fem-intermediate" },
    { level: "A", textColor: "text-fem-advanced", highlightColor: "bg-fem-advanced" },
    { level: "G", textColor: "text-fem-guru", highlightColor: "bg-fem-guru" }
];

const femLVLFilter = [
    { level: 1, text: "Newbie", labelTextColour: "text-fem-newbie", labelBorderColour: "border-fem-newbie", labelBackgroundColour: "bg-fem-newbie" },
    { level: 2, text: "Junior", labelTextColour: "text-fem-junior", labelBorderColour: "border-fem-junior", labelBackgroundColour: "bg-fem-junior" },
    { level: 3, text: "Intermediate", labelTextColour: "text-fem-intermediate", labelBorderColour: "border-fem-intermediate", labelBackgroundColour: "bg-fem-intermediate" },
    { level: 4, text: "Advanced", labelTextColour: "text-fem-advanced", labelBorderColour: "border-fem-advanced", labelBackgroundColour: "bg-fem-advanced" },
    { level: 5, text: "Guru", labelTextColour: "text-fem-guru", labelBorderColour: "border-fem-guru", labelBackgroundColour: "bg-fem-guru" },
];

export default function DetailsPage_DifficultyBox(props) {
    
    const textShadow = "[text-shadow:_0.8px_0px_white,_0px_0.8px_white,_0.8px_0.8px_white,_-0.8px_-0.8px_white,_-0.8px_0px_white,_0px_-0.8px_white,_-0.8px_0.8px_white,_0.8px_-0.8px_white]";

    const difficulty = femLVLFilter.find(item => item.level === props.difficulty);

    return (
        <>
            <div className="w-36 h-36 bg-gradient-to-bl from-gradient-blue to-gradient-purple rounded-3xl overflow-hidden">
                <div className="w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-40">

                    <div className={`border-2 border-solid ${difficulty.labelBorderColour} rounded-lg inline-flex justify-center overflow-hidden`}
                    >
                        <span className={`px-2 py-2 ${difficulty.labelBackgroundColour} text-white text-sm font-bold`}>
                            {difficulty.level}
                        </span>
                        <span className={`px-2 py-2 bg-black bg-opacity-60 ${difficulty.labelTextColour} text-sm font-extrabold uppercase leading-normal`}>
                            {difficulty.text}
                        </span>
                    </div>

                    <div className="mt-3 w-32 h-7 flex justify-around border-white border-2 border-solid rounded-full px-1">
                        
                        {femLevels.map((item, index) => (
                            <span key={index} className={`relative w-6 h-6 flex justify-center items-center font-extrabold text-lg leading-[18px] ${item.textColor} ${textShadow} ${props.difficulty == index + 1 ? item.highlightColor : ''} rounded-full`}>
                                {item.level}
                                <div className={`${props.difficulty == index + 1 ? 'flex' : 'hidden'}  absolute left-1/2 -translate-x-1/2 -top-3 w-0 h-0 border-l-8 border-r-8 border-b-[12px] border-transparent border-b-white`}>
                                </div>
                            </span>
                        ))}
                        
                    </div>

                </div>
            </div>
        </>
    );
}
