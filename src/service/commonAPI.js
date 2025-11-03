import axios from "axios";

export const commonAPI = async (method, url, data) => {
  try {
    const config = { method, url, data };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
