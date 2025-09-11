import type { SystemStyleObject } from '@styled-system/css'

import { Colors } from '../../../styles/modules/colors.type'

export const boxStyles = (colors: Colors): SystemStyleObject => ({
  position: 'absolute',
  cursor: 'pointer',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'normal',
  borderColor: 'checkbox.default.border.default',
  borderRadius: 'normal',
  height: '14px',
  width: '14px',

  '&:before': {
    content: '""',
    border: 'normal',
    borderLeft: 0,
    borderTop: 0,
    width: '4px',
    height: '6px',
    top: '50%',
    left: '50%',
    opacity: 0,
    position: 'absolute',
    transform: 'rotate(45deg) translate(-50%, -50%)',
    transformOrigin: '25% 0%',
    color: 'checkbox.default.icon.default',
  },

  '.cap-checkbox__input:checked + & ': {
    bg: 'checkbox.default.background.active',
    borderColor: 'checkbox.default.border.active',
  },

  '.cap-checkbox__input:focus-visible + &': {
    outline: '2px white solid',
    outlineOffset: 0,
    boxShadow: `0 0 0 4px ${colors?.primary.dark}`,
  },

  '.cap-checkbox__input[aria-invalid="true"] + &': {
    bg: 'checkbox.default.background.invalid',
    borderColor: 'checkbox.default.border.invalid',
  },

  '.cap-checkbox__input:disabled + &': {
    bg: 'checkbox.default.background.disable',
    borderColor: 'checkbox.default.border.disable',
    cursor: 'auto',
  },

  '.cap-checkbox__input:disabled:checked + &': {
    bg: 'checkbox.default.background.disable',
    borderColor: 'checkbox.default.border.disable',
  },

  '.cap-checkbox__input:checked + &:before': {
    opacity: 1,
  },

  '.cap-checkbox__input[aria-invalid="true"] + &:before': {
    color: 'checkbox.default.icon.invalid',
  },

  '.cap-checkbox__input:disabled:checked + &:before': {
    color: 'checkbox.default.border.disable',
  },
})
