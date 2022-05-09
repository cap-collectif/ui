import * as React from 'react'

type Option = {
  value: any
  label: string | React.ReactNode
}
export type DropDownProps = {
  options: Option[]
  width: string
  onSelect: (selected: Option) => void
}

const Dropdown = ({ options, width, onSelect }: DropDownProps) => {
  return (
    <ul>
      {options.map((option, index) => (
        <li key={index} onClick={() => onSelect(option)}>
          {option.label}
        </li>
      ))}
    </ul>
  )
}

export default Dropdown
