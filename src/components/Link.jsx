import {NavLink} from 'react-router-dom'

export default function Link({target, title}) {
    return (
        <NavLink to={target} className={({ isActive}) => isActive ? "text-white font-bold" : "text-white"}>
            {title}
        </NavLink>
    )
}