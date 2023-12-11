import { css } from 'styled-components'

import { CapUILineHeight } from '../../../styles'
import { CapInputSize } from '../enums'

// TODO wait for https://github.com/styled-components/styled-components/pull/4126 to be merged
type VariantDateType = {
  [key in CapInputSize]: any //FlattenInterpolation<ThemeProps<DefaultTheme>>
}

export const variantDate: VariantDateType = {
  [CapInputSize.Sm]: css<any>`
    .DateInput:first-child {
      padding-left: ${props => props.theme.sizes['3']};
      padding-right: ${props => props.theme.sizes['3']};
    }
    .DateInput {
      padding-top: ${props => props.theme.sizes['1']};
      padding-bottom: ${props => props.theme.sizes['1']};
      padding-left: ${props => props.theme.sizes['2']};
      padding-right: ${props => props.theme.sizes['2']};
    }
  `,
  [CapInputSize.Md]: css`
    .DateInput:first-child {
      padding-left: ${props => props.theme.sizes['3']};
      padding-right: ${props => props.theme.sizes['3']};
    }
    .DateInput {
      padding: ${props => props.theme.sizes['2']};
    }
  `,
}

export type DateBoxProps = {
  variant: CapInputSize
  isInvalid: boolean
}

export const commonStyle = css<any>`
  .CalendarDay {
    &:hover div {
      background-color: ${props => props.theme.colors.blue['200']};
    }

    & div {
      width: 100%;
      height: 100%;
    }
  }

  .CalendarDay__default {
    font-weight: normal;
    font-size: ${props => props.theme.fontSizes[3]};
    font-family: ${props => props.theme.fonts.input};
    line-height: ${CapUILineHeight.Base};
    color: ${props => props.theme.colors.gray['900']};
    border: none;
    background-color: white;
  }

  .CalendarDay__today {
    & div {
      color: ${props => props.theme.colors.gray['900']};
      border-width: 1px;
      border-color: ${props => props.theme.colors.gray['900']};
    }
  }

  .CalendarDay__selected {
    border-radius: ${props => props.theme.radii.poppin}px;
    padding: 0;

    & div {
      background-color: ${props => props.theme.colors.blue['500']};
      color: ${props => props.theme.colors.blue['100']};
      border-radius: ${props => props.theme.radii.poppin}px;
      border: 0;
    }
  }

  .CalendarDay__selected_start {
    background-color: ${props => props.theme.colors.blue['150']};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .CalendarDay__selected_end {
    background-color: ${props => props.theme.colors.blue['150']};
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  .CalendarDay__selected_span {
    background-color: ${props => props.theme.colors.blue['150']};

    &:hover {
      background-color: ${props => props.theme.colors.blue['150']};

      & div {
        border-radius: ${props => props.theme.radii.poppin}px;
        background-color: ${props => props.theme.colors.blue['200']};
      }
    }
  }

  tr td.CalendarDay__selected_span:last-child {
    border-top-right-radius: ${props => props.theme.radii.poppin}px;
    border-bottom-right-radius: ${props => props.theme.radii.poppin}px;
  }

  tr td.CalendarDay__selected_span:first-child {
    border-bottom-left-radius: ${props => props.theme.radii.poppin}px;
    border-top-left-radius: ${props => props.theme.radii.poppin}px;
  }

  tr .CalendarDay__selected_span:only-child {
    border-radius: ${props => props.theme.radii.poppin}px;
  }

  .DateRangePickerInput_calendarIcon,
  .SingleDatePickerInput_calendarIcon {
    margin: 0;
    padding: 2px 3px;
  }

  .DayPickerNavigation_button__default {
    border: 0;
  }

  .CalendarMonth_caption {
    font-size: ${props => props.theme.fontSizes[4]};
    line-height: ${CapUILineHeight.Base};
    font-weight: ${props => props.theme.fontWeights.semibold};
    color: ${props => props.theme.colors.blue['900']};
  }

  .CalendarMonth_table {
    border-collapse: separate;
    border-spacing: 0 8px;
  }

  .DayPicker_transitionContainer {
    padding-bottom: 37px;
    box-sizing: content-box;
  }

  .DayPicker_weekHeader_li small {
    font-size: ${props => props.theme.fontSizes[1]};
    text-transform: uppercase;
    line-height: ${CapUILineHeight.M};
    font-weight: ${props => props.theme.fontWeights.semibold};
    color: ${props => props.theme.colors.gray['500']};
  }

  .CalendarDay__hovered_span {
    &:hover {
      background-color: ${props => props.theme.colors.blue['150']};
      border-top-right-radius: ${props => props.theme.radii.poppin}px;
      border-bottom-right-radius: ${props => props.theme.radii.poppin}px;
    }

    background-color: ${props => props.theme.colors.blue['150']};
  }

  tr td.CalendarDay__hovered_span:last-child {
    border-top-right-radius: ${props => props.theme.radii.poppin}px;
    border-bottom-right-radius: ${props => props.theme.radii.poppin}px;
  }

  tr td.CalendarDay__hovered_span:first-child {
    border-bottom-left-radius: ${props => props.theme.radii.poppin}px;
    border-top-left-radius: ${props => props.theme.radii.poppin}px;
  }

  tr .CalendarDay__hovered_span:only-child {
    border-radius: ${props => props.theme.radii.poppin}px;
  }

  .CalendarDay__blocked_out_of_range {
    & div {
      color: ${props => props.theme.colors.gray['500']};
    }
  }

  .CalendarDay__selected.CalendarDay__blocked_out_of_range {
    & div {
      color: ${props => props.theme.colors.blue['700']};
      background-color: ${props => props.theme.colors.blue['300']};
    }
  }
`
