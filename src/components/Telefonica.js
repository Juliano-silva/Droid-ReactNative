import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView,ImageBackground } from 'react-native';
import {TelefonicaBk,NameText,NumText,CorpoTele} from './Styles/StyleTelefonica'
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';

export default function Telefonica() {
  let [error, setError] = useState(undefined);
  let [contacts, setContacts] = useState(undefined);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [ Contacts.Fields.Birthday, Contacts.Fields.Emails, Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers]
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  let getContactData = (data, property) => {
    if (data) {
      return data.map((data, index) => {
        return (
          <View key={index}>
            <Text>{data.label}: {data[property]}</Text>
          </View>
        )
      });
    }
  }

  let getContactRows = () => {
    if (contacts !== undefined) {
      return contacts.map((contact, index) => {
        return (
          <CorpoTele>
            <NameText>Nome: {contact.firstName} {contact.lastName}</NameText>
            <NumText>
            {getContactData(contact.phoneNumbers, "number")}
            </NumText>
            {getContactData(contact.emails, "email")}
          </CorpoTele>
        );
      });
    }
  }

  return (
    <SafeAreaView >
      <TelefonicaBk source={require("../../assets/Arquivos/24.jpg")}>
      <ScrollView>
        {getContactRows()}
      </ScrollView>
      </TelefonicaBk>
    </SafeAreaView>
  );
}
