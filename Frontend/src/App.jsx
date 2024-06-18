import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import './App.css'
import AddPlayway from './Components/Admin/AddPlayway'
import AddSchool from './Components/Admin/AddSchool'
import AddCollege from './Components/Admin/AddCollege'
import { SnackbarProvider } from 'notistack'
import ManagePlayway from './Components/Admin/ManagePlayway'
import ManageSchool from './Components/Admin/ManageSchool'
import ManageCollege from './Components/Admin/ManageCollege'
import Contact from './Components/Main/Contact'
import ForgetPassword from './Components/ForgetPassword'
import { AppProvider } from './Context/UserContext'
import Admin from './Components/Admin/Index'
import Main from './Components/Main/Index'
import College from './Components/Main/College'
import Dashboard from './Components/Admin/Dashboard'
import User from './Components/User/Index'
import Profile from './Components/User/profile'
import School from './Components/Main/School'
import Playway from './Components/Main/Playway'
import About from './Components/Main/About'
import ViewCollege from './Components/Main/ViewCollege'
import ViewPlayway from './Components/Main/ViewPlayway'
import ViewSchool from './Components/Main/ViewSchool'
import TopCollege from './Components/Main/Top5College'
import TopSchool from './Components/Main/Top5School'
import TopPlayway from './Components/Main/Top5Playway'
import ManageUser from './Components/Admin/ManageUser'
import AdminAuth from './AdminAuth'
import UserAuth from './UserAuth'



const App = () => {
  return (
    <div>

      <BrowserRouter>
     
        <SnackbarProvider>
          <AppProvider>
            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/ForgetPassword' element={<ForgetPassword />} />
              <Route path='/AdminAuth' element={<AdminAuth />} />
              <Route path='/UserAuth' element={<UserAuth />} />

              <Route path='/admin' element={ <Admin/>  }>
              <Route path='AddCollege' element={<AddCollege />} />
              <Route path='AddSchool' element={<AddSchool />} />
              <Route path='AddPlayway' element={<AddPlayway />} />
              <Route path='ManageSchool' element={<ManageSchool />} />
              <Route path='ManagePlayway' element={<ManagePlayway />} />
              <Route path='ManageCollege' element={<ManageCollege />} />
              <Route path='ManageUser' element={<ManageUser />} />
              <Route path='dashboard' element={<Dashboard />} />
              </Route>

              <Route path='/user' element={<UserAuth> <User /> </UserAuth>}>
              <Route path='profile' element={<Profile />} />
          
              </Route>

              <Route path='/main' element={<Main />}>
              <Route path='College' element={<College />} />
              <Route path='Contact' element={<UserAuth> <Contact /> </UserAuth>} />
              <Route path='School' element={<School />} /> 
              <Route path='Playway' element={<Playway />} />  
              <Route path='About' element={<About />} /> 
              <Route path='ViewCollege/:id' element={<UserAuth> <ViewCollege /> </UserAuth>} />  
              <Route path='ViewSchool/:id' element={<ViewSchool />} />   
              <Route path='ViewPlayway/:id' element={<ViewPlayway />} />    
              <Route path='Top5College' element={<TopCollege />} />  
              <Route path='Top5Playway' element={<TopPlayway />} />    
              <Route path='Top5School' element={<TopSchool/>} />    
              </Route>



            </Routes>
          </AppProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  )
}

export default App