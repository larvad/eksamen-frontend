import Navbar from '../components/Navbar'
import SignIn from '../components/SignIn'
import '../styles/welcome.css'

const Welcome = ({facade, loggedIn, setLoggedIn, errorMessage, setErrorMessage, setUsername, username}) => {
  return (
    <div className='overflow'>
        <SignIn facade={facade} loggedIn={loggedIn} setLoggedIn={setLoggedIn} errorMessage={errorMessage} setErrorMessage={setErrorMessage} setUsername={setUsername} username={username}/>
      
    
    </div>
  )
}

export default Welcome