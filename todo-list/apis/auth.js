import { axiosClient } from "./axiosClient";

export const loginAPi = async (email, password) => {
  console.log(email, password);
  try {
    const response = await axiosClient.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
export const registerApi = async (email, password, fullName) => {
  try {
    const response = await axiosClient.post("/auth/register", {
      email,
      password,
      fullName,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
