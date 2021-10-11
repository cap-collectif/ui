export type VerticalAlign = 'top' | 'middle' | 'bottom'

export const styles = (isLoading: boolean, verticalAlign: VerticalAlign) => ({
  ':hover': isLoading
    ? {}
    : {
        bg: 'gray.100',

        '.visible-on-hover': {
          opacity: 1,
        },

        a: {
          textDecoration: 'underline',
        },
      },
  td: {
    verticalAlign,

    '&.visible-on-hover': {
      opacity: 0,
    },
  },
})
