const useLocalStorage = (): UseLocalStorageReturn => {
  const setLocalStorage = (key: string, value: unknown, action: string) => {
    if (!window) {
      return
    }

    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      return
    } catch (error) {
      console.warn(
        `Error when trying to ${action} the key ${key} in localStorage:`,
        error
      )
      return
    }
  }

  const addLocalStorage = (key: string, value: unknown) => {
    setLocalStorage(key, value, 'create')
  }

  const editLocalStorage = (key: string, value: unknown) => {
    setLocalStorage(key, value, 'edit')
  }

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

  return {
    addLocalStorage,
    editLocalStorage,
    readLocalStorage,
    removeLocalStorage
  }
}

export default useLocalStorage
