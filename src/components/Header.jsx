import Link from "./Link";

export default function Header() {
    return (
        <header className="w-screen h-20 bg-red">
            <nav className="flex items-center lg:px-36 px-5 lg:justify-end justify-center gap-10 h-full">
                <Link target={"/"} title={"Tirage au sort"} />
                <Link target={"/absents"} title={"Absent.e.s"} />
            </nav>
        </header>
    )
}