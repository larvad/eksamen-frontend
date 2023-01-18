import '../styles/navbar.css'
import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import facade from '../apiFacade';
import * as Hi from 'react-icons/hi'

const Navbar = ({loggedIn, username, setLoggedIn}) => {
 
    const [showNav, setShowNav] = useState(false)

    

    

    const navRef = useRef();
    const showNavBar = () => {
        if(showNav===false){setShowNav(true)}
        else if(showNav===true){setShowNav(false)}

    }
 

    const perfomLogout = (evt) => {
        evt.preventDefault();
        facade.logout(setLoggedIn);
        window.location.href = '/';
        
    }

    let activeStyle = {
        color: "#fbb040",
        textDecoration: "none",
        
      }
    let passiveStyle = {
        color: "white",
        textDecoration: "none",

        
      }
   


  return (
        

        <nav>
           
                <div className="logo">
                    <Link className='unlink' to="/">
                    <p>3 sem Eksamen</p>
                    </Link>
                </div>
           
            
            <button className='mobile-nav-toggle' 
             onClick={showNavBar}>
                <span className='sr-only'>Menu</span>
                <div className="hamburger" id={showNav ? "active" : ""}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </button>

            
            {loggedIn &&
            <ul id={showNav ? "open" : ""} 
            ref={navRef} className='primary-navigation flex'>
                
                <li>
                 <NavLink 
                    to="/dashboard" 
                    className="navLink"
                    style={({ isActive }) =>
                    isActive ? activeStyle : passiveStyle}
                    >
                    Dashboard
                </NavLink>
                </li>

                <li>
                <NavLink 
                    to="/harbour" 
                    className="navLink"
                    style={({ isActive }) =>
                    isActive ? activeStyle : passiveStyle}
                    >
                    Harbour
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/page2" 
                    className="navLink"
                    style={({ isActive }) =>
                    isActive ? activeStyle : passiveStyle}
                    >
                    Page2
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/page3" 
                    className="navLink"
                    style={({ isActive }) =>
                    isActive ? activeStyle : passiveStyle}
                    >
                    Page3
                </NavLink>
                </li>

                

                    {!loggedIn &&
                     <div className="signInArea">
                     <button>
                         <p className='buttonText'>Sign in</p>
                         <div className="buttonEffect">
                         </div>
                     </button>
                     <button>
                        Sign up  
                     </button>
                    </div> 
                    }

                    {loggedIn &&
                     
                        <div class="dropdown">
                        <button class="dropbtn">{username}<Hi.HiMenuAlt3/></button>
                        <div class="dropdown-content">
                            <div className="content">
                                <div className="status">
                                    <p>Role</p>
                                    {facade.hasUserAccess('user', loggedIn) && 
                                    <p className='user'>User</p>}
                                    {facade.hasUserAccess('admin', loggedIn) && 
                                    <p className='admin'>Admin</p>}
                                </div>
                                <button onClick={perfomLogout}>
                                Logout
                                </button>
                            </div>
                        </div>
                        </div>
                
                   
                    }
                    
                
                <div className="copyRight">
                    <p>Copyright © 2023 cph-sl410. All rights reserved.</p>
                </div>
                
               
            </ul>
        }
      
        </nav>
  )
}

export default Navbar