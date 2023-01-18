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
        <NavLink to="/dashboard">
        <button className={`button1 ${showButtons ? "fade-in-scale animation" : "hide"}`}>Dashboard</button>
        </NavLink>
        <NavLink to="/opgave">
        <button className={`button2 ${showButtons ? "fade-in-scale animation" : "hide"}`}>Eksamensopgave</button>
        </NavLink>
      </div>
    );
};

export default Buttons;