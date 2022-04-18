import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import {ScrollView,Text} from 'react-native'
import { axiosClient } from '../apis/axiosClient';
import { fetchTodoAction } from '../redux/actions';

function ListTodo({navigation}) {
  const {user:{_id},token} = useSelector(state => state.user);
  const {listTodo} = useSelector(state => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    axiosClient.get(`/list/${_id}`,{
      headers:{
        Authorization:token
      }
    }).then(res => dispatch(fetchTodoAction(res.data)));
  },[_id])

  return (
    <ScrollView>
      {listTodo.length > 0 ? listTodo.map((todo) => <TodoItem navigation={navigation} key={todo._id} todo={todo} />) : <Text style={{color:'teal',marginTop:50}}>
        List todo đang trống. Nhấn vào biểu tượng dấu cộng bên phải phía dưới để thêm
        </Text>}
    </ScrollView>
  );
}

export default ListTodo;