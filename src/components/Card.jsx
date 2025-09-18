import useGame from "../hook/useGame"



export default function Card({ game }) {
    const gameId = game.id
    const { gameFetch } = useGame(gameId)
    const gameDetails = gameFetch.product
    console.log(gameDetails)


    return (
        <>
            <div className="col-4 mb-3">
                <div className="card h-100">
                    <div className="row g-0">
                        <div className="col-6">
                            <img src={gameDetails?.imageUrl} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body col-6">
                            <h5 className="card-title">{gameDetails?.title}</h5>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}