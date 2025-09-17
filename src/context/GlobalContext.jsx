import { createContext } from "react";
import useGames from "../hook/useGames";

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {
    const { games } = useGames()
    return (
        <GlobalContext.Provider value={{games}}>
            {children}
        </GlobalContext.Provider>
    )
}