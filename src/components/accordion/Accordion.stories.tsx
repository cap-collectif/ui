import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Accordion, AccordionProps } from './'

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
  <>
    <Accordion {...args}>
      <Accordion.Item id="volet-default">
        <Accordion.Button>
          Ouvert par défaut
          <label style={{ marginLeft: 'auto' }}>
            <input type="checkbox" />
            <span>action</span>
          </label>
        </Accordion.Button>
        <Accordion.Panel>Contenu du volet ouvert</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item id="volet-1">
        <Accordion.Button>
          Volet 1
          <button
            style={{ marginLeft: 'auto' }}
            onClick={() => alert('test click')}
          >
            <span>clique</span>
          </button>
        </Accordion.Button>
        <Accordion.Panel>Contenu du volet 1</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item id="volet-2">
        <Accordion.Button>
          Volet 2
          <a style={{ marginLeft: 'auto' }} href="#">
            lien
          </a>
        </Accordion.Button>
        <Accordion.Panel>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aspernatur aut blanditiis cum deleniti, deserunt dolorem dolores earum
          eligendi ex illum in ipsam iure magnam molestiae molestias nihil
          nostrum, officia officiis quasi quibusdam, sunt tempore tenetur totam
          unde veniam vero? Aliquid architecto assumenda aut deleniti, dolor eos
          exercitationem laudantium minus odit quibusdam! Ad at dolore
          doloremque nemo numquam repellendus reprehenderit, ut? Assumenda autem
          consectetur consequuntur cupiditate dignissimos distinctio dolorem
          earum eos error eum eveniet expedita fugit hic id illo incidunt
          laudantium libero minima modi nam nemo obcaecati officia pariatur
          perferendis quibusdam quisquam, quod quos soluta temporibus unde,
          veniam veritatis voluptatem.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    <Accordion {...args} mt={8} size="sm">
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
          exercitationem laudantium minus odit quibusdam! Ad at dolore
          doloremque nemo numquam repellendus reprehenderit, ut? Assumenda autem
          consectetur consequuntur cupiditate dignissimos distinctio dolorem
          earum eos error eum eveniet expedita fugit hic id illo incidunt
          laudantium libero minima modi nam nemo obcaecati officia pariatur
          perferendis quibusdam quisquam, quod quos soluta temporibus unde,
          veniam veritatis voluptatem.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </>
)

export const Default = Template.bind({})
Default.args = {
  defaultAccordion: 'volet-default',
  allowMultiple: true,
}

export const Disable: Story<AccordionProps> = args => (
  <>
    <Accordion {...args}>
      <Accordion.Item id="volet-1">
        <Accordion.Button>Volet 1</Accordion.Button>
        <Accordion.Panel>Contenu du volet 1</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    <Accordion {...args} color="white" mt={8}>
      <Accordion.Item id="volet-2">
        <Accordion.Button>Volet 2</Accordion.Button>
        <Accordion.Panel>Contenu du volet 1</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    <Accordion {...args} mt={8}>
      <Accordion.Item id="volet-3">
        <Accordion.Button>
          Volet 1 avec action
          <label>
            <input type="checkbox" />
            <span>action</span>
          </label>
        </Accordion.Button>
        <Accordion.Panel>Contenu du volet 1</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </>
)
Disable.args = {
  disabled: true,
}

export const VariantWhite = Template.bind({})
VariantWhite.args = {
  color: 'white',
}
VariantWhite.parameters = {
  backgrounds: {
    default: 'undefined',
  },
}
