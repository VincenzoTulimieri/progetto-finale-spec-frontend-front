import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListGames from './pages/ListGames'
import DefaultLayout from './layout/DefaultLayout'
import { GlobalProvider } from './context/GlobalContext'
import CardGame from './pages/GameDetails'
import ComparePage from './pages/ComparePage'

function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<ListGames />} />
              <Route path='/products/:id' element={<CardGame />} />
              <Route path='/compare/:id1/:id2/:id3?/:id4?' element={<ComparePage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
