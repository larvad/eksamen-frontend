import React, { useEffect, useState } from 'react'
import CreateBoat from '../components/CreateBoat'
import '../styles/booking.css'
import facade from '../apiFacade.js'
import * as Md from 'react-icons/md'
import * as Io from 'react-icons/Io'
import * as Gi from 'react-icons/gi'

const Booking = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    facade.fetchData("/dinner/event", setEvents, "GET")
    console.log(events)
  }, [])

  
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
          </div>
          {/* {harbour.boats.map ( boat => {
            return(
              <div key={boat.id} className="harbourBoats">
                <p>{boat.id}</p>
                <p>{boat.brand}</p>
              </div>
            )
          })} */}
          
        </div>
          
      )
    })}
      

      

    </div>
  )
}

export default Booking