import cn from 'classnames'
import {
  motion,
  AnimatePresence,
  AnimationProps,
  MotionProps,
} from 'framer-motion'
import * as React from 'react'
import {
  usePopoverState,
  Popover as ReakitPopover,
  PopoverDisclosure,
  PopoverArrow,
  PopoverState,
} from 'reakit/Popover'
import styled from 'styled-components'

import { Flex, FlexProps } from '../layout/Flex'
import PopoverBody from './body/PopoverBody'
import PopoverFooter from './footer/PopoverFooter'
import PopoverHeader from './header/PopoverHeader'

type RenderChildren = ({
  closePopover,
}: {
  closePopover: () => void
}) => React.ReactNode

type SubComponents = {
  Header: typeof PopoverHeader
  Body: typeof PopoverBody
  Footer: typeof PopoverFooter
}

export interface PopoverProps
  extends FlexProps,
    Partial<Pick<PopoverState, 'placement'>> {
  disclosure: React.FunctionComponentElement<any>
  children: React.ReactNode | RenderChildren
}

type ContainerAnimate = React.FC<
  AnimationProps & Pick<MotionProps, 'initial'> & FlexProps
>

const ContainerAnimate = motion(Flex) as ContainerAnimate

const Arrow = styled(PopoverArrow)`
  svg {
    fill: white;
  }
`

export const Popover: React.FC<PopoverProps> & SubComponents = ({
  disclosure,
  children,
  className,
  ...props
}: PopoverProps) => {
  const popover = usePopoverState({ animated: 300 })

  return (
    <>
      <PopoverDisclosure
        {...popover}
        ref={disclosure.ref}
        {...disclosure.props}
        className={cn('cap-popover__disclosure', disclosure.props.className)}
      >
        {disclosureProps => React.cloneElement(disclosure, disclosureProps)}
      </PopoverDisclosure>
      <ReakitPopover tabIndex={0} {...popover}>
        <AnimatePresence>
          {popover.visible && (
            <ContainerAnimate
              direction="column"
              p={4}
              bg="white"
              color="gray.900"
              borderRadius="popover"
              boxShadow="medium"
              width="350px"
              maxWidth="350px"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={cn('cap-popover', className)}
              {...props}
            >
              <Arrow {...popover} />
              {typeof children === 'function'
                ? children({ closePopover: popover.hide })
                : children}
            </ContainerAnimate>
          )}
        </AnimatePresence>
      </ReakitPopover>
    </>
  )
}

Popover.displayName = 'Popover'

Popover.Header = PopoverHeader
Popover.Body = PopoverBody
Popover.Footer = PopoverFooter

export default Popover
