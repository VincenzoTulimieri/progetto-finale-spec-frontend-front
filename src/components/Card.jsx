import useGame from "../hook/useGame"
import { Link } from "react-router-dom"


export default function Card({ game }) {
    // game id e dettagli game
    const gameId = game.id
    const { gameDetails } = useGame(gameId)

    return (
        <>
            <div className="col-4 mb-3">
                <Link to={`/products/${gameId}`} className="unset">
                    <div className="card h-100 card-hover">
                        <div className="row g-0">
                            <div className="col-6">
                                <img src={gameDetails?.imageUrl} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body col-4">
                                <h5 className="card-title mb-4">{gameDetails?.title}</h5>
                                <p className="card-text"><strong>Genere:</strong> {gameDetails?.category}</p>
                                <button className="button-position vt-btn btn-color">aggiungi ai preferiti</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}