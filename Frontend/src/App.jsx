import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import './App.css'
import AddPlayway from './Components/AddPlayway'
import AddSchool from './Components/AddSchool'
import AddCollege from './Components/AddCollege'
import PlaywayListing from './Components/PlaywayListing'
import { SnackbarProvider } from 'notistack'

const App = () => {
  return (
    <div>
   
      <BrowserRouter>
      <Navbar/>
      <SnackbarProvider>
      <Routes>

        <Route path='/' element= {<Home/>}/>
        <Route path='/Home' element= {<Home/>}/>
        <Route path='/Signup' element= {<Signup/>}/>
        <Route path='/Login' element= {<Login/>}/>
        <Route path='/AddPlayway' element= {<AddPlayway/>}/>
        <Route path='/AddSchool' element= {<AddSchool/>}/>
        <Route path='/AddCollege' element= {<AddCollege/>}/>
        <Route path='/PlayListing' element= {<PlaywayListing/>}/>
        </Routes>
        </SnackbarProvider>
        </BrowserRouter>
    </div>
  )
}

export default App