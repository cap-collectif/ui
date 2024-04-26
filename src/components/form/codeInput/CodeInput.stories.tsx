import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapUIFontFamily } from '../../../styles'
import { Box } from '../../box/Box'
import { Button } from '../../button'
import { Flex } from '../../layout'
import { MultiStepModal } from '../../multiStepModal'
import { CapUISpotIcon, CapUISpotIconSize, SpotIcon } from '../../spotIcon'
import { Heading, Text } from '../../typography'
import { FormControl } from '../formControl'
import { FormErrorMessage } from '../formErrorMessage'
import { FormLabel } from '../formLabel'
import CodeInput, { CodeInputProps } from './CodeInput'
import CodeInputLib from './CodeInputLib'

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
      <FormLabel htmlFor="Code_Input" label="Label">
        {!args.isRequired && (
          <Box as="span" color="gray.500">
            facultatif
          </Box>
        )}
      </FormLabel>
      <CodeInput
        id="Code_Input"
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
      <FormLabel htmlFor="Code_Input" label="Label">
        {!args.isRequired && (
          <Box as="span" color="gray.500">
            facultatif
          </Box>
        )}
      </FormLabel>
      <CodeInput
        id="Code_Input"
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
      <FormLabel htmlFor="Code_Input" label="Label">
        {!args.isRequired && (
          <Box as="span" color="gray.500">
            facultatif
          </Box>
        )}
      </FormLabel>
      <CodeInput
        id="Code_Input"
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
        <FormLabel htmlFor="Code_Input" label="Label">
          {!args.isRequired && (
            <Box as="span" color="gray.500">
              facultatif
            </Box>
          )}
        </FormLabel>
        <CodeInput
          id="Code_Input"
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

export const CodeInputFromLib: Story<Args> = ({
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
        <FormLabel htmlFor="Code_Input" label="Label">
          {!args.isRequired && (
            <Box as="span" color="gray.500">
              facultatif
            </Box>
          )}
        </FormLabel>
        <CodeInputLib {...args} />
        {/* <CodeInputMy
          onComplete={onComplete}
          isVerified={isVerified}
          length={6}
        /> */}
      </FormControl>
    </Flex>
  )
}
CodeInputFromLib.args = {
  isVerified: false,
  isRequired: false,
  value: '123456',
}

export const WithinModal: Story<Args> = ({
  errorMessage,
  value,
  onComplete,
  isVerified,
  length,
  ...args
}) => {
  return (
    <>
      <MultiStepModal.Header>
        <Text
          uppercase
          color="neutral-gray.500"
          fontWeight={700}
          fontSize={1}
          lineHeight="sm"
        >
          Title
        </Text>
        <Heading>Vérifiez le code</Heading>
      </MultiStepModal.Header>
      <MultiStepModal.Body>
        <Flex
          as="form"
          direction="column"
          spacing={3}
          align="center"
          justify="center"
        >
          <SpotIcon
            name={CapUISpotIcon.ADD_CONTACT}
            size={CapUISpotIconSize.Lg}
          />
          <Text textAlign="center" fontSize="18px" lineHeight="24px">
            <Text
              id="confirmation.code.header.title"
              values={{
                phoneNumber: '06 06 06 06 06',
              }}
            />
            <CodeInputLib />
            {/* <CodeInput onComplete={onComplete} /> */}
          </Text>
        </Flex>
      </MultiStepModal.Body>
      <MultiStepModal.Footer>
        <Button
          variant="secondary"
          variantColor="hierarchy"
          variantSize="medium"
        >
          Retour
        </Button>
        <Button
          variantSize="medium"
          variant="secondary"
          disabled={false}
          onClick={e => {
            console.log('clickety click', e)
          }}
        >
          Valider le vote
        </Button>
      </MultiStepModal.Footer>
    </>
  )
}
WithinModal.args = {
  isVerified: false,
  isRequired: false,
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
        <FormLabel htmlFor="Code_Input" label="Label">
          {!args.isRequired && (
            <Box as="span" color="gray.500">
              facultatif
            </Box>
          )}
        </FormLabel>
        <CodeInput
          id="Code_Input"
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
