import cn from 'classnames'
import * as React from 'react'
import styled from 'styled-components'
import { variant as variantStyled } from 'styled-system'

import { useTheme } from '../../hooks'
import { CapUIFontWeight, CapUILineHeight } from '../../styles'
import { Colors } from '../../styles/modules/colors'
import { Box } from '../box'
import { PolymorphicComponentProps } from '../box/Box'
import { CapUIIcon, CapUIIconSize, Icon } from '../icon'
import { Spinner } from '../spinner'
import S from './Button.style'

// @TODO Should be type restrained to button or anchor
export type ButtonProps<
  T extends React.ElementType = React.ElementType
> = PolymorphicComponentProps<
  T,
  Readonly<{
    variantSize?: 'small' | 'medium' | 'big'
    alternative?: boolean
    isLoading?: boolean
    leftIcon?: CapUIIcon | React.ReactElement
    rightIcon?: CapUIIcon | React.ReactElement
    variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
    variantColor?: 'primary' | 'danger' | 'hierarchy'
  }>
>

const SIZE = {
  small: {
    px: 2,
    py: 1,
  },
  medium: {
    px: 4,
    py: 3,
  },
  big: {
    px: 8,
    py: 3,
  },
}

const ButtonInner = styled(Box)<any>(
  S(false).common,
  ({
    variantColor = 'primary',
    alternative,
    colors,
  }: {
    variantColor: ButtonProps['variantColor']
    alternative: boolean
    colors: Colors
  }) => {
    return variantStyled({
      variants: {
        primary: S(false, colors)[variantColor].primary,
        secondary: S(false, colors)[variantColor].secondary,
        tertiary: S(alternative, colors)[variantColor].tertiary,
        link: S(false, colors)[variantColor].link,
      },
    })
  },
)

const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      as = 'button',
      variantSize = 'small',
      variant = 'primary',
      variantColor = 'primary',
      children,
      leftIcon,
      rightIcon,
      alternative,
      isLoading,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const { colors } = useTheme()
    return (
      <ButtonInner
        ref={ref}
        as={as}
        type={as === 'button' ? 'button' : undefined}
        display="inline-flex"
        alignItems="center"
        fontFamily="body"
        fontSize={3}
        fontWeight={CapUIFontWeight.Semibold}
        lineHeight={CapUILineHeight.Base}
        border="none"
        borderRadius="button"
        bg="transparent"
        px={variantSize ? SIZE[variantSize].px : 0}
        py={variantSize ? SIZE[variantSize].py : 0}
        variantColor={variantColor}
        variant={variant}
        alternative={alternative}
        isLoading={isLoading}
        disabled={isLoading || disabled}
        sx={{
          '&:disabled': {
            cursor: 'not-allowed',
          },
        }}
        className={cn(
          {
            'cap-button': as === 'button',
            'cap-link': as === 'a',
          },
          className,
        )}
        colors={colors}
        {...props}
      >
        {isLoading ? (
          <>
            <Spinner mr={1} />
            {children}
          </>
        ) : (
          <>
            {leftIcon &&
              (typeof leftIcon === 'string' ? (
                <Icon
                  color="inherit"
                  name={leftIcon}
                  size={
                    variant === 'link' ? CapUIIconSize.Sm : CapUIIconSize.Md
                  }
                  mr={1}
                />
              ) : (
                React.cloneElement(leftIcon, { mr: 1 })
              ))}

            {children}

            {rightIcon &&
              (typeof rightIcon === 'string' ? (
                <Icon
                  color="inherit"
                  name={rightIcon}
                  size={CapUIIconSize.Md}
                  ml={1}
                />
              ) : (
                React.cloneElement(rightIcon, { ml: 1 })
              ))}
          </>
        )}
      </ButtonInner>
    )
  },
)

Button.displayName = 'Button'

export default Button
