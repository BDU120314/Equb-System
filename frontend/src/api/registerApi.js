import axios from "axios";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:5003/api/v1/users/signUp",
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
