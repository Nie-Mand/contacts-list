import { Text, View, StyleSheet } from 'react-native'
import { useMemo } from 'react'
import { useContacts } from '@ctx'
import { letterButtonsGroup } from './LettersButton'
import { ListItem, Avatar, ButtonGroup } from '@rneui/themed'
import { getInitials } from '@utils'

export default function ContactsList() {
  const { contacts } = useContacts()
  const buttons = useMemo(() => letterButtonsGroup(), [])

  return (
    <View>
      <ButtonGroup
        buttons={buttons}
        innerBorderStyle={buttonGroupStyles.innerBorder}
        containerStyle={buttonGroupStyles.container}
      />
      {contacts.map((contact, idx) => (
        <ListItem key={contact.displayName + idx.toString()}>
          <Avatar
            rounded
            title={getInitials(contact.displayName)}
            containerStyle={listItemsStyles.avatarContainer}
            titleStyle={listItemsStyles.avatarTitle}
          />
          <ListItem.Content>
            <Text>{contact.displayName}</Text>
            {contact.phoneNumbers.map(phone => (
              <Text key={phone.number}>{phone.number}</Text>
            ))}
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  )
}

const buttonGroupStyles = StyleSheet.create({
  innerBorder: {
    color: 'transparent',
  },
  container: {
    borderColor: 'transparent',
  },
})

const listItemsStyles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: 'red',
  },
  avatarTitle: {
    fontSize: 12,
  },
})
