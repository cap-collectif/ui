import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Accordion, AccordionProps } from './'
import { CapUIAccordionColor } from './enums'

const meta: Meta = {
  title: 'Library/Accordion',
  component: Accordion,
  parameters: {
    backgrounds: { default: 'light' },
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<AccordionProps> = args => (
  <Accordion {...args}>
    <Accordion.Item id="volet-1">
      <Accordion.Button>Volet 1</Accordion.Button>
      <Accordion.Panel>Contenu du volet 1</Accordion.Panel>
    </Accordion.Item>
  </Accordion>
)

export const Default = Template.bind({})

export const VariantGray = Template.bind({})
VariantGray.args = {
  color: CapUIAccordionColor.Gray,
}
VariantGray.parameters = {
  backgrounds: {
    default: 'undefined',
  },
}
