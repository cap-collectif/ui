import cn from 'classnames'
import {
  AnimationProps,
  motion,
  MotionProps,
  HoverHandlers,
} from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { BaseColorsName } from '../../styles/modules/colors'
import { SPACING } from '../../styles/theme'
import { jsxInnerText } from '../../utils/jsx'
import { Box, BoxProps, PolymorphicComponent } from '../box/Box'
import { getTagStyle } from './Tag.style'
import TagAvatar from './avatar/TagAvatar'
import TagCloseButton from './closeButton/TagCloseButton'
import TagLabel from './label/TagLabel'
import TagLeftIcon from './leftIcon/TagLeftIcon'

type SubComponents = {
  LeftIcon: typeof TagLeftIcon
  Avatar: typeof TagAvatar
  Label: typeof TagLabel
}

type VariantType = 'tag' | 'badge'

export interface TagProps
  extends BoxProps,
    AnimationProps,
    Pick<MotionProps, 'initial'>,
    Pick<HoverHandlers, 'whileHover'> {
  readonly variantColor: BaseColorsName
  readonly variantType?: VariantType
  readonly onRemove?: () => void
}

const TagInner = styled(motion(Box)).attrs({
  position: 'relative',
  maxHeight: SPACING['6'],
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: 'tags',
})(
  variant<unknown, NonNullable<TagProps['variantType']>, 'variantType'>({
    prop: 'variantType',
    variants: {
      tag: {
        px: 2,
        fontSize: 2,
        py: 1,
        fontWeight: 400,
        fontFamily: 'roboto',
        maxWidth: '150px',
      },
      badge: {
        px: 4,
        fontSize: 1,
        py: 2,
        fontWeight: 600,
        fontFamily: 'openSans',
        textTransform: 'uppercase',
      },
    },
  }),
) as PolymorphicComponent<Omit<TagProps, 'variantColor'>>

export const Tag: React.FC<TagProps> & SubComponents = ({
  children,
  variantType = 'tag',
  variantColor,
  className,
  onRemove,
  ...rest
}) => {
  const hasCloseButton = !!onRemove

  return (
    <TagInner
      sx={getTagStyle(variantColor)}
      title={jsxInnerText(children)}
      className={cn('cap-tag', className)}
      initial="initial"
      whileHover="hover"
      exit="initial"
      _hover={{
        '.cap-tag__label': hasCloseButton
          ? {
              paddingRight: variantType === 'tag' ? '15%' : '1%',
            }
          : {},
      }}
      variantType={variantType}
      {...rest}
    >
      {children}
      {onRemove && <TagCloseButton onClick={onRemove} />}
    </TagInner>
  )
}

Tag.LeftIcon = TagLeftIcon
Tag.Avatar = TagAvatar
Tag.Label = TagLabel

Tag.displayName = 'Tag'

export default Tag
