export default function WishlistComponents({ isOpen, setIsOpen, wishlist }) {
    return (
        <>
            <div className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`}  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setIsOpen(false)}></button>
                </div>
                <div className="offcanvas-body">
                    <h1 className="text-dark">I tuoi Giochi</h1>
                    {wishlist.map(game => {
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
                                        <button>rimuovi</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}