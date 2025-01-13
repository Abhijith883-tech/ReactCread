// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { getDateAPI, saveDateAPI } from '../services/allAPI.js';

// const Update = () => {
//   const { id } = useParams();
//   const navigation = useNavigate();
//   const [product, setProduct] = useState({
//     name: '',
//     price: '',
//     imgUrl: '',
//   });

//   useEffect(() => {
//     getProduct();
//   }, []);

//   const getProduct = async () => {
//     try {
//       const result = await getDateAPI();
//       if (result.status >= 200 && result.status < 300) {
//         const productData = result.data.find((item) => item.id === parseInt(id));
//         setProduct(productData);
//       } else {
//         console.log('API call failed');
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = async () => {
//     try {
//       const updatedProduct = await saveDateAPI(product); // Use the save API to update
//       console.log(updatedProduct);
//       alert('Product updated successfully');
//       navigation('/'); // Redirect to the home page
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="container my-4">
//       <div className="row">
//         <div className="col-md-8 mx-auto rounded border p-4">
//           <h2 className="text-center mb-5">Update Product</h2>

//           <form>
//             <div className="row mb-3">
//               <label className="col-sm-4 col-form-label">Name</label>
//               <div className="col-sm-8">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="name"
//                   value={product.name}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>

//             <div className="row mb-3">
//               <label className="col-sm-4 col-form-label">Price</label>
//               <div className="col-sm-8">
//                 <input
//                   type="number"
//                   className="form-control"
//                   name="price"
//                   value={product.price}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>

//             <div className="row mb-3">
//               <label className="col-sm-4 col-form-label">Image URL</label>
//               <div className="col-sm-8">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="imgUrl"
//                   value={product.imgUrl}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>

//             <div className="row">
//               <div className="offset-sm-4 col-sm-4 d-grid">
//                 <Button variant="primary" onClick={handleUpdate}>Update</Button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Update;
