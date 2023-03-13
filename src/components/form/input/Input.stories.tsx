import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Box } from '../../box/Box'
import { Icon, CapUIIcon, CapUIIconSize } from '../../icon'
import { Tooltip } from '../../tooltip'
import { CapInputSize } from '../enums'
import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import { FormGuideline } from '../formGuideline'
import FormLabel from '../formLabel/FormLabel'
import Input, { InputProps } from './Input'
import mdx from './Input.mdx'

type Args = {
  errorMessage: string
  placeholder: string
  isInvalid: boolean
  isRequired: boolean
  variantSize: CapInputSize
}

const meta: Meta = {
  title: 'Library/Form/Input',
  component: Input,
  args: {
    placeholder: 'Placeholder...',
    errorMessage: 'Error info.',
    isRequired: true,
    isInvalid: false,
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story<InputProps> = args => (
  <FormControl {...args}>
    <Input />
  </FormControl>
)

export const WithAnErrorMessage: Story<Args> = ({
  errorMessage,
  placeholder,
  ...args
}) => (
  <FormControl {...args}>
    <Input placeholder={placeholder} />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

WithAnErrorMessage.args = {
  isInvalid: true,
}

export const WithFixedWidthAndLabel: Story<Args> = ({
  errorMessage,
  placeholder,
  variantSize,
  ...args
}) => (
  <FormControl {...args}>
    <FormLabel htmlFor="name" label="Label">
      {!args.isRequired && (
        <Box as="span" color="gray.500">
          facultatif
        </Box>
      )}
    </FormLabel>
    <Input
      width="300px"
      placeholder={placeholder}
      id="name"
      variantSize={variantSize}
    />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

WithFixedWidthAndLabel.args = {
  errorMessage: 'Error info. ceci est une erreur aïe alors bon ! La width !',
}

export const WithGuideline: Story<Args> = ({
  errorMessage,
  placeholder,
  ...args
}) => (
  <FormControl {...args} width="300px" mt="20px">
    <FormLabel htmlFor="name" label="Label">
      <Tooltip label="Une aide en plus">
        <Icon name={CapUIIcon.Info} size={CapUIIconSize.Sm} color="blue.500" />
      </Tooltip>
    </FormLabel>
    <FormGuideline>Guidelines</FormGuideline>
    <Input aria-describedby="Accessible" placeholder={placeholder} id="name" />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

export const WithSimpleFormErrorHandling: Story<Args> = ({
  placeholder,
  ...args
}) => {
  const [isValid, setIsValid] = React.useState(true)
  return (
    <FormControl {...args} isInvalid={!isValid} width="300px">
      <FormLabel htmlFor="name" label="Validité" />
      <FormGuideline>Entrez le mot "valide" :</FormGuideline>
      <Input
        placeholder={placeholder}
        id="name"
        onBlur={e => setIsValid(e.target.value === 'valide')}
      />
      <FormErrorMessage>Mauvais mot :(</FormErrorMessage>
    </FormControl>
  )
}

export const WithOnClickActionsExample: Story<Args> = ({
  errorMessage,
  placeholder,
  ...args
}) => {
  const [value, setValue] = React.useState('')
  return (
    <FormControl {...args} width="300px" mt="20px">
      <FormLabel htmlFor="name" label="Label">
        <Tooltip label="Une aide en plus">
          <Icon
            name={CapUIIcon.Info}
            size={CapUIIconSize.Sm}
            color="blue.500"
          />
        </Tooltip>
      </FormLabel>
      <Input
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        value={value}
        onClickActions={[
          { icon: CapUIIcon.Trash, onClick: () => setValue('') },
          { icon: CapUIIcon.Pencil, onClick: () => setValue('clickity') },
        ]}
      />
    </FormControl>
  )
}
