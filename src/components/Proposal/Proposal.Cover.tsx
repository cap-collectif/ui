import { SystemStyleObject } from '@styled-system/css'
import * as React from 'react'

import { CapUIRadius } from '../../styles'
import { Box, BoxPropsOf } from '../box'

export interface ProposalCoverProps extends BoxPropsOf<'img'> {}

const styles: SystemStyleObject = {
  backgroundClip: 'content-box',

  '&:before': {
    content: '""',
    position: 'absolute',
    width: '16px',
    height: '200px',
    left: 0,
    top: 0,
    bg: 'white',
    opacity: '0.8',
    zIndex: 1,
    backdropFilter: 'saturate(180%) blur(25px)',
    overflow: 'hidden',
    borderTopLeftRadius: CapUIRadius.Card,
    borderBottomLeftRadius: CapUIRadius.Card,
    boxShadow: 'inset -58px 0px 28px 0px rgba(0,0,0,0.26)',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '16px',
    height: '200px',
    right: 0,
    top: 0,
    bg: 'white',
    opacity: '0.8',
    zIndex: 1,
    backdropFilter: 'saturate(180%) blur(25px)',
    overflow: 'hidden',
    borderTopRightRadius: CapUIRadius.Card,
    borderBottomRightRadius: CapUIRadius.Card,
    boxShadow: 'inset 58px 0px 28px 0px rgba(0,0,0,0.26)',
  },
}

const ProposalCover: React.FC<ProposalCoverProps> = ({ src, alt }) => {
  return (
    <Box sx={styles} position="relative" width="300px" height="200px">
      <Box
        as="img"
        position="relative"
        minWidth="300px"
        height="200px"
        style={{ aspectRatio: '3 / 2', objectFit: 'cover', overflow: 'hidden' }}
        borderRadius={CapUIRadius.Card}
        src={src}
        alt={alt}
      />
    </Box>
  )
}

export default ProposalCover
