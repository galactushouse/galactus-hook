const useLocalStorage = (): UseLocalStorageReturn => {
  const readLocalStorage = (key: string) => {
    if (!window) {
      return
    }

    try {
      const localStorageValue = window.localStorage.getItem(key)
      return localStorageValue ? localStorageValue : null
    } catch (error) {
      console.warn(`Error trying to read key ${key} in localStorage: `, error)
      return
    }
  }

  const setLocalStorage = (key: string, value: unknown) => {
    if (!window) {
      return
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      return
    } catch (error) {
      console.warn(
        `Error when trying to set the key ${key} in localStorage:`,
        error
      )
      return
    }
  }

  const removeLocalStorage = (key: string) => {
    if (!window) {
      return
    }

    try {
      window.localStorage.removeItem(key)
      return
    } catch (error) {
      console.warn(`Error trying to delete key ${key} in localStorage:`, error)
      return
    }
  }

  return { readLocalStorage, setLocalStorage, removeLocalStorage }
}

export default useLocalStorage
