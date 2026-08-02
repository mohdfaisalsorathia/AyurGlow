import { useEffect, useState } from 'react'

const LEAF_EMOJIS = ['🍃', '🌿', '☘️', '🌱']

export default function FloatingLeaves() {
  const [leaves, setLeaves] = useState([])

  useEffect(() => {
    const generated = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      emoji: LEAF_EMOJIS[i % LEAF_EMOJIS.length],
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 15}s`,
      duration: `${12 + Math.random() * 10}s`,
      size: `${0.6 + Math.random() * 0.8}rem`,
    }))
    setLeaves(generated)
  }, [])

  return (
    <>
      {leaves.map((leaf) => (
        <span
          key={leaf.id}
          className="leaf-particle"
          style={{
            left: leaf.left,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            fontSize: leaf.size,
          }}
        >
          {leaf.emoji}
        </span>
      ))}
    </>
  )
}
