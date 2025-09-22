import { useRef, useEffect } from "react"
export default function WishlistComponents({ isOpen, setIsOpen, wishlist, removeItemWishlist }) {
    const wishlistRef = useRef(null)

    useEffect(() => {
        const handlerClickOutside = (event) => {
            if (wishlistRef.current && !wishlistRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handlerClickOutside)
        } else {
            document.removeEventListener("mousedown", handlerClickOutside)
        }
        return () => {
            document.removeEventListener("mousedown", handlerClickOutside)
        }
    }, [isOpen, setIsOpen])


    return (
        <>
            <div ref={wishlistRef} className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title vt-text-color" id="offcanvasRightLabel">Lista dei preferiti</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setIsOpen(false)}></button>
                </div>
                <div className="offcanvas-body">
                    <h2 className="mb-5">I tuoi Giochi</h2>
                    {wishlist.length === 0 ? (<p className="vt-text-color">Nessun gioco nella lista</p>) :
                        (wishlist.map(game => {
                            console.log(game)
                            return (
                                <div key={game.id} className="col-12 mb-3">
                                    <div className="card h-100 p-3">
                                        <img src={game.image} alt={game.title} className="card-img-top mb-3 img-compare" />
                                        <h5 className="card-title">{game.title}</h5>
                                        <p className="mb-3"><strong>Genere:</strong> {game.category}</p>
                                        <p className="mb-3"><strong>Piattaforma:</strong> {game.platform}</p>
                                        <p className="mb-3"><strong>Prezzo:</strong> {game.price} €</p>
                                        <div className="text-end">
                                            <button className="btn-remove" onClick={() => removeItemWishlist(game.id)}>
                                                <i class="fa-solid fa-trash font-icon"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }))}
                </div>
            </div>
        </>
    )
}