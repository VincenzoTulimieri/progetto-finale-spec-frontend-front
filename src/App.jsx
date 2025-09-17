import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListGames from './pages/ListGames'
import DefaultLayout from './layout/DefaultLayout'
import { GlobalProvider } from './context/GlobalContext'

function App() {


  return (
    <>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path='/' element={<ListGames/>}/>
            <Route path='/products/:id'/>
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
    </>
  )
}

export default App
