import { SystemStyleObject } from '@styled-system/css'

export const styleListCardItem = (variantColor): SystemStyleObject => ({
  border: 'normal',
  borderColor: 'listCard.default.border',
  backgroundColor:
    variantColor === 'default'
      ? 'listCard.default.background.default'
      : 'listCard.hierarchy.background.default',
  transition: 'background-color 0.2s',
  px: 'md',
  py: 'sm',

  '&:hover': {
    backgroundColor:
      variantColor === 'default'
        ? 'listCard.default.background.hover'
        : 'listCard.hierarchy.background.hover',
  },
})
