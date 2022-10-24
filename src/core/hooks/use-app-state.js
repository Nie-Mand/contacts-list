import { AppState } from 'react-native'
import { useRef, useEffect, useState } from 'react'

export const useOnActive = cb => {
  const appState = useRef(AppState.currentState)
  const [state, setState] = useState(appState.current)

  const handleAppStateChange = next => {
    if (appState.current.match(/inactive|background/) && next === 'active') {
      if (cb) cb()
    }
    appState.current = next
    setState(appState.current)
  }

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange)
    return () => {
      AppState.removeEventListener('change', handleAppStateChange)
    }
  }, [])

  return { state }
}
