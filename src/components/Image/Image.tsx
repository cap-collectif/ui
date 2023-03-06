import * as React from 'react'
import { Box, BoxProps } from '../box'
import getBaseUrl from '../../utils/getBaseUrl'

export interface ImageProps
  extends BoxProps,
    Pick<HTMLImageElement, 'src' | 'alt'> {
  readonly isDevOrTest: boolean
}

const Image: React.FC<ImageProps> = ({ src, alt, isDevOrTest, ...props }) => {
  if (!src) {
    return null
  }
  const baseUrl = getBaseUrl()
  return !isDevOrTest ? (
    <Box
      as="img"
      loading="lazy"
      srcSet={`
        ${baseUrl}/cdn-cgi/image/width=320,format=auto/${src}   320w,
         ${baseUrl}/cdn-cgi/image/width=640,format=auto/${src}   640w,
         ${baseUrl}/cdn-cgi/image/width=960,format=auto/${src}   960w,
         ${baseUrl}/cdn-cgi/image/width=1280,format=auto/${src} 1280w,
         ${baseUrl}/cdn-cgi/image/width=2560,format=auto/${src} 2560w,
         ${baseUrl}/cdn-cgi/image/dpr=2,format=auto/${src} 2x,
         ${baseUrl}/cdn-cgi/image/dpr=3,format=auto/${src} 3x,
         `}
      alt={alt}
      {...props}
    />
  ) : (
    <Box as="img" loading="lazy" src={src} alt={alt} {...props} />
  )
}

export default Image
