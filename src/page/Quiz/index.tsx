import { useEffect } from "react";

export default function Quiz() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="flex flex-col items-center justify-center gap-10 px-4 py-16 h-[95vh] sm:px-12 md:px-24 lg:px-48 border-b border-slate-200">
            <h1 className="text-4xl md:text-8xl text-gray-900 mb-6 quicksand-font leading-none">
                Coming Soon
            </h1>
        </section>
    )
}
