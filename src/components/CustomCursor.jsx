import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateRing = () => {
      setRingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }))
    }

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    window.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseover', handleMouseOver)

    const interval = setInterval(updateRing, 16)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      clearInterval(interval)
    }
  }, [position])

  return (
    <>
      <div
        className="cursor-dot"
        style={{ transform: `translate(${position.x - 4}px, ${position.y - 4}px)` }}
      />
      <div
        className="cursor-ring"
        style={{
          transform: `translate(${ringPosition.x - 17.5}px, ${ringPosition.y - 17.5}px) scale(${hovering ? 1.5 : 1})`,
          opacity: hovering ? 0.5 : 1,
        }}
      />
    </>
  )
}

export default CustomCursor
