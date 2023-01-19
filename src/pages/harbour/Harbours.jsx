// import { Link } from 'react-router-dom'
// import * as Io from 'react-icons/io'
// import '../../styles/harbourCSS/harbour.css'
// import facade from '../../apiFacade.js'
// import { useEffect, useState } from 'react'
// import * as Md from 'react-icons/md'


// const Harbour = () => {
//   const [harbours, setHarbours] = useState([])

//   useEffect(() => {
//     facade.fetchData("/boat/harbour", setHarbours, "GET")
//   }, [])
  
//   return (
//     <>

//     <header>
//       <Link to="/harbour" className='unlink'>
//         <Io.IoMdArrowBack className='arrowBack'/>
//       </Link>
//       <p>Harbours</p>
//     </header>
//       {harbours.map( harbour => {
//       return(
//         <div key={harbour.id} className="harbourBox">
//           <div className="topHarbourBox">
//             <Md.MdHolidayVillage/>
//             <p>{harbour.name}</p>
           
//           </div>
//           <div className="midHarbourBox">
//             <p><Md.MdLocationOn/>{harbour.address}</p>
//             <p>Harbour capacity: {harbour.capacity}</p>
//           </div>
//           <div className="bottomHarbourBox">
//             <p>Currently spots available: </p>
//             <h2>{harbour.capacity - harbour.boats.length}</h2>
//           </div>
//           <p>Boats:</p>
//           {harbour.boats.map ( boat => {
//             return(
//               <div key={boat.id} className="harbourBoats">
//                 <p>{boat.id}</p>
//                 <p>{boat.brand}</p>
//               </div>
//             )
//           })}
          
//         </div>
          
//       )
//     })}
//     </>
//   )
// }

// export default Harbour