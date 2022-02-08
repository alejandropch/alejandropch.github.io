import { useState, useEffect, useRef } from 'react'

export default function useNearScreen () {
  const [show, setShow] = useState(false)
  const element = useRef<HTMLDivElement>(null)
  useEffect(():any => {
      const observer = new IntersectionObserver((entries) => {
          
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      // ! is a way to say to TS this value will never be null
      observer.observe(element.current!)
      return ()=>observer.disconnect()  
    }, [element])

  return [show, element]
}
