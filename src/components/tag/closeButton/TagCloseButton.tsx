import cn from 'classnames'
import * as React from 'react'

import { Button } from '../../button'
import { CapUIIcon, CapUIIconSize, Icon, IconProps } from '../../icon'

export type TagCloseButtonProps = Omit<IconProps, 'name' | 'color' | 'size'> & {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined
  tagLabel: string
  isFocused: boolean
}

const TagCloseButton: React.FC<TagCloseButtonProps> = ({
  onClick,
  className,
  tagLabel,
  isFocused,
  tabIndex,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === ' ') {
      onClick && onClick(event as unknown as React.MouseEvent<HTMLDivElement>)
    }
  }

  return (
    <Button
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={cn('cap-tag__closeButton', className)}
      aria-label={`Remove ${tagLabel}`}
      variant="link"
      backgroundColor={'transparent'}
      opacity={isFocused ? 1 : 0}
      position={'absolute'}
      right={isFocused ? 1 : 0}
      sx={{
        transitionProperty: 'all',
        transitionDuration: '0.2s',
        transitionTimingFunction: '0.48s, 0.15s, 0.25s, 0.96s',
      }}
      size="xs"
      tabIndex={tabIndex ?? 0}
    >
      <Icon name={CapUIIcon.CrossO} color="inherit" size={CapUIIconSize.Xs} />
    </Button>
  )
}

TagCloseButton.displayName = 'Tag.CloseButton'

export default TagCloseButton
