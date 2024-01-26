import { SystemStyleObject } from '@styled-system/css'
import * as React from 'react'

import { CapUIFontWeight } from '../../styles'
import { Box } from '../box'
import { ButtonProps } from '../button'
import { CapUIIcon, CapUIIconSize, Icon } from '../icon'
import { Tag } from '../tag'

export interface RankButtonProps extends Omit<ButtonProps, 'disabled'> {
  readonly label: string
  readonly onLeftIconClick: () => void
  readonly onRightIconClick: () => void
  readonly disabled?: boolean
}

const style = (disabled: boolean): SystemStyleObject => ({
  cursor: disabled ? 'default' : 'pointer',
  '&:hover': {
    svg: {
      color: disabled ? 'inherit' : 'primary.500',
    },
  },
})

const RankButton: React.FC<RankButtonProps> = ({
  label,
  onLeftIconClick,
  onRightIconClick,
  disabled = false,
  ...rest
}) => {
  return (
    <Tag
      variantColor={disabled ? 'neutral-gray' : 'primary'}
      display="flex"
      flexDirection="row"
      gap={1}
      minHeight="40px"
      minWidth="130px"
      justifyContent="center"
      alignContent="center"
    >
      <Box
        as="button"
        color={disabled ? 'neutral-gray.300' : 'primary.500'}
        sx={style(disabled)}
        onClick={onLeftIconClick}
        disabled={disabled}
        {...rest}
      >
        <Icon name={CapUIIcon.ArrowUp} size={CapUIIconSize.Sm} />
      </Box>
      <Tag.Label
        color={disabled ? 'neutral-gray.300' : 'primary.800'}
        fontWeight={CapUIFontWeight.Semibold}
      >
        {label}
      </Tag.Label>
      <Box
        as="button"
        color={disabled ? 'neutral-gray.300' : 'primary.500'}
        sx={style(disabled)}
        onClick={onRightIconClick}
        disabled={disabled}
        {...rest}
      >
        <Icon name={CapUIIcon.ArrowDown} size={CapUIIconSize.Sm} />
      </Box>
    </Tag>
  )
}

export default RankButton
