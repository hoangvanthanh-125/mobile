import { loginAPi } from "../apis/auth";
export const LOGIN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOGIN_FAILED= 'LOG_IN_FAILED';
export const ADD_TODO = 'ADD_TODO';
export const FETCH_TODO ='FETCH_TODO';
export const DELETE_TODO ='DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_USER = 'UPDATE_USER';
export const LOG_OUT = " LOG_OUT";
 
export const loginAction = (email,password) => async (dispatch) => {
  try {
    const {user,token} = await loginAPi(email,password);
    dispatch({
      type:LOGIN_SUCCESS,
      payload: {
        user,
        token
      },
    });
  
  } catch (error) {
     dispatch({
       type:LOGIN_FAILED,
       payload:{
         error:error.message
       }
     })
  }
};

export const updateUserAction = (newUser) => {
 return {
   type:UPDATE_USER,
   payload:{
     newUser
   }
 }
}

export const logoutAction = () => {
  return {
    type:LOG_OUT,
  }
}
export const addTodoAction = (todo) => {
  return {
    type:ADD_TODO,
    payload:{
      todo
    }
  }
}
export const fetchTodoAction = (listTodo) => {
return{
  type:FETCH_TODO,
  payload:{
    listTodo
  }
}
}
export const deleteTodo = (id) => {
  return {
    type:DELETE_TODO,
    payload:{
      id
    }
  }
}
export const updateTodoAction = (id,newTodo) => {
  return {
    type:UPDATE_TODO,
    payload:{
      id,
      newTodo
    }
  }
} 