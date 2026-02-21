import EntryForm from "../components/EntryForm";

export default function WritePage() {
    return (
        <>
            <section className="bg-[url(/flowers.png)] h-[20vh] flex flex-col justify-end text-white px-5 lg:px-8 py-5">
                <h1 className="font-semibold text-2xl lg:text-5xl">Leave an Entry</h1>
            </section>
            <section className="px-5 py-5 flex flex-col place-items-center">
                <p className="text-center text-lg font-libre mb-3 font-medium">
                    Some questions to consider before responding,  
                </p>
                <p className="text-center font-libre mb-3 leading-7 text-gray-600">
                    Who are the people in your life?<br></br> What experiences do you think back to?<br></br>
                    What have you learned?
                </p >
                <p className="font-libre mb-5 ">
                    When ready, share your story below.
                </p>
                <EntryForm></EntryForm>
            </section>
        </>
        
    )
}