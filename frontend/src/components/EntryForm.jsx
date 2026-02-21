import { useState } from "react"
import supabase from "../utils/supabase"

export default function EntryForm() {
    const [title, setTitle] = useState("")
    const [entry, setEntry] = useState("")
    const [name, setName] = useState("")

    // const [warning, setWarning] = useState("")
    const [isPending, setIsPending] = useState(false)

    async function submitEntry(e) {
        e.preventDefault();

        if (title.trim() === "") {
            alert("Please ensure your entry has a title.")
        } else if (entry.trim() === "") {
            alert("Please ensure your entry has a body.")
        } else {
            setIsPending(true);

            try {
                const { data, error } = await supabase
                    .from('Entries')
                    .insert([{
                        title: title.trim(),
                        entry: entry.trim(),
                        name: name === "" ? "Anonymous" : name
                    }]);

                if (error) throw error
            } catch (error) {
                alert("Response failed, please try again later.")
            } finally {
                setTitle("");
                setEntry("");
                setName("");
                alert("Successfully submitted, thank you!")
                setIsPending(false);
            }
        }
    }

    return (
        // need to adjust w-[vw] for different screen size
        <>
            <form onSubmit={submitEntry} id="entryForm" className="w-[80vw] lg:w-[50vw] px-3 py-5 outline-1 *:outline-none flex flex-col gap-y-2 bg-beige">
                <p className="font-libre text-sm text-gray-500">{new Date().toDateString().substring(3)}</p>
                <textarea placeholder="*Title" value={title} onChange={(e) => {
                    setTitle(e.currentTarget.value);
                }} maxLength={40} className="resize-none h-20 text-lg font-libre font-semibold border-b"></textarea>
                <textarea
                    placeholder="*Your entry"
                    value={entry}
                    onChange={(e) => {
                        setEntry(e.currentTarget.value);
                    }}
                    className="mt-2 resize-none h-[50vh] lg:h-[65vh] font-figtree"
                ></textarea>
                <p className="text-gray-500">{entry.length}/1500</p>
                <input placeholder="Anonymous" value={name} onChange={(e) => {
                    setName(e.currentTarget.value);
                }} maxLength={15} className="px-2 w-min border-b text-center self-end font-libre"></input>
                
            </form>
            <button type="submit" form="entryForm" disabled={isPending} className="w-min px-4 py-2 mt-5 bg-amber-600 hover:cursor-pointer hover:scale-90 duration-200 ease-in-out font-libre transition-all hover:bg-amber-700">
                Publish
            </button>
        </>
    )
}