import { Route, Routes } from "react-router-dom"
import Welcome from "./pages/Welcome"
import Families from "./pages/Families"
import facade from './apiFacade.js'
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Booking from "./pages/Booking"
import Admin from "./pages/Admin"
import Account from "./pages/Account"

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState("Log in to use the API");
  const [errorMessage, setErrorMessage] = useState("No Errors");
  const [username, setUsername] = useState('')
  const [userDetails, setUserDetails] = useState([])
  
  return (
    <>
    {loggedIn && 
    <Navbar username={username} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    }
    <Routes>
      <Route path="/" element={<Welcome facade={facade} loggedIn={loggedIn} setLoggedIn={setLoggedIn} errorMessage={errorMessage} setErrorMessage={setErrorMessage} setUsername={setUsername} username={username}/>}/>
      <Route path="/families" element={<Families username={username} userDetails={userDetails} setUserDetails={setUserDetails}/>}/>
      <Route path="/booking" element={<Booking userDetails={userDetails} setUserDetails={setUserDetails} username={username} />}/>
      <Route path="/account" element={<Account username={username} userDetails={userDetails} setUserDetails={setUserDetails}/>}/>

      {/* Admin CRUD */}
      {facade.hasUserAccess('admin', loggedIn) &&
      <Route path="/admin" element={<Admin/>}/>
      }


      
    </Routes>
    
    </>
 
  )
}

export default App
