
export default function MessageBox() {

    const stylingBox = "mb-3 bg-transparent border-white border-2 border-solid rounded-md text-white text-lg placeholder:text-white focus:outline-none px-5";

    return (
        <>
            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-wrap justify-center font-theme-oxanium">
                <input type="hidden" name="access_key" value="f12fdccc-27f3-43fa-9bea-3f7fa95502e2" />
                <input type="checkbox" name="botcheck" className="hidden" />

                <input className={`mr-2 w-[calc(50%-8px)] h-12 ${stylingBox}`} type="text" name="name" placeholder="Full Name" required />
                <input className={`ml-2 w-[calc(50%-8px)] h-12 ${stylingBox}`} type="email" name="email" placeholder="email@company.com" required />
                <input className={`w-full h-12 ${stylingBox}`} type="text" name="subject" placeholder="Enter a subject line" required />
                <textarea className={`w-full pt-3 ${stylingBox}`} rows={8} name="message" placeholder="Write your message here" required>
                </textarea>

                <button className="w-[300px] h-11 flex justify-center items-center text-white text-lg uppercase font-semibold tracking-widest rounded-xl border-white border-2 border-solid hover:bg-gradient-to-tr from-gradient-blue to-gradient-purple"
                    type="submit">
                    <i className="las la-envelope text-3xl mr-1"></i>
                    Send Message
                </button>
            </form>
            <script src="https://web3forms.com/client/script.js" async defer></script>
        </>
    );
}