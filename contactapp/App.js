import * as React from 'react';
import { Text, View, StyleSheet ,ScrollView,Button,FlatList,SectionList,Pressable} from 'react-native';
import Constants from 'expo-constants';
import {Row} from './components/Row'
import { Card } from 'react-native-paper';
import contacts from './components/contact'
import {ContactList} from './components/ContactList'
import {compareName} from './components/contact'
import FormAddContact from './components/FormAddContact'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      contacts,
      showContact:true
    }
  }
  toggleContact = () => {
    this.setState(prev =>({
      ...prev,
      showContact:!prev.showContact
      
    }))
   
  }
  sortList = () => {
    this.setState(prev => ({
      ...prev,
      contacts:[...prev.contacts].sort(compareName)
    }))
  }
  
 render(){
    return (
    <View style={styles.container}>
    <Button style={{backgroundColor:'red'}} title = 'sort' onPress={this.sortList} />
    <Button  style={styles.button} title = 'toggle' onPress={this.toggleContact} />
    <FormAddContact />
  
 {this.state.showContact && <ContactList contacts={this.state.contacts} />}
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button:{
  marginBottom:20,
  backgroundColor:'red'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
