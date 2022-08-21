import { useState, useEffect } from 'react'

const useWindowScroll = (): UseWindowScrollReturn => {
  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)

  const handleWindowScroll = () => {
    const currentPositionX = window.pageXOffset
    const currentPositionY = window.pageYOffset

    setPositionX(currentPositionX)
    setPositionY(currentPositionY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [])

  return { positionX, positionY }
}

export default useWindowScroll
