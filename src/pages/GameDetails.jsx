import useGame from "../hook/useGame"
import { useParams, useNavigate } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"


export default function CardGame() {
    // gamse details
    const { id } = useParams()
    const { gameDetails } = useGame(id)
    const navigate = useNavigate()

    // attivazione wishlist in card details 
    const { addItemWishlist, removeItemWishlist, inWishlist, setOpen } = useContext(GlobalContext)

    const handlerWishlistClick = () => {
        if (inWishlist(gameDetails.id)) {
            removeItemWishlist(gameDetails.id)
        } else {
            addItemWishlist(gameDetails)
            setOpen(true)
        }
    }

    return (
        <>
            <div className="container-card-details">
                <div className="card mb-3">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-4">
                                <img src={gameDetails?.imageUrl} className="card-img-top vt-card-img-top" alt="..." />
                            </div>
                            <div className="card-body col-6">
                                <h5 className="card-title mb-4">{gameDetails?.title}</h5>
                                <p className="card-text"><strong>Casa Prodrutrice:</strong> {gameDetails?.publisher}</p>
                                <p className="card-text"><strong>Piattaforma:</strong> <small className="text-body-secondary">{gameDetails?.platform}</small></p>
                                <p className="card-text"><strong>Genere:</strong> {gameDetails?.category}</p>
                                <p className="card-text"><strong>Descrizione:</strong> {gameDetails?.description}</p>
                                <p className="card-text"><strong>Prezzo:</strong> {gameDetails?.price}€</p>
                                <button className="vt-btn btn-color vt-btn-details" onClick={() => navigate('/')}>Indietro</button>
                                <button className=" vt-heart vt-heart-details" onClick={() => handlerWishlistClick()}>
                                    {inWishlist(gameDetails?.id) ? <i class="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}