import { useEffect, useState } from 'react'

/**
 * Animated typing effect that cycles through an array of strings.
 */
const TypingEffect = ({ roles, speed = 100, deleteSpeed = 50, pauseTime = 1500 }) => {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timer

    if (!isDeleting && text === currentRole) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && text === '') {
      // Move to next role
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      // Type or delete character
      timer = setTimeout(() => {
        setText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1)
        )
      }, isDeleting ? deleteSpeed : speed)
    }

    return () => clearTimeout(timer)
  }, [text, isDeleting, roleIndex, roles, speed, deleteSpeed, pauseTime])

  return (
    <span className="gradient-text">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypingEffect
