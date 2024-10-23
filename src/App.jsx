
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Expense from './pages/Expense'
import Home from './pages/Home'
import Reg from './pages/Reg'
import Header from './Components/Header'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/register' element={<Reg/>}/>
    <Route path='/expense' element={<Expense/>}/>

    </Routes>

    </>
  )
}

export default App
