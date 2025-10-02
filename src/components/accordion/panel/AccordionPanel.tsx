import cn from 'classnames'
import {
  motion,
  AnimatePresence,
  MotionProps,
  AnimationProps,
} from 'framer-motion'
import * as React from 'react'

import { Flex, FlexProps } from '../../layout/Flex'
import Text from '../../typography/Text'
import { useAccordion } from '../Accordion.context'
import { useAccordionItem } from '../item/AccordionItem.context'
import { CapUIAccordionSizeType } from '../types'

type AccordionPanelProps = FlexProps & {
  children: React.ReactNode
}

type ContainerAnimateType = React.FC<
  FlexProps & AnimationProps & Pick<MotionProps, 'initial'>
>

const ContainerAnimate = motion(Flex) as ContainerAnimateType

const AccordionPanel: React.FC<AccordionPanelProps> = ({
  children,
  className,
  ...props
}) => {
  const { open, id, styleState } = useAccordionItem()
  const { color, size } = useAccordion()

  const sizes: Record<
    CapUIAccordionSizeType,
    { pb: string; px: string; ml: string }
  > = {
    md: {
      pb: 'lg',
      px: 'lg',
      ml: 'xl',
    },
    sm: {
      pb: 'xs',
      px: 'xs',
      ml: 'xl',
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <ContainerAnimate
          direction="column"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          role="region"
          aria-labelledby={`accordion-button-${id}`}
          id={`accordion-panel-${id}`}
          {...sizes[size]}
          className={cn('cap-accordion__panel', className)}
          {...props}
        >
          {typeof children === 'string' ? (
            <Text color={`accordion.${color}.textContent.${styleState}`}>
              {children}
            </Text>
          ) : (
            <>{children}</>
          )}
        </ContainerAnimate>
      )}
    </AnimatePresence>
  )
}

export default AccordionPanel
