interface UseLocalStorageReturn {
  addLocalStorage: (key: string, value: unknown, action: string) => void
  readLocalStorage: (key: string) => string | null | undefined
  removeLocalStorage: (key: string) => void
}
