// import React, { useState } from 'react'
// import { Link, redirect, useNavigate } from 'react-router-dom'
// import { Button } from 'react-bootstrap';
// import { saveDateAPI } from '../services/allAPI.js'
// const Create = () => {
//   const navigation=useNavigate()
//   const [adminInput, setAdminInput] = useState({
//     name: "", price: "", imgUrl: ""
//   })
//   console.log(adminInput);

//   const saveAdminForm = async () => {
    
    
//     const { name, price, imgUrl } = adminInput
   

//     if (name && price && imgUrl) {

//       try {
//         const result = await saveDateAPI(adminInput)
//         console.log(result);
//         if (result.status>=200 && result.status<300) {
//           alert('Data Added Sucessfully')
//           navigation('/')
//         }else{
//           console.log(result);
          
//         }
//       } catch (err) {
//         console.log(err);

//       }

//     } else {
//       alert('Error')
//     }
//   }


//   return (
//     <div className='container my-4'>
//       <div className='row'>
//         <div className='col-md-8 mx-auto rounded border p-4'>
//           <h2 className='text-center mb-5'>Create Product</h2>

//           <form>
//             <div className='row mb-3'>
//               <label className='col-sm-4 col-form-label'>Name</label>
//               <div className='col-sm-8'>
//                 <input onChange={e => setAdminInput({ ...adminInput, name: e.target.value })} className='form-control' name='name' />
//                 <span className='text-danger'></span>
//               </div>
//             </div>

//             <div className='row mb-3'>
//               <label className='col-sm-4 col-form-label'>Price</label>
//               <div className='col-sm-8'>
//                 <input onChange={e => setAdminInput({ ...adminInput, price: e.target.value })} className='form-control' name='price' />
//                 <span className='text-danger'></span>
//               </div>
//             </div>

//             <div className='row mb-3'>
//               <label className='col-sm-4 col-form-label'>Image</label>
//               <div className='col-sm-8'>
//                 <input onChange={e => setAdminInput({ ...adminInput, imgUrl: e.target.value })} className='form-control' name='image' />
//                 <span className='text-danger'></span>
//               </div>
//             </div>

//             <div className='row'>
//               <div className='offset-sm-4 col-sm-4 d-grid'>
//                 <Button variant="primary" onClick={saveAdminForm}>Add</Button>
//               </div>
//               <div className='col-sm-4 d-grid'>
//                 <Link className='btn btn-info' to={'/create'}>Update</Link>
//               </div>
//             </div>

//           </form>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Create

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { saveDateAPI } from '../services/allAPI.js';

// const Create = () => {
//   const navigation = useNavigate();
//   const [adminInput, setAdminInput] = useState({
//     name: '',
//     price: '',
//     imgUrl: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     price: '',
//     imgUrl: '',
//   });

//   const validateForm = () => {
//     let valid = true;
//     let newErrors = { name: '', price: '', imgUrl: '' };

//     if (!adminInput.name) {
//       newErrors.name = 'Name is required.';
//       valid = false;
//     }

//     if (!adminInput.price) {
//       newErrors.price = 'Price is required.';
//       valid = false;
//     } else if (isNaN(adminInput.price) || adminInput.price <= 0) {
//       newErrors.price = 'Price must be a positive number.';
//       valid = false;
//     }

//     if (!adminInput.imgUrl) {
//       newErrors.imgUrl = 'Image URL is required.';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const saveAdminForm = async () => {
//     if (validateForm()) {
//       try {
//         const result = await saveDateAPI(adminInput);
//         console.log(result);
//         if (result.status >= 200 && result.status < 300) {
//           alert('Data Added Successfully');
//           navigation('/');
//         } else {
//           console.log(result);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     } else {
//       alert('Please fix the errors in the form.');
//     }
//   };

//   return (
//     <div className='container my-4'>
//       <div className='row'>
//         <div className='col-md-8 mx-auto rounded border p-4'>
//           <h2 className='text-center mb-5'>Create Product</h2>

//           <form>
//             <div className='row mb-3'>
//               <label className='col-sm-4 col-form-label'>Name</label>
//               <div className='col-sm-8'>
//                 <input
//                   onChange={(e) => setAdminInput({ ...adminInput, name: e.target.value })}
//                   className='form-control'
//                   name='name'
//                 />
//                 <span className='text-danger'>{errors.name}</span>
//               </div>
//             </div>

//             <div className='row mb-3'>
//               <label className='col-sm-4 col-form-label'>Price</label>
//               <div className='col-sm-8'>
//                 <input
//                   type='number'
//                   onChange={(e) => setAdminInput({ ...adminInput, price: e.target.value })}
//                   className='form-control'
//                   name='price'
//                 />
//                 <span className='text-danger'>{errors.price}</span>
//               </div>
//             </div>

//             <div className='row mb-3'>
//               <label className='col-sm-4 col-form-label'>Image</label>
//               <div className='col-sm-8'>
//                 <input
//                   onChange={(e) => setAdminInput({ ...adminInput, imgUrl: e.target.value })}
//                   className='form-control'
//                   name='image'
//                 />
//                 <span className='text-danger'>{errors.imgUrl}</span>
//               </div>
//             </div>

//             <div className='row'>
//               <div className='offset-sm-4 col-sm-4 d-grid'>
//                 <Button variant="primary" onClick={saveAdminForm}>Add</Button>
//               </div>
//               <div className='col-sm-4 d-grid'>
//                 <Link className='btn btn-info' to={'/create'}>Update</Link>
//               </div>
//             </div>

//           </form>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Create;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { saveDateAPI } from '../services/allAPI.js';

const Create = () => {
  const navigation = useNavigate();
  const [adminInput, setAdminInput] = useState({
    name: '',
    price: '',
    imgUrl: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    price: '',
    imgUrl: '',
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: '', price: '', imgUrl: '' };

    // Validate name
    if (!adminInput.name) {
      newErrors.name = 'Name is required.';
      valid = false;
    }

    // Validate price
    if (!adminInput.price) {
      newErrors.price = 'Price is required.';
      valid = false;
    } else if (isNaN(adminInput.price) || adminInput.price <= 0) {
      newErrors.price = 'Price must be a positive number.';
      valid = false;
    }

    // Validate image URL
    const urlPattern = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;
    if (!adminInput.imgUrl) {
      newErrors.imgUrl = 'Image URL is required.';
      valid = false;
    } else if (!urlPattern.test(adminInput.imgUrl)) {
      newErrors.imgUrl = 'Please enter a valid image URL (e.g., http://example.com/image.jpg).';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const saveAdminForm = async () => {
    if (validateForm()) {
      try {
        const result = await saveDateAPI(adminInput);
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          alert('Data Added Successfully');
          navigation('/');
        } else {
          console.log(result);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('Please fix the errors in the form.');
    }
  };

  return (
    <div className='container my-4'>
      <div className='row'>
        <div className='col-md-8 mx-auto rounded border p-4'>
          <h2 className='text-center mb-5'>Create Product</h2>

          <form>
            <div className='row mb-3'>
              <label className='col-sm-4 col-form-label'>Name</label>
              <div className='col-sm-8'>
                <input
                  onChange={(e) => setAdminInput({ ...adminInput, name: e.target.value })}
                  className='form-control'
                  name='name'
                />
                <span className='text-danger'>{errors.name}</span>
              </div>
            </div>

            <div className='row mb-3'>
              <label className='col-sm-4 col-form-label'>Price</label>
              <div className='col-sm-8'>
                <input
                  type='number'
                  onChange={(e) => setAdminInput({ ...adminInput, price: e.target.value })}
                  className='form-control'
                  name='price'
                />
                <span className='text-danger'>{errors.price}</span>
              </div>
            </div>

            <div className='row mb-3'>
              <label className='col-sm-4 col-form-label'>Image</label>
              <div className='col-sm-8'>
                <input
                  onChange={(e) => setAdminInput({ ...adminInput, imgUrl: e.target.value })}
                  className='form-control'
                  name='image'
                />
                <span className='text-danger'>{errors.imgUrl}</span>
              </div>
            </div>

            <div className='row'>
              <div className='offset-sm-4 col-sm-4 d-grid'>
                <Button variant="primary" onClick={saveAdminForm}>Add</Button>
              </div>
              <div className='col-sm-4 d-grid'>
                <Link className='btn btn-info' to={'/create'}>Update</Link>
              </div>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Create;