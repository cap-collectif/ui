import { Meta, Story } from '@storybook/react'
import React from 'react'

import * as Icons from '../../assets/icons'
import { Flex, Grid } from '../layout'
import { Text } from '../typography'
import { Icon } from './'
import { CapUIIcon, CapUIIconSize } from './enums'

type Args = {
  color: string
}

const listIconName = Object.keys(Icons).sort() as CapUIIcon[]
const listIconSize = Object.values(CapUIIconSize).reverse()

const meta: Meta<Args> = {
  title: 'Library/Icon',
  component: Icon,
  args: {
    color: 'black',
  },
  argTypes: {
    // @ts-ignore
    name: {
      controls: { disable: true },
      table: { disable: true },
    },
    size: {
      controls: { disable: true },
      table: { disable: true },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<Args> = ({ color }) => (
  <Grid gridGap={6} autoFit>
    {listIconName.map(icon => (
      <Flex key={icon} direction="column" align="center">
        <Icon name={icon} size={CapUIIconSize.Lg} color={color} />
        <Text>{icon}</Text>
      </Flex>
    ))}
  </Grid>
)

export const WithSize: Story<Args> = ({ color }) => (
  <Grid gridGap={6} templateColumns={['1fr 1fr 1fr 1fr']}>
    {listIconName.map(icon => (
      <Flex key={icon} borderRadius="normal" direction="column">
        <Flex direction="row">
          {listIconSize.map(size => (
            <Icon
              key={`${icon}-${size}`}
              name={icon}
              size={size}
              color={color}
            />
          ))}
        </Flex>
        <Text>{icon}</Text>
      </Flex>
    ))}
  </Grid>
)
