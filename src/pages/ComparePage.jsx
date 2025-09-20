import { useParams } from "react-router-dom"
import useGame from "../hook/useGame"
import CompareCard from "../components/CompareCard"

export default function CamparePage() {
    // recupero di 2 games
    const { id1, id2 } = useParams()
    const { gameDetails: gameData1 } = useGame(id1)
    const { gameDetails: gameData2 } = useGame(id2)


    return (
        <>
            <div className="container">
                <h1 className="text-center mb-5">Confronto Giochi</h1>
                {gameData1 && gameData2 ? (
                    <CompareCard game1={gameData1} game2={gameData2} />
                ) : (
                    <p>Caricamento...</p>
                )}
            </div>
        </>
    )
}