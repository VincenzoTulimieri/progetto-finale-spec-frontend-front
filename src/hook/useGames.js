import { useState, useEffect } from "react"
const { VITE_URL_API } = import.meta.env

export default function useGames() {
    const [games, setGames] = useState([])

    useEffect(()=>{
        async function fetchData() {
            try{
                const res = await fetch(`${VITE_URL_API}/products`)
                const data = await res.json()
                const dataDetails = await Promise.all(
                    data.map(async(game)=>{
                        const resDetails = await fetch(`${VITE_URL_API}/products/${game.id}`)
                        const dataDetails = await resDetails.json()
                        const dataComplete = dataDetails.product
                        return {...game, imageUrl: dataComplete.imageUrl, price: dataComplete.price, platform: dataComplete.platform, publisher: dataComplete.publisher}
                    })
                )
                setGames(dataDetails)
            }catch(err){
                console.error(err)
            }
        }
        fetchData()
    },[])

    return { games }
}