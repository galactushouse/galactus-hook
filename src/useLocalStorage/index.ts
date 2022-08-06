import { useState, useMemo } from 'react'

const useLocalStorage = ({
  localStorageKey,
  localStorageValue
}: UseLocalStorageProps) => {
  const [initialValue, setInitialValue] = useState(localStorageValue)

  const readLocalStorage = useMemo(() => {
    if (!window) {
      return initialValue
    }

    try {
      const key = window.localStorage.getItem(localStorageKey)
      return key ? JSON.parse(key) : initialValue
    } catch (error) {
      console.warn(
        `Error when trying to set ${localStorageKey} key in localStorage`
      )
    }
  }, [initialValue])

  return { readLocalStorage, setInitialValue }
}

export default useLocalStorage
