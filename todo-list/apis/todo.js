import { axiosClient } from "./axiosClient";

export const addTodoApi = async (content, idUser, token) => {
  try {
    const res = await axiosClient.post(
      "/list/post",
      {
        content,
        idUser,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res.data;
  } catch (error) {
    throw new Error(error.responde.data);
  }
};

export const updateTodoApi = async (newTodo, id, token) => {
  try {
    const res = await axiosClient.put(`/list/${id}`, newTodo, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.responde.data);
  }
};

export const updateUserApi = async (newUser, id, token) => {
  try {
    const res = await axiosClient.put(`/users/${id}`, newUser, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
