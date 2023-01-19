// import React, { useEffect, useState } from 'react'
// import * as Io from 'react-icons/io'
// import { Link } from 'react-router-dom'
// import facade from '../../apiFacade.js'

// const Boats = () => {

//   const [boats, setBoats] = useState([])

//   useEffect(() => {
//     facade.fetchData("/boat/boats", setBoats, "GET")
//   }, [])

//   return (
//     <>
//     <header>
//       <Link to="/harbour" className='unlink'>
//         <Io.IoMdArrowBack className='arrowBack'/>
//       </Link>
//       <p>Boats</p>
//     </header>
//     {boats.map(boat => {
//         return(
//         boat.brand
//       )})}
  

//     </>
//   )
// }

// export default Boats