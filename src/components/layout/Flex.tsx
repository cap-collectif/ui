import { themeGet } from '@styled-system/theme-get'
import * as React from 'react'
import { FlexboxProps } from 'styled-system'

import { useTheme } from '../../hooks'
import { CapUIFontFamily } from '../../styles'
import { cleanChildren, hasProps } from '../../utils/jsx'
import { BoxOwnProps, Box, PolymorphicComponent } from '../box'

export interface FlexOptions {
  align?: FlexboxProps['alignItems']
  justify?: FlexboxProps['justifyContent']
  wrap?: FlexboxProps['flexWrap']
  direction?: FlexboxProps['flexDirection']
  basis?: FlexboxProps['flexBasis']
  grow?: FlexboxProps['flexGrow']
  shrink?: FlexboxProps['flexShrink']
  spacing?: number | string
}

export type FlexProps = Omit<
  BoxOwnProps,
  | 'flexDirection'
  | 'alignItems'
  | 'justifyContent'
  | 'flexWrap'
  | 'flexBasis'
  | 'flexGrow'
  | 'spacing'
> &
  FlexOptions

const getChildren = (children: React.ReactNode) => {
  const style = {
    marginLeft: 0,
    marginTop: 0,
  }
  if (!children || typeof children === 'string') {
    return children
  }

  if (Array.isArray(children)) {
    return cleanChildren<any>(children).map((c, i) =>
      React.cloneElement(c, {
        ...(i === 0 ? { style } : {}),
      }),
    )
  }

  if (hasProps(children)) {
    return React.cloneElement(children as React.ReactElement, { style })
  }

  return children
}

export const Flex: React.FC<FlexProps> = React.forwardRef<
  HTMLElement,
  FlexProps
>((props, ref) => {
  const {
    direction = 'row',
    align,
    justify,
    wrap,
    basis,
    grow,
    sx,
    spacing: userSpacing,
    display = 'flex',
    children,
    ...rest
  } = props
  const theme = useTheme()
  const spacing = (themeGet(
    `space.${userSpacing}`,
    userSpacing ?? 0,
  )({ theme }) as unknown) as number
  const styles = {
    ...(spacing
      ? {
          '& > *': {
            ...(typeof direction === 'string' &&
              direction === 'row' && { marginLeft: spacing }),
            ...(typeof direction === 'string' &&
              direction === 'row-reverse' && { marginRight: spacing }),
            ...(typeof direction === 'string' &&
              direction === 'column' && { marginTop: spacing }),
            ...(typeof direction === 'string' &&
              direction === 'column-reverse' && { marginBottom: spacing }),
            // While `gap` for flex is not supported by a mojority of browser,
            // we prefer this approach to have a broader compatibility, and also to support
            // responsive values 🔥🥵🔥
            ...(Array.isArray(direction) &&
              direction.reduce(
                (acc, _, index) => {
                  return {
                    ...acc,
                    [`@media screen and (min-width: ${theme.breakpoints[index]})`]:
                      direction[index + 1] === undefined
                        ? {}
                        : {
                            ...((direction[index + 1] ?? 'row') === 'row'
                              ? { marginLeft: spacing, marginTop: 0 }
                              : { marginTop: spacing, marginLeft: 0 }),
                          },
                  }
                },
                {
                  ...(direction[0] === 'row' && {
                    marginLeft: spacing,
                    marginTop: 0,
                  }),
                  ...(direction[0] === 'column' && {
                    marginTop: spacing,
                    marginLeft: 0,
                  }),
                },
              )),
            '&:first-child': {
              marginLeft: 0,
              marginTop: 0,
            },
          },
        }
      : {}),
  }

  return (
    <Box
      display={display}
      flexDirection={direction}
      alignItems={align}
      justifyContent={justify}
      flexWrap={wrap}
      flexBasis={basis}
      flexGrow={grow}
      ref={ref}
      fontFamily={CapUIFontFamily.Body}
      sx={{
        ...styles,
        ...sx,
      }}
      {...rest}
    >
      {userSpacing ? getChildren(children) : children}
    </Box>
  )
})

Flex.displayName = 'Flex'

export default Flex as PolymorphicComponent<FlexProps>
