import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './Home';
import Absents from "./Absents";
import AbsentsContext from "./components/AbsentsContext";
import { useEffect, useState } from "react";

const router = createBrowserRouter([
{
    path: "/",
    element: <Home />,
},
{
    path: "/absents",
    element: <Absents />,
},
]);

export default function App() {

    const [absents, setAbsents] = useState([]);

    const addAbsent = (absent) => {
        setAbsents([...absents, absent])
    }

    const removeAbsent = (absent) => {
        setAbsents(absents.filter((a) => a.name !== absent.name));
    }

    return (
        <AbsentsContext.Provider value={{absents, addAbsent, removeAbsent}}>
            <RouterProvider router={router} />
        </AbsentsContext.Provider>
    )
}