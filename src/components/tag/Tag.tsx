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

import { CapUIFontFamily, CapUIFontSize } from '../../styles'
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

export type TagVariantColor =
  | 'info'
  | 'infoGray'
  | 'success'
  | 'warning'
  | 'danger'

export interface TagProps
  extends BoxProps,
    AnimationProps,
    Pick<MotionProps, 'initial'>,
    Pick<HoverHandlers, 'whileHover'> {
  variantColor: TagVariantColor
  variantType?: VariantType
  onRemove?: React.MouseEventHandler<HTMLElement | SVGElement> | undefined
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
        fontSize: CapUIFontSize.BodySmall,
        py: 1,
        fontWeight: 400,
        fontFamily: CapUIFontFamily.Input,
      },
      badge: {
        px: 4,
        fontSize: CapUIFontSize.Caption,
        py: 2,
        fontWeight: 600,
        fontFamily: CapUIFontFamily.Body,
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
  sx,
  ...rest
}) => {
  const hasCloseButton = !!onRemove
  const tagLabel = jsxInnerText(children)

  return (
    <TagInner
      sx={{
        ...getTagStyle(variantColor),
        ...sx,
      }}
      title={tagLabel}
      className={cn('cap-tag', className)}
      initial="initial"
      whileHover="hover"
      _hover={{
        '.cap-tag__label': hasCloseButton
          ? {
              paddingRight: variantType === 'tag' ? '15%' : '1%',
            }
          : {},
      }}
      tabIndex={0}
      variantType={variantType}
      aria-label={`Tag ${tagLabel}`}
      {...rest}
    >
      {children}
      {onRemove && <TagCloseButton onClick={onRemove} tagLabel={tagLabel} />}
    </TagInner>
  )
}

Tag.LeftIcon = TagLeftIcon
Tag.Avatar = TagAvatar
Tag.Label = TagLabel

Tag.displayName = 'Tag'

export default Tag
