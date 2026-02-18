import EntryDisplay from "../components/EntryDisplay";

export default function ReadPage() {
    return (
        <>
            <section className="bg-[url(/flowers.png)] h-[20vh] flex flex-col justify-end text-white px-5 lg:px-8 py-5">
                <h1 className="font-semibold text-2xl lg:text-5xl">Entries</h1>
            </section>
            <section className="px-5 py-5">
                <EntryDisplay></EntryDisplay>
            </section>
        </>
    )
}