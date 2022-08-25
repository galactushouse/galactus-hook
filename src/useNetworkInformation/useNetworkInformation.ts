import { useState, useEffect } from 'react'

const useNetworkInformation = (): UseNetworkInformationReturn => {
  const [network, setNetwork] = useState({})

  const handleNetworkChange = () => {
    setNetwork(navigator.connection)
  }

  useEffect(() => {
    window.addEventListener('online', handleNetworkChange, { passive: true })
    window.addEventListener('offline', handleNetworkChange, { passive: true })

    return () => {
      window.removeEventListener('online', handleNetworkChange)
      window.removeEventListener('offline', handleNetworkChange)
    }
  }, [])

  return { network }
}

export default useNetworkInformation
