import axios from "axios";

export const loginUser = async (phone_number, password) => {
  try {
    const response = await axios.post("http://localhost:5003/api/v1/login/", {
      phone_number,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
