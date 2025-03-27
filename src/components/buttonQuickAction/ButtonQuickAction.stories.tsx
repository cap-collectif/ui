import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { ButtonGroup } from '../buttonGroup'
import { CapUIIcon, CapUIIconSize } from '../icon'
import { Flex } from '../layout'
import { ButtonQuickAction, ButtonQuickActionProps } from './ButtonQuickAction'
import mdx from './ButtonQuickAction.mdx'

const meta: Meta = {
  title: 'Library/ButtonQuickAction',
  component: ButtonQuickAction,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story<ButtonQuickActionProps> = args => (
  <ButtonQuickAction {...args} />
)
Default.args = {
  variantColor: 'primary',
  label: 'Editer',
  icon: CapUIIcon.Pencil,
}

export const AllSizes: Story<ButtonQuickActionProps> = args => (
  <Flex>
    <ButtonQuickAction {...args.xs} />
    <ButtonQuickAction {...args.sm} />
    <ButtonQuickAction {...args.md} />
    <ButtonQuickAction {...args.lg} />
    <ButtonQuickAction {...args.xl} />
    <ButtonQuickAction {...args.xxl} />
  </Flex>
)
AllSizes.args = {
  xs: {
    size: CapUIIconSize.Xs,
    variantColor: 'primary',
    label: 'Editer',
    icon: CapUIIcon.Pencil,
  },
  sm: {
    size: CapUIIconSize.Sm,
    variantColor: 'primary',
    label: 'Editer',
    icon: CapUIIcon.Pencil,
  },
  md: {
    size: CapUIIconSize.Md,
    variantColor: 'primary',
    label: 'Editer',
    icon: CapUIIcon.Pencil,
  },
  lg: {
    size: CapUIIconSize.Lg,
    variantColor: 'primary',
    label: 'Editer',
    icon: CapUIIcon.Pencil,
  },
  xl: {
    size: CapUIIconSize.Xl,
    variantColor: 'primary',
    label: 'Editer',
    icon: CapUIIcon.Pencil,
  },
  xxl: {
    size: CapUIIconSize.Xxl,
    variantColor: 'primary',
    label: 'Editer',
    icon: CapUIIcon.Pencil,
  },
}

export const Group: Story<ButtonQuickActionProps> = args => {
  return (
    <ButtonGroup>
      <ButtonQuickAction {...args.edit} />
      <ButtonQuickAction {...args.download} />
      <ButtonQuickAction {...args.delete} />
      <ButtonQuickAction {...args.locate} />
    </ButtonGroup>
  )
}
Group.args = {
  edit: {
    variantColor: 'primary',
    label: 'Editer',
    icon: CapUIIcon.Pencil,
  },
  download: {
    variantColor: 'hierarchy',
    label: 'Télécharger',
    icon: CapUIIcon.Download,
  },
  delete: {
    variantColor: 'danger',
    label: 'Supprimer',
    icon: CapUIIcon.Trash,
  },
  locate: {
    variantColor: 'primary',
    label: 'Géo-localiser',
    icon: CapUIIcon.Pin,
  },
}

export const AsLink: Story<ButtonQuickActionProps> = args => (
  <ButtonQuickAction {...args} href="#" />
)

AsLink.args = {
  variantColor: 'primary',
  label: 'Lien',
  as: 'a',
  icon: CapUIIcon.Link,
  size: CapUIIconSize.Lg,
}

export const Disabled: Story<ButtonQuickActionProps> = args => (
  <ButtonQuickAction {...args} />
)
Disabled.args = {
  variantColor: 'danger',
  label: 'Supprimer',
  icon: CapUIIcon.Trash,
  disabled: true,
  onClick: () => console.log("I won't be logged because I'm disabled"),
}
