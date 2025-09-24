export type Product = {
    title: string,
    category: string,
    price: number,
    platform: "PC" | "PlayStation" | "Xbox" | "Switch",
    releaseDate: string,
    publisher: string,
    description: string,
    genres: string[],
    imageUrl?: string
}