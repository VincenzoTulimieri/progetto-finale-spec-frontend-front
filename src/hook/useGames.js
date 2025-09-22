import { useState, useEffect } from "react"
const { VITE_URL_API } = import.meta.env

export default function useGames() {
    const [games, setGames] = useState([])

    useEffect(()=>{
        async function fetchData() {
            try{
                const res = await fetch(`${VITE_URL_API}/products`)
                const data = await res.json()
                const dataWithImg = await Promise.all(
                    data.map(async(game)=>{
                        const resDetails = await fetch(`${VITE_URL_API}/products/${game.id}`)
                        const dataDetails = await resDetails.json()
                        const dataImg = dataDetails.product
                        return {...game, imageUrl: dataImg.imageUrl, price: dataImg.price, platform: dataImg.platform, publisher: dataImg.publisher}
                    })
                )
                setGames(dataWithImg)
            }catch(err){
                console.error(err)
            }
        }
        fetchData()
    },[])

    return { games }
}