import Card from "../components/Card"
import { GlobalContext } from "../context/GlobalContext"
import { useContext, useMemo, useState } from "react"

export default function ListGames() {
    const { games } = useContext(GlobalContext)
    console.log(games)
    const [searchQueryTitle, setSearchQueryTitle] = useState('')

    const filteredGames = useMemo(()=>{
        return games.filter(game =>{
            const isInTitle = game.title.toLowerCase().includes(searchQueryTitle.toLowerCase())
            return isInTitle
        })
    },[games,searchQueryTitle])

    return (
        <>
        <div className="container-input-title">
            <h1>I Nostri Giochi</h1>
            <input type="text" value={searchQueryTitle} onChange={(e)=> setSearchQueryTitle(e.target.value)} className="form-control" />
        </div>
            <div>
                <div className="row row-cols-2 g-3">
                    {filteredGames && filteredGames.map((game) =>{
                        return(
                            <Card key={game.id} game={game}/>
                        )
                        
                    })}
                </div>
            </div>
        </>
    )
}