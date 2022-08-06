interface UseLocalStorageReturn {
  readLocalStorage: (key: string) => string | null | undefined
  setLocalStorage: (key: string, value: unknown) => void
  removeLocalStorage: (key: string) => void
}
