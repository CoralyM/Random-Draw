import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import DrawResult from "./DrawResult";
import people from "../assets/people.json";
import AbsentsContext from "./AbsentsContext";

export default function Draw() {

    const [winner, setWinner] = useState(undefined);
    const { absents } = useContext(AbsentsContext);
    const [winners, setWinners] = useState([]);

    const handleDrawWinner = () => {

            const participants = people.filter(person => !absents.includes(person)).filter(person => !winners.includes(person));
            const randomIndex = Math.floor(Math.random() * participants.length);

            setWinner(participants[randomIndex]);
            setWinners(prev => [...prev, participants[randomIndex]]);
    }

    useEffect(() => {
        if(winners.length === people.length - absents.length) {
            setWinners([]);
        }
    }, [winners])

    return (
        <div className="flex flex-col items-center justify-center gap-16 w-full">
            <Button content={"🎰 Sélectionner une personne 🎰"} onClick={handleDrawWinner}/>
            <DrawResult winner={winner}/>
        </div>
    )
}