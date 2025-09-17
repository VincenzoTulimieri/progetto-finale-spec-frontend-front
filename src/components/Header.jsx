import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="container-fluid">
                    <NavLink to={'/'}className='title-link'><h1>Visual Gaming</h1></NavLink>
                </div>
            </nav>
        </header>
    )
}