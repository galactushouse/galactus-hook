const useLocation = (): UseLocationReturn => {
  const getLocation = ({ name }: GetLocationProps) => {
    if (!window) {
      return
    }

    return window.location[name]
  }

  return {}
}

export default useLocation
