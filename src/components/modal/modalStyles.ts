import { Dialog } from '@ariakit/react'
import styled, { IStyledComponent } from 'styled-components'

import { Flex } from '../layout'

export const StyledDialog = styled(Dialog)({
  opacity: 0,
  transition: 'all 0.2s',

  '.cap-modal': {
    transition: 'all 0.2s',
    transform: 'translateY(-30px)',
  },

  '&[data-enter]': {
    opacity: 1,

    '.cap-modal': {
      transform: 'translateY(0)',
    },
  },
})

export const Overlay = styled(Flex).attrs<{ isSidePanel?: boolean }>(
  ({ isSidePanel }) => ({
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    flexDirection: 'column',
    alignItems: isSidePanel ? 'end' : 'center',
  }),
)`` as IStyledComponent<any, any>
