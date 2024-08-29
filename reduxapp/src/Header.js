import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <ul>
            <li> <NavLink to="/home">Home</NavLink></li>
            <li> <NavLink to="/Contact">Contact</NavLink></li>
            <li> <NavLink to="/About">About</NavLink></li>
        </ul>
    )
}