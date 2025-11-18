import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import {
  Accordion,
  AvatarGroup,
  Box,
  Button,
  CapUIFontWeight,
  CapUIIcon,
  CapUIProvider,
  CapUISpotIcon,
  CapUISpotIconSize,
  Checkbox,
  ColorPicker,
  Flex,
  Heading,
  Input,
  Radio,
  Search,
  SpotIcon,
  Switch,
  Text,
  Uploader,
  VoteButton,
  VoteInfo,
} from './'
import Avatar from './components/avatar/Avatar'
import CircularStep from './components/circularStep/CircularStep'
import { capuiTheme, generatePalette } from './styles/theme'

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
}

export const Default: Story<Props> = ({ primary }) => {
  const CustomTheme = {
    ...capuiTheme,
    fonts: {
      body: 'cursive, system-ui, sans-serif',
      heading: 'monospace, system-ui, sans-serif',
    },
    colors: {
      ...capuiTheme.colors,
      primary: generatePalette(primary),
    },
  }
  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  return (
    <>
      {/** @ts-ignore */}
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
        <Heading as="h1">TITRE</Heading>
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
        <Flex gap={4} mt={4}>
          <Input
            type={showPassword ? 'text' : 'password'}
            id="password"
            onClickActions={
              showPassword
                ? [
                    {
                      icon: CapUIIcon.Eye,
                      onClick: () => setShowPassword(false),
                      label: 'Masquer le mot de passe',
                    },
                  ]
                : [
                    {
                      icon: CapUIIcon.EyeClose,
                      onClick: () => setShowPassword(true),
                      label: 'Afficher le mot de passe',
                    },
                  ]
            }
          />
        </Flex>
        <Flex mt={4} alignItems="center">
          <Accordion>
            <Accordion.Item id="volet-1">
              <Accordion.Button>Volet 1</Accordion.Button>
              <Accordion.Panel>Contenu du volet 1</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <SpotIcon name={CapUISpotIcon.CALENDAR} size={CapUISpotIconSize.Lg} />
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
        <Flex alignItems="center">
          <VoteInfo mt={4} mr={4}>
            <VoteInfo.Header infoLabel="Label d'info">
              <VoteInfo.Header.Label>À propos du vote</VoteInfo.Header.Label>
              <Heading>Votes minimum</Heading>
            </VoteInfo.Header>
            <VoteInfo.ProgressBar totalSteps={3} currentStep={1} />
            <VoteInfo.Body>
              <Text>
                Votez pour 3 propositions pour valider votre participation.
              </Text>
            </VoteInfo.Body>
          </VoteInfo>
          <Box>
            <VoteButton active>
              <Flex direction="column" align="flex-start">
                <Text fontWeight={CapUIFontWeight.Semibold}>101 Votes</Text>
              </Flex>
            </VoteButton>
            <Box mt={4}>
              <CircularStep progress={33} />
            </Box>
          </Box>
        </Flex>
      </CapUIProvider>
    </>
  )
}

Default.args = {
  primary: '#ff9909',
}
Default.argTypes = {
  primary: {
    control: { type: 'color' },
  },
}
