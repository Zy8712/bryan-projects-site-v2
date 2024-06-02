import Image from "next/image";

export default function Logo() {
    return (
        <>
            <a href="/">
                <div className="h-24 flex items-center">
                    <Image
                        src="/icons/general-icons/difficulty-svgrepo-com.svg"
                        alt=""
                        className="hidden custom-sm:inline h-full mr-3"
                        width={96}
                        height={96}
                    />
                    <span className="w-36 custom-sm:w-40 custom-sm-ex:w-[240px] text-white text-xl custom-sm:text-2xl font-semibold hover:text-violet-500">
                        Bryan's Projects
                    </span>
                </div>
            </a>
        </>
    );
}