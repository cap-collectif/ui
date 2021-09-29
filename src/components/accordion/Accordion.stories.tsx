import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import Accordion, { AccordionProps } from './Accordion'

const meta: Meta = {
  title: 'Library/Accordion',
  component: Accordion,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<AccordionProps> = args => (
  <Accordion {...args}>
    <Accordion.Item id="volet-1">
      <Accordion.Button>Volet 1</Accordion.Button>
      <Accordion.Panel>Contenu du volet 1</Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item id="volet-2">
      <Accordion.Button>Volet 2</Accordion.Button>
      <Accordion.Panel>Contenu du volet 2</Accordion.Panel>
    </Accordion.Item>
  </Accordion>
)
