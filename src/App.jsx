
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ListTask from './Pages/ListTask'
import NavBar from './Pages/navBar'
import AddTask from './Pages/AddTask'

function App() {

  return (

    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<ListTask />} />
        <Route path='/add' element={<AddTask />} />
        <Route path='/edit/:id' element={<AddTask />} />

      </Routes>

    </>
  )
}

export default App
