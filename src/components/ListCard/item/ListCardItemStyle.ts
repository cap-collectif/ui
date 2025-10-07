import { SystemStyleObject } from '@styled-system/css'

export const styleListCardItem = (): SystemStyleObject => ({
  border: 'normal',
  borderColor: 'listCard.default.border',
  backgroundColor: 'listCard.default.background.default',
  transition: 'background-color 0.2s',
  px: 'md',
  py: 'sm',

  '&:hover': {
    backgroundColor: 'listCard.default.background.hover',
  },
})
