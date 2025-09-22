import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"
import WishlistComponents from "../components/WishlistComponets"

export default function DefaultLayout(){
    const { games, open, removeItemWishlist, setOpen , wishlist } = useContext(GlobalContext)
    return(
        <>
            <Header/>
            <main className="container">
                    <Outlet />
                    <WishlistComponents isOpen={open} setIsOpen={setOpen} wishlist={wishlist} game={games} removeItemWishlist={removeItemWishlist}/>
            </main>
        </>
    )
}