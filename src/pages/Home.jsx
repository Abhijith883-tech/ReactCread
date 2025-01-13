

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteDataAPI, getDateAPI } from '../services/allAPI.js';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

const Home = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getData();
  }, []);


  const getData = async () => {
    try {
      const result = await getDateAPI();
      if (result.status >= 200 && result.status < 300) {
        setAllData(result.data);
        
      } else {
        console.log('API call failed');
      }
    } catch (err) {
      console.log(err);
    }

  };

  const removeData = async (id) => {


    try {
      

      await deleteDataAPI(id)
      getData()
    } catch (err) {
      console.log(err);

    }
  }

  return (
    <>
      <div>
        <h2 style={{textAlign:'center'}}>Products</h2>
        <Link className="btn btn-info" to="/create">
          Create
        </Link>
        <Table style={{width:'50%',margin:'auto'}} striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {allData?.length > 0 ? (
              
              allData.map((video,index) => (
              
                <tr key={video.id}>
                 
                  <td>{index+1}</td>
                  <td>{video.name}</td>
                  <td>{video.price}</td>
                  <td>
                    <img
                      src={video.imgUrl}
                      
                      style={{ width: '100px' }}
                    />
                  </td>
                  <td>
                    <Link className="btn btn-info" to={`/create`}>
                      Update
                    </Link>
                   
                    <Button onClick={() => removeData(video?.id)} className="btn btn-danger">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No Data is Added...</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Home;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { deleteDataAPI, getDateAPI } from '../services/allAPI.js';
// import Table from 'react-bootstrap/Table';

// const Home = () => {
//   const [allData, setAllData] = useState([]);
//   const [loading, setLoading] = useState(false);  // Loading state
//   const [error, setError] = useState(null);  // Error state

//   useEffect(() => {
//     getData();
//   }, []);

//   // Fetch data from the API
//   const getData = async () => {
//     setLoading(true);  // Set loading to true when fetching
//     try {
//       const result = await getDateAPI();
//       if (result) {
//         setAllData(result);  // Set data if the API call is successful
//       } else {
//         setError('No data found.');
//       }
//     } catch (err) {
//       console.error('Error fetching data:', err);
//       setError('Something went wrong while fetching data.');
//     } finally {
//       setLoading(false);  // Set loading to false after data is fetched
//     }
//   };

//   // Remove data by id
//   const removeData = async (id) => {
//     console.log('Deleting product with ID:', id);  // Log the ID to ensure it's being passed
//     try {
//       await deleteDataAPI(id);
//       getData();  // Refresh the data after deletion
//     } catch (error) {
//       console.error('Error deleting product:', error);
//       setError('Failed to delete product: ' + error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Products</h2>
//       <Link className="btn btn-info" to="/create">
//         Create
//       </Link>
//       {loading ? (
//         <p>Loading...</p>  // Display loading message while data is fetching
//       ) : error ? (
//         <p style={{ color: 'red' }}>{error}</p>  // Display error message if there was an issue
//       ) : (
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Image</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {allData.length > 0 ? (
//               allData.map((product) => (
//                 <tr key={product.id}>
//                   <td>{product.name}</td>
//                   <td>{product.price}</td>
//                   <td>
//                     <img
//                       src={product.imgUrl}
//                       alt={product.name}
//                       style={{ width: '100px' }}
//                     />
//                   </td>
//                   <td>
//                     {/* <Link className="btn btn-info" to={/update/${product.id}}> */}
//                     <Link className="btn btn-info">
//                     Update
//                   </Link>
//                   <button
//                     onClick={() => removeData(product.id)}  // Call removeData function when clicked
//                     className="btn btn-danger"
//                   >
//                     Delete
//                   </button>
//                 </td>
//                 </tr>
//           ))
//           ) : (
//           <tr>
//             <td colSpan="4">No Data is Added...</td>
//           </tr>
//             )}
//         </tbody>
//         </Table>
//   )
// }
//     </div >
//   );
// };

// export default Home;
