import cn from 'classnames'
import { AnimationProps, MotionProps, HoverHandlers } from 'framer-motion'
import * as React from 'react'

import { CapUIFontSize } from '../../styles'
import { SPACING } from '../../styles/theme'
import { jsxInnerText } from '../../utils/jsx'
import { Box, BoxProps } from '../box/Box'
import { Tooltip } from '../tooltip'
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
    Partial<Pick<MotionProps, 'initial'>>,
    Partial<Pick<HoverHandlers, 'whileHover'>> {
  variantColor: TagVariantColor
  variantType?: VariantType
  onRemove?: React.MouseEventHandler<HTMLElement | SVGElement> | undefined
  transparent?: boolean
  tooltipLabel?: React.ReactNode
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
  transparent = false,
  tooltipLabel,
  ...rest
}) => {
  const hasCloseButton = !!onRemove
  const tagLabel = jsxInnerText(children)
  const [isFocused, setIsFocused] = React.useState<boolean>(false)

  const renderTag = (withinTooltip: boolean = false) => (
    <TagInner
      sx={{
        textTransform: variantType === 'badge' ? 'uppercase' : undefined,
        ...getTagStyle(variantColor, transparent),
        ...sx,
      }}
      title={withinTooltip ? undefined : tagLabel}
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
      aria-label={withinTooltip ? undefined : `Tag ${tagLabel}`}
      overflow={'hidden'}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={withinTooltip ? 0 : undefined}
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

  return tooltipLabel ? (
    <Tooltip label={tooltipLabel}>{renderTag(true)}</Tooltip>
  ) : (
    renderTag()
  )
}

Tag.LeftIcon = TagLeftIcon
Tag.Avatar = TagAvatar
Tag.Label = TagLabel

Tag.displayName = 'Tag'

export default Tag
