import contacts from 'react-native-contacts'
import { PermissionsAndroid } from 'react-native'
import { useEffect, useState } from 'react'
import { hydrateData } from '../utils'

export function useContacts() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const contactPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
          }
        )

        if (contactPermission === PermissionsAndroid.RESULTS.GRANTED) {
          const contactsList = await contacts.getAll()
          setData(contactsList.map(hydrateData))
        } else {
          setError('You need to give us permission to see your contacts')
        }
      } catch (err) {
        console.log(err)
        setError('An error occurred while trying to load your contacts')
      }

      setLoading(false)
    }

    load()
  }, [])

  return {
    data,
    loading,
    error,
  }
}
