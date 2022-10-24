import { StatusBar, StyleSheet, Text } from 'react-native'
import { Header } from '@rneui/themed'
import { ContactsProvider } from '@ctx'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Main from './main'

export default function App() {
  return (
    <ContactsProvider>
      <SafeAreaProvider>
        <StatusBar />
        <Header leftContainerStyle={styles.header}>
          <Text style={styles.labelText}>Contacts</Text>
        </Header>
        <Main />
      </SafeAreaProvider>
    </ContactsProvider>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
  },
  labelText: {
    color: 'white',
    fontSize: 20,
  },
})
