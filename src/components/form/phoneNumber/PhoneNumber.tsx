import cn from 'classnames'
import * as React from 'react'
import { components, ControlProps, GroupBase } from 'react-select'

import { Box, BoxPropsOf } from '../../box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { Flex } from '../../layout'
import { Spinner } from '../../spinner'
import { Text } from '../../typography'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import { Input } from '../input'
import InputGroup from '../inputGroup/InputGroup'
import { Select } from '../select'
import { COUNTRY_CODES } from './enums'

const flags = require('./flags.json')

export type FlagType = {
  name: string
  dial_code: number
  country_code: string
  flag: string
  currency: string
  currency_symbol: string
}

export interface PhoneNumberProps
  extends Omit<BoxPropsOf<'input'>, 'onChange'> {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
  readonly uniqueCountry?: COUNTRY_CODES
  readonly onChange: (newValue: string) => void
}
export type FlagOptionType = {
  value: string
  label: React.ReactNode
}
const flagsOptions: FlagOptionType[] = flags.map((flag: FlagType) => ({
  value: flag.country_code,
  label: (
    <Flex direction="row" spacing={2} align="center">
      <Box>{flag.flag}</Box>
      <Text color="gray.900" fontSize={3} lineHeight="base">
        {flag.country_code} (+{flag.dial_code})
      </Text>
    </Flex>
  ),
}))

export function Control<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({ children, ...props }: ControlProps<Option, IsMulti, Group>) {
  const { isLoading } = props.selectProps
  return (
    <components.Control {...props}>
      {Array.isArray(children) && children[0]}
      {isLoading && <Spinner mr={2} color="blue.500" />}
      {!isLoading && !props.isDisabled && (
        <Flex
          mr={2}
          direction="column"
          style={{ cursor: 'pointer' }}
          onClick={() => props.clearValue()}
        >
          <Icon
            name={CapUIIcon.ArrowUp}
            size={CapUIIconSize.Xs}
            color="gray.700"
          />
          <Icon
            name={CapUIIcon.ArrowDown}
            size={CapUIIconSize.Xs}
            color="gray.700"
          />
        </Flex>
      )}
    </components.Control>
  )
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({
  className,
  variantSize,
  uniqueCountry,
  onChange,
  ...props
}: PhoneNumberProps) => {
  const inputProps = useFormControl<HTMLInputElement>(props)
  const getUniqueCountryIndex = (CountryCode: string) => {
    return flagsOptions.findIndex(
      (flag: FlagOptionType) => flag.value === CountryCode,
    )
  }

  const [countryCode, setCountryCode] = React.useState<string>('')
  const [number, setNumber] = React.useState<string>('')
  React.useEffect(() => {
    if (uniqueCountry && countryCode === '') {
      setCountryCode(uniqueCountry)
    }
    if (countryCode !== '' && number !== '') {
      const DialCode = flags[getUniqueCountryIndex(countryCode)].dial_code
      onChange(`+${DialCode} ${number}`)
    }
  }, [countryCode, number, uniqueCountry])
  return (
    <Box className={cn('cap-phone-number', className)}>
      <InputGroup>
        <Select
          {...inputProps}
          isDisabled={!!uniqueCountry}
          options={flagsOptions}
          defaultValue={
            uniqueCountry
              ? flagsOptions[getUniqueCountryIndex(uniqueCountry)]
              : null
          }
          inputId="color"
          components={{ Control }}
          className={cn('cap-phone-number-select', `${className}-select`)}
          onChange={value => {
            setCountryCode(value.value)
          }}
        />
        <Input
          {...inputProps}
          maxLength={10}
          variantSize={inputProps.variantSize}
          type="tel"
          className={cn('cap-phone-number-input', `${className}-input`)}
          onChange={(event: React.BaseSyntheticEvent): void => {
            setNumber(event.target.value)
          }}
        />
      </InputGroup>
    </Box>
  )
}

export default PhoneNumber
