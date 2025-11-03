import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverURL";


// get all destinations
export const getAllDestinationsAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/destinations`, "");
};

// add destination
export const addDestinationAPI = async (destination) => {
  return await commonAPI("POST", `${SERVER_URL}/destinations`, destination);
};

// edit destination
export const editDestinationAPI = async (id, updatedData) => {
  return await commonAPI("PUT", `${SERVER_URL}/destinations/${id}`, updatedData);
};

// delete destination
export const deleteDestinationAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVER_URL}/destinations/${id}`, {});
};
