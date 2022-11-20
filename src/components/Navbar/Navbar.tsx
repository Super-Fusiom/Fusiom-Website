import { Link } from "react-router-dom"

import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/projects"}>Projects</Link></li>
            </ul>
        </nav>   
    )
}

export default Navbar