import { useState } from "react";
import '../styles/signin.css'
import Navbar from "./Navbar";
import cphbusiness from '../assets/images/cphbusiness.png'
import * as Io from 'react-icons/io'
import TypeEffect from "./TypeEffect";



const SignIn = ({facade, loggedIn, setLoggedIn, errorMessage, setErrorMessage, setUsername, username}) => {


    const init = {username: "", password: ""};
    const [loginCredentials, setLoginCredentials] = useState(init);

    const onChange = (evt) => {
        setLoginCredentials({...loginCredentials, [evt.target.id]: evt.target.value})
    }

    const performLogin = (evt) => {
        evt.preventDefault();
        facade.login(loginCredentials.username, loginCredentials.password, setLoggedIn, setErrorMessage, setUsername);
    }
   

  return (
    <div className="signIn">
       
       {!loggedIn && 
        <div className="signInItems">
            <div className="leftSignIn">
                <img src={cphbusiness}/>
            </div>

            <div className="rightSignIn">
                <h2>Login</h2>
                <div className="input">
                    <Io.IoMdPerson className="inputLogo"/>
                    <input onChange={onChange} type="text" placeholder="Username" id="username" />
                </div>
                <div className="input">
                    <Io.IoMdLock className="inputLogo"/>
                    <input onChange={onChange} type="password" placeholder="Password" id="password" />
                </div>
                <button onClick={performLogin}>
                    Login
                </button>
                {loggedIn && 
                <button onClick={perfomLogout}>
                Logout
                </button>}
                {facade.hasUserAccess('admin', loggedIn)&&
                <p>Du er nu logged ind som admin</p>} 
                {facade.hasUserAccess('user', loggedIn)&&
                <p>Du er nu logged ind som user</p>} 
            </div>
        </div>
        }
        {loggedIn &&
        <TypeEffect message={"Velkommen, du har nu adgang til sidens funktionalitet"}/>
        }
        
    </div>
               
  )
}

export default SignIn