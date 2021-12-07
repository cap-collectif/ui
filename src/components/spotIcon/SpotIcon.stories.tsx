import { Meta, Story } from '@storybook/react'
import React from 'react'

import * as SpotIcons from '../../assets/spotIcons'
import { Flex, Grid } from '../layout'
import { Text } from '../typography'
import { SpotIcon } from './'
import mdx from './SpotIcon.mdx'
import { CapUISpotIcon, CapUISpotIconSize } from './enums'

const listIconName = Object.keys(SpotIcons).sort() as CapUISpotIcon[]
const listIconSize = Object.values(CapUISpotIconSize).reverse()

const meta: Meta = {
  title: 'Library/SpotIcon',
  component: SpotIcon,
  parameters: {
    controls: { expanded: true },
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story = () => (
  <Grid gridGap={6} autoFit>
    {listIconName.map(icon => (
      <Flex key={icon} direction="column" align="center">
        <SpotIcon name={icon} size={CapUISpotIconSize.Lg} />
        <Text>{icon}</Text>
      </Flex>
    ))}
  </Grid>
)

export const WithSize: Story = () => (
  <Grid gridGap={6} templateColumns={['1fr 1fr 1fr 1fr']}>
    {listIconName.map(icon => (
      <Flex key={icon} borderRadius="normal" direction="column">
        <Flex direction="row">
          {listIconSize.map(size => (
            <SpotIcon key={`${icon}-${size}`} name={icon} size={size} />
          ))}
        </Flex>
        <Text>{icon}</Text>
      </Flex>
    ))}
  </Grid>
)
