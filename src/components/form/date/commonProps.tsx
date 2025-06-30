import React from 'react'
import type { SingleDatePickerShape, DateRangePickerShape } from 'react-dates'

import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { NavNext, NavPrev } from './Nav'
import { Moment } from 'moment';
import { Flex } from '../../layout/Flex';
import { CapUIRadius } from '../../../styles';

const CustomDayContent = ({ day }: { day: Moment }) => (
  <Flex justify="center" align="center" borderRadius={CapUIRadius.Poppin}>
    {day.format('D')}
  </Flex>
)

type CommonProps = {
  inputIconPosition: SingleDatePickerShape['inputIconPosition'] | DateRangePickerShape['inputIconPosition']
  hideKeyboardShortcutsPanel: SingleDatePickerShape['hideKeyboardShortcutsPanel'] | DateRangePickerShape['hideKeyboardShortcutsPanel']
  verticalSpacing: SingleDatePickerShape['verticalSpacing'] | DateRangePickerShape['verticalSpacing']
  horizontalMargin: SingleDatePickerShape['horizontalMargin'] | DateRangePickerShape['horizontalMargin']
  daySize: SingleDatePickerShape['daySize'] | DateRangePickerShape['daySize']
  navPrev: SingleDatePickerShape['navPrev'] | DateRangePickerShape['navPrev']
  navNext: SingleDatePickerShape['navNext'] | DateRangePickerShape['navNext']
  customInputIcon: SingleDatePickerShape['customInputIcon'] | DateRangePickerShape['customInputIcon']
  renderDayContents: SingleDatePickerShape['renderDayContents'] | DateRangePickerShape['renderDayContents']
}

export const COMMON_PROPS: CommonProps = {
  inputIconPosition: 'after',
  hideKeyboardShortcutsPanel: true,
  verticalSpacing: 8,
  horizontalMargin: 0,
  daySize: 32,
  navPrev: <NavPrev />,
  navNext: <NavNext />,
  customInputIcon: (
    <Icon color="inherit" name={CapUIIcon.CalendarO} size={CapUIIconSize.Md} />
  ),
  renderDayContents: (day: Moment) => <CustomDayContent day={day} />
}
