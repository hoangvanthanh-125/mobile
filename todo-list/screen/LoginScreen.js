import React from 'react';
import { View ,Text,StyleSheet} from 'react-native';
import FormLogin from '../components/FormLogin';

function LoginScreen({navigation,route}) {
  return (
   <View style={styles.container} >
     <Text style={styles.title}>
         Đăng nhập
     </Text>
     <FormLogin navigation={navigation} params={route.params} />
   </View>
  );
}

export default LoginScreen;
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