import { useState, useEffect } from "react"
const { VITE_URL_API } = import.meta.env

const useGame = (id) => {
    const [gameFetch, setGameFetch] = useState({})

    useEffect(() => {
        if (!id) return
        const fetchGame = async () => {
            try {
                const response = await fetch(`${VITE_URL_API}/products/${id}`)
                if (!response.ok) {
                    throw new Error(`Errore di rete: ${response.status}`);
                }

                const data = await response.json()
                setGameFetch(data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchGame()
    }, [id])
    
    const gameDetails = gameFetch.product

    return { gameDetails }
}

export default useGame