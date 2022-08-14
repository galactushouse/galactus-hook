const useLocation = (): UseLocationReturn => {
  const getLocation = (name: LocationName['name']) => {
    if (!window) {
      return
    }

    return window.location[name]
  }

  const setLocation = (name: LocationName['name'], value: string) => {
    if (!window) {
      return
    }

    window.location[name] = value
  }

  return { getLocation, setLocation }
}

export default useLocation
