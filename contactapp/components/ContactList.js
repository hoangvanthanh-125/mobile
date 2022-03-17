import * as React from 'react';
import { Text, View, StyleSheet ,ScrollView,Button,FlatList,SectionList} from 'react-native';
import Constants from 'expo-constants';
import {Row} from './Row'
const renderItem = ({item}) =>(<Row {...item} />)
const renderSectionHeader = ({section:{title}}) => <Text style={{color:'red'}}>{title}</Text>
export const ContactList = (props) =>{ 
const contactByLetter = props.contacts.reduce((obj,contact) => {
  const firstLetter = contact.name[0].toUpperCase();
  return {
    ...obj,
    [firstLetter]:[...(obj[firstLetter] || []),contact]
  }
},{})
const sections = Object.keys(contactByLetter).sort().map(letter => ({
  title:letter,
  data:contactByLetter[letter]
}))
return (  <SectionList
   renderItem={renderItem}
   renderSectionHeader={renderSectionHeader}
    sections={sections} />)
}