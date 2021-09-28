import cn from 'classnames'
import { motion } from 'framer-motion'
import * as React from 'react'

import { SPACING } from '../../../styles/theme'
import { Box } from '../../box/Box'
import { CapUIIcon, CapUIIconSize, Icon, IconProps } from '../../icon'

export type TagCloseButtonProps = Omit<IconProps, 'name' | 'color' | 'size'> & {
  onClick: () => void
}

const IconContainer = motion(Box)

const TagCloseButton: React.FC<TagCloseButtonProps> = ({
  onClick,
  className,
}) => (
  <IconContainer
    role="button"
    variants={{
      initial: {
        opacity: 0,
        right: '0rem',
        transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
      },
      hover: {
        opacity: 1,
        right: SPACING['1'],
        transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
      },
    }}
    onClick={onClick}
    _hover={{ cursor: 'pointer' }}
    display="flex"
    position="absolute"
    className={cn('cap-tag__closeButton', className)}
    aria-label="close"
  >
    <Icon name={CapUIIcon.Cross} color="inherit" size={CapUIIconSize.Xs} />
  </IconContainer>
)

TagCloseButton.displayName = 'Tag.CloseButton'

export default TagCloseButton
