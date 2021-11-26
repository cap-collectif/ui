import { useState, useEffect } from 'react'

// pass a query like `(min-width: 768px)`
export function useMatchMedia(query: string) {
  const [matches, setMatches] = useState(() => matchMedia(query).matches)

  useEffect(() => {
    const mediaQueryList = matchMedia(query)
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches)

    // note 1: safari currently doesn't support add/removeEventListener so we use add/removeListener
    // note 2: add/removeListener are maybe marked as deprecated, but that could be wrong
    //         see https://github.com/microsoft/TypeScript/issues/32210
    mediaQueryList.addListener(onChange)
    return () => mediaQueryList.removeListener(onChange)
  }, [query])

  return matches
}
