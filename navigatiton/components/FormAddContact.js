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
    this.props.navigation.navigate('contact')
  }
  render(){
    return (
      <View>
      <TextInput style={styles.input} onChangeText={this.changeName} />
      <TextInput  style={styles.input} onChangeText={this.changePhone} keyboardType='numeric'  />
      <Button title='Add' onPress={this.submit} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
 input:{
   borderColor:'black',
   borderWidth:1
 }
});
