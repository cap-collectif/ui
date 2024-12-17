import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapUIFontWeight } from '../../styles'
import { pxToRem } from '../../styles/modules/mixins'
import { Box } from '../box'
import { FormGuideline, FormLabel, Input } from '../form'
import { CapUIIcon, Icon } from '../icon'
import { Flex } from '../layout'
import { Text } from '../typography'
import { Divider, DividerProps } from './'

const meta: Meta<DividerProps> = {
  title: 'Library/Divider',
  component: Divider,
  args: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<DividerProps> = args => (
  <Divider {...args}>DEFAULT DIVIDER</Divider>
)

export const ChildrenHasOwnStyles: Story<DividerProps> = args => (
  <Divider {...args}>
    <Text fontWeight={CapUIFontWeight.Semibold} color={'red.600'}>
      I have my own styles
    </Text>
  </Divider>
)

export const WithHtmlContent: Story<DividerProps> = args => (
  <Divider {...args}>
    <Flex justifyContent={'center'} gap={2}>
      <Icon name={CapUIIcon.Heart} color={'primary.600'} />
      <Text fontWeight={CapUIFontWeight.Bold} color={'neutral-gray.600'}>
        I love animals
      </Text>
    </Flex>
    <Text fontWeight={CapUIFontWeight.Semibold} color={'neutral-gray.600'}>
      Like cats, cows, pigs, birds, and frogs.
    </Text>
  </Divider>
)

export const WithSiblings: Story<DividerProps> = args => (
  <Flex direction={'column'}>
    <FormLabel label={"What's your favourite animal?"} />
    <FormGuideline>
      It can be a bird, a fish, a mammal, an insect...
    </FormGuideline>
    <Input type="text" width={pxToRem(300)} />

    <Divider {...args}>
      <Box as="span">OR</Box>
    </Divider>

    <FormLabel label={'Do you not have a favourite animal? If so, why?'} />
    <FormGuideline>
      That sounds very odd to me but let's hear you out.
    </FormGuideline>
    <Input type="text" width={pxToRem(300)} />
  </Flex>
)
