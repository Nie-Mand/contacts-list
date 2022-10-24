import { Text, StyleSheet } from 'react-native'
import { useCallback } from 'react'
import { useSelectCharacter } from '@ctx'

function LetterButton({ letter }) {
  const { selected, selectCharacter } = useSelectCharacter()

  const onPress = useCallback(() => {
    selectCharacter(letter)
  }, [selectCharacter, letter])

  return (
    <Text
      style={[styles.text, selected === letter && styles.selected]}
      onPress={onPress}
    >
      {letter}
    </Text>
  )
}

export function letterButtonsGroup() {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    .split('')
    .map(letter => <LetterButton letter={letter} />)
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
  selected: {
    color: 'blue',
    fontWeight: 'bold',
  },
})
