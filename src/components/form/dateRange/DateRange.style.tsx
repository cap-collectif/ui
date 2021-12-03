import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'

import { CapUILineHeight } from '../../../styles'
import { Box } from '../../box'
import { CapInputSize } from '../enums'

type variantDateRangeType = {
  [key in CapInputSize]: FlattenInterpolation<ThemeProps<DefaultTheme>>
}

const variantDateRange: variantDateRangeType = {
  [CapInputSize.Sm]: css`
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
type DateRangeBoxProps = { variant: CapInputSize; isInvalid: boolean }

export const DateRangeBox = styled(Box)<DateRangeBoxProps>`
  .PresetDateRangePicker_panel {
    padding: 0 22px 11px;
  }

  .PresetDateRangePicker_button {
    position: relative;
    height: 100%;
    text-align: center;
    background: 0 0;
    border: 2px solid #00a699;
    color: #00a699;
    padding: 4px 12px;
    margin-right: 8px;
    font: inherit;
    font-weight: 700;
    line-height: normal;
    overflow: visible;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
  }

  .PresetDateRangePicker_button:active {
    outline: 0;
  }

  .PresetDateRangePicker_button__selected {
    color: #fff;
    background: #00a699;
  }

  .DayPickerKeyboardShortcuts_buttonReset {
    background: 0 0;
    border: 0;
    border-radius: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    cursor: pointer;
    font-size: 14px;
  }

  .DayPickerKeyboardShortcuts_buttonReset:active {
    outline: 0;
  }

  .DayPickerKeyboardShortcuts_show {
    width: 33px;
    height: 26px;
    position: absolute;
    z-index: 2;
  }

  .DayPickerKeyboardShortcuts_show::before {
    content: '';
    display: block;
    position: absolute;
  }

  .DayPickerKeyboardShortcuts_show__bottomRight {
    bottom: 0;
    right: 0;
  }

  .DayPickerKeyboardShortcuts_show__bottomRight::before {
    border-top: 26px solid transparent;
    border-right: 33px solid #00a699;
    bottom: 0;
    right: 0;
  }

  .DayPickerKeyboardShortcuts_show__bottomRight:hover::before {
    border-right: 33px solid #008489;
  }

  .DayPickerKeyboardShortcuts_show__topRight {
    top: 0;
    right: 0;
  }

  .DayPickerKeyboardShortcuts_show__topRight::before {
    border-bottom: 26px solid transparent;
    border-right: 33px solid #00a699;
    top: 0;
    right: 0;
  }

  .DayPickerKeyboardShortcuts_show__topRight:hover::before {
    border-right: 33px solid #008489;
  }

  .DayPickerKeyboardShortcuts_show__topLeft {
    top: 0;
    left: 0;
  }

  .DayPickerKeyboardShortcuts_show__topLeft::before {
    border-bottom: 26px solid transparent;
    border-left: 33px solid #00a699;
    top: 0;
    left: 0;
  }

  .DayPickerKeyboardShortcuts_show__topLeft:hover::before {
    border-left: 33px solid #008489;
  }

  .DayPickerKeyboardShortcuts_showSpan {
    color: #fff;
    position: absolute;
  }

  .DayPickerKeyboardShortcuts_showSpan__bottomRight {
    bottom: 0;
    right: 5px;
  }

  .DayPickerKeyboardShortcuts_showSpan__topRight {
    top: 1px;
    right: 5px;
  }

  .DayPickerKeyboardShortcuts_showSpan__topLeft {
    top: 1px;
    left: 5px;
  }

  .DayPickerKeyboardShortcuts_panel {
    overflow: auto;
    background: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    padding: 22px;
    margin: 33px;
    text-align: left;
  }

  .DayPickerKeyboardShortcuts_title {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }

  .DayPickerKeyboardShortcuts_list {
    list-style: none;
    padding: 0;
    font-size: 14px;
  }

  .DayPickerKeyboardShortcuts_close {
    position: absolute;
    right: 22px;
    top: 22px;
    z-index: 2;
  }

  .DayPickerKeyboardShortcuts_close:active {
    outline: 0;
  }

  .DayPickerKeyboardShortcuts_closeSvg {
    height: 15px;
    width: 15px;
    fill: #cacccd;
  }

  .DayPickerKeyboardShortcuts_closeSvg:focus,
  .DayPickerKeyboardShortcuts_closeSvg:hover {
    fill: #82888a;
  }

  .CalendarDay {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 14px;
    text-align: center;
  }

  .CalendarDay:active {
    outline: 0;
  }

  .CalendarDay__defaultCursor {
    cursor: default;
  }

  .CalendarDay__hovered_offset {
    background: #f4f5f5;
    border: 1px double #e4e7e7;
    color: inherit;
  }

  .CalendarDay__outside {
    border: 0;
    background: #fff;
    color: #484848;
  }

  .CalendarDay__outside:hover {
    border: 0;
  }

  .CalendarDay__blocked_minimum_nights {
    background: #fff;
    border: 1px solid #eceeee;
    color: #cacccd;
  }

  .CalendarDay__highlighted_calendar {
    background: #ffe8bc;
    color: #484848;
  }

  .CalendarDay__highlighted_calendar:active,
  .CalendarDay__highlighted_calendar:hover {
    background: #ffce71;
    color: #484848;
  }

  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:active,
  .CalendarDay__blocked_calendar:hover {
    background: #cacccd;
    border: 1px solid #cacccd;
    color: #82888a;
  }

  .CalendarDay__blocked_out_of_range,
  .CalendarDay__blocked_out_of_range:active,
  .CalendarDay__blocked_out_of_range:hover {
    background: #fff;
    border: 1px solid #e4e7e7;
    color: #cacccd;
  }

  .CalendarDay__hovered_start_first_possible_end {
    background: #eceeee;
    border: 1px double #eceeee;
  }

  .CalendarDay__hovered_start_blocked_min_nights {
    background: #eceeee;
    border: 1px double #e4e7e7;
  }

  .CalendarMonth {
    background: #fff;
    text-align: center;
    vertical-align: top;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .CalendarMonth_table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .CalendarMonth_verticalSpacing {
    border-collapse: separate;
  }

  .CalendarMonth_caption {
    color: #484848;
    font-size: 18px;
    text-align: center;
    padding-top: 22px;
    padding-bottom: 37px;
    caption-side: initial;
  }

  .CalendarMonth_caption__verticalScrollable {
    padding-top: 12px;
    padding-bottom: 7px;
  }

  .CalendarMonthGrid {
    background: #fff;
    text-align: left;
    z-index: 0;
  }

  .CalendarMonthGrid__animating {
    z-index: 1;
  }

  .CalendarMonthGrid__horizontal {
    position: absolute;
    left: 9px;
  }

  .CalendarMonthGrid__vertical,
  .CalendarMonthGrid__vertical_scrollable {
    margin: 0 auto;
  }

  .CalendarMonthGrid_month__horizontal {
    display: inline-block;
    vertical-align: top;
    min-height: 100%;
  }

  .CalendarMonthGrid_month__hideForAnimation {
    position: absolute;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
  }

  .CalendarMonthGrid_month__hidden {
    visibility: hidden;
  }

  .DayPickerNavigation {
    position: relative;
    z-index: 2;
  }

  .DayPickerNavigation__horizontal {
    height: 0;
  }

  .DayPickerNavigation__verticalScrollable_prevNav {
    z-index: 1;
  }

  .DayPickerNavigation__verticalDefault {
    position: absolute;
    width: 100%;
    height: 52px;
    bottom: 0;
    left: 0;
  }

  .DayPickerNavigation__verticalScrollableDefault {
    position: relative;
  }

  .DayPickerNavigation__bottom {
    height: auto;
  }

  .DayPickerNavigation__bottomDefault {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }

  .DayPickerNavigation_button {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 0;
    padding: 0;
    margin: 0;
  }

  .DayPickerNavigation_button__default {
    border: 1px solid #e4e7e7;
    background-color: #fff;
    color: #757575;
  }

  .DayPickerNavigation_button__default:focus,
  .DayPickerNavigation_button__default:hover {
    border: 1px solid #c4c4c4;
  }

  .DayPickerNavigation_button__default:active {
    background: #f2f2f2;
  }

  .DayPickerNavigation_button__disabled {
    cursor: default;
    border: 1px solid #f2f2f2;
  }

  .DayPickerNavigation_button__disabled:focus,
  .DayPickerNavigation_button__disabled:hover {
    border: 1px solid #f2f2f2;
  }

  .DayPickerNavigation_button__disabled:active {
    background: 0 0;
  }

  .DayPickerNavigation_button__horizontalDefault {
    position: absolute;
    top: 18px;
    line-height: 0.78;
    border-radius: 3px;
    padding: 6px 9px;
  }

  .DayPickerNavigation_bottomButton__horizontalDefault {
    position: static;
    margin: -10px 22px 30px;
  }

  .DayPickerNavigation_leftButton__horizontalDefault {
    left: 22px;
  }

  .DayPickerNavigation_rightButton__horizontalDefault {
    right: 22px;
  }

  .DayPickerNavigation_button__verticalDefault {
    padding: 5px;
    background: #fff;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    display: inline-block;
    text-align: center;
    height: 100%;
    width: 50%;
  }

  .DayPickerNavigation_nextButton__verticalDefault {
    border-left: 0;
  }

  .DayPickerNavigation_nextButton__verticalScrollableDefault,
  .DayPickerNavigation_prevButton__verticalScrollableDefault {
    width: 100%;
  }

  .DayPickerNavigation_svg__horizontal {
    height: 19px;
    width: 19px;
    fill: #82888a;
    display: block;
  }

  .DayPickerNavigation_svg__vertical {
    height: 42px;
    width: 42px;
    fill: #484848;
  }

  .DayPickerNavigation_svg__disabled {
    fill: #f2f2f2;
  }

  .DayPicker {
    background: #fff;
    position: relative;
    text-align: left;
  }

  .DayPicker__horizontal {
    background: #fff;
  }

  .DayPicker__verticalScrollable {
    height: 100%;
  }

  .DayPicker__hidden {
    visibility: hidden;
  }

  .DayPicker__withBorder {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
    border-radius: 3px;
  }

  .DayPicker_portal__horizontal {
    box-shadow: none;
    position: absolute;
    left: 50%;
    top: 50%;
  }

  .DayPicker_portal__vertical {
    position: initial;
  }

  .DayPicker_focusRegion {
    outline: 0;
  }

  .DayPicker_calendarInfo__horizontal,
  .DayPicker_wrapper__horizontal {
    display: inline-block;
    vertical-align: top;
  }

  .DayPicker_weekHeaders {
    position: relative;
  }

  .DayPicker_weekHeaders__horizontal {
    margin-left: 9px;
  }

  .DayPicker_weekHeader {
    color: #757575;
    position: absolute;
    top: 62px;
    z-index: 2;
    text-align: left;
  }

  .DayPicker_weekHeader__vertical {
    left: 50%;
  }

  .DayPicker_weekHeader__verticalScrollable {
    top: 0;
    display: table-row;
    border-bottom: 1px solid #dbdbdb;
    background: #fff;
    margin-left: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .DayPicker_weekHeader_ul {
    list-style: none;
    margin: 1px 0;
    padding-left: 0;
    padding-right: 0;
    font-size: 14px;
  }

  .DayPicker_weekHeader_li {
    display: inline-block;
    text-align: center;
  }

  .DayPicker_transitionContainer {
    position: relative;
    overflow: hidden;
    border-radius: 3px;
  }

  .DayPicker_transitionContainer__horizontal {
    -webkit-transition: height 0.2s ease-in-out;
    -moz-transition: height 0.2s ease-in-out;
    transition: height 0.2s ease-in-out;
  }

  .DayPicker_transitionContainer__vertical {
    width: 100%;
  }

  .DayPicker_transitionContainer__verticalScrollable {
    padding-top: 20px;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-y: scroll;
  }

  .DateInput {
    margin: 0;
    padding: 0;
    background: #fff;
    position: relative;
    display: inline-block;
    width: 130px;
    vertical-align: middle;
  }

  .DateInput__small {
    width: 97px;
  }

  .DateInput__block {
    width: 100%;
  }

  .DateInput__disabled {
    background: #f2f2f2;
    color: #dbdbdb;
  }

  .DateInput_input {
    font-weight: 200;
    font-size: 19px;
    line-height: 24px;
    color: #484848;
    background-color: #fff;
    width: 100%;
    padding: 11px 11px 9px;
    border: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 2px solid transparent;
    border-left: 0;
    border-radius: 0;
  }

  .DateInput_input__small {
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.2px;
    padding: 7px 7px 5px;
  }

  .DateInput_input__regular {
    font-weight: inherit;
  }

  .DateInput_input__readOnly {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .DateInput_input__focused {
    outline: 0;
    background: #fff;
    border: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 2px solid #008489;
    border-left: 0;
  }

  .DateInput_input__disabled {
    background: #f2f2f2;
    font-style: italic;
  }

  .DateInput_screenReaderMessage {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .DateInput_fang {
    position: absolute;
    width: 20px;
    height: 10px;
    left: 22px;
    z-index: 2;
  }

  .DateInput_fangShape {
    fill: #fff;
  }

  .DateInput_fangStroke {
    stroke: #dbdbdb;
    fill: transparent;
  }

  .DateRangePickerInput {
    background-color: #fff;
    display: inline-block;
  }

  .DateRangePickerInput__disabled {
    background: #f2f2f2;
  }

  .DateRangePickerInput__withBorder {
    border-radius: 2px;
    border: 1px solid #dbdbdb;
  }

  .DateRangePickerInput__rtl {
    direction: rtl;
  }

  .DateRangePickerInput__block {
    display: block;
  }

  .DateRangePickerInput__showClearDates {
    padding-right: 30px;
  }

  .DateRangePickerInput_arrow {
    display: inline-block;
    vertical-align: middle;
    color: #484848;
  }

  .DateRangePickerInput_arrow_svg {
    vertical-align: middle;
    fill: #484848;
    height: 24px;
    width: 24px;
  }

  .DateRangePickerInput_clearDates {
    background: 0 0;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    padding: 10px;
    margin: 0 10px 0 5px;
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .DateRangePickerInput_clearDates__small {
    padding: 6px;
  }

  .DateRangePickerInput_clearDates_default:focus,
  .DateRangePickerInput_clearDates_default:hover {
    background: #dbdbdb;
    border-radius: 50%;
  }

  .DateRangePickerInput_clearDates__hide {
    visibility: hidden;
  }

  .DateRangePickerInput_clearDates_svg {
    fill: #82888a;
    height: 12px;
    width: 15px;
    vertical-align: middle;
  }

  .DateRangePickerInput_clearDates_svg__small {
    height: 9px;
  }

  .DateRangePickerInput_calendarIcon {
    background: 0 0;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    padding: 10px;
    margin: 0 5px 0 10px;
  }

  .DateRangePickerInput_calendarIcon_svg {
    fill: #82888a;
    height: 15px;
    width: 14px;
    vertical-align: middle;
  }

  .DateRangePicker {
    position: relative;
    display: inline-block;
  }

  .DateRangePicker__block {
    display: block;
  }

  .DateRangePicker_picker {
    z-index: 1;
    background-color: #fff;
    position: absolute;
  }

  .DateRangePicker_picker__rtl {
    direction: rtl;
  }

  .DateRangePicker_picker__directionLeft {
    left: 0;
  }

  .DateRangePicker_picker__directionRight {
    right: 0;
  }

  .DateRangePicker_picker__portal {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .DateRangePicker_picker__fullScreenPortal {
    background-color: #fff;
  }

  .DateRangePicker_closeButton {
    background: 0 0;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    z-index: 2;
  }

  .DateRangePicker_closeButton:focus,
  .DateRangePicker_closeButton:hover {
    color: darken(#cacccd, 10%);
    text-decoration: none;
  }

  .DateRangePicker_closeButton_svg {
    height: 15px;
    width: 15px;
    fill: #cacccd;
  }

  /*
  Custom Code for the date Range component
  Quick Explanation : NextJs doesn't accept packages importing CSS from node_modules so we had to put our CSS in JS 
  by creating this file with the first part being most of the datepicker.css file and the second part is our own custom CSS
   */

  .DateRangePickerInput {
    border: ${props => props.theme.borders.normal};
    border-radius: ${props => props.theme.radii.normal}px;
    border-color: ${props =>
      props.isInvalid
        ? props.theme.colors.red['500']
        : props.theme.colors.gray['300']};
    font-family: ${props => props.theme.fonts.input};
    line-height: 24px;
    background-color: white;

    &:focus-within {
      border-color: ${props => props.theme.colors.blue['500']};
    }

    color: ${props => props.theme.colors.gray['900']};

    &__disabled {
      background-color: ${props => props.theme.colors.gray['100']};
      border-color: ${props => props.theme.colors.gray['200']};

      &:hover,
      &.hover {
        border-color: ${props => props.theme.colors.gray['200']};
      }

      .DateRangePickerInput_calendarIcon {
        cursor: default;
      }
    }

    ${props =>
      props.isInvalid &&
      `
      background-color: ${props.theme.colors.red['150']};
      border-color: ${props.theme.colors.red['500']};
      &:hover,&.hover {
        border-color:${props.theme.colors.red['500']};
      }
      &:focus-within{
        background-color: 'white';
        border-color: ${props.theme.colors.red['500']};
      }
    `}
  }

  .DateInput {
    width: 100px;
    background: transparent;
  }

  .DateInput_input {
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes[3]};
    font-family: ${props => props.theme.fonts.input};
    line-height: ${CapUILineHeight.Base};
    color: ${props => props.theme.colors.gray['900']};
    background-color: transparent;
    border-bottom: none;
    padding: 0;
    width: 90px;

    &::placeholder {
      color: ${props => props.theme.colors.gray['500']};
      font-family: ${props => props.theme.fonts.input};
      line-height: ${CapUILineHeight.Base};
    }

    &:disabled {
      background-color: ${props => props.theme.colors.gray['100']};
      font-style: normal;
    }
  }

  .DateInput_input__disabled {
    color: ${props => props.theme.colors.gray['500']};
  }

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

  .DateRangePickerInput_calendarIcon {
    margin: 0;
    padding-bottom: 2px;
    padding-top: 2px;
    padding-right: 3px;
    padding-left: 1px;
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

  tr .CalendarDay__after_hovered_start {
    //background-color: transparent;
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

  ${props => variantDateRange[props.variant]}
`
