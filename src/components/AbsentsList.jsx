import { useContext } from "react"
import AbsentsContext from "./AbsentsContext"
import Cross from "../assets/cross.svg"

export default function AbsentsList() {

    const { absents } = useContext(AbsentsContext)

    return (
        <div className="flex flex-col gap-y-5 flex-1 font-bold lg:items-start lg:justify-start justify-center items-center lg:pl-24">
            <p>Liste des absents</p>
            <ul className="list-disc list-inside flex flex-col gap-y-2 items-start">
                {
                    absents
                        .filter(absent => absent.gender === "man")
                        .map((absent, index) => (<Absent key={index} absent={absent}/>))
                }
            </ul>
            <p>Liste des absentes</p>
            <ul className="list-disc list-inside flex flex-col gap-y-2 items-start">
                {
                    absents
                        .filter(absent => absent.gender === "woman")
                        .map((absent, index) => (<Absent key={index} absent={absent}/>))
                }
            </ul>
        </div>
    )
}

function Absent({absent}) {

    const { removeAbsent} = useContext(AbsentsContext)

    return (
        <li className="list-item flex-row justify-center items-center gap-2">
            <div className="inline-flex gap-x-1 items-center">
                <span>{absent.name}</span>
                <button onClick={() => removeAbsent(absent)}
                        className="bg-dark-grey w-4 h-4 flex items-center justify-center rounded-full text-lg">
                    <img src={Cross} className="w-2 h-2" />
                </button>
            </div>
        </li>
    )
}