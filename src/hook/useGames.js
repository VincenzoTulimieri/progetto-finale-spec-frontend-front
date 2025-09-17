import { useState, useEffect } from "react"
const { VITE_URL_API } = import.meta.env

export default function useGames() {
    const [games, setGames] = useState([])

    useEffect(()=>{
        fetch(`${VITE_URL_API}/products`)
            .then(res => res.json())
            .then(data => setGames(data))
            .catch(err => console.err(err))
    },[])

    return { games }
}