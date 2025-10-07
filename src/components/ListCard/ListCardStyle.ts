import { SystemStyleObject } from '@styled-system/css'

export const styleListCardGrouped = (): SystemStyleObject => ({
  '& > *': {
    borderTopWidth: '0 !important',
  },
  '& > :first-child': {
    borderTopLeftRadius: 'xxs',
    borderTopRightRadius: 'xxs',
    borderTopWidth: '1px!important',
  },
  '& :last-child': {
    borderBottomLeftRadius: 'xxs',
    borderBottomRightRadius: 'xxs',
  },
})

export const styleListCard = (): SystemStyleObject => ({
  gap: 'xxs',

  '& > *': {
    borderRadius: 'xxs',
  },
})
