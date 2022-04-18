import React from 'react';
import { View ,Text,StyleSheet} from 'react-native';
import FormRegister from '../components/FormRegister';

function RegisterScreen({navigation}) {
  return (
   <View style={styles.container} >
     <Text style={styles.title}>
         Đăng kí
     </Text>
     <FormRegister navigation={navigation} />
   </View>
  );
}

export default RegisterScreen;
const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    padding:10,
   

  },
  title:{
    color:'teal',
    fontSize:20,
    fontWeight:"bold",
   
  }
})