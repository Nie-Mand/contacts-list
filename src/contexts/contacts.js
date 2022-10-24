import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useRef,
} from 'react'

import { useLoadContacts, useOnActive } from '@hooks'
import { sortedContacts } from '@utils'

const ContactsContext = createContext()

export function useContacts() {
  return useContext(ContactsContext)
}

export const useSelectCharacter = () => {
  const { selectCharacter, selected } = useContacts()
  return { selected, selectCharacter }
}

export function ContactsProvider({ children }) {
  const { data, error, loading, load } = useLoadContacts()
  useOnActive(load)

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
    if (!selected) return sortedContacts(data)
    return sortedContacts(
      data.filter(
        contact =>
          contact.displayName.toLowerCase()[0] === selected.toLowerCase()
      )
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
