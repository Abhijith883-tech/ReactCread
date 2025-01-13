

import commonAPI from "./commonAPI";
import SERVICEURL from "./serviceURL";

// Save function
export const saveDateAPI = async (adminInput) => {
    return await commonAPI("POST", `${SERVICEURL}/users`, adminInput);
};

// Get function
export const getDateAPI = async () => {
    return await commonAPI("GET", `${SERVICEURL}/users`, "");
};

export const deleteDataAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVICEURL}/users/${id}`, {});
};

// export const saveDateAPI = async (adminInput, id = null) => {
//     const method = id ? 'PUT' : 'POST'; // Use PUT for updating
//     const url = id ? `${SERVICEURL}/users/${id}` : `${SERVICEURL}/users`;
//     return await commonAPI(method, url, adminInput);
//   };

// export const deleteDataAPI = async (id) => {
//     try {
//       const response = await commonAPI("DELETE", `${SERVICEURL}/users/${id}`, {});
//       return response;  // Assuming the server returns the deleted resource or success status
//     } catch (error) {
//       console.error('Error deleting data:', error);
//       throw new Error('Failed to delete data: ' + error.message);
//     }
//   };

