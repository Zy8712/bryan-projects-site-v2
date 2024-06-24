import { projectSources } from "@/utils/projectSources";

export default function ProjectSources() {
    const projectSourcesArray = Object.values(projectSources);

    return (
        <>
            <div className="relative w-full h-full min-h-screen flex flex-col justify-center items-center border-red-500 border-2 border-solid text-center text-white py-16">
                <div className="w-full max-w-[1200px] h-full min-h-screen flex flex-col items-center border-white border-2 border-solid">

                    <h2 className="font-theme-orbitron text-8xl">Sources</h2>

                    <div className="mt-14 w-full flex justify-center flex-wrap gap-x-6 gap-y-8 font-theme-oxanium text-lg font-medium">
                        {projectSourcesArray.map((proj, index) => (
                            <div key={index} href="" target="_blank" className="w-48 h-72 flex flex-col justify-center items-center bg-white bg-opacity-20 rounded-3xl p-2 shadow-sm hover:shadow-2xl shadow-white hover:shadow-white">
                                <div className="mb-5 w-40 h-40 grid place-items-center rounded-lg overflow-hidden">
                                    <img src={proj.src} alt={proj.alt} className="h-full" />
                                </div>
                                <p>{proj.name}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}
