import { NavLink } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"

export default function Header() {
    const { setOpen } = useContext(GlobalContext)
    return (
        <header className="jumbotron">
            <nav className="navbar vt-bg">
                <div className="container-fluid justify-content-between">
                    <NavLink to={'/'} className='title-link navbar-brand navlink'>
                        <img src="/logo-home2.png" alt="Logo" className="d-inline-block align-text-top logo-img" />
                        <h1>Visual Gaming</h1>
                    </NavLink>
                    <button className="btn-wishlist" onClick={() => setOpen(true)}>wishlist</button>
                </div>
            </nav>
            <div className="jumbotron-content">
                <h2>Benvenuto su Visual Gaming</h2>
                <p>Scopri i migliori giochi da confrontare e aggiungere alla tua Wishlist</p>
            </div>
        </header>
    )
}




