import { Meta, Story } from '@storybook/react'

import Button from '../button/Button'
import { Flex } from '../layout/Flex'
import { Text } from '../typography/Text'
import { clearToasts, toast, Toast, ToastProps } from './index'

const meta: Meta = {
  title: 'Library/Toast',
  component: Toast,
  args: {},
  argTypes: {
    id: {
      control: { disable: true },
    },
    position: {
      defaultValue: 'top',
    },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<ToastProps> = args => (
  <Flex direction={['column', 'row']} gridGap={2} wrap="wrap">
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          ...args,
          variant: 'success',
          content: 'Je suis un toast de type success',
        })
      }}
    >
      Notify success
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          ...args,
          variant: 'info',
          content: 'Je suis un toast de type info',
        })
      }}
    >
      Notify info
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          ...args,
          variant: 'warning',
          content: 'Je suis un toast de type warning',
        })
      }}
    >
      Notify warning
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      variantColor="danger"
      onClick={() => {
        toast({
          ...args,
          variant: 'danger',
          content: 'Je suis un toast de type danger',
        })
      }}
    >
      Notify danger
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          ...args,
          variant: 'loading',
          content: 'Je suis un toast de type loading',
        })
      }}
    >
      Notify loading
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          ...args,
          variant: 'info',
          content: 'Ouvrez la console et fermez-moi',
          onClose: () =>
            console.log("Un log qui s'affiche à la fermeture du toast !"),
        })
      }}
    >
      Toast with onClose
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          ...args,
          variant: 'success',
          content: `Toast with an extraordinarily long label that should help see how such a
      case would be rendered if someone had the craziest idea of making it an
      actual real-life case, like who would do this anyway?`,

          onClose: () =>
            console.log("Un log qui s'affiche à la fermeture du toast !"),
        })
      }}
    >
      Toast with very long content
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        clearToasts()
      }}
    >
      Clear toast
    </Button>
  </Flex>
)

export const WithLink: Story<ToastProps> = () => (
  <Flex direction={['column', 'row']} gridGap={2} wrap="wrap">
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          variant: 'success',
          content: (
            <Text>
              Je suis un toast <a href="https://google.com">de type success</a>
            </Text>
          ),
        })
      }}
    >
      Notify success
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          variant: 'info',
          content: (
            <Text>
              Je suis un toast <a href="https://google.com">de type info</a>
            </Text>
          ),
        })
      }}
    >
      Notify info
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          variant: 'warning',
          content: (
            <Text>
              Je suis un toast <a href="https://google.com">de type warning</a>
            </Text>
          ),
        })
      }}
    >
      Notify warning
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      variantColor="danger"
      onClick={() => {
        toast({
          variant: 'danger',
          content: (
            <Text>
              Je suis un toast <a href="https://google.com">de type danger</a>
            </Text>
          ),
        })
      }}
    >
      Notify danger
    </Button>
  </Flex>
)

export const WithPosition: Story<ToastProps> = () => (
  <Flex direction={['column', 'row']} gridGap={2} wrap="wrap">
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          position: 'top-left',
          content: 'Je suis un toast',
          variant: 'success',
        })
      }}
    >
      Notify top left
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          position: 'top',
          content: 'Je suis un toast',
          variant: 'success',
        })
      }}
    >
      Notify top
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          position: 'top-right',
          content: 'Je suis un toast',
          variant: 'success',
        })
      }}
    >
      Notify top right
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          position: 'bottom-left',
          content: 'Je suis un toast',
          variant: 'success',
        })
      }}
    >
      Notify bottom left
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          position: 'bottom',
          content: 'Je suis un toast',
          variant: 'success',
        })
      }}
    >
      Notify bottom
    </Button>
    <Button
      variant="primary"
      variantSize="medium"
      onClick={() => {
        toast({
          position: 'bottom-right',
          content: 'Je suis un toast',
          variant: 'success',
        })
      }}
    >
      Notify bottom right
    </Button>
  </Flex>
)
