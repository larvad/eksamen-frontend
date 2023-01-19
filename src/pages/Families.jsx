import '../styles/families.css'
import * as Fa from 'react-icons/fa'
import * as Ai from 'react-icons/ai'
import * as Md from 'react-icons/md'
import { useEffect, useState } from 'react'
import facade from '../apiFacade.js'


const Families = ({username, userDetails, setUserDetails}) => {

  const [families, setFamilies] = useState([])
  const [user, setUser] = useState({user: username})
  const [familyResponse, setFamilyResponse] = useState([])
  


  useEffect(() => {
    facade.fetchData("/dinner/assignment", setFamilies, "GET")
    facade.fetchData("/dinner/user", setUserDetails, "POST", user)
    console.log(families)
    console.log(userDetails)
    
  }, [])

  const joinFamily = (familyId) => {
    console.log(username)
    console.log(familyId)
    facade.fetchData("/dinner/addUserToFamily", setFamilyResponse, "POST", {user: username, id: familyId})
    console.log(familyResponse)
  }
  
  


  return (
    <>
    
    <div className="familiesBack">
      <div className="eventTitle">
        <p>Families</p>
      </div>
      {families.map( family => {
        return(

          <div className="familyItem">
            <p className='familyTitle'>{family.name}</p>
            <div className="familyDetails">
              <div className="familyDate">
              <Fa.FaBaby/><p>Family born in {family.createDate}</p>
              </div>
              <div className="familyDate">
              <Ai.AiFillMail/><p>{family.contact}</p>
              </div>
            </div>
            <div className="familyText">{family.description}</div>
            <div className="familyMembers">
              <p className='activeMembers'>Active members</p><Md.MdGroup/><p> {family.users.length}</p>
            </div>
            
              <div className="joinFamily">
              <button onClick={() => joinFamily(family.id)}>Join family</button>
              </div>



      </div>

        )
      })}
      
    </div>
    </>
  )
}

export default Families