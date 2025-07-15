import cn from 'classnames'
import * as React from 'react'

import { CapUIFontSize, CapUILineHeight } from '../../styles'
import { Box } from '../box'
import { CapUIIcon } from '../icon'
import { Flex, FlexProps } from '../layout'
import { LinkProps } from '../link'
import { SROnly } from '../sronly'
import { Tag, TagProps } from '../tag'
import { TagLabelProps } from '../tag/label/TagLabel'
import { TagLeftIconProps } from '../tag/leftIcon/TagLeftIcon'
import { CardContext, getPrimaryInfoSize } from './utils'

export const CardContent: React.FC<
  FlexProps & {
    primaryInfo: string
    primaryInfoTag?: React.ElementType
    secondaryInfo?: string
    href?: LinkProps['href']
    target?: LinkProps['target']
    rel?: LinkProps['rel']
  }
> = ({
  children,
  className,
  primaryInfo,
  primaryInfoTag = 'h3',
  secondaryInfo,
  target,
  href,
  rel,
  ...props
}) => {
  const { format, size } = React.useContext(CardContext)
  const isHorizontal = format === 'horizontal'
  const isSmall = size === 'S'
  const justifyContent =
    !isHorizontal || isSmall ? null : size === 'M' ? 'center' : 'space-between'

  return (
    <Flex
      px={isHorizontal && size === 'S' ? 0 : 'md'}
      py={isHorizontal && isSmall ? 0 : isHorizontal || isSmall ? 'md' : 'lg'}
      flexDirection="column"
      justifyContent={justifyContent}
      gap="md"
      {...props}
      className={cn('cap-card-content', className)}
    >
      <Flex flexDirection="column" gap="xxs" sx={{ wordBreak: 'break-word' }}>
        <Box
          className="cap-card-primaryInfo"
          as={primaryInfoTag}
          fontWeight="semibold"
          color="text.primary"
          fontSize={getPrimaryInfoSize(size, format)}
          lineHeight={size === 'L' ? CapUILineHeight.L : CapUILineHeight.M}
        >
          {href ? (
            <Box
              as="a"
              className="cap-card-link"
              href={href}
              color="text.primary"
              target={target}
              rel={rel}
              sx={{
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                },
              }}
            >
              {primaryInfo}
            </Box>
          ) : (
            primaryInfo
          )}
        </Box>
        {secondaryInfo && !(isHorizontal && isSmall) ? (
          <Box
            color="text.secondary"
            lineHeight={CapUILineHeight.M}
            fontSize={
              isSmall && !isHorizontal
                ? CapUIFontSize.BodyRegular
                : CapUIFontSize.BodyLarge
            }
          >
            {secondaryInfo}
          </Box>
        ) : null}
      </Flex>
      {children}
    </Flex>
  )
}

export const CardTagList: React.FC<FlexProps> = props => {
  const { format, size } = React.useContext(CardContext)

  if (size === 'S' && format === 'horizontal') return null

  return <Flex gap="md" alignItems="center" flexWrap="wrap" {...props} />
}

export const CardStatusTag: React.FC<Omit<TagProps, 'onRemove'>> = props => {
  const { format, size, isArchived } = React.useContext(CardContext)

  if (size === 'S' && format === 'horizontal') return null

  return (
    <Tag
      {...props}
      variantColor={isArchived ? 'infoGray' : props.variantColor}
      position="absolute"
      bottom={format === 'vertical' ? '-sm' : undefined}
      top={format === 'horizontal' ? 'xs' : undefined}
      left="xs"
    />
  )
}

export const CardTag: React.FC<
  Omit<TagProps, 'onRemove' | 'variantColor'> & { srOnlyText?: string }
> = ({ children, srOnlyText, ...props }) => {
  return (
    <Tag variantColor="infoGray" transparent {...props}>
      {children}
      {srOnlyText ? <SROnly> {srOnlyText}</SROnly> : null}
    </Tag>
  )
}

export const CardTagLabel: React.FC<TagLabelProps> = props => (
  <Tag.Label {...props} />
)

export const CardRestricted: React.FC<
  Omit<TagProps, 'onRemove' | 'variantColor'> & { srOnlyText: string }
> = ({ srOnlyText, ...props }) => {
  const { format, size } = React.useContext(CardContext)

  if (size === 'S' && format === 'horizontal') return null

  return (
    <Tag
      {...props}
      variantColor="infoGray"
      position="absolute"
      top="xs"
      right="xs"
      zIndex={1}
    >
      <Tag.LeftIcon name={CapUIIcon.Lock} m={0} />
      <SROnly> {srOnlyText}</SROnly>
    </Tag>
  )
}

export const CardTagLeftIcon: React.FC<TagLeftIconProps> = props => (
  <Tag.LeftIcon {...props} />
)
