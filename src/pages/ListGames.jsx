import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"
import useGames from "../hook/useGames"

export default function ListGames(){
    const {games} = useContext(GlobalContext)
    console.log(games)

    return(
        <>
            <h1>Lista Games</h1>
        </>
    )
}