// import React from 'react'
// import facade from '../../apiFacade.js'

// const Admin = () => {
//     const [brand, setBrand] = useState('');
//     const [image, setImage] = useState('');
//     const [make, setMake] = useState('');
//     const [harbourId, setHarbourId] = useState('');
//     const [ownerId, setOwnerId] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
    
//         facade.fetchData()
//         axios.post('/api/items', {
//           brand,
//           image,
//           make,
//           harbourId,
//           ownerId
//         })
//         .then(res => {
//           console.log(res.data);
//         })
//         .catch(err => {
//           console.error(err);
//         });
//       };

//   return (
//     <>

//     <p>Admin Dashboard</p>

//     <div className="createBoat">

//     </div>
    
    
//     </>
//   )
// }

// export default Admin