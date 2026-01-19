import cn from 'classnames'
import * as React from 'react'

import { Box } from '../box'
import { CapUIIcon } from '../icon'
import { Flex, FlexProps } from '../layout'
import { LinkProps } from '../link'
import { SROnly } from '../sronly'
import { Tag, TagProps } from '../tag'
import { TagLabelProps } from '../tag/label/TagLabel'
import { TagLeftIconProps } from '../tag/leftIcon/TagLeftIcon'
import {
  CONTENT_STYLES,
  PRIMARY_TEXT_STYLES,
  SECONDARY_TEXT_STYLES,
} from './Card.style'
import { CardContext } from './utils'

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
  const { format, variantSize, hasButton } = React.useContext(CardContext)

  const contentStyles = CONTENT_STYLES[format][variantSize]
  const primaryStyles = PRIMARY_TEXT_STYLES[format][variantSize]
  const secondaryStyles = SECONDARY_TEXT_STYLES[format][variantSize]

  return (
    <Flex
      flexDirection="column"
      gap="md"
      px={contentStyles.px}
      py={contentStyles.py}
      justifyContent={contentStyles.justifyContent}
      alignSelf={contentStyles.alignSelf}
      className={cn('cap-card-content', className)}
      {...props}
    >
      <Flex flexDirection="column" gap="xxs" sx={{ wordBreak: 'break-word' }}>
        <Box
          className="cap-card-primaryInfo"
          as={primaryInfoTag}
          fontWeight="semibold"
          color="text.primary"
          fontSize={primaryStyles.fontSize}
          lineHeight={primaryStyles.lineHeight}
        >
          {href ? (
            <Box
              as="a"
              className="cap-card-link"
              href={href}
              color="text.primary"
              target={target}
              rel={rel}
              sx={
                !hasButton
                  ? {
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                      },
                    }
                  : undefined
              }
            >
              {primaryInfo}
            </Box>
          ) : (
            primaryInfo
          )}
        </Box>
        {secondaryInfo && !secondaryStyles.hidden && (
          <Box
            color="text.secondary"
            fontSize={secondaryStyles.fontSize}
            lineHeight={secondaryStyles.lineHeight}
          >
            {secondaryInfo}
          </Box>
        )}
      </Flex>
      {children}
    </Flex>
  )
}

export const CardTagList: React.FC<FlexProps> = props => {
  const { format, variantSize } = React.useContext(CardContext)
  const isSmallHorizontal = variantSize === 'small' && format === 'horizontal'

  return (
    <Flex
      gap={isSmallHorizontal ? undefined : 'md'}
      alignItems="center"
      flexWrap="wrap"
      {...props}
    />
  )
}

export const CardStatusTag: React.FC<Omit<TagProps, 'onRemove'>> = props => {
  const { format, variantSize, isArchived } = React.useContext(CardContext)

  if (variantSize === 'small' && format === 'horizontal') return null

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
> = ({ children, srOnlyText, ...props }) => (
  <Tag variantColor="infoGray" transparent {...props}>
    {children}
    {srOnlyText && <SROnly> {srOnlyText}</SROnly>}
  </Tag>
)

export const CardTagLabel: React.FC<TagLabelProps> = props => (
  <Tag.Label {...props} />
)

export const CardRestricted: React.FC<
  Omit<TagProps, 'onRemove' | 'variantColor'> & { srOnlyText: string }
> = ({ srOnlyText, ...props }) => {
  const { format, variantSize } = React.useContext(CardContext)

  if (variantSize === 'small' && format === 'horizontal') return null

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
