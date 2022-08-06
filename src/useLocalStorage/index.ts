const useLocalStorage = (): UseLocalStorageReturn => {
  const readLocalStorage = (key: string) => {
    if (!window) {
      return null
    }

    try {
      const localStorageValue = window.localStorage.getItem(key)
      return localStorageValue ? localStorageValue : null
    } catch (error) {
      console.warn(`Error trying to read key ${key} in localStorage!`)
      return null
    }
  }

  const setLocalStorage = (key: string, value: unknown) => {
    if (!window) {
      return
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn(`Error when trying to set the key ${key} in localStorage!`)
    }
  }

  return { readLocalStorage, setLocalStorage }
}

export default useLocalStorage
