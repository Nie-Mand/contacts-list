import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react'
import { useLoadContacts } from '@hooks/use-contacts'

const ContactsContext = createContext()

export function useContacts() {
  return useContext(ContactsContext)
}

export const useSelectCharacter = () => {
  const { selectCharacter, selected } = useContacts()
  return { selected, selectCharacter }
}

export function ContactsProvider({ children }) {
  const { data, error, loading } = useLoadContacts()

  const [selected, setSelected] = useState('')

  const selectCharacter = useCallback(
    character => {
      if (selected === character) {
        setSelected('')
      } else {
        setSelected(character)
      }
    },
    [selected, setSelected]
  )

  const contacts = useMemo(() => {
    if (!selected) return data
    return data.filter(
      contact => contact.displayName.toLowerCase()[0] === selected.toLowerCase()
    )
  }, [data, selected])

  const value = useMemo(() => {
    return {
      contacts,
      error,
      loading,
      selected,
      selectCharacter,
    }
  }, [selected, contacts, error, loading, selectCharacter])

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  )
}
