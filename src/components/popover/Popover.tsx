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
import { PopoverContext } from './Popover.context'
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

type OriginPosition = { x: string } | { y: string } | {}

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
  .stroke {
    fill: transparent;
  }

  .fill {
    fill: #fff;
  }
`

const getGutter = (placement: PopoverProps['placement']): number => {
  switch (placement) {
    case 'left-start':
    case 'right-start':
      return -15
    case 'left-end':
    case 'right-end':
      return 15
    default:
      return 0
  }
}

const getOriginPosition = (
  placement: PopoverProps['placement'],
): OriginPosition => {
  if (placement && placement.includes('left')) return { x: '10%' }
  else if (placement && placement.includes('right')) return { x: '-10%' }
  else if (placement && placement.includes('top')) return { y: '10%' }
  else if (placement && placement.includes('bottom')) return { y: '-10%' }

  return {}
}

export const Popover: React.FC<PopoverProps> & SubComponents = ({
  disclosure,
  children,
  className,
  placement = 'right',
  ...props
}: PopoverProps) => {
  const popover = usePopoverState({
    animated: 150,
    placement,
    unstable_offset: [getGutter(placement), 20],
  })

  const context = React.useMemo(
    () => ({
      hide: popover.hide,
      visible: popover.visible,
    }),
    [popover],
  )

  return (
    <PopoverContext.Provider value={context}>
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
              initial={{
                opacity: 0,
                scale: 0.9,
                ...getOriginPosition(placement),
              }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, ...getOriginPosition(placement) }}
              transition={{ duration: 0.15, ease: 'easeInOut' }}
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
    </PopoverContext.Provider>
  )
}

Popover.displayName = 'Popover'

Popover.Header = PopoverHeader
Popover.Body = PopoverBody
Popover.Footer = PopoverFooter

export default Popover
