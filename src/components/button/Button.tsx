import cn from 'classnames'
import * as React from 'react'
import styled from 'styled-components'
import { variant as variantStyled } from 'styled-system'

import { CapUIFontWeight, CapUILineHeight } from '../../styles'
import { CapUIFontSize } from '../../styles/theme/fontSizes'
import { Box } from '../box'
import { PolymorphicComponentProps } from '../box/Box'
import { CapUIIcon, CapUIIconSize, Icon } from '../icon'
import { Spinner } from '../spinner'
import S, { SIZE } from './Button.style'

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

const ButtonInner = styled(Box)<{
  variantColor: ButtonProps['variantColor']
  alternative: boolean
}>(S(false).common, ({ variantColor = 'primary', alternative }) => {
  return variantStyled({
    variants: {
      primary: S(false)[variantColor].primary,
      secondary: S(false)[variantColor].secondary,
      tertiary: S(alternative)[variantColor].tertiary,
      link: S(false)[variantColor].link,
    },
  })
})

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
    return (
      <ButtonInner
        ref={ref}
        as={as}
        type={as === 'button' ? 'button' : undefined}
        display="inline-flex"
        alignItems="center"
        fontFamily="body"
        fontSize={CapUIFontSize.BodyRegular}
        fontWeight={CapUIFontWeight.Semibold}
        lineHeight={CapUILineHeight.M}
        border="none"
        borderRadius="xxs"
        bg="transparent"
        px={variantSize ? SIZE[variantSize].px : 0}
        py={variantSize ? SIZE[variantSize].py : 0}
        variantColor={variantColor}
        variant={variant}
        alternative={alternative}
        disabled={isLoading || disabled}
        className={cn(
          {
            'cap-button': as === 'button',
            'cap-link': as === 'a',
          },
          className,
        )}
        data-loading={isLoading || undefined}
        {...props}
      >
        {isLoading ? (
          <>
            <Spinner mr="xxs" />
            {children}
          </>
        ) : (
          <>
            {leftIcon &&
              (typeof leftIcon === 'string' ? (
                <Icon
                  className="cap-button-icon"
                  color="inherit"
                  name={leftIcon}
                  size={CapUIIconSize.Md}
                  mr="xxs"
                />
              ) : (
                React.cloneElement(leftIcon, { mr: 'xxs' })
              ))}

            {children}

            {rightIcon &&
              (typeof rightIcon === 'string' ? (
                <Icon
                  className="cap-button-icon"
                  color="inherit"
                  name={rightIcon}
                  size={CapUIIconSize.Md}
                />
              ) : (
                React.cloneElement(rightIcon, { ml: 'xxs' })
              ))}
          </>
        )}
      </ButtonInner>
    )
  },
)

Button.displayName = 'Button'

export default Button
