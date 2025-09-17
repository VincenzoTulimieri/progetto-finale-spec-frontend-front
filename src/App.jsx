import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListGames from './pages/ListGames'
import DefaultLayout from './layout/DefaultLayout'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path='/' element={<ListGames/>}/>
            <Route path='/products/:id'/>
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
