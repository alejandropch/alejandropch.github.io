import { useState, useEffect, useRef } from 'react'
import('intersection-observer')

export function useNearScreen () {
  const [show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(() => {

      const observer = new IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      },{threshold:0.5})
      observer.observe(element.current)
  }, [element])

  return [show, element]
}
