import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapUIFontFamily } from '../../../styles'
import { Box } from '../../box/Box'
import { Flex } from '../../layout'
import { FormControl } from '../formControl'
import { FormErrorMessage } from '../formErrorMessage'
import { FormLabel } from '../formLabel'
import CodeInput, { CodeInputProps } from './CodeInput'

type Args = {
  errorMessage: string
  placeholder: string
  isInvalid: boolean
  isRequired: boolean
  isVerified: boolean
  onComplete: (input: string) => void
  value: string
  length: number
  isDisabled: boolean
}

const meta: Meta = {
  title: 'Library/Form/CodeInput',
  component: CodeInput,
  args: { isVerified: false, length: 6 },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta
export const Default: Story<CodeInputProps> = args => <CodeInput {...args} />

export const WithLabel: Story<Args> = ({
  errorMessage,
  value: storybookValue,
  onComplete,
  isVerified,
  length,
  ...args
}) => {
  return (
    <FormControl {...args}>
      <FormLabel htmlFor="Date" label="Label">
        {!args.isRequired && (
          <Box as="span" color="gray.500">
            facultatif
          </Box>
        )}
      </FormLabel>
      <CodeInput
        length={length}
        onComplete={onComplete}
        isVerified={isVerified}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

export const Disabled: Story<Args> = ({
  errorMessage,
  value: storybookValue,
  onComplete,
  isVerified,
  length,
  ...args
}) => {
  return (
    <FormControl {...args}>
      <FormLabel htmlFor="Date" label="Label">
        {!args.isRequired && (
          <Box as="span" color="gray.500">
            facultatif
          </Box>
        )}
      </FormLabel>
      <CodeInput
        length={length}
        onComplete={onComplete}
        isVerified={isVerified}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
Disabled.args = {
  isDisabled: true,
}
export const WithError: Story<Args> = ({
  errorMessage,
  value: storybookValue,
  onComplete,
  isVerified,
  length,
  ...args
}) => {
  return (
    <FormControl {...args}>
      <FormLabel htmlFor="Date" label="Label">
        {!args.isRequired && (
          <Box as="span" color="gray.500">
            facultatif
          </Box>
        )}
      </FormLabel>
      <CodeInput
        length={length}
        onComplete={onComplete}
        isVerified={isVerified}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
WithError.args = {
  errorMessage: 'Veuillez renseigner un code de vérification',
  isInvalid: true,
}
export const Verified: Story<Args> = ({
  errorMessage,
  value,
  onComplete,
  isVerified,
  length,
  ...args
}) => {
  return (
    <Flex width="280px">
      <FormControl {...args}>
        <FormLabel htmlFor="Date" label="Label">
          {!args.isRequired && (
            <Box as="span" color="gray.500">
              facultatif
            </Box>
          )}
        </FormLabel>
        <CodeInput
          value={value}
          length={length}
          onComplete={onComplete}
          isVerified={isVerified}
        />
        <Box
          color="green.500"
          fontFamily={CapUIFontFamily.Body}
          lineHeight="normal"
          fontSize={3}
          textAlign="center"
        >
          Merci, votre numéro a été vérifié !
        </Box>
      </FormControl>
    </Flex>
  )
}
Verified.args = {
  isVerified: true,
  value: '123456',
}
export const Mobile: Story<Args> = ({
  errorMessage,
  value,
  onComplete,
  isVerified,
  length,
  ...args
}) => {
  return (
    <Flex width="100%">
      <FormControl {...args}>
        <FormLabel htmlFor="Date" label="Label">
          {!args.isRequired && (
            <Box as="span" color="gray.500">
              facultatif
            </Box>
          )}
        </FormLabel>
        <CodeInput
          value={value}
          length={length}
          onComplete={onComplete}
          isVerified={isVerified}
        />
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </Flex>
  )
}
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}
