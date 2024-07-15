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
  readonly closeIconLabel?: string
}

export const MODAL_TITLE_ARIA_DESCRIBED_BY = 'modal-title'

const ModalHeader: React.FC<ModalHeaderProps> & SubComponents = ({
  children,
  closeIconLabel,
  className,
  ...rest
}) => {
  const { hide, hideCloseButton, fullSizeOnMobile } = useModal()
  const ref = React.useRef<HTMLButtonElement | null>(null)
  React.useEffect(() => {
    if (ref.current) ref.current.focus()
  }, [])
  const isMobile = useIsMobile()

  const hasLabel = React.Children.toArray(children).some(
    // @ts-ignore property displayName not standard
    c => c?.type?.displayName === 'Modal.Header.Label',
  )

  const childrenWithProps = React.Children.map(children, child => {
    if (child && React.isValidElement(child)) {
      // @ts-ignore property displayName not standard
      const isHeading = child.type?.displayName === 'Heading'

      if (isHeading && !hasLabel) // @ts-ignore cloning with custom props
        return React.cloneElement(child, { id: MODAL_TITLE_ARIA_DESCRIBED_BY })
      // @ts-ignore cloning with custom props
      if (isHeading && hasLabel) return React.cloneElement(child, { as: 'h3' })
    }
    return child
  })

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
      flexShrink={0}
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
          'h1, h2:not(.cap-modal__header--label), h3, h4, h5, h6': {
            ...headingStyles.h4,
            color: 'primary.900',
            fontWeight: CapUIFontWeight.Semibold,
            fontFamily: CapUIFontFamily.Body,
          },
        }}
      >
        {childrenWithProps}
      </Flex>
      {!hideCloseButton && (
        <Box
          as="button"
          type="button"
          ref={ref}
          onClick={hide}
          aria-describedby={MODAL_TITLE_ARIA_DESCRIBED_BY}
          color="gray.500"
        >
          <Icon
            name={CapUIIcon.CrossO}
            size={CapUIIconSize.Sm}
            aria-label={closeIconLabel}
          />
        </Box>
      )}
    </Flex>
  )
}

ModalHeader.displayName = 'Modal.Header'

ModalHeader.Label = ModalHeaderLabel

export default ModalHeader
