export default function CompareCard({ game, allGamesData }) {
    if (!game) return null

    function isDifferent(key) {
        const values = allGamesData.map(g => g[key]);

        const counts = {};
        values.forEach(v => {
            counts[v] = (counts[v] || 0) + 1;
        });

        return counts[game[key]] === 1
    }

    return (

        <div className="col">
            <div className="card h-100 p-3">
                <img src={game.imageUrl} alt={game.title} className="card-img-top mb-3 img-compare" />
                <h5 className="card-title">{game.title}</h5>
                <p className={isDifferent("category") ? "highlight" : ""}><strong>Genere:</strong> {game.category}</p>
                <p className={isDifferent("platform") ? "highlight" : ""}><strong>Piattaforma:</strong> {game.platform}</p>
                <p className={isDifferent("price") ? "highlight" : ""}><strong>Prezzo:</strong> {game.price} €</p>
            </div>
        </div>

    )
}
