import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapUIFontFamily } from '../../../styles'
import { Box } from '../../box/Box'
import { Button } from '../../button'
import { Flex } from '../../layout'
import { CapUIModalSize } from '../../modal'
import Modal from '../../modal/Modal'
import { CapUISpotIcon, CapUISpotIconSize, SpotIcon } from '../../spotIcon'
import { Heading, Text } from '../../typography'
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
  ref: React.Ref<HTMLInputElement | null>
  correctValue: string
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
        onComplete={onComplete}
        isVerified={isVerified}
        maxLength={length}
        {...args}
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
        onComplete={onComplete}
        isVerified={isVerified}
        maxLength={length}
        {...args}
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
        onComplete={onComplete}
        isVerified={isVerified}
        maxLength={length}
        {...args}
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
          onComplete={onComplete}
          isVerified={isVerified}
          maxLength={length}
          {...args}
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

export const WithinModal: Story<Args> = ({
  errorMessage,
  isDisabled,
  isRequired,
  length,
  ...args
}) => {
  const [code, setCode] = React.useState('')
  const [isVerified, setIsVerified] = React.useState(false)
  const [isInvalid, setIsInvalid] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)

  // ! This is required because of the modal animation/loading time
  // TODO: Update Modal
  const focusInputRef = React.useCallback(node => {
    setTimeout(() => {
      if (node !== null) {
        node.focus()
      }
    }, 500)
  }, [])

  const onComplete = (value: string) => {
    if (value === args.correctValue) {
      setIsVerified(true)
      setIsInvalid(false)
    } else {
      setIsVerified(false)
      setIsInvalid(true)
      setCode('')
    }
  }

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        Ouvrir la modale de vérification de code
      </Button>
      {showModal && (
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          ariaLabel={'Vérifiez le code'}
          size={CapUIModalSize.Xl}
        >
          <Modal.Header>
            <Text
              uppercase
              color="neutral-gray.500"
              fontWeight={700}
              fontSize={1}
              lineHeight="sm"
            >
              Modale de vérification
            </Text>
            <Heading>Vérifiez le code</Heading>
          </Modal.Header>
          <Modal.Body>
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
              <Box textAlign="center" fontSize="18px" lineHeight="24px">
                <Text
                  id="confirmation.code.header.title"
                  values={{
                    phoneNumber: '06 06 06 06 06',
                  }}
                />
                <CodeInput
                  {...args}
                  isInvalid={isInvalid}
                  maxLength={length}
                  isVerified={isVerified}
                  onComplete={onComplete}
                  onChange={value => setCode(value)}
                  ref={focusInputRef}
                  autoFocus
                  value={code}
                />
              </Box>
            </Flex>
          </Modal.Body>

          <Modal.Footer>
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
              disabled={isDisabled || isInvalid || !code}
            >
              Valider le vote
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  )
}
WithinModal.args = {
  correctValue: '123456',
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
          onComplete={onComplete}
          isVerified={isVerified}
          maxLength={length}
          {...args}
          ref={args.ref}
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
