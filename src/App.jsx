import { Route, Routes } from "react-router-dom"
import Welcome from "./pages/Welcome"
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3"
import facade from './apiFacade.js'
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Harbour from "./pages/Harbour"
import Harbours from "./pages/harbour/Harbours"
import Owners from "./pages/harbour/Owners"
import Boats from "./pages/harbour/Boats"

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState("Log in to use the API");
  const [errorMessage, setErrorMessage] = useState("No Errors");
  const [username, setUsername] = useState('')




  
  return (
    <>
    <Navbar username={username} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    <Routes>
      <Route path="/" element={<Welcome facade={facade} loggedIn={loggedIn} setLoggedIn={setLoggedIn} errorMessage={errorMessage} setErrorMessage={setErrorMessage} setUsername={setUsername} username={username}/>}/>
      <Route path="/harbour" element={<Harbour/>}/>
      <Route path="/page2" element={<Page2/>}/>
      <Route path="/page3" element={<Page3/>}/>

      {/* Harbour Opgave */}
      <Route path="/harbour/harbours" element={<Harbours/>}/>
      <Route path="/harbour/owners" element={<Owners/>}/>
      <Route path="/harbour/boats" element={<Boats/>}/>

      
    </Routes>
    
    </>
 
  )
}

export default App
