import { useEffect } from "react";
import cardData from "@/json/DataGame.json"
import { changeThemeStore } from "@/store";
import CardGame from "@/components/custom/CardGame";

export default function Feature() {
    const { theme } = changeThemeStore();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={`${theme === "dark" ? "bg-wise-dark" : ""} flex flex-col min-h-screen gap-10 px-4 py-6 sm:px-12 md:px-24 lg:px-48`}>

            <CardGame theme={theme} cardData={cardData} />
        </section>
    );
}
