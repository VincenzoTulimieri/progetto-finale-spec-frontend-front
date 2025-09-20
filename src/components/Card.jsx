import useGame from "../hook/useGame"
import { Link } from "react-router-dom"


export default function Card({ game, toggleSelect, isSelected }) {
    // game id e dettagli game
    const gameId = game?.id
    const { gameDetails } = useGame(gameId)
    console.log(gameDetails)
    if (!gameDetails) return <div className="card-loading">Caricamento...</div>




    return (
        <>
            <div className="col-12 col-mb-6 col-lg-4 mb-3">
                <div className="card h-100 card-hover">
                    <input type="checkbox" checked={isSelected} onChange={() => toggleSelect(gameId)} className="vt-position-checkbox form-check-input" />
                    <div className="row g-0">
                        <div className="col-6">
                            <Link to={`/products/${gameId}`} className="unset">
                                <img src={gameDetails?.imageUrl} className="card-img-top img-hover" alt="..." />
                            </Link>
                        </div>
                        <div className="card-body col-4">
                            <h5 className="card-title mb-4">{gameDetails?.title}</h5>
                            <p className="card-text"><strong>Genere:</strong> {gameDetails?.category}</p>
                            <Link to={`/products/${gameId}`} className="vt-btn btn-color ">Dettgli</Link>
                            <i className="fa-regular fa-heart vt-heart"></i>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}