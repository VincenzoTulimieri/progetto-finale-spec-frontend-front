import Card from "../components/Card"
import { GlobalContext } from "../context/GlobalContext"
import React, { useContext, useMemo, useState, useCallback } from "react"

// funzione di debounce
function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay);
    }
}

export default function ListGames() {
    // context per i games
    const { games } = useContext(GlobalContext)
    console.log(games)

    // array categorie per la select
    const categoryGames = [
        { id: 1, value: 'Adventure' },
        { id: 2, value: 'Action' },
        { id: 3, value: 'Shooter' },
        { id: 4, value: 'RPG' },
        { id: 5, value: 'Platform' },
        { id: 6, value: 'Racing' },
        { id: 7, value: 'Sports' },
        { id: 8, value: 'Horror' },
        { id: 9, value: 'Sandbox' },
        { id: 10, value: 'Simulation' }
    ];

    // Stati 
    const [searchQueryTitle, setSearchQueryTitle] = useState('')
    const [searchQueryCategory, setSearchQueryCategory] = useState('')
    const [sortOrder, setSortOrder] = useState('')

    // debounce di setSearchQuery
    const debounceSearch = useCallback(debounce(setSearchQueryTitle, 500), [])

    // memo
    const CardMemo = React.memo(Card)


    // filtri e ordinamento
    const filteredGames = useMemo(() => {
        let orderedList = games.filter(game => {
            const isInTitle = game.title.trim().toLowerCase().includes(searchQueryTitle.toLowerCase())
            const isInCategory = searchQueryCategory === '' || game.category === searchQueryCategory
            return isInTitle && isInCategory
        })
        if(sortOrder === 'asc'){
            orderedList.sort((a,b)=> a.title.localeCompare(b.title))
        }else if(sortOrder === 'desc'){
            orderedList.sort((a,b)=> b.title.localeCompare(a.title))
        }

        return orderedList

    }, [games, searchQueryTitle, searchQueryCategory, sortOrder])

    return (
        <>
            <div className="container-input-title">
                <h1>I Nostri Giochi</h1>
                <div className="d-flex gap-3">
                    <select value={sortOrder} onChange={(e)=> setSortOrder(e.target.value)} className="form-select">
                        <option value="">Ordina per</option>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                    <select value={searchQueryCategory} onChange={(e)=> setSearchQueryCategory(e.target.value)} className="form-select">
                        <option value="">Scegli Categoria</option>
                        {categoryGames.map(c => <option key={c.id} value={c.value}>{c.value}</option>)}
                    </select>
                    <input type="text" onChange={(e) => debounceSearch(e.target.value)} className="form-control" placeholder="Cerca Titolo" />
                </div>
            </div>
            <div>
                <div className="row row-cols-2 g-3">
                    {filteredGames.map((game) => {
                        return (
                            <CardMemo key={game.id} game={game} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}