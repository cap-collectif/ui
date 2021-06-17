import * as React from 'react'
import { FC, forwardRef, ReactElement } from 'react'
import styled from 'styled-components'
import { variant as variantStyled } from 'styled-system'

import { CapUIFontWeight, CapUILineHeight } from '../../styles'
import { Box, BoxPropsOf, PolymorphicComponent } from '../box'
import { CapUIIcon, CapUIIconSize, Icon } from '../icon'
import { Spinner } from '../spinner'
import S from './Button.style'

export interface ButtonProps extends BoxPropsOf<'button'> {
  readonly variantSize?: 'small' | 'medium' | 'big'
  readonly alternative?: boolean
  readonly isLoading?: boolean
  readonly leftIcon?: CapUIIcon | ReactElement
  readonly rightIcon?: CapUIIcon | ReactElement
  readonly variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  readonly variantColor?: 'primary' | 'danger' | 'hierarchy'
}

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

const ButtonInner = styled(Box)(
  {
    ...S().common,
  },
  ({
    variantColor = 'primary',
    isLoading,
    alternative,
  }: {
    variantColor: ButtonProps['variantColor']
    isLoading: boolean
    alternative: boolean
  }) =>
    variantStyled({
      variants: {
        primary: S(isLoading)[variantColor].primary,
        secondary: S(isLoading)[variantColor].secondary,
        tertiary: S(isLoading, alternative)[variantColor].tertiary,
        link: S(isLoading)[variantColor].link,
      },
    }),
) as PolymorphicComponent<ButtonProps>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variantSize = 'small',
      variant = 'primary',
      variantColor = 'primary',
      children,
      leftIcon,
      rightIcon,
      disabled,
      alternative,
      isLoading,
      ...props
    },
    ref,
  ) => {
    return (
      <ButtonInner
        ref={ref}
        as="button"
        type="button"
        display="flex"
        alignItems="center"
        fontFamily="body"
        fontSize={3}
        fontWeight={CapUIFontWeight.Semibold}
        lineHeight={CapUILineHeight.Base}
        border="none"
        borderRadius="button"
        bg="transparent"
        disabled={disabled}
        px={variantSize ? SIZE[variantSize].px : 0}
        py={variantSize ? SIZE[variantSize].py : 0}
        variantColor={variantColor}
        variant={variant}
        alternative={alternative}
        isLoading={isLoading}
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
                  size={CapUIIconSize.Md}
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

export default Button as FC<ButtonProps>
