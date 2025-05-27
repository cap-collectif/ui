import type { SystemStyleObject } from '@styled-system/css'
import type { CSSObjectWithLabel, GroupBase, StylesConfig } from 'react-select'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { CapUILineHeight } from '../../styles'
import { Colors } from '../../styles/modules/colors'
import { SPACING, ZINDEX } from '../../styles/theme'
import {
  CapUIFontSize,
  FONT_FAMILIES,
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
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  colors: Colors,
  isInvalid: boolean | undefined,
  isDisabled: boolean | undefined,
  variantSize: CapInputSize,
  isSearch?: boolean,
): StylesConfig<Option, IsMulti, Group> {
  const disabledStyles = isDisabled
    ? {
        background: colors.gray['100'],
        borderColor: colors.gray['200'],
        color: colors.gray['500'],
      }
    : {}
  return {
    control: (
      base: CSSObjectWithLabel,
      { isFocused }: { isFocused: boolean },
    ) => ({
      ...base,
      minHeight: 'unset',
      boxShadow: 'none',
      background: isInvalid && !isFocused ? colors.red['150'] : 'white',
      borderColor: isInvalid
        ? colors.red['600']
        : isFocused
        ? colors.primary.base
        : isSearch
        ? colors.gray['500']
        : colors.gray['300'],
      '&:hover': {
        borderColor: isInvalid ? colors.red['500'] : '',
      },
      ...disabledStyles,
    }),
    valueContainer: (
      base: CSSObjectWithLabel,
      { isMulti, hasValue }: { isMulti: boolean; hasValue: boolean },
    ) => ({
      ...base,
      paddingLeft: SPACING[isSearch ? 1 : 3],
      paddingRight: SPACING[3],
      paddingTop: SPACING[variantSize === 'sm' ? 1 : 2],
      paddingBottom: SPACING[variantSize === 'sm' ? 1 : 2],
      marginTop: isMulti && hasValue ? '-4px' : 0,
    }),
    placeholder: (base: CSSObjectWithLabel) => ({
      ...base,
      margin: 0,
      whiteSpace: 'nowrap',
      color: colors.gray['600'],
      fontFamily: FONT_FAMILIES.body,
      lineHeight: LINE_HEIGHTS.M,
    }),
    input: (
      base: CSSObjectWithLabel,
      { isMulti, hasValue }: { isMulti: boolean; hasValue: boolean },
    ) => ({
      ...base,
      lineHeight: LINE_HEIGHTS.M,
      fontFamily: FONT_FAMILIES.body,
      padding: 0,
      margin: 0,
      marginTop: isMulti && hasValue ? SPACING[1] : 0,
    }),
    option: (base: CSSObjectWithLabel) => ({
      ...base,
      color: colors.gray['900'],
      '&[class*="is-selected"]': { backgroundColor: 'white' },
      '&:hover,&[class*="is-focused"]': {
        backgroundColor: colors.gray['100'],
      },
      borderBottom: `1px solid ${colors.gray['200']}`,
      '&:last-child': { borderBottom: 'none' },
      fontFamily: FONT_FAMILIES.body,
      lineHeight: LINE_HEIGHTS.M,
    }),
    singleValue: (base: CSSObjectWithLabel) => ({
      ...base,
      margin: 0,
      color: colors.gray['900'],
      fontFamily: FONT_FAMILIES.body,
      lineHeight: LINE_HEIGHTS.M,
    }),
    indicatorSeparator: (base: CSSObjectWithLabel) => ({
      ...base,
      display: 'none',
    }),
    clearIndicator: (base: CSSObjectWithLabel) => ({
      ...base,
      padding: 0,
      margin: 0,
      display: !isSearch ? 'none' : 'flex',
    }),
    indicatorsContainer: (base: CSSObjectWithLabel) => ({
      ...base,
      paddingLeft: SPACING[3],
      paddingRight: SPACING[3],
      paddingTop: SPACING[variantSize === 'sm' ? 1 : 2],
      paddingBottom: SPACING[variantSize === 'sm' ? 1 : 2],
      color: colors.gray['700'],
    }),
    dropdownIndicator: (base: CSSObjectWithLabel) => ({
      ...base,
      padding: 0,
      margin: 0,
      color: colors.gray[isDisabled ? '500' : '700'],
      display: isSearch ? 'none' : 'flex',
    }),
    menuPortal: (base: CSSObjectWithLabel) => ({
      ...base,
      zIndex: ZINDEX.selectPortal,
    }),
  }
}

export default styles
