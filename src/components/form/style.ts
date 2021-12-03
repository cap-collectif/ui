import type { SystemStyleObject } from '@styled-system/css'
import type { CSSObjectWithLabel, GroupBase, StylesConfig } from 'react-select'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { CapUIFontFamily, CapUILineHeight } from '../../styles'
import colors from '../../styles/modules/colors'
import { SPACING } from '../../styles/theme'
import { FONT_FAMILIES, LINE_HEIGHTS } from '../../styles/theme/typography'
import { Box } from '../box'
import { CapInputSize } from './enums'

export const InputInner = styled(Box)(
  variant({
    variants: {
      sm: {
        px: 3,
        py: 1,
      },
      md: {
        px: 3,
        py: 2,
      },
    },
  }),
)

const styles: SystemStyleObject = {
  border: 'normal',
  borderRadius: 'normal',
  borderColor: 'gray.300',

  fontFamily: CapUIFontFamily.Input,
  lineHeight: CapUILineHeight.Base,
  color: 'gray.900',
  bg: 'white',

  '&[type=number]': { paddingRight: 32 },

  '&::placeholder': {
    color: 'gray.500',
    fontFamily: CapUIFontFamily.Input,
    lineHeight: CapUILineHeight.Base,
  },

  '&:focus,&[aria-selected="true"],&:active': {
    borderColor: 'blue.500',
  },

  '&[aria-invalid="true"]': {
    bg: 'red.150',
    borderColor: 'red.500',
    '&:focus,&[aria-selected="true"],&:active': {
      bg: 'white',
    },
  },

  '&:disabled': {
    bg: 'gray.100',
    borderColor: 'gray.200',
    color: 'gray.500',
  },
}

export function reactSelectStyle<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
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
        ? colors.red['500']
        : isFocused
        ? colors.blue['500']
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
      color: colors.gray['500'],
      fontFamily: FONT_FAMILIES.input,
      lineHeight: LINE_HEIGHTS.base,
    }),
    input: (
      base: CSSObjectWithLabel,
      { isMulti, hasValue }: { isMulti: boolean; hasValue: boolean },
    ) => ({
      ...base,
      lineHeight: LINE_HEIGHTS.base,
      fontFamily: FONT_FAMILIES.input,
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
      fontFamily: FONT_FAMILIES.input,
      lineHeight: LINE_HEIGHTS.base,
    }),
    singleValue: (base: CSSObjectWithLabel) => ({
      ...base,
      margin: 0,
      color: colors.gray['900'],
      fontFamily: FONT_FAMILIES.input,
      lineHeight: LINE_HEIGHTS.base,
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
  }
}

export default styles
