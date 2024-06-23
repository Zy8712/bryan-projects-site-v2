import { techIcons } from "@/utils/projectTechIcons";

export default function OverviewBox_Technology(props) {

    return (
        <div className="w-[304px] h-48 bg-gradient-to-t from-gradient-blue to-gradient-purple rounded-2xl overflow-hidden">
            <div className="w-full h-full flex justify-center items-center flex-wrap bg-white bg-opacity-40 p-5">
                {techIcons.map((icon, index) => (
                    <img
                        key={index}
                        src={icon.iconImage}
                        alt={icon.alt}
                        title={icon.title}
                        className={`w-12 mx-2 ${props[icon.trueFalse] ? 'inline' : 'hidden'}`}
                    />
                ))}
            </div>
        </div>
    );
}
