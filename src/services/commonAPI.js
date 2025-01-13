import axios from "axios"

const commonAPI =async (httpMethod, url, reqBody) => {
    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody
    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })

}
export default commonAPI

// import axios from 'axios';

// const commonAPI = async (method, url, data) => {
//   try {
//     const response = await axios({
//       method: method,
//       url: url,
//       data: data,
//     });
//     return response.data;  // Return the data from the API response
//   } catch (error) {
//     console.error('API error:', error.response || error);
//     throw new Error(error.response?.data?.message || error.message);
//   }
// };

// export default commonAPI;