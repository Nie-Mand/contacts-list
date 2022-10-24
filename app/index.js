import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  FlatList,
  View,
} from 'react-native'

import { useContacts } from './core/use-contacts'

function ContactsList({ data }) {
  console.log({
    data,
  })
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.displayName}
      renderItem={({ item }) => (
        <View key={item.displayName}>
          <Text>{item.displayName}</Text>
          {item.phoneNumbers.map(phone => (
            <Text key={phone.number}>{phone.number}</Text>
          ))}
        </View>
      )}
    />
  )
}

export default function App() {
  const { data, error, loading } = useContacts()

  if (loading) {
    return (
      <SafeAreaView>
        <StatusBar />
        <ScrollView>
          <View>
            <Text>Loading...</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

  if (error) {
    return (
      <SafeAreaView>
        <StatusBar />
        <ScrollView>
          <View>
            <Text>{error}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Contacts</Text>
      <ContactsList data={data} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})
