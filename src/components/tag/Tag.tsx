import cn from 'classnames'
import { AnimationProps, MotionProps, HoverHandlers } from 'framer-motion'
import * as React from 'react'

import { jsxInnerText } from '../../utils/jsx'
import { Box, BoxProps, PolymorphicBoxProps } from '../box/Box'
import { Tooltip } from '../tooltip'
import { getTagStyle, STYLES } from './Tag.style'
import TagAvatar from './avatar/TagAvatar'
import TagCloseButton from './closeButton/TagCloseButton'
import TagLabel from './label/TagLabel'
import TagLeftIcon from './leftIcon/TagLeftIcon'

type SubComponents = {
  LeftIcon: typeof TagLeftIcon
  Avatar: typeof TagAvatar
  Label: typeof TagLabel
}

export type VariantType = 'tag' | 'badge'
export type VariantSize = 'small' | 'medium'

export type TagVariantColor =
  | 'info'
  | 'infoGray'
  | 'success'
  | 'warning'
  | 'danger'

export interface TagProps
  extends BoxProps,
    AnimationProps,
    PolymorphicBoxProps<React.ElementType>,
    Partial<Pick<MotionProps, 'initial'>>,
    Partial<Pick<HoverHandlers, 'whileHover'>> {
  variantColor: TagVariantColor
  variantType?: VariantType
  variantSize?: VariantSize
  onRemove?: React.MouseEventHandler<HTMLElement | SVGElement> | undefined
  transparent?: boolean
  tooltipLabel?: React.ReactNode
}

type TagInnerProps = {
  variantType: VariantType
  variantSize: VariantSize
} & Omit<TagProps, 'variantColor'>

const TagInner: React.FC<TagInnerProps> = ({
  variantType,
  variantSize,
  children,
  as,
  ...rest
}: TagInnerProps) => {
  return (
    <Box
      position={'relative'}
      display={'inline-flex'}
      alignItems={'center'}
      borderRadius={'tags'}
      px={STYLES[variantType][variantSize].px}
      py={STYLES[variantType][variantSize].py}
      fontSize={STYLES[variantType][variantSize].fontSize}
      fontWeight={STYLES[variantType][variantSize].fontWeight}
      as={as}
      {...rest}
    >
      {children}
    </Box>
  )
}

export const Tag: React.FC<TagProps> & SubComponents = ({
  children,
  variantType = 'tag',
  variantSize = 'small',
  variantColor,
  className,
  onRemove,
  sx,
  tabIndex,
  transparent = false,
  tooltipLabel,
  as,
  ...rest
}) => {
  const hasCloseButton = !!onRemove
  const tagLabel = jsxInnerText(children)
  const [isFocused, setIsFocused] = React.useState<boolean>(false)

  const renderTag = (withinTooltip: boolean = false) => (
    <TagInner
      as={as}
      title={withinTooltip ? undefined : tagLabel}
      className={cn('cap-tag', className)}
      initial="initial"
      whileHover="hover"
      _hover={{
        '.cap-tag__label': hasCloseButton
          ? {
              paddingRight: STYLES[variantType][variantSize].paddingRight,
            }
          : {},
      }}
      variantType={variantType}
      variantSize={variantSize}
      aria-label={withinTooltip ? undefined : `Tag ${tagLabel}`}
      overflow={'hidden'}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={withinTooltip ? 0 : undefined}
      sx={{
        ...getTagStyle(variantColor, transparent),
        ...sx,
      }}
      {...rest}
    >
      {children}
      {as !== 'button' && onRemove && (
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
