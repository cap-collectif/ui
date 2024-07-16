import type { PropsOf } from '@emotion/react'
import css, { SystemStyleObject } from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'
import * as CSS from 'csstype'
import merge from 'deepmerge'
import type { ElementType, HTMLAttributes, RefAttributes } from 'react'
import * as React from 'react'
import styled from 'styled-components'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  ResponsiveValue,
  shadow,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
  variant,
  zIndex,
} from 'styled-system'

import {
  CapUIFontFamily,
  CapUIFontWeight,
  CapUILetterSpacing,
  CapUILineHeight,
} from '../../styles'
import { ThemeColorsValues } from '../../styles/modules/colors'
import {
  ThemeBordersValues,
  ThemeRadiiValues,
  ThemeShadowsValues,
  ThemeSpacingValues,
  ThemeZIndicesValues,
} from '../../styles/theme'
import type {
  ThemeFontFamiliesValue,
  ThemeFontSizesValues,
  ThemeFontWeightsValues,
  ThemeLetterSpacingsValues,
  ThemeLineHeightsValues,
} from '../../styles/theme/typography'

type BoxHTMLProps = RefAttributes<any> & HTMLAttributes<any>

interface AppFontSize {
  fontSize?: ResponsiveValue<ThemeFontSizesValues>
}

interface AppFontWeight {
  fontWeight?: ResponsiveValue<CapUIFontWeight | ThemeFontWeightsValues>
}

interface AppFontFamily {
  fontFamily?: ResponsiveValue<CapUIFontFamily | ThemeFontFamiliesValue>
}

interface AppLineHeight {
  lineHeight?: ResponsiveValue<CapUILineHeight | ThemeLineHeightsValues>
}

interface AppLetterSpacing {
  letterSpacing?: ResponsiveValue<
    CapUILetterSpacing | ThemeLetterSpacingsValues
  >
}

interface AppZIndex {
  zIndex?: ResponsiveValue<ThemeZIndicesValues>
}

type AppTypographyProps = Omit<
  TypographyProps,
  'fontFamily' | 'fontWeight' | 'lineHeight' | 'fontSize' | 'letterSpacing'
>

type AppCustomStyledProps = {
  minSize?: AppSizeProps['size']
  maxSize?: AppSizeProps['size']
}

type AppShadowProps = {
  /**
   * The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated
   * by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii and color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
   */
  boxShadow?: ResponsiveValue<
    ThemeShadowsValues | CSS.Property.BoxShadow | number
  >
  /**
   * The `text-shadow` CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied
   * to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from
   * the element, blur radius, and color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
   */
  textShadow?: ResponsiveValue<
    ThemeShadowsValues | CSS.Property.TextShadow | number
  >
}

type ColorsProps = ResponsiveValue<ThemeColorsValues>

type AppBorderProps = {
  /**
   * The border CSS property sets an element's border. It's a shorthand for border-width, border-style,
   * and border-color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
   */
  border?: ResponsiveValue<ThemeBordersValues>
  borderX?: ResponsiveValue<ThemeBordersValues>
  borderY?: ResponsiveValue<ThemeBordersValues>
  /**
   * The border-color shorthand CSS property sets the color of all sides of an element's border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
   */
  borderColor?: ColorsProps
  /**
   * The border-top-color CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties border-color or border-top.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color)
   */
  borderTopColor?: ColorsProps
  /**
   * The border-bottom-color CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties border-color or border-bottom.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color)
   */
  borderBottomColor?: ColorsProps
  /**
   * The border-left-color CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties border-color or border-left.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color)
   */
  borderLeftColor?: ColorsProps
  /**
   * The border-right-color CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties border-color or border-right.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color)
   */
  borderRightColor?: ColorsProps

  /**
   * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single
   * radius to make circular corners, or two radii to make elliptical corners.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
   */
  borderRadius?: ResponsiveValue<ThemeRadiiValues>
  /**
   * The border-top-left-radius CSS property rounds the top-left corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
   */
  borderTopLeftRadius?: ResponsiveValue<ThemeRadiiValues>
  /**
   * The border-top-right-radius CSS property rounds the top-right corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
   */
  borderTopRightRadius?: ResponsiveValue<ThemeRadiiValues>
  /**
   * The border-bottom-left-radius CSS property rounds the bottom-left corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
   */
  borderBottomLeftRadius?: ResponsiveValue<ThemeRadiiValues>
  /**
   * The border-bottom-right-radius CSS property rounds the bottom-right corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
   */
  borderBottomRightRadius?: ResponsiveValue<ThemeRadiiValues>
}

type AppColorProps = {
  /**
   * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
   * By default the raw value of the prop is returned.
   *
   * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
   * Array values are converted into responsive values.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
   */
  color?: ColorsProps
  /**
   * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
   * By default the raw value of the prop is returned.
   *
   * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
   * Array values are converted into responsive values.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
   */
  bg?: ColorsProps
  backgroundColor?: ColorsProps
}

type AppSpaceProps = {
  m?: ResponsiveValue<ThemeSpacingValues>
  margin?: ResponsiveValue<ThemeSpacingValues>
  mt?: ResponsiveValue<ThemeSpacingValues>
  marginTop?: ResponsiveValue<ThemeSpacingValues>
  mr?: ResponsiveValue<ThemeSpacingValues>
  marginRight?: ResponsiveValue<ThemeSpacingValues>
  mb?: ResponsiveValue<ThemeSpacingValues>
  marginBottom?: ResponsiveValue<ThemeSpacingValues>
  ml?: ResponsiveValue<ThemeSpacingValues>
  marginLeft?: ResponsiveValue<ThemeSpacingValues>
  mx?: ResponsiveValue<ThemeSpacingValues>
  marginX?: ResponsiveValue<ThemeSpacingValues>
  my?: ResponsiveValue<ThemeSpacingValues>
  marginY?: ResponsiveValue<ThemeSpacingValues>
  p?: ResponsiveValue<ThemeSpacingValues>
  padding?: ResponsiveValue<ThemeSpacingValues>
  pt?: ResponsiveValue<ThemeSpacingValues>
  paddingTop?: ResponsiveValue<ThemeSpacingValues>
  pr?: ResponsiveValue<ThemeSpacingValues>
  paddingRight?: ResponsiveValue<ThemeSpacingValues>
  pb?: ResponsiveValue<ThemeSpacingValues>
  paddingBottom?: ResponsiveValue<ThemeSpacingValues>
  pl?: ResponsiveValue<ThemeSpacingValues>
  paddingLeft?: ResponsiveValue<ThemeSpacingValues>
  px?: ResponsiveValue<ThemeSpacingValues>
  paddingX?: ResponsiveValue<ThemeSpacingValues>
  py?: ResponsiveValue<ThemeSpacingValues>
  paddingY?: ResponsiveValue<ThemeSpacingValues>
  gridGap?: ResponsiveValue<ThemeSpacingValues>
  gridColumnGap?: ResponsiveValue<ThemeSpacingValues>
  gridRowGap?: ResponsiveValue<ThemeSpacingValues>
  gap?: ResponsiveValue<ThemeSpacingValues>
}

type AppSizeProps = {
  width?: ResponsiveValue<ThemeSpacingValues>
  size?: ResponsiveValue<ThemeSpacingValues>
  height?: ResponsiveValue<ThemeSpacingValues>
  minWidth?: ResponsiveValue<ThemeSpacingValues>
  maxWidth?: ResponsiveValue<ThemeSpacingValues>
  minHeight?: ResponsiveValue<ThemeSpacingValues>
  maxHeight?: ResponsiveValue<ThemeSpacingValues>
}

type StyledSystemProps = ColorProps &
  BorderProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  Omit<PositionProps, 'zIndex'>

type ModifiedStyledSystemProps = AppSizeProps &
  AppBorderProps &
  AppSpaceProps &
  AppTypographyProps &
  AppCustomStyledProps &
  AppShadowProps &
  AppColorProps &
  AppFontSize &
  AppLetterSpacing &
  AppFontWeight &
  AppFontFamily &
  AppLineHeight &
  AppZIndex

interface CustomBoxProps {
  readonly uppercase?: boolean
  readonly css?: any
  readonly ref?: any
}

type BoxCssStateProps = {
  sx?: SystemStyleObject
  _variants?: Array<typeof variant> | typeof variant
  _hover?: SystemStyleObject
  _selected?: SystemStyleObject
  _active?: SystemStyleObject
  _focus?: SystemStyleObject
  _disabled?: SystemStyleObject
  _invalid?: SystemStyleObject
}

export type BoxProps = BoxHTMLProps &
  CustomBoxProps &
  StyledSystemProps &
  ModifiedStyledSystemProps &
  BoxCssStateProps

export type BoxPropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = Omit<BoxProps, keyof Omit<PropsOf<C>, 'css'>> & Omit<PropsOf<C>, 'css'>

export interface BoxOwnProps<E extends ElementType = ElementType>
  extends BoxProps {
  as?: E
}

export type PolymorphicBoxProps<E extends ElementType> = BoxOwnProps<E> &
  Omit<PropsOf<E>, keyof BoxOwnProps>

export type PolymorphicComponentProps<E extends ElementType, P> = P &
  PolymorphicBoxProps<E>

const defaultElement = 'div'

export const Box = styled('div').withConfig({
  shouldForwardProp: propName => {
    return shouldForwardProp(propName.toString())
  },
})<BoxProps>(
  props => ({
    textTransform: props.uppercase ? 'uppercase' : undefined,
  }),
  ({
    sx,
    _hover,
    _active,
    _focus,
    _disabled,
    _selected,
    _invalid,
    theme: { colors }
  }) =>
    css(
      merge.all([
        {
          ...(_hover ? { '&:hover': _hover } : {}),
          ...(_active ? { '&:active': _active } : {}),
          ...(_selected ? { '&[aria-selected="true"]': _selected } : {}),
          ...(_invalid ? { '&[aria-invalid="true"]': _invalid } : {}),
          ...(_focus
            ? { '&:focus': _focus }
            : {}),
          ...(_disabled
            ? { '&:disabled,&[disabled],&[aria-disabled="true"]': _disabled }
            : {}),
        },
        sx ?? {},
        {
          '&:focus-visible': {
            outline: '2px #fff solid',
            outlineOffset: 0,
            boxShadow: `0 0 0 4px ${colors?.primary[700] || '#000'}`
          }
        },
      ]),
    ),
  ({ _variants }) =>
    Array.isArray(_variants) ? _variants.map(v => v) : _variants ?? {},
  compose(
    system({
      gap: {
        properties: ['gap'],
        scale: 'sizes',
      },
      minSize: {
        properties: ['minWidth', 'minHeight'],
        scale: 'sizes',
      },
      maxSize: {
        properties: ['maxWidth', 'maxHeight'],
        scale: 'sizes',
      },
    }),
    shadow,
    color,
    space,
    layout,
    flexbox,
    grid,
    border,
    typography,
    position,
    zIndex,
  ),
)

Box.displayName = 'Box'

export type PolymorphicBox = <E extends ElementType = typeof defaultElement>(
  props: PolymorphicBoxProps<E>,
) => JSX.Element

export type PolymorphicComponent<P> = <
  E extends ElementType = typeof defaultElement
>(
  props: PolymorphicComponentProps<E, P>,
) => JSX.Element

export default Box as PolymorphicBox
