import axios from "axios";

export const axiosClient = axios.create({
  baseURL:'https:/todolist-125.herokuapp.com'
})

