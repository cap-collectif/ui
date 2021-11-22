import React, { FunctionComponent } from 'react'

import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'

export const NavPrev: FunctionComponent = () => {
  return (
    <button
      className="DayPickerNavigation_button__horizontalDefault DayPickerNavigation_leftButton__horizontalDefault"
      aria-label="Move backward to switch to the previous month."
    >
      <Icon
        className="DayPickerNavigation_button"
        color="gray.700"
        name={CapUIIcon.ArrowLeftO}
        size={CapUIIconSize.Sm}
      />
    </button>
  )
}

export const NavNext: FunctionComponent = () => {
  return (
    <button
      className=" DayPickerNavigation_button__horizontalDefault DayPickerNavigation_rightButton__horizontalDefault"
      aria-label="Move forward to switch to the next month."
    >
      <Icon
        color="gray.700"
        name={CapUIIcon.ArrowRightO}
        size={CapUIIconSize.Sm}
      />
    </button>
  )
}
