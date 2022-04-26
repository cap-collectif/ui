import { SystemStyleObject } from '@styled-system/css'

const styles = (withGuideline: boolean): SystemStyleObject => {
  return {
    '.cap-form-control': {
      width: 'auto !important',
    },
    '& > .cap-form-label': {
      flex: '100%',
    },
    '& > .cap-form-guideline': {
      flex: '100%',
    },
    ...(withGuideline
      ? {
          '& > :nth-child(3)': {
            '.cap-input, .cap-input-number, .cap-select__control, .DateRangePickerInput, .SingleDatePickerInput, .SingleDatePickerInput, &.cap-button': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          },
        }
      : {
          '& > :nth-child(2)': {
            '.cap-input, .cap-input-number, .cap-select__control, .DateRangePickerInput, .SingleDatePickerInput, .SingleDatePickerInput, &.cap-button': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          },
        }),

    '& > :last-child': {
      '.cap-input, .cap-input-number, .cap-select__control, .DateRangePickerInput, .SingleDatePickerInput, &.cap-button': {
        borderLeftWidth: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    },
    ...(withGuideline
      ? {
          '& > :not(:first-child):not(:last-child):not(:nth-child(3))': {
            '.cap-input, .cap-input-number, .cap-select__control, .DateRangePickerInput, .SingleDatePickerInput, &.cap-button': {
              borderLeftWidth: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          },
        }
      : {
          '& > :not(:first-child):not(:last-child):not(:nth-child(2))': {
            '.cap-input, .cap-input-number, .cap-select__control, .DateRangePickerInput, .SingleDatePickerInput, &.cap-button': {
              borderLeftWidth: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          },
        }),
  }
}
export default styles
