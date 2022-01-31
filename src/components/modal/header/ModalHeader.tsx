import cn from 'classnames'
import * as React from 'react'

import { useIsMobile } from '../../../hooks/useDeviceDetect'
import { CapUIFontFamily, CapUIFontWeight, CapUIRadius } from '../../../styles'
import { Box } from '../../box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { Flex, FlexProps } from '../../layout'
import { headingStyles } from '../../typography'
import { useModal } from '../Modal.context'
import ModalHeaderLabel from '../headerLabel/ModalHeaderLabel'

type SubComponents = {
  Label: typeof ModalHeaderLabel
}

export type ModalHeaderProps = FlexProps & {
  readonly closeLabel?: string
}

const ModalHeader: React.FC<ModalHeaderProps> & SubComponents = ({
  children,
  closeLabel,
  className,
  ...rest
}) => {
  const { hide, hideCloseButton, fullSizeOnMobile } = useModal()
  const ref = React.useRef<HTMLButtonElement | null>(null)
  React.useEffect(() => {
    if (ref.current) ref.current.focus()
  }, [])
  const isMobile = useIsMobile()

  return (
    <Flex
      as="header"
      px={isMobile ? 4 : 6}
      py={4}
      align="center"
      justify="space-between"
      borderBottom="normal"
      boxShadow={isMobile && fullSizeOnMobile ? 'small' : 'none'}
      borderColor={isMobile ? 'transparent' : 'gray.200'}
      className={cn('cap-modal__header', className)}
      borderBottomLeftRadius={
        isMobile && fullSizeOnMobile ? CapUIRadius.Popover : 'unset'
      }
      borderBottomRightRadius={
        isMobile && fullSizeOnMobile ? CapUIRadius.Popover : 'unset'
      }
      {...rest}
    >
      <Flex
        direction="column"
        flex={1}
        spacing={2}
        sx={{
          'h1, h2, h3, h4, h5, h6': {
            ...headingStyles.h4,
            color: 'blue.900',
            fontWeight: CapUIFontWeight.Semibold,
            fontFamily: CapUIFontFamily.Body,
          },
        }}
      >
        {children}
      </Flex>
      {!hideCloseButton && (
        <Box
          as="button"
          ref={ref}
          onClick={hide}
          aria-label={closeLabel}
          color="gray.500"
        >
          <Icon name={CapUIIcon.CrossO} size={CapUIIconSize.Sm} />
        </Box>
      )}
    </Flex>
  )
}

ModalHeader.displayName = 'Modal.Header'

ModalHeader.Label = ModalHeaderLabel

export default ModalHeader
