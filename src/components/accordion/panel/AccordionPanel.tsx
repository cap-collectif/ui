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
import { useAccordionItem } from '../item/AccordionItem.context'

type AccordionPanelProps = FlexProps & {
  children: React.ReactNode
}

type ContainerAnimate = React.FC<
  FlexProps & AnimationProps & Pick<MotionProps, 'initial'>
>

const ContainerAnimate = motion(Flex) as ContainerAnimate

const AccordionPanel: React.FC<AccordionPanelProps> = ({
  children,
  className,
  ...props
}) => {
  const { open, id } = useAccordionItem()

  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <ContainerAnimate
          direction="column"
          px={8}
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          aria-labelledby={`accordion-button-${id}`}
          id={`accordion-panel-${id}`}
          role="region"
          className={cn('cap-accordion__panel', className)}
          {...props}
        >
          {typeof children === 'string' ? (
            <Text color="gray.900">{children}</Text>
          ) : (
            <>{children}</>
          )}
        </ContainerAnimate>
      )}
    </AnimatePresence>
  )
}

export default AccordionPanel
