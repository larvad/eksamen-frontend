import React, { useEffect, useState } from 'react'
import '../styles/account.css'
import facade from '../apiFacade.js'

const Account = ({username, userDetails, setUserDetails}) => {
    const [user, setUser] = useState({user: username})

    useEffect(() => {
        facade.fetchData("/dinner/user", setUserDetails, "POST", user)

      }, [])
  return (
    <>
    <div className="accountBack">
        <div className="eventTitle">
            <p>Account</p>
        </div>
        <div className="balance">
            <button onClick={() => console.log(userDetails)}>console log my account</button>
        </div>
    </div>
    </>
  )
}

export default Account