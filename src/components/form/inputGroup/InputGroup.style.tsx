import { SystemStyleObject } from '@styled-system/css'

const bordered = '& > :not(:last-child)'
const borderless = '& > :has(+button)'

const inputs =
  '.cap-input, .cap-input-number_container, .cap-select__control, .DateRangePickerInput, .cap-date-input, &.cap-button, .cap-hour-input > div, .cap-color-picker_container'
const borderedInputs = `${bordered} .cap-input, ${bordered} .cap-input-number_container, ${bordered} .cap-select__control, ${bordered} .DateRangePickerInput,
  ${bordered} .cap-date-input, & > ${bordered} .cap-hour-input > div, ${bordered} .cap-color-picker_container`

const borderlessInputs = `${borderless} .cap-input, ${borderless} .cap-input-number_container, ${borderless} .cap-select__control, ${borderless} .DateRangePickerInput,
  ${borderless} .cap-date-input, & > ${borderless} .cap-hour-input > div, ${borderless} .cap-color-picker_container`

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
    [borderedInputs]: {
      borderRight: '1px solid',
    },
    [borderlessInputs]: {
      borderRight: 'unset !important',
    },

    ...((withGuideline && !withLabel) || (!withGuideline && withLabel)
      ? {
          '& > :nth-child(2)': {
            [inputs]: {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          },
          '& > :not(:first-child):not(:last-child):not(:nth-child(2))': {
            [inputs]: {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          },
          '& > :last-child': {
            [inputs]: {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
          },
        }
      : withGuideline && withLabel
      ? {
          '& > :nth-child(3)': {
            [inputs]: {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          },
          '& > :not(:first-child):not(:last-child):not(:nth-child(2)):not(:nth-child(3))':
            {
              [inputs]: {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
            },
          '& > :last-child': {
            [inputs]: {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
          },
        }
      : {
          '& > :first-child': {
            [inputs]: {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          },
          '& > :not(:first-child):not(:last-child)': {
            [inputs]: {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          },
          '& > :last-child': {
            [inputs]: {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
          },
        }),
  }
}
export default styles
