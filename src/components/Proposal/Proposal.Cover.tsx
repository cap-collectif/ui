import { SystemStyleObject } from '@styled-system/css'
import * as React from 'react'

import { CapUIRadius } from '../../styles'
import { Box, BoxPropsOf } from '../box'
import { Tag } from '../tag'

export interface ProposalCoverProps extends BoxPropsOf<'img'> {
  status?: string
}

const styles: SystemStyleObject = {
  backgroundClip: 'content-box',

  '.cap-tag': {
    position: 'absolute',
    top: '8px',
    right: '8px',
    zIndex: 2,
  },

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

const ProposalCover: React.FC<ProposalCoverProps> = ({
  src,
  alt,
  status,
  ...rest
}) => {
  return (
    <Box sx={styles} position="relative" width="300px" height="200px">
      {!!status && <Tag variantColor={'neutral-gray'}>{status}</Tag>}
      <Box
        as="img"
        position="relative"
        minWidth="300px"
        height="200px"
        style={{ aspectRatio: '3 / 2', objectFit: 'cover', overflow: 'hidden' }}
        borderRadius={CapUIRadius.Card}
        src={src}
        alt={alt}
        {...rest}
      />
    </Box>
  )
}

export default ProposalCover
