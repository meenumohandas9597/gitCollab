import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverURL";

// ====================== DESTINATIONS ======================
export const getAllDestinationsAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/destinations`, "");
};

export const addDestinationAPI = async (destination) => {
  return await commonAPI("POST", `${SERVER_URL}/destinations`, destination);
};

export const editDestinationAPI = async (id, updatedData) => {
  return await commonAPI("PUT", `${SERVER_URL}/destinations/${id}`, updatedData);
};

export const deleteDestinationAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVER_URL}/destinations/${id}`, {});
};

// ====================== USERS ======================
export const getAllUsersAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/users`, "");
};

export const addUserAPI = async (userData) => {
  return await commonAPI("POST", `${SERVER_URL}/users`, userData);
};

// ====================== BOOKINGS ======================
export const getAllBookingsAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/bookings`, "");
};

// ====================== OVERVIEW ======================
export const getOverviewAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/overview`, "");
};
