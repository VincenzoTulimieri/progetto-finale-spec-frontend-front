import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="container-fluid">
                    <NavLink to={'/'} className='title-link navbar-brand navlink'>
                        <img src="../public/logo-home2.png" alt="Logo" className="d-inline-block align-text-top logo-img" />
                        <h1>Visual Gaming</h1>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}




