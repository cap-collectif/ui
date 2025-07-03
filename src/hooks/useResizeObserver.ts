import { useEffect, useRef, useState } from 'react'

type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>

export default function useResizeObserver(): Array<any> {
  const ref = useRef<any>(null)
  const [rect, setRect] = useState<ObserverRect>()

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (ref.current) {
        const boundingRect = ref.current.getBoundingClientRect()
        setRect(boundingRect)
      }
    })
    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref])

  return [ref, rect]
}
