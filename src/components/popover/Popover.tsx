import {
  Popover as AriakitPopover,
  PopoverAnchorProps,
  PopoverArrow,
  PopoverDisclosure,
  PopoverProvider,
  PopoverProviderProps,
  usePopoverStore,
} from '@ariakit/react'
import cn from 'classnames'
import {
  motion,
  AnimatePresence,
  AnimationProps,
  MotionProps,
} from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'

import { ZINDEX } from '../../styles/theme'
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

type OriginPosition = { x: string } | { y: string } | {}

export interface PopoverProps
  extends Omit<FlexProps, 'children'>,
    Partial<Pick<PopoverProviderProps, 'placement'>> {
  disclosure: React.FunctionComponentElement<any>
  children: React.ReactNode | RenderChildren
  baseId?: string
  popoverProps?: Omit<PopoverAnchorProps, 'baseId'>
}

type ContainerAnimateType = React.FC<
  AnimationProps & Pick<MotionProps, 'initial'> & FlexProps
>

const ContainerAnimate = motion(Flex) as ContainerAnimateType

const Arrow = styled(PopoverArrow)`
  svg {
    fill: ${props => props.theme.colors.popover?.background};
  }
`

const StyledPopover = styled(AriakitPopover)`
  &:focus-visible {
    outline: none;
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

export const Popover: React.FC<any> & SubComponents = ({
  disclosure,
  children,
  className,
  placement = 'right',
  baseId,
  options,
  popoverProps,
  ...props
}: any) => {
  const popover = usePopoverStore({
    placement,
    gutter: getGutter(placement),
    baseId,
    ...options,
  })

  return (
    <PopoverProvider>
      <PopoverDisclosure
        store={popover}
        ref={disclosure.ref}
        {...disclosure.props}
        className={cn('cap-popover__disclosure')}
      >
        {React.cloneElement(disclosure)}
      </PopoverDisclosure>
      <AnimatePresence>
        <StyledPopover
          tabIndex={0}
          {...popoverProps}
          {...placement}
          style={{
            zIndex: (props?.zIndex as number) ?? ZINDEX['popover'],
          }}
          store={popover}
          unmountOnHide
        >
          <ContainerAnimate
            direction="column"
            p="md"
            bg="popover.background"
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
            transition={{ duration: 0.15, ease: 'easeInOut' }}
            className={cn('cap-popover', className)}
            {...props}
          >
            <Arrow />
            {typeof children === 'function'
              ? children({ closePopover: popover.hide })
              : children}
          </ContainerAnimate>
        </StyledPopover>
      </AnimatePresence>
    </PopoverProvider>
  )
}

Popover.displayName = 'Popover'

Popover.Header = PopoverHeader
Popover.Body = PopoverBody
Popover.Footer = PopoverFooter

export default Popover
