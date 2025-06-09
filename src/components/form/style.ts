import type { SystemStyleObject } from '@styled-system/css'
import type { CSSObjectWithLabel, GroupBase, StylesConfig } from 'react-select'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { CapUILineHeight } from '../../styles'
import { Colors } from '../../styles/modules/colors'
import { pxToRem } from '../../styles/modules/mixins'
import { SPACING, ZINDEX } from '../../styles/theme'
import {
  CapUIFontSize,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
} from '../../styles/theme/typography'
import { ExtendedColors } from '../../utils/getThemeWithColorsToken'
import { Box } from '../box'
import { CapInputSize } from './enums'

export const InputInner = styled(Box)(
  variant({
    variants: {
      sm: {
        px: 'sm',
        py: 'xxs',
        fontSize: CapUIFontSize.BodyRegular,
      },
      md: {
        px: 'sm',
        py: 'xs',
        fontSize: CapUIFontSize.BodyLarge,
      },
    },
  }),
)

const styles = (colors: ExtendedColors, isEmpty?: boolean) => ({
  borderTopLeftRadius: 'xxs',
  borderTopRightRadius: 'xxs',
  boxShadow: `inset 0px -1px 0px 0px ${
    colors.input.border[isEmpty ? 'placeholder' : 'default']
  }`,
  lineHeight: CapUILineHeight.M,
  color: 'text.primary',
  bg: isEmpty ? 'input.background.placeholder' : 'input.background.default',

  '&::placeholder': {
    color: 'text.tertiary',
    lineHeight: CapUILineHeight.M,
  },

  '&[type=number]': { paddingRight: 32 },

  '&:focus,&:focus-visible,&[aria-selected="true"],&:active': {
    outline: 'none',
    boxShadow: `inset 0px -1px 0px 0px ${colors.input.border.selected}`,
    bg: 'input.background.selected',
  },

  '&:disabled': {
    bg: 'input.background.disable',
    color: 'text.disable',
    boxShadow: `inset 0px -1px 0px 0px ${colors.input.border.disable}`,
    '&::placeholder': { color: 'text.disable' },
  },

  '&[readonly]': {
    bg: 'input.background.readonly',
    boxShadow: `inset 0px -1px 0px 0px ${colors.input.border.readonly}`,
    '&::placeholder': { color: 'text.tertiary' },
  },
})

export const focusWithinStyles = (
  isDisabled: boolean,
  isEmpty: boolean,
  isReadonly: boolean,
  colors: ExtendedColors,
): SystemStyleObject => ({
  borderTopLeftRadius: 'xxs',
  borderTopRightRadius: 'xxs',
  boxShadow: `inset 0px -1px 0px 0px ${
    colors.input.border[
      isReadonly
        ? 'readonly'
        : isDisabled
        ? 'disable'
        : isEmpty
        ? 'placeholder'
        : 'default'
    ]
  }`,
  lineHeight: CapUILineHeight.M,
  color: isDisabled ? 'text.disable' : 'text.primary',
  bg: `input.background.${
    isReadonly
      ? 'readonly'
      : isDisabled
      ? 'disable'
      : isEmpty
      ? 'placeholder'
      : 'default'
  }`,

  '& > input::placeholder': {
    color: isDisabled ? 'text.disable' : 'text.tertiary',
    lineHeight: CapUILineHeight.M,
  },

  '.cap-icon.cap-input-icon': {
    color: `input.icon.${
      isDisabled ? 'disable' : isEmpty ? 'placeholder' : 'default'
    }`,
    '&:hover': { color: isDisabled ? 'input.icon.disable' : 'gray.black' },
  },

  '&:focus-within': {
    boxShadow: `inset 0px -1px 0px 0px ${
      colors.input.border[isReadonly ? 'readonly' : 'selected']
    }`,
    bg: 'input.background.selected',
  },

  '& > input': { boxShadow: 'none', outline: 'none' },
})

export function reactSelectStyle<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  colors: ExtendedColors & Colors,
  variantSize: CapInputSize,
  isSearch?: boolean,
): StylesConfig<Option, IsMulti, Group> {
  return {
    control: (base, { isFocused, hasValue, isDisabled }) => ({
      ...base,
      minHeight: 'unset',
      border: 'none',
      borderRadius: 'none',
      background: colors.input.background[isFocused ? 'selected' : 'default'],
      boxShadow: `inset 0px -1px 0px 0px ${
        colors.input.border[
          isFocused
            ? 'selected'
            : isDisabled
            ? 'disable'
            : hasValue
            ? 'default'
            : 'placeholder'
        ]
      }`,
    }),
    valueContainer: (base, { isMulti, hasValue }) => ({
      ...base,
      paddingLeft: SPACING[isSearch ? 'xxs' : 'sm'],
      paddingRight: SPACING['sm'],
      paddingTop: SPACING[variantSize === 'sm' ? 'xxs' : 'xs'],
      paddingBottom: SPACING[variantSize === 'sm' ? 'xxs' : 'xs'],
      marginTop: isMulti && hasValue ? pxToRem(-4) : 0,
    }),
    placeholder: base => ({
      ...base,
      margin: 0,
      whiteSpace: 'nowrap',
      color: colors.text.tertiary,
      lineHeight: LINE_HEIGHTS.M,
    }),
    input: (base, { isMulti, hasValue }) => ({
      ...base,
      lineHeight: LINE_HEIGHTS.M,
      padding: 0,
      margin: 0,
      marginTop: isMulti && hasValue ? SPACING['xxs'] : 0,
    }),
    option: base => ({
      ...base,
      color: colors.text.primary,
      '&[class*="is-selected"]': { backgroundColor: 'white' },
      '&:hover,&[class*="is-focused"]': {
        backgroundColor: colors.gray['100'],
      },
      borderBottom: `1px solid ${colors.gray['200']}`,
      '&:last-child': { borderBottom: 'none' },
      lineHeight: LINE_HEIGHTS.M,
    }),
    singleValue: (base, { isDisabled }) => ({
      ...base,
      margin: 0,
      fontSize: FONT_SIZES[variantSize === 'sm' ? 'BodyRegular' : 'BodyLarge'],
      lineHeight: LINE_HEIGHTS.M,
      color: colors.text[isDisabled ? 'disable' : 'primary'],
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    clearIndicator: (base) => ({
      ...base,
      padding: 0,
      margin: 0,
      display: !isSearch ? 'none' : 'flex',
    }),
    indicatorsContainer: (base) => ({
      ...base,
      paddingLeft: SPACING['sm'],
      paddingRight: SPACING['sm'],
      paddingTop: SPACING[variantSize === 'sm' ? 'xxs' : 'xs'],
      paddingBottom: SPACING[variantSize === 'sm' ? 'xxs' : 'xs'],
      color: colors.gray['700'],
    }),
    dropdownIndicator: (base) => ({
      ...base,
      padding: 0,
      margin: 0,
      color: colors.gray[false ? '500' : '700'],
      display: isSearch ? 'none' : 'flex',
    }),
    menuPortal: base => ({
      ...base,
      zIndex: ZINDEX.selectPortal,
    }),
  }
}

export default styles
