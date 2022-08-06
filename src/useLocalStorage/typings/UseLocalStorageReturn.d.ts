interface UseLocalStorageReturn {
  readLocalStorage: (key: string) => string | null
  setLocalStorage: (key: string, value: unknown) => void
}
