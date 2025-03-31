import cn from 'classnames'
import * as React from 'react'

import { CapUIFontFamily, CapUIFontWeight } from '../../styles'
import { Box } from '../box'
import { CapUIIcon, CapUIIconSize, Icon } from '../icon'
import { Flex, FlexProps } from '../layout'
import { Tooltip } from '../tooltip'
import { headingStyles } from '../typography'
import VoteInfoHeaderLabel from './VoteInfo.header.label'

export interface VoteInfoHeaderProps extends FlexProps {
  infoLabel?: string
}

type SubComponents = {
  Label: typeof VoteInfoHeaderLabel
}
const VoteInfoHeader: React.FC<VoteInfoHeaderProps> & SubComponents = ({
  children,
  className,
  infoLabel,
  ...rest
}) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      borderBottom="normal"
      position="relative"
      boxShadow={'none'}
      borderColor={'transparent'}
      className={cn('cap-vote_info_header', className)}
      flexShrink={0}
      borderBottomLeftRadius={'unset'}
      borderBottomRightRadius={'unset'}
      {...rest}
    >
      <Flex
        direction="column"
        flex={1}
        sx={{
          'h1, h2, h3, h4, h5, h6': {
            ...headingStyles.h4,
            color: 'primary.darker',
            fontWeight: CapUIFontWeight.Semibold,
            fontFamily: CapUIFontFamily.Body,
          },
        }}
      >
        {children}
      </Flex>
      {!!infoLabel && (
        <Tooltip label={infoLabel}>
          <Box
            aria-label={infoLabel}
            position="absolute"
            top="-4px"
            right="-4px"
          >
            <Icon
              name={CapUIIcon.Info}
              size={CapUIIconSize.Sm}
              color="primary.base"
            />
          </Box>
        </Tooltip>
      )}
    </Flex>
  )
}
VoteInfoHeader.displayName = 'VoteInfo.Header'

VoteInfoHeader.Label = VoteInfoHeaderLabel
export default VoteInfoHeader
