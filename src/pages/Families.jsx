import '../styles/families.css'
import * as Fa from 'react-icons/fa'
import { useEffect, useState } from 'react'
import facade from '../apiFacade.js'


const Families = () => {

  const [families, setFamilies] = useState([])

  useEffect(() => {
    facade.fetchData("/dinner/event", setFamilies, "GET")
    console.log(families)
  }, [])


  return (
    <>
    <div className="familiesBack">
      <div className="familyItem">
        <p className='familyTitle'>Copenhagen Runners</p>
        <div className="familyDetails">
          <div className="familyDate">
          <Fa.FaBaby/><p>Family born in 2002</p>
          </div>

        </div>
        <></>
      </div>
    </div>
    </>
  )
}

export default Families