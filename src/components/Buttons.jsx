import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';


const Buttons = () => {
    const [showButtons, setShowButtons] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setShowButtons(true);
      }, 5000);
    }, []);


  
    return (
      <div className='buttonsSignIn'>
        <NavLink to="/booking">
        <button className={`button1 ${showButtons ? "fade-in-scale animation" : "hide"}`}>Booking</button>
        </NavLink>
        <NavLink to="/account">
        <button className={`button2 ${showButtons ? "fade-in-scale animation" : "hide"}`}>My Account</button>
        </NavLink>
      </div>
    );
};

export default Buttons;