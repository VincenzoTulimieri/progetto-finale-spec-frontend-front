import { createContext, useEffect, useState } from "react";
import useGames from "../hook/useGames";

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {
    // products
    const { games } = useGames()

    // wishlist e browser storage 
    const [open, setOpen] = useState(false)

    const [wishlist, setWishlist] = useState(() => {
        try {
            const storedWishlist = localStorage.getItem('wishlist')
            return storedWishlist ? JSON.parse(storedWishlist) : []

        } catch (error) {
            console.error('Dati non non recuperati', error)
            return []
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem('wishlist', JSON.stringify(wishlist))
        } catch (error) {
            console.error('dati non salvati', error)
        }

    }, [wishlist])

    // aggiungi alla wishlist
    const addItemWishlist = (game) => {
        setWishlist(prev => prev.find(g => g.id === game.id) ? prev : [...prev, game])
    }

    // rimuovi dalla wishlist
    const removeItemWishlist = (id) => {
        setWishlist(prev => prev.filter(g => g.id !== id))
    }

    // controllo se è presente in lista
    const inWishlist = (id) => {
        return wishlist.some(g => g.id === id)
    }

    // attivazione della wishlist
    const handlerWishlistClick = (game) => {
        if (inWishlist(game.id)) {
            removeItemWishlist(game.id)
        } else {
            addItemWishlist(game)
            setOpen(true)
        }
    }

    return (
        <GlobalContext.Provider value={{ games, open, wishlist, setOpen, inWishlist, removeItemWishlist, handlerWishlistClick }}>
            {children}
        </GlobalContext.Provider>
    )
}