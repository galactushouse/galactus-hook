interface UseLocationReturn {
  getLocation: (name: LocationName['name']) => void
  setLocation: (name: LocationName['name'], value: string) => void
}
