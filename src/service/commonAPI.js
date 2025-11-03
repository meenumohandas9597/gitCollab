import axios from "axios";

export const commonAPI = async (method, url, data) => {
  try {
    const config = { method, url, data };
    const response = await axios(config);
    return { status: response.status, data: response.data };
  } catch (error) {
    console.error("API Error:", error);
    if (error.response) {
      return { status: error.response.status, data: error.response.data };
    }
    throw error;
  }
};
