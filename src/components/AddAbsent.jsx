import { useContext, useState } from "react";
import Button from "./Button";
import Select from "./Select";
import AbsentsContext from "./AbsentsContext";
import people from "../assets/people.json";

export default function AddAbsent() {

    const { addAbsent } = useContext(AbsentsContext);

    const [absentId, setAbsentId] = useState(undefined);
    
    const handleAddAbsent = () => {
        const absent = people.find(p => p.id === +absentId);
        if(absent) {
            addAbsent(absent);
            setAbsentId(undefined);
        }
    }

    return (
        <div className="flex flex-col justify-center items-start gap-10 flex-1 lg:p-20">
            <Select value={absentId ?? ""} onChange={(e) => setAbsentId(e.target.value)}/>
            <Button content={"Ajouter"} onClick={handleAddAbsent}/>
        </div>
    )
}