import { Meta, Story } from '@storybook/react'

import { Flex } from '../layout'
import { Popover, PopoverProps } from './'

const meta: Meta<PopoverProps> = {
  title: 'Library/Popover',
  component: Popover,
  argTypes: {
    disclosure: {
      control: { disable: true },
    },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<PopoverProps> = args => (
  <Popover {...args} disclosure={<span>Open popover</span>}>
    <Popover.Header>Lorem ipsum</Popover.Header>
    <Popover.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      facilisis ligula non nibh egestas efficitur.
    </Popover.Body>
  </Popover>
)

export const WithFooter: Story<PopoverProps> = args => (
  <Popover {...args} disclosure={<span>Open popover</span>}>
    <Popover.Header>Lorem ipsum</Popover.Header>
    <Popover.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      facilisis ligula non nibh egestas efficitur.
    </Popover.Body>
    <Popover.Footer>Lorem ipsum</Popover.Footer>
  </Popover>
)
export const WithBodyScroll: Story<PopoverProps> = args => (
  <Flex height={800}>
    <Popover
      options={{ modal: true }}
      popoverProps={{ preventBodyScroll: false }}
      {...args}
      disclosure={<span>Open popover</span>}
    >
      <Popover.Header>Lorem ipsum</Popover.Header>
      <Popover.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        pellentesque, lacus a malesuada congue, diam tortor sollicitudin justo,
        sed consequat turpis diam eu turpis. In quis dignissim velit. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Vestibulum euismod vel purus vitae blandit. Quisque
        iaculis a ante quis eleifend. Nulla fermentum risus a ligula volutpat
        porttitor. Integer in metus neque. Aenean ac neque eu dui vehicula
        ullamcorper. Fusce scelerisque pellentesque felis. Suspendisse vel
        mattis enim, in mollis augue. Integer tincidunt varius arcu eu sagittis.
        Aenean in imperdiet augue, non commodo nunc. In ultricies erat sit amet
        lectus faucibus convallis. Proin sit amet rhoncus metus, a lobortis mi.
        Aenean non semper nunc, sit amet faucibus orci. Nam sollicitudin vitae
        felis facilisis dignissim. In ac mauris eu justo interdum blandit.
        Phasellus non nisi metus. Donec feugiat quis diam a pellentesque.
        Integer odio justo, faucibus vitae arcu eget, convallis fringilla risus.
        Curabitur leo erat, porttitor sit amet justo eget, commodo porta leo.
        Aliquam vitae lobortis mi. Suspendisse ut commodo purus. Duis euismod mi
        eget dui volutpat, non varius neque aliquet. Aliquam erat volutpat.
        Praesent nec faucibus augue. Integer molestie non lorem quis rhoncus.
        Nulla ligula turpis, accumsan vitae metus semper, ornare placerat eros.
        Pellentesque vestibulum, nulla vel egestas mollis, nunc nibh tristique
        ex, sit amet tempus lorem nibh quis mauris. Praesent convallis ex felis,
        ac iaculis purus iaculis et. Aenean quis vestibulum augue. Quisque
        eleifend lacus vel metus elementum faucibus quis at sapien. Quisque nec
        malesuada mi. Aliquam imperdiet ex leo, a varius elit ornare id. Fusce
        tincidunt, ante vitae pharetra elementum, sapien nisl tempor justo, non
        commodo odio leo ac ligula. Morbi iaculis, ipsum suscipit mollis
        suscipit, arcu dolor gravida turpis, quis sollicitudin purus diam vitae
        libero. Fusce eleifend convallis velit, ac vestibulum nibh ornare
        tincidunt. Ut lobortis leo eros, nec tincidunt ipsum aliquam non.
        Vestibulum viverra neque quis magna scelerisque, posuere imperdiet purus
        maximus. Aenean et diam ac velit volutpat tempor. In turpis ipsum,
        molestie a gravida quis, facilisis quis quam. Vivamus porta rhoncus
        lectus ac semper. Vivamus vitae tempus magna. Quisque tellus quam,
        lacinia at tincidunt a, pharetra a ligula. Etiam accumsan mollis nisl.
        Nam tempor magna eu varius lobortis. Suspendisse eget nisl non massa
        blandit consequat. Maecenas dignissim est at orci auctor, vitae molestie
        neque scelerisque. Praesent blandit erat at nulla eleifend scelerisque.
        Duis sollicitudin lectus eget lacus fringilla, et convallis leo
        lobortis. Aenean facilisis, massa vel tristique auctor, dui ante mattis
        risus, ac aliquam erat risus nec tellus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In egestas tempus dui, id finibus est
        cursus lacinia. Duis mollis efficitur gravida. Morbi et mi justo. In
        sodales luctus semper. Curabitur nunc neque, maximus quis pellentesque
        vitae, semper vel sem. Vivamus vel orci sed libero rutrum viverra. Donec
        at sollicitudin metus, commodo commodo turpis.
      </Popover.Body>
      <Popover.Footer>Lorem ipsum</Popover.Footer>
    </Popover>
  </Flex>
)
