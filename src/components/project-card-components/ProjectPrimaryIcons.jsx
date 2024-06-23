import { techIcons } from "@/utils/projectTechIcons";

export default function ProjectPrimaryIcons(props) {

    const activeIconCount = Object.keys(props).filter(key => {
        const value = props[key];
        return typeof value === 'boolean' && value === true;
    }).length;

    const renderIcons = () => {

        return techIcons.map((icon, index) => (
            <>
                <img
                    key={index}
                    src={icon.iconImage}
                    alt={icon.alt}
                    title={icon.title}
                    className={`w-[30px] ${(activeIconCount) > 7 ? 'mx-[6px]' : 'mx-2'} ${props[icon.trueFalse] ? 'inline' : 'hidden'}`}
                />
                <div>
                    {props.html_TF}
                </div>
                {/** Subtract 1 from activeIconCount to take into account one of the boolean variables is 
                 *  frontendMentorTF, which isn't an icon and is just accidentially counted in the process above.
                 */}
            </>
        ));
    };

    return (
        <>
            {renderIcons()}
        </>
    );
};