const useLocation = (): UseLocationReturn => {
  const getLocation = ({ name }: GetLocationProps) => {
    if (!window) {
      return
    }

    return window.location[name]
  }

  const setLocation = ({ name, value }: SetLocationProps) => {
    if (!window) {
      return
    }

    window.location[name] = value
  }

  return { getLocation, setLocation }
}

export default useLocation
