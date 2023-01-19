import React, { useState } from 'react';
import facade from '../apiFacade.js'

function CreateBoat() {
  // const [formData, setFormData] = useState({
  //   brand: '',
  //   imageurl: '',
  //   harbourid: '',
  //   ownerid: ''
  // });

  // const handleChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value
  //   });
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   //submit formData to server or process it here
  //   console.log(formData);
  //   facade.fetchData(`/boat/createBoat`, () => alert("Boat has been created successfully"), "POST", formData)
  // }

  return (<></>
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Brand:
    //     <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
    //   </label>
    //   <br />
    //   <label>
    //     Image URL:
    //     <input type="text" name="imageurl" value={formData.imageurl} onChange={handleChange} />
    //   </label>
    //   <br />
    //   <label>
    //     Harbour ID:
    //     <input type="text" name="harbourid" value={formData.harbourid} onChange={handleChange} />
    //   </label>
    //   <br />
    //   <label>
    //     Owner ID:
    //     <input type="text" name="ownerid" value={formData.ownerid} onChange={handleChange} />
    //   </label>
    //   <br />
    //   <input type="submit" value="Submit" />
    // </form>
  );
}
export default CreateBoat;
