import React, { useEffect, useState } from 'react'
import CreateBoat from '../components/CreateBoat'
import '../styles/booking.css'
import '../styles/harbourCSS/owners.css'
import facade from '../apiFacade.js'
import * as Md from 'react-icons/md'
import * as Io from 'react-icons/Io'
import * as Gi from 'react-icons/gi'
import * as Ai from 'react-icons/ai'

const Booking = ({userDetails, setUserDetails, username}) => {

  const [events, setEvents] = useState([])
  const [viewEventId, setViewEventId] = useState(null);
  const [user, setUser] = useState({user: username})
  const [selectedFamily, setSelectedFamily] = useState(null)
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('')
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
 
    facade.fetchData("/dinner/event", setEvents, "GET")
    facade.fetchData("/dinner/user", setUserDetails, "POST", user)
    console.log(events)

    const selectedEvent = events.find(event => event.id === viewEventId);
    if(selectedEvent) setTotalPrice((selectedMembers.length + 1) * selectedEvent.price)
    else setTotalPrice(0);
    
  }, [selectedMembers, viewEventId])


  function handleBookEvent() {
    const selectedEvent = events.find(event => event.id === viewEventId);
    const eventId = selectedEvent.id;
    const price = (selectedMembers.length + 1) * selectedEvent.price;
    const family = selectedFamily;
    const members = selectedMembers;
  
    const data = {
      eventId,
      price,
      family,
      members,
      user,
    };
    console.log(data)
  
  }



  const handleAddMember = () => {
    if(selectedUser !== "") {
      if(!selectedMembers.includes(selectedUser)) {
        setSelectedMembers([...selectedMembers, selectedUser]);
      }
    } else {
      alert("Please select a member to add!");
    }
  };
  
  return (
    <div className="dashboardBack">
      <div className="eventTitle">
        <p>Booking</p>
      </div>
    {events.map( event => {
      return(
        <div key={event.id} className="event">
            <img src={event.image}></img>
            <p className='name'>{event.name}</p>
          <div className="eventItems">
            <div className="eventItem">
            <Md.MdLocationOn/><p>{event.location}</p>
            </div>
            <div className="eventItem">
            <Gi.GiForkKnifeSpoon/> <p>{event.dish}</p>
            </div>
            <div className="eventItem">
            <Io.IoMdTime/> <p>{event.time}</p>
            </div>
            <div className="eventItem">
            <Io.IoMdPricetag/><p>{event.price} dk</p>
            </div>
            <button className='viewButton' onClick={() => setViewEventId(viewEventId === event.id ? null : event.id)} id={viewEventId === event.id ? "activeView" : ""}>Book event<Ai.AiOutlineDown/></button>  
          </div>
       
          <div className="bookEvent" id={viewEventId === event.id ? "open" : ""}>
            {/* <button onClick={() => console.log(userDetails)}></button>
             */}
            <div className='selectForBooking'>
              <div className="bookingSelect">
                <label>Din familie</label>
                <select value={selectedFamily} onChange={event => setSelectedFamily(event.target.value)}>
                  <option value="" disabled>Vælg en familie</option>
                    {userDetails.assignments.map(assignment => (
                      <option key={assignment.id} value={assignment.id}>
                        {assignment.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="bookingSelect">
                <div>
                  <label>Tilføj fra familie</label>
                  <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)} className="select2">
                    <option value="" disabled>Vælg et medlem</option>
                    {userDetails.assignments.map(assignment => (
                      assignment.users.map(user => (
                        <option key={user.userName} value={user.userName} disabled={username === user.userName}>
                          {username !== user.userName ? user.userName : ""}
                        </option>
                      ))
                    ))}
                  </select>

                  <button className='memberButton' onClick={() => handleAddMember(selectedUser)}>
                    Tilføj +
                  </button>

                  <div className='memberlist'>
                    <label>Valg af medlemmer</label>
                    <ul>
                      {selectedMembers.map(member => (
                        <li key={member}>{member}</li>
                      ))}
                    </ul>
                    <button className='clearButton' onClick={() => setSelectedMembers([])}>
                      Ryd liste
                    </button>
                  </div>
                </div>
              </div>
                <div className="total-price">Total pris: {totalPrice} DK</div>
                <button onClick={handleBookEvent} className='finalBook'>Gennemfør booking</button>


            </div> 
          </div>
        </div>
         
          
      
          
      )
    })}
      

      

    </div>
  )
}

export default Booking