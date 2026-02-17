import { useState, useRef } from "react"

function EntryPopup({ ref, entry, onClick }) {

    return (
        <dialog ref={ref} className="z-20 outline-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-black/50" >
            <div className="w-[85vw] h-[70vh] lg:w-[60vw] lg:h-[90vh] px-3 py-5 flex flex-col gap-y-4">
                <button className="outline-none absolute top-0.5 right-3 text-2xl hover:cursor-pointer" onClick={onClick}>x</button>
                <p className="font-libre text-sm text-gray-400">{new Date(entry.created_at).toDateString().substring(3)}</p>
                <h3 className="text-lg">
                    {entry.title}
                </h3>
                <p className="whitespace-pre-wrap">
                    {entry.entry}
                </p>
                <p className="mt-auto self-end font-libre">- {entry.name}</p>
            </div>
        </dialog>
    )
}

export default function Entry({ entry }) {
    const colors = ["bg-blue", "bg-lime", "bg-purple", "bg-orange"]
    const randomColor = Math.floor(Math.random() * colors.length);
    const dialogRef = useRef(null)

    function handleOpen() {
        setTimeout(() => {
            dialogRef.current?.showModal()
        }, 0)
    }

    function handleClose() {
        dialogRef.current?.close()
    }

    return (
        <>
            <div onClick={handleOpen} className={`px-3 py-5 flex flex-col w-9/12 h-80 hover:cursor-pointer transition-colors bg-blue-100 hover:bg-blue-200 duration-300 ease-in-out gap-y-2`}>
                <p className="font-libre text-sm text-gray-400">{new Date(entry.created_at).toDateString().substring(3)}</p>
                <h3 className="text-2xl">
                    {entry.title}

                </h3>
                <p className="whitespace-pre-wrap line-clamp-5">
                {entry.entry}
                </p>
                <p className="mt-auto place-self-end font-libre text-sm">
                    - {entry.name}
                </p>
            </div>
            <EntryPopup ref={dialogRef} entry={entry} onClick={handleClose}></EntryPopup>
        </>

    )
}