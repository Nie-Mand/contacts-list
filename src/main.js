import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { useContacts } from '@ctx'
import ContactsList from '@components/ContactsList'

export default function Main() {
  const { error, loading } = useContacts()

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (error) {
    return <Text>Error: {error}</Text>
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
