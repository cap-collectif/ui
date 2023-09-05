import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import {
  Accordion,
  AvatarGroup,
  Button,
  CapUIProvider,
  Checkbox,
  ColorPicker,
  Flex,
  Input,
  Radio,
  Search,
  Select,
  Switch,
  Uploader,
} from './'
import Avatar from './components/avatar/Avatar'
import { capuiTheme } from './styles/theme'

const meta: Meta<Props> = {
  title: 'WithCustomTheme',
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

type Props = {
  primary: string
  primaryLabel: string
  primaryHover: string
  primaryLabelHover: string
}

export const Default: Story<Props> = ({
  primary,
  primaryLabel,
  primaryHover,
  primaryLabelHover,
}) => {
  const CustomTheme = {
    ...capuiTheme,
    colors: {
      ...capuiTheme.colors,
      primary,
      primaryLabel,
      primaryHover,
      primaryLabelHover,
    },
  }

  return (
    <>
      <CapUIProvider theme={CustomTheme}>
        <Flex gap={4}>
          <Button variantSize="big" variant="primary">
            Primary
          </Button>
          <Button variantSize="big" variant="secondary">
            Secondary
          </Button>
          <Button variantSize="big" variant="tertiary">
            Tertiary
          </Button>
          <Button variantSize="big" variant="link">
            Link
          </Button>
        </Flex>
        <Flex gap={4} mt={4}>
          <Input />
          <Search
            onChange={() => {}}
            inputId="search"
            loadOptions={() =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve([])
                }, 1000)
              })
            }
            defaultOptions
            cacheOptions
          />
        </Flex>
        <Flex gap={4} mt={4} alignItems="center">
          <Switch id="example" />
          <Radio id="radio" />
          <Checkbox id="checkbox" />
          <AvatarGroup max={2}>
            <Avatar name="Mikasa Estucasa" />
            <Avatar name="Dan Abramov" src="https://bit.ly/dan-abramov" />
            <Avatar name="John Mark" />
          </AvatarGroup>
          {/** @ts-expect-error Example only */}
          <ColorPicker />
        </Flex>
        <Flex mt={4}>
          <Accordion color="gray">
            <Accordion.Item id="volet-1">
              <Accordion.Button>Volet 1</Accordion.Button>
              <Accordion.Panel>Contenu du volet 1</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Flex>
        <Flex mt={4}>
          <Uploader
            wording={{
              uploaderPrompt: 'Déposer ou sélectionner des fichiers',
              uploaderLoadingPrompt: 'Importation en cours...',
              fileDeleteLabel: 'Supprimer',
            }}
            onDrop={() => {}}
          />
        </Flex>
      </CapUIProvider>
    </>
  )
}

Default.args = {
  primary: '#ff9909',
  primaryLabel: '#fff',
  primaryHover: '#c27a15',
  primaryLabelHover: '#fff',
}
Default.argTypes = {
  primary: {
    control: { type: 'color' },
  },
  primaryLabel: {
    control: { type: 'color' },
  },
  primaryHover: {
    control: { type: 'color' },
  },
  primaryLabelHover: {
    control: { type: 'color' },
  },
}
