import type { SystemStyleObject } from '@styled-system/css'

import { Colors } from '../../../styles/modules/colors.type'

export const boxStyles = (colors?: Colors): SystemStyleObject => ({
  position: 'absolute',
  cursor: 'pointer',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'normal',
  borderColor: 'radio.default.border.default',
  bg: 'radio.default.background.default',
  borderRadius: '50%',
  height: '14px',
  width: '14px',

  '&:before': {
    content: '""',
    bg: 'radio.default.icon.default',
    borderRadius: '50%',
    width: '7px',
    height: '7px',
    top: '50%',
    left: '50%',
    opacity: 0,
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
  },

  '.cap-radio__input:checked + &': {
    borderColor: 'radio.default.border.active',
  },

  '.cap-radio__input:focus-visible + &': {
    outline: '2px white solid',
    outlineOffset: 0,
    boxShadow: `0 0 0 4px ${colors?.primary.dark}`,
  },

  '.cap-radio__input:disabled + &': {
    bg: 'radio.default.background.disable',
    borderColor: 'radio.default.border.disable',
    cursor: 'auto',
  },

  '.cap-radio__input:disabled:checked + &': {
    bg: 'radio.default.background.disable',
    borderColor: 'radio.default.border.disable',
  },

  '.cap-radio__input:checked + &:before': {
    opacity: 1,
  },

  '.cap-radio__input:disabled:checked + &:before': {
    bg: 'radio.default.icon.disable',
  },
})
