import { useState, useEffect } from 'react'

export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const updateWindowDimensions = () => setWidth(window.innerWidth)
    window.addEventListener('resize', updateWindowDimensions)
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  return {
    width
  }
}
