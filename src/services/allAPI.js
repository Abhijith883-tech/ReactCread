

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

export const updateDataAPI = async (id, adminInput) => {
    try {
        if (!id || !adminInput || typeof adminInput !== "object") {
            throw new Error("Invalid ID or input data");
        }
        const response = await commonAPI("PUT", `${SERVICEURL}/users/${id}`, adminInput);
        return response;
    } catch (error) {
        console.error(`Error updating data for ID ${id}:`, error);
        throw error;
    }
};


