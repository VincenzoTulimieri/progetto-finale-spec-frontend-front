import { Link } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"

export default function Card({ game, toggleSelect, isSelected,setIsOpen }) {
    const {addItemWishlist, removeItemWishlist, inWishlist} = useContext(GlobalContext)

    const handlerWishlistClick = () =>{
        if(inWishlist(game.id)){
            removeItemWishlist(game.id)
        }else{
            addItemWishlist(game)
            setIsOpen(true)
        }
    }

    return (
        <>
            <div className="col-12 col-mb-6 col-lg-4 mb-3">
                <div className="card h-100 card-hover">
                    <label>
                        <input type="checkbox" checked={isSelected} onChange={()=>toggleSelect(game.id)} onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                        }} className="vt-position-checkbox form-check-input" />
                    </label>
                    <div className="row g-0">
                        <div className="col-6">
                            <Link to={`/products/${game.id}`} className="unset">
                                <img src={game.imageUrl} className="card-img-top img-hover" alt="..." />
                            </Link>
                        </div>
                        <div className="card-body col-4">
                            <h5 className="card-title mb-4">{game.title}</h5>
                            <p className="card-text"><strong>Genere:</strong> {game.category}</p>
                            <Link to={`/products/${game.id}`} className="vt-btn btn-color ">Dettgli</Link>
                            <button className="vt-heart" onClick={()=> handlerWishlistClick()}>
                                {inWishlist(game.id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}