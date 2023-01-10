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

    <Accordion.Item id="volet-2">
      <Accordion.Button>Volet 2</Accordion.Button>
      <Accordion.Panel>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        aspernatur aut blanditiis cum deleniti, deserunt dolorem dolores earum
        eligendi ex illum in ipsam iure magnam molestiae molestias nihil
        nostrum, officia officiis quasi quibusdam, sunt tempore tenetur totam
        unde veniam vero? Aliquid architecto assumenda aut deleniti, dolor eos
        exercitationem laudantium minus odit quibusdam! Ad at dolore doloremque
        nemo numquam repellendus reprehenderit, ut? Assumenda autem consectetur
        consequuntur cupiditate dignissimos distinctio dolorem earum eos error
        eum eveniet expedita fugit hic id illo incidunt laudantium libero minima
        modi nam nemo obcaecati officia pariatur perferendis quibusdam quisquam,
        quod quos soluta temporibus unde, veniam veritatis voluptatem.
      </Accordion.Panel>
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

export const VariantTransparent = Template.bind({})
VariantTransparent.args = {
  color: CapUIAccordionColor.Transparent,
}
VariantTransparent.parameters = {
  backgrounds: {
    default: 'undefined',
  },
}
