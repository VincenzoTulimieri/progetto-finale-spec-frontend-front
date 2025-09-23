import { useParams, useNavigate } from "react-router-dom"
import useGame from "../hook/useGame"
import CompareCard from "../components/CompareCard"

export default function CamparePage() {
    // recupero di games da confrontare 
    const { id1,id2, id3, id4 } = useParams()
    const idsArray = [id1,id2,id3,id4].filter(Boolean)
    const gamesData = idsArray.map(id => useGame(id).gameDetails).filter(Boolean)
    console.log(gamesData)
    const navigate = useNavigate()


    return (
        <>
            <div className="container">
                <h1 className="text-center mb-5">Confronto Giochi</h1>
                <div className="row mb-5">
                {gamesData.length >= 2 ? (
                    gamesData.map((game, i) =>{
                        return <CompareCard key={i} game={game}  allGamesData={gamesData}/>
                    })
                ) : (
                    <p>Caricamento...</p>
                )}
                </div>
                <div className="text-center">
                    <button className="vt-btn-compare btn-color" onClick={()=>navigate('/')}>Indietro</button>
                </div>
            </div>
        </>
    )
}