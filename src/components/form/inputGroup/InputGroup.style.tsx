import { SystemStyleObject } from '@styled-system/css'

const styles: SystemStyleObject = {
  '.cap-form-control': {
    width: 'auto !important',
  },
  '& > .cap-form-label': {
    flex: '100%',
  },
  '& > :nth-child(2)': {
    '.cap-input, .cap-input-number, .cap-select__control, .DateRangePickerInput, &.cap-button': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  '& > :last-child': {
    '.cap-input, .cap-input-number, .cap-select__control, .DateRangePickerInput, &.cap-button': {
      borderLeftWidth: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
  '& > :not(:first-child):not(:last-child):not(:nth-child(2))': {
    '.cap-input, .cap-input-number, .cap-select__control, .DateRangePickerInput, &.cap-button': {
      borderLeftWidth: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
}
export default styles
