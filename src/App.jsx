import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListGames from './pages/ListGames'
import DefaultLayout from './layout/DefaultLayout'
import { GlobalProvider } from './context/GlobalContext'
import CardGame from './pages/CardGame'

function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<ListGames />} />
              <Route path='/products/:id' element={<CardGame />} />
              <Route />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
