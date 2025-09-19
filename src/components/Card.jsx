import useGame from "../hook/useGame"


export default function Card({ game }) {
    const gameId = game.id
    const { gameDetails } = useGame(gameId)
    console.log(gameDetails)

    return (
        <>
            <div className="col-4 mb-3">
                <div className="card h-100">
                    <div className="row g-0">
                        <div className="col-6">
                            <img src={gameDetails?.imageUrl} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body col-4">
                            <h5 className="card-title mb-4">{gameDetails?.title}</h5>
                            <p className="card-text"><strong>Casa Prodrutrice:</strong> {gameDetails?.publisher}</p>
                            <p className="card-text"><strong>Piattaforma:</strong> <small className="text-body-secondary">{gameDetails?.platform}</small></p>
                            <button className="button-position vt-btn btn-color">aggiungi ai preferiti</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}