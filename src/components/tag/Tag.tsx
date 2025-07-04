import cn from 'classnames'
import { AnimationProps, MotionProps, HoverHandlers } from 'framer-motion'
import * as React from 'react'

import { CapUIFontSize } from '../../styles'
import { SPACING } from '../../styles/theme'
import { jsxInnerText } from '../../utils/jsx'
import { Box, BoxProps } from '../box/Box'
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

type TagInnerProps = {
  variantType: VariantType
} & Omit<TagProps, 'variantColor'>

const TagInner: React.FC<TagInnerProps> = ({
  variantType,
  children,
  ...rest
}: TagInnerProps) => {
  return (
    <Box
      position={'relative'}
      maxHeight={SPACING['6']}
      display={'inline-flex'}
      alignItems={'center'}
      borderRadius={'tags'}
      px={variantType === 'tag' ? 'xs' : 'md'}
      py={variantType === 'tag' ? 'xxs' : 'xs'}
      fontSize={
        variantType === 'tag' ? CapUIFontSize.BodySmall : CapUIFontSize.Caption
      }
      fontWeight={variantType === 'tag' ? 400 : 600}
      {...rest}
    >
      {children}
    </Box>
  )
}

export const Tag: React.FC<TagProps> & SubComponents = ({
  children,
  variantType = 'tag',
  variantColor,
  className,
  onRemove,
  sx,
  tabIndex,
  ...rest
}) => {
  const hasCloseButton = !!onRemove
  const tagLabel = jsxInnerText(children)
  const [isFocused, setIsFocused] = React.useState<boolean>(false)

  return (
    <TagInner
      sx={{
        textTransform: variantType === 'badge' ? 'uppercase' : undefined,
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
      variantType={variantType}
      aria-label={`Tag ${tagLabel}`}
      overflow={'hidden'}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={-1}
      {...rest}
    >
      {children}
      {onRemove && (
        <TagCloseButton
          onClick={onRemove}
          tagLabel={tagLabel}
          isFocused={isFocused}
          tabIndex={tabIndex} // necessary to remove button from natural tab order on specific cases, e.g.: MultiValueTag
        />
      )}
    </TagInner>
  )
}

Tag.LeftIcon = TagLeftIcon
Tag.Avatar = TagAvatar
Tag.Label = TagLabel

Tag.displayName = 'Tag'

export default Tag
