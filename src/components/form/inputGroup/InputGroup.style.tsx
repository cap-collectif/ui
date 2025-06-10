import { SystemStyleObject } from '@styled-system/css'

const styles = (
  withGuideline: boolean,
  withLabel: boolean,
): SystemStyleObject => {
  return {
    marginBottom: 4,
    '.cap-form-control': {
      width: 'auto !important',
      marginBottom: 0,
    },
    '& > .cap-form-label': {
      flex: '100%',
      mb: 1,
    },
    '& > .cap-form-guideline': {
      flex: '100%',
    },

    ...((withGuideline && !withLabel) || (!withGuideline && withLabel)
      ? {
          '& > :nth-child(2)': {
            '.cap-input, .cap-input-number_container, .cap-select__control, .DateRangePickerInput, .cap-date-input, &.cap-button, .cap-hour-input > div, .cap-color-picker_container':
              {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
          },
          '& > :not(:first-child):not(:last-child):not(:nth-child(2))': {
            '.cap-input, .cap-input-number_container, .cap-select__control, .DateRangePickerInput, .cap-date-input, &.cap-button, .cap-hour-input > div, .cap-color-picker_container':
              {
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
          },
          '& > :last-child': {
            '.cap-input, .cap-input-number_container, .cap-select__control, .DateRangePickerInput, .cap-date-input, &.cap-button, .cap-hour-input > div, .cap-color-picker_container':
              {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              },
          },
        }
      : withGuideline && withLabel
      ? {
          '& > :nth-child(3)': {
            '.cap-input, .cap-input-number_container, .cap-select__control, .DateRangePickerInput, .cap-date-input, &.cap-button, .cap-hour-input > div, .cap-color-picker_container':
              {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
          },
          '& > :not(:first-child):not(:last-child):not(:nth-child(2)):not(:nth-child(3))':
            {
              '.cap-input, .cap-input-number_container, .cap-select__control, .DateRangePickerInput, .cap-date-input, &.cap-button, .cap-hour-input > div, .cap-color-picker_container':
                {
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                },
            },
          '& > :last-child': {
            '.cap-input, .cap-input-number_container, .cap-select__control, .DateRangePickerInput, .cap-date-input, &.cap-button, .cap-hour-input > div, .cap-color-picker_container':
              {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              },
          },
        }
      : {
          '& > :first-child': {
            '.cap-input, .cap-input-number_container, .cap-select__control, .DateRangePickerInput, .cap-date-input, &.cap-button, .cap-hour-input > div, .cap-color-picker_container':
              {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
          },
          '& > :not(:first-child):not(:last-child)': {
            '.cap-input, .cap-input-number_container, .cap-select__control, .DateRangePickerInput, .cap-date-input, &.cap-button, .cap-hour-input > div, .cap-color-picker_container':
              {
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
          },
          '& > :last-child': {
            '.cap-input, .cap-input-number_container, .cap-select__control, .DateRangePickerInput, .cap-date-input, &.cap-button, .cap-hour-input > div, .cap-color-picker_container':
              {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              },
          },
        }),
  }
}
export default styles
