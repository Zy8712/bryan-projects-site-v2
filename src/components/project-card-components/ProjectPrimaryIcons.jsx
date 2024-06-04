'use client'

export default function ProjectPrimaryIcons(props) {

    const activeIconCount = Object.keys(props).filter(key => {
        const value = props[key];
        return typeof value === 'boolean' && value === true;
    }).length;

    const techIcons = [
        { iconImage: "/icons/language-icons/html5-svgrepo-com.svg", alt: "html5_icon", title: "HTML5", trueFalse: "html_TF" },
        { iconImage: "/icons/language-icons/css3-svgrepo-com.svg", alt: "css3_icon", title: "CSS3", trueFalse: "css_TF" },
        { iconImage: "/icons/language-icons/javascript-svgrepo-com.svg", alt: "javascript_icon", title: "JavaScript", trueFalse: "javascript_TF" },
        { iconImage: "/icons/language-icons/scss2-svgrepo-com.svg", alt: "sass_icon", title: "SASS/SCSS", trueFalse: "sass_TF" },
        { iconImage: "/icons/language-icons/Astro.svg", alt: "astro_icon", title: "Astro", trueFalse: "astro_TF"},
        { iconImage: "/icons/language-icons/react-1-logo-svgrepo-com.svg", alt: "react_icon", title: "React", trueFalse: "react_TF" },
        { iconImage: "/icons/language-icons/tailwind-svgrepo-com.svg", alt: "tailwind_icon", title: "Tailwind CSS", trueFalse: "tailwindcss_TF" },
        { iconImage: "/icons/language-icons/bootstrap-fill-svgrepo-com.svg", alt: "bootstrap_icon", title: "Bootstrap", trueFalse: "bootstrap_TF" },
        { iconImage: "/icons/language-icons/json-official-svgrepo-com.svg", alt: "json_icon", title: "JSON", trueFalse: "json_TF" },
        { iconImage: "/icons/language-icons/api-svgrepo-com.svg", alt: "api_icon", title: "API", trueFalse: "api_TF" },
        { iconImage: "/icons/other-icons/wouter-github-logo.svg", alt: "wouter_icon", title: "Wouter", trueFalse: "wouter_TF" },
        { iconImage: "/icons/language-icons/nextjs-fill-svgrepo-com.svg", alt: "nextjs_icon", title: "NextJS", trueFalse: "nextjs_TF" },
        { iconImage: "/icons/language-icons/typescript-icon-svgrepo-com.svg", alt: "typescript_icon", title: "Typescript", trueFalse: "typescript_TF" },
        { iconImage: "/icons/language-icons/redux-svgrepo-com.svg", alt: "redux_icon", title: "Redux", trueFalse: "redux_TF" },
        { iconImage: "/icons/language-icons/postgresql-svgrepo-com.svg", alt: "postgresql_icon", title: "PostgreSql", trueFalse: "postgresql_TF" },
        { iconImage: "/icons/language-icons/vue-svgrepo-com.svg", alt: "vue_icon", title: "Vue", trueFalse: "vue_TF" },
        { iconImage: "/icons/other-icons/figma-svgrepo-com.svg", alt: "figma_icon", title: "Figma", trueFalse: "figma_TF" },
    ];

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