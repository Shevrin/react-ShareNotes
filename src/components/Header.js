import { NavLink } from "react-router-dom";


function Header() {
    return (
        <div >
            <nav >
                <ul className="navbar">
                    <li className=""><NavLink exact className="" to="/">Home</NavLink> </li>
                    <li className=""><NavLink className="" to="/note">Note</NavLink> </li>
                    <li className=""><NavLink className="" to="/create">Create</NavLink> </li>
                    <li className=""><NavLink className="" to="/about">About</NavLink> </li>
                </ul>
            </nav>
            <hr />
        </div>
    );
}

export default Header;