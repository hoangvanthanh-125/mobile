import * as React from 'react';
import { Button,TextInput,View,StyleSheet} from 'react-native';
export default class FormAddContact extends React.Component{
  constructor(props){
    super(props)
    this.state={
    name:'',
    phone:''
  }
  }
  
  changeName = (name) => this.setState({name});
  changePhone = (phone) => this.setState({phone}); 
  submit = ( ) => {
    this.props.addContact({
      phone:this.state.phone,
      name:this.state.name
    })
  }
  render(){
    return (
      <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={this.changeName} placeholder="Nhập tên " />
      <TextInput  style={styles.input} onChangeText={this.changePhone} keyboardType='numeric' placeholder="Nhập số điện thoại" />
      <Button title='Add' onPress={this.submit} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
 input:{
   borderColor:'black',
   borderWidth:1,
   marginTop:10,
   marginBottom:10
 },
 container:{
   padding:10
 }
});
