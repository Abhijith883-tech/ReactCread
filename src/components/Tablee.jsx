// import React, { useEffect, useState } from 'react'
// import { deleteDataAPI, getDateAPI } from '../services/allAPI.js';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

// const Tablee = () => {
//     const [allData, setAllData] = useState([]);

//     useEffect(() => {
//         getData();
//     }, []);
//     const getData = async () => {
//         try {
//             const result = await getDateAPI();
//             if (result.status >= 200 && result.status < 300) {
//                 setAllData(result.data);
//             } else {
//                 console.log('API call failed');
//             }
//         } catch (err) {
//             console.log(err);
//         }

//     };
//     const removeData = async (id) => {


//         try {
//             await deleteDataAPI(id)
//             getData()
//         } catch (err) {
//             console.log(err);

//         }
//     }
//     return (
//         <>
//             {allData?.length > 0 ? (
//                 allData.map((dataa, index) => (
//                     <div key={dataa.id} style={{
//                         width: '300px',
//                         border: '1px solid #ccc',
//                         borderRadius: '8px',
//                         overflow: 'hidden',
//                         boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'  // Increased the shadow effect
//                     }}>
//                         <img src={dataa.imgUrl} alt="Kitten" style={{ width: '100%', height: '200px' }} />
//                         <div style={{ padding: '16px' }}>
//                             <h3 style={{ margin: '0', fontSize: '18px', color: '#333' }}>Name : {dataa.name}</h3>
//                             <p style={{ margin: '8px 0 0', fontSize: '16px', color: '#777' }}>Price : {dataa.price}</p>
//                             <Link style={{ padding: '10px 20px' }} className="btn btn-info" to={`/update/${dataa.id}`}>
//                                 Update
//                             </Link>
//                             <Button onClick={() => removeData(dataa?.id)} className="btn btn-danger" style={{ padding: '10px 20px', marginLeft: '60px' }}>
//                                 Delete
//                             </Button>
//                         </div>
//                     </div>
                    
//                 ))

//             ) : (
//                 <div>No data</div>
//             )}



//         </>

//     )
// }

// export default Tablee

import React, { useEffect, useState } from 'react'
import { deleteDataAPI, getDateAPI } from '../services/allAPI.js';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Tablee.css'; // Import the CSS file

const Tablee = () => {
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
    };

    return (
        <>
            {allData?.length > 0 ? (
                allData.map((dataa, index) => (
                    <div key={dataa.id} className="card-container">
                        <img src={dataa.imgUrl} alt="Kitten" className="card-img" />
                        <div className="card-content">
                            <h3 className="card-title">Name : {dataa.name}</h3>
                            <p className="card-price">Price : {dataa.price}</p>
                            <div className="card-buttons">
                                <Link className="btn btn-info" to={`/update/${dataa.id}`}>
                                    Update
                                </Link>
                                <Button onClick={() => removeData(dataa?.id)} className="btn btn-danger">
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>No data</div>
            )}
        </>
    )
}

export default Tablee;
