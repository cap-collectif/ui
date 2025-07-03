import React, { FC } from 'react'
import { BoxProps } from 'reakit'

import { Box } from '../box'

export const SROnly: FC<BoxProps> = props => (
  <Box
    as="span"
    {...props}
    border="0 !important"
    height="1px !important"
    width="1px !important"
    overflow="hidden !important"
    padding="0 !important"
    // @ts-ignore we need !important
    position="absolute !important"
    sx={{
      // @ts-ignore we need !important
      whiteSpace: 'nowrap !important', // @ts-ignore we need !important
      WebkitClipPath: 'inset(50%) !important', // @ts-ignore we need !important
      clipPath: 'inset(50%) !important', // @ts-ignore we need !important
      clip: 'rect(1px, 1px, 1px, 1px) !important',
    }}
  />
)

export default SROnly
