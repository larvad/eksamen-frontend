import { Link } from 'react-router-dom'
import * as Io from 'react-icons/io'
import * as Ai from 'react-icons/ai'
import '../../styles/harbourCSS/owners.css'
import { useEffect, useState } from 'react'
import facade from '../../apiFacade.js'


const Owners = () => {
  const [owners, setOwners] = useState([]);
  const [viewOwnerId, setViewOwnerId] = useState(null);

  useEffect(() => {
    facade.fetchData("/boat/owner", setOwners, "GET")
  }, [])

  
  return (
    <>
    <header>
      <Link to="/harbour" className='unlink'>
        <Io.IoMdArrowBack className='arrowBack'/>
      </Link>
      <p>Owners</p>
    </header>
    <div className="ownersContent">
      {owners.map((owner) => {
        return(
          <div className="ownerBox" key={owner.id}>
            <div className="ownerRow1">
              <div className="ownerProfile">
                <Io.IoMdPerson/>
                {owner.name}
              </div>
              <div className="ownerBoats">
                <p>Boats owned: {owner.boats.length}</p>
                <button onClick={() => setViewOwnerId(viewOwnerId === owner.id ? null : owner.id)} id={viewOwnerId === owner.id ? "activeView" : ""}>View boats <Ai.AiOutlineDown/></button>     
              </div>
            </div>
            <div className="ownerRow2" id={viewOwnerId === owner.id ? "open" : ""}>
                {owner.boats.map(boat => {
                    return(
                      <div className="boatItem">
                        <img src={boat.image} alt="" />
                        <p>ID: {boat.id}</p>
                        <p>Brand: {boat.brand}</p>
                      </div>
                    
                    )
                  })}
              </div>
          </div>

        )
      })}
    </div>
    </>
  )
}

export default Owners