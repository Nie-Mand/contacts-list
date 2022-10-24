import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native'
import { useContacts } from '@ctx'
import ContactsList from '@components/ContactsList'

export default function Main() {
  const { error, loading } = useContacts()

  if (loading) {
    return (
      <ScrollView>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      </ScrollView>
    )
  }

  if (error) {
    return (
      <ScrollView>
        <View>
          <Text>Error: {error}</Text>
        </View>
      </ScrollView>
    )
  }

  return <ContactsList />
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
})
