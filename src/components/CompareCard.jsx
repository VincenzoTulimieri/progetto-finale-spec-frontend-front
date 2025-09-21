export default function CompareCard({ game1, game2 }) {
    if (!game1 || !game2) return null

    function isDifferent(key) {
        return game1[key] !== game2[key]
    }

    return (
        <div className="row mb-5">
            <div className="col-6">
                <div className="card h-100 p-3">
                    <img src={game1.imageUrl} alt={game1.title} className="card-img-top mb-3 img-compare"
                    />
                    <h5 className="card-title">
                        {game1.title}
                    </h5>
                    <p className={isDifferent("category") ? "highlight" : ""}>
                        <strong>Genere:</strong> {game1.category}
                    </p>
                    <p className={isDifferent("platform") ? "highlight" : ""}>
                        <strong>Piattaforma:</strong> {game1.platform}
                    </p>
                    <p className={isDifferent("price") ? "highlight" : ""}>
                        <strong>Prezzo:</strong> {game1.price} €
                    </p>
                </div>
            </div>

            <div className="col-6">
                <div className="card h-100 p-3">
                    <img src={game2.imageUrl} alt={game2.title} className="card-img-top mb-3 img-compare" />
                    <h5 className="card-title">
                        {game2.title}
                    </h5>
                    <p className={isDifferent("category") ? "highlight" : ""}>
                        <strong>Genere:</strong> {game2.category}
                    </p>
                    <p className={isDifferent("platform") ? "highlight" : ""}>
                        <strong>Piattaforma:</strong> {game2.platform}
                    </p>
                    <p className={isDifferent("price") ? "highlight" : ""}>
                        <strong>Prezzo:</strong> {game2.price} €
                    </p>
                </div>
            </div>
        </div>
    )
}
