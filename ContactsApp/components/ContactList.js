import * as React from "react";
import { SectionList, Text } from "react-native";
import { Row } from "./Row";
const renderItem =
  (navigation) =>
  ({ item }) =>
    <Row {...item} navigation={navigation} />;

const renderSectionHeader = ({ section: { title } }) => (
  <Text
    style={{
      color: "red",
    }}
  >
    {" "}
    {title}{" "}
  </Text>
);
export const ContactList = (props) => {
  const contactByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    };
  }, {});
  const sections = Object.keys(contactByLetter)
    .sort()
    .map((letter) => ({
      title: letter,
      data: contactByLetter[letter],
    }));
  return (
    <SectionList
      renderItem={renderItem(props.navigation)}
      renderSectionHeader={renderSectionHeader}
      sections={sections}
    />
  );
};
