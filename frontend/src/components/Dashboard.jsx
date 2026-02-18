import { Link } from "react-router"

export default function Dashboard() {
    return (
        <nav className="h-16 flex gap-x-10 lg:gap-x-16 justify-self-center items-center *:hover:underline *:hover:underline-offset-5 absolute z-10 text-white md:text-lg font-libre font-thin">
            <Link to="/">Home</Link>
            <Link to="/read">Read</Link>
            <Link to="/write">Write</Link>
        </nav>
    )
}