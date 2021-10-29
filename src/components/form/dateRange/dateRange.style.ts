import { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'
import { variant } from 'styled-system'

import {
  CapUIFontFamily,
  CapUIFontWeight,
  CapUILineHeight,
  CapUIRadius,
} from '../../../styles'
import { Box } from '../../box'

export const StyledWrapper = styled(Box)(
  variant({
    variants: {
      sm: {
        '.DateInput:first-child': {
          py: 1,
          px: 3,
        },
        '.DateInput': {
          py: 1,
          px: 2,
        },
      },
      md: {
        '.DateInput:first-child': {
          py: 2,
          px: 3,
        },
        '.DateInput': {
          py: 2,
          px: 2,
        },
      },
    },
  }),
)

const styles = (isInvalid?: boolean): SystemStyleObject => {
  return {
    '.DateRangePickerInput': {
      border: 'normal',
      borderRadius: 'normal',
      borderColor: isInvalid ? 'red.500' : 'gray.300',

      fontFamily: CapUIFontFamily.Input,
      lineHeight: CapUILineHeight.Base,
      bg: 'white',
      '&:hover,&.hover': {
        borderColor: 'blue.500',
      },
      ...(isInvalid && {
        bg: 'red.150',
        borderColor: 'red.500',
        '&:hover,&.hover': {
          borderColor: 'red.500',
        },
        '&:focus-within': {
          bg: 'white',
          borderColor: 'red.500',
        },
      }),

      color: 'gray.900',
      '&__disabled': {
        bg: 'gray.100',
        '&:hover,&.hover': {
          borderColor: 'gray.200',
        },
        '.DateRangePickerInput_calendarIcon': {
          cursor: 'default',
        },
      },
    },

    '.DateInput': {
      width: '100px',
      background: 'transparent',
    },
    '.DateInput_input': {
      fontWeight: CapUIFontWeight.Normal,
      fontSize: '3',
      fontFamily: CapUIFontFamily.Input,
      lineHeight: CapUILineHeight.Base,
      color: 'gray.900',
      bg: 'transparent',
      borderBottom: 'none',
      p: 0,
      width: '90px',

      '&::placeholder': {
        color: 'gray.500',
        fontFamily: CapUIFontFamily.Input,
        lineHeight: CapUILineHeight.Base,
      },
      '&:disabled': {
        bg: 'gray.100',
        fontStyle: 'normal',
      },
    },
    '.DateInput_input__disabled': {
      color: 'gray.500',
    },
    '.CalendarDay': {
      '& div': {
        width: '100%',
        height: '100%',
      },
    },

    '.CalendarDay__default': {
      fontWeight: 'normal',
      fontSize: '3',
      fontFamily: CapUIFontFamily.Input,
      lineHeight: CapUILineHeight.Base,
      color: 'gray.900',
      border: 'none',
      bg: 'white',
    },
    '.CalendarDay__today': {
      '& div': {
        color: 'gray.900',
        borderWidth: '1px',
        borderColor: 'gray.900',
      },
    },
    '.CalendarDay__selected': {
      borderRadius: CapUIRadius.Poppin,
      padding: 0,
      '& div': {
        bg: 'blue.500',
        color: 'blue.100',
        borderRadius: CapUIRadius.Poppin,
        borderWidth: '0px !important',
      },
    },
    '.CalendarDay__selected_start': {
      bg: 'blue.150',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    '.CalendarDay__selected_end': {
      bg: 'blue.150',
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
    },

    '.CalendarDay__selected_span': {
      bg: 'blue.150',
      '&:hover': {
        bg: 'blue.150',
        '& div': {
          borderRadius: CapUIRadius.Poppin,
          bg: 'blue.200',
        },
      },
    },
    'tr td.CalendarDay__selected_span:last-child': {
      borderTopRightRadius: CapUIRadius.Poppin,
      borderBottomRightRadius: CapUIRadius.Poppin,
    },
    'tr td.CalendarDay__selected_span:first-child': {
      borderBottomLeftRadius: CapUIRadius.Poppin,
      borderTopLeftRadius: CapUIRadius.Poppin,
    },
    'tr .CalendarDay__selected_span:only-child': {
      borderRadius: CapUIRadius.Poppin,
    },

    '.DateRangePickerInput_calendarIcon': {
      m: 0,
      py: 2,
      pr: 3,
      pl: 1,
    },
    '.DayPickerNavigation_button__default': {
      border: 0,
    },
    '.CalendarMonth_caption': {
      fontSize: '8',
      lineHeight: CapUILineHeight.Base,
      fontWeight: CapUIFontWeight.Semibold,
      color: 'blue.900',
    },
    '.CalendarMonth_table': {
      borderCollapse: 'separate',
      borderSpacing: '0px 8px',
    },
    '.DayPicker_transitionContainer': {
      paddingBottom: '37px',
      boxSizing: 'content-box',
    },
    '.DayPicker_weekHeader_li small': {
      fontSize: '1',
      textTransform: 'uppercase',
      lineHeight: CapUILineHeight.M,
      fontWeight: CapUIFontWeight.Semibold,
      color: 'gray.500',
    },
    '.CalendarDay__hovered_span': {
      '&:hover': {
        bg: 'blue.150',
      },
      bg: 'blue.150',
    },
    'tr td.CalendarDay__hovered_span:last-child': {
      borderTopRightRadius: CapUIRadius.Poppin,
      borderBottomRightRadius: CapUIRadius.Poppin,
    },
    'tr td.CalendarDay__hovered_span:first-child': {
      borderBottomLeftRadius: CapUIRadius.Poppin,
      borderTopLeftRadius: CapUIRadius.Poppin,
    },
    'tr .CalendarDay__hovered_span:only-child': {
      borderRadius: CapUIRadius.Poppin,
    },
    '.CalendarDay__blocked_out_of_range': {
      '& div': {
        color: 'gray.500',
      },
    },
    '.CalendarDay__selected.CalendarDay__blocked_out_of_range': {
      '& div': {
        color: 'blue.700',
        bg: 'blue.300',
      },
    },
  }
}
export default styles
