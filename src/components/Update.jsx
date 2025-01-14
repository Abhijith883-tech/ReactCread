
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

// const Update = () => {
//     const { id } = useParams()
//     const [values, setValues] = useState({
//         id: id, // Initialize with the actual id from the URL
//         name: '',
//         price: '',
//         imgUrl: '',
//     })

//     useEffect(() => {
//         axios.get('http://localhost:3000/users/' + id)
//             .then(res => {
//                 setValues({
//                     ...values,
//                     name: res.data.name,
//                     price: res.data.price,
//                     imgUrl: res.data.imgUrl,
//                 })
//             })
//             .catch(err => console.log(err))
//     }, [id]) // Add id as dependency to ensure it refetches if the id changes

//     const navigate = useNavigate()

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         axios.put('http://localhost:3000/users/' + id, values)
//             .then(res => {
//                 navigate('/') // Navigate to the home page after successful update
//             })
//             .catch(err => console.log(err))
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={values.name}
//                         onChange={e => setValues({ ...values, name: e.target.value })}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="price">Price</label>
//                     <input
//                         type="text"
//                         name="price"
//                         value={values.price}
//                         onChange={e => setValues({ ...values, price: e.target.value })}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="imgUrl">ImgUrl</label>
//                     <input
//                         type="text"
//                         name="imgUrl"
//                         value={values.imgUrl}
//                         onChange={e => setValues({ ...values, imgUrl: e.target.value })}
//                     />
//                 </div>
//                 <button className="btn btn-info" type="submit">Update</button>
//             </form>
//         </div>
//     )
// }

// export default Update


import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateDataAPI } from '../services/allAPI.js';  // Import the updateDataAPI function
import axios from 'axios'

const Update = () => {
    const { id } = useParams();
    const [values, setValues] = useState({
        id: id,  // Initialize the id from the URL parameter
        name: '',
        price: '',
        imgUrl: '',
    });

    useEffect(() => {
        // Fetch the current data for this user when the component mounts
        axios.get(`https://creadserver.onrender.com/users/${id}`)
            .then(res => {
                setValues({
                    ...values,
                    name: res.data.name,
                    price: res.data.price,
                    imgUrl: res.data.imgUrl,
                });
            })
            .catch(err => console.log(err));
    }, [id]);  // Re-fetch when `id` changes

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the update API function from allapi.js
            await updateDataAPI(id, values);
            navigate('/');  // Redirect to home after the update
        } catch (error) {
            console.error("Error during update:", error);
        }
    };

    return (
        <div className='container my-4'>
      <div className='row'>
      <div className='col-md-8 mx-auto rounded border p-4'>
      <form onSubmit={handleSubmit}>
                <div className='row mb-3'>
                    <label className='col-sm-4 col-form-label' htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        className='form-control'
                        onChange={e => setValues({ ...values, name: e.target.value })}
                    />
                </div>
                <div className='row mb-3'>
                    <label className='col-sm-4 col-form-label' htmlFor="price">Price</label>
                    <input
                        type="text"
                        name="price"
                        value={values.price}
                        className='form-control'
                        onChange={e => setValues({ ...values, price: e.target.value })}
                    />
                </div>
                <div className='row mb-3'>
                    <label htmlFor="imgUrl">ImgUrl</label>
                    <input
                        type="text"
                        name="imgUrl"
                        value={values.imgUrl}
                        className='form-control'
                        onChange={e => setValues({ ...values, imgUrl: e.target.value })}
                    />
                </div>
                <button className="btn btn-info" type="submit">Update</button>
            </form>
        </div>
        </div>
        </div>
    );
};

export default Update;

