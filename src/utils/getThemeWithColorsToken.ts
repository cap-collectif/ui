import merge from 'deepmerge'

import { CapUITheme } from '../styles'

const buttonColors = (theme: CapUITheme) => ({
  button: {
    primary: {
      default: {
        background: {
          default: theme.colors.primary.base,
          hover: theme.colors.primary.dark,
          disable: theme.colors.primary.lighter,
          loading: theme.colors.primary.lighter,
        },
        text: {
          default: theme.colors.white,
          hover: theme.colors.white,
          disable: theme.colors.primary.light,
          loading: theme.colors.primary.dark,
        },
        icon: {
          default: theme.colors.white,
          hover: theme.colors.white,
          disable: theme.colors.primary.light,
          loading: theme.colors.primary.dark,
        },
      },
      danger: {
        background: {
          default: theme.colors.danger.base,
          hover: theme.colors.danger.dark,
          disable: theme.colors.danger.lighter,
          loading: theme.colors.danger.lighter,
        },
        text: {
          default: theme.colors.white,
          hover: theme.colors.white,
          disable: theme.colors.danger.light,
          loading: theme.colors.danger.dark,
        },
        icon: {
          default: theme.colors.white,
          hover: theme.colors.white,
          disable: theme.colors.danger.light,
          loading: theme.colors.danger.dark,
        },
      },
      hierarchy: {
        background: {
          default: theme.colors.gray.base,
          hover: theme.colors.gray.dark,
          disable: theme.colors.gray.lighter,
          loading: theme.colors.gray.lighter,
        },
        text: {
          default: theme.colors.white,
          hover: theme.colors.white,
          disable: theme.colors.gray.light,
          loading: theme.colors.gray.dark,
        },
        icon: {
          default: theme.colors.white,
          hover: theme.colors.white,
          disable: theme.colors.gray.light,
          loading: theme.colors.gray.dark,
        },
      },
    },
    secondary: {
      default: {
        background: {
          default: theme.colors.white,
          hover: theme.colors.white,
          disable: theme.colors.white,
          loading: theme.colors.white,
        },
        text: {
          default: theme.colors.primary.base,
          hover: theme.colors.primary.dark,
          disable: theme.colors.primary.light,
          loading: theme.colors.primary.base,
        },
        icon: {
          default: theme.colors.primary.base,
          hover: theme.colors.primary.dark,
          disable: theme.colors.primary.light,
          loading: theme.colors.primary.base,
        },
        border: {
          default: theme.colors.primary.base,
          hover: theme.colors.primary.dark,
          disable: theme.colors.primary.light,
          loading: theme.colors.primary.base,
        },
      },
      danger: {
        background: {
          default: theme.colors.white,
          hover: theme.colors.white,
          disable: theme.colors.white,
          loading: theme.colors.white,
        },
        text: {
          default: theme.colors.danger.base,
          hover: theme.colors.danger.dark,
          disable: theme.colors.danger.light,
          loading: theme.colors.danger.base,
        },
        icon: {
          default: theme.colors.danger.base,
          hover: theme.colors.danger.dark,
          disable: theme.colors.danger.light,
          loading: theme.colors.danger.base,
        },
        border: {
          default: theme.colors.danger.base,
          hover: theme.colors.danger.dark,
          disable: theme.colors.danger.light,
          loading: theme.colors.danger.base,
        },
      },
      hierarchy: {
        background: {
          default: theme.colors.white,
          hover: theme.colors.white,
          disable: theme.colors.white,
          loading: theme.colors.white,
        },
        text: {
          default: theme.colors.gray.base,
          hover: theme.colors.gray.dark,
          disable: theme.colors.gray.light,
          loading: theme.colors.gray.base,
        },
        icon: {
          default: theme.colors.gray.base,
          hover: theme.colors.gray.base,
          disable: theme.colors.gray.light,
          loading: theme.colors.gray.base,
        },
        border: {
          default: theme.colors.gray.base,
          hover: theme.colors.gray.dark,
          disable: theme.colors.gray.light,
          loading: theme.colors.gray.base,
        },
      },
    },
    tertiary: {
      default: {
        text: {
          default: theme.colors.primary.base,
          hover: theme.colors.primary.dark,
          disable: theme.colors.primary.light,
          loading: theme.colors.primary.base,
        },
        icon: {
          default: theme.colors.primary.base,
          hover: theme.colors.primary.dark,
          disable: theme.colors.primary.light,
          loading: theme.colors.primary.base,
        },
      },
      danger: {
        text: {
          default: theme.colors.danger.base,
          hover: theme.colors.danger.dark,
          disable: theme.colors.danger.light,
          loading: theme.colors.danger.base,
        },
        icon: {
          default: theme.colors.danger.base,
          hover: theme.colors.danger.dark,
          disable: theme.colors.danger.light,
          loading: theme.colors.danger.base,
        },
      },
      hierarchy: {
        text: {
          default: theme.colors.gray.dark,
          hover: theme.colors.gray.darker,
          disable: theme.colors.gray.light,
          loading: theme.colors.gray.darker,
        },
        icon: {
          default: theme.colors.gray.base,
          hover: theme.colors.gray.dark,
          disable: theme.colors.gray.light,
          loading: theme.colors.gray.base,
        },
      },
    },
  },
})

const toastColors = (theme: CapUITheme) => ({
  toast: {
    background: {
      info: theme.colors.primary.background,
      success: theme.colors.success.background,
      warning: theme.colors.warning.background,
      danger: theme.colors.danger.background,
    },
    border: {
      info: theme.colors.primary.light,
      success: theme.colors.success.light,
      warning: theme.colors.warning.light,
      danger: theme.colors.danger.light,
    },
    text: {
      info: theme.colors.primary.darker,
      success: theme.colors.success.darker,
      warning: theme.colors.warning.darker,
      danger: theme.colors.danger.darker,
    },
    icon: {
      info: theme.colors.primary.darker,
      success: theme.colors.success.darker,
      warning: theme.colors.warning.darker,
      danger: theme.colors.danger.darker,
    },
  },
})

const infoMessageColors = (theme: CapUITheme) => ({
  infoMessage: {
    background: {
      info: theme.colors.primary.background,
      infoGray: theme.colors.gray.background,
      success: theme.colors.success.background,
      warning: theme.colors.warning.background,
      danger: theme.colors.danger.background,
    },
    border: {
      info: theme.colors.primary.light,
      infoGray: theme.colors.gray.light,
      success: theme.colors.success.light,
      warning: theme.colors.warning.light,
      danger: theme.colors.danger.light,
    },
    text: {
      info: theme.colors.primary.darker,
      infoGray: theme.colors.gray.darker,
      success: theme.colors.success.darker,
      warning: theme.colors.warning.darker,
      danger: theme.colors.danger.darker,
    },
  },
})

const tagColors = (theme: CapUITheme) => ({
  tag: {
    background: {
      info: theme.colors.primary.lighter,
      infoGray: theme.colors.gray.lighter,
      success: theme.colors.success.lighter,
      warning: theme.colors.warning.lighter,
      danger: theme.colors.danger.lighter,
    },
    text: {
      info: theme.colors.primary.darker,
      infoGray: theme.colors.gray.darker,
      success: theme.colors.success.darker,
      warning: theme.colors.warning.darker,
      danger: theme.colors.danger.darker,
    },
    icon: {
      info: theme.colors.primary.darker,
      infoGray: theme.colors.gray.darker,
      success: theme.colors.success.darker,
      warning: theme.colors.warning.darker,
      danger: theme.colors.danger.darker,
    },
    shadowColor: {
      info: theme.colors.primary.lighter,
      infoGray: theme.colors.gray.lighter,
      success: theme.colors.success.lighter,
      warning: theme.colors.warning.lighter,
      danger: theme.colors.danger.lighter,
    },
  },
})

const actionColors = (theme: CapUITheme) => ({
  action: {
    primary: {
      background: {
        default: theme.colors.white,
        hover: theme.colors.primary.lighter,
      },
      icon: {
        default: theme.colors.gray.base,
        hover: theme.colors.primary.base,
        disabled: theme.colors.gray.light,
      },
    },
    danger: {
      background: {
        default: theme.colors.white,
        hover: theme.colors.danger.lighter,
      },
      icon: {
        default: theme.colors.gray.base,
        hover: theme.colors.danger.base,
        disabled: theme.colors.gray.light,
      },
    },
    hierarchy: {
      background: {
        default: theme.colors.white,
        hover: theme.colors.gray.lighter,
      },
      icon: {
        default: theme.colors.gray.base,
        hover: theme.colors.gray.dark,
        disabled: theme.colors.gray.light,
      },
    },
  },
})

const avatarColors = (theme: CapUITheme) => ({
  avatar: {
    background: theme.colors.primary.base,
    border: {
      pictureGroup: theme.colors.white,
      fullGroup: theme.colors.white,
    },
    text: {
      placeholder: theme.colors.white,
      fullGroup: theme.colors.white,
    },
  },
})

const inputColors = (theme: CapUITheme) => ({
  input: {
    background: {
      placeholder: theme.colors.gray.background,
      default: theme.colors.gray.background,
      selected: theme.colors.gray.white,
      disable: theme.colors.gray.background,
      readonly: theme.colors.gray.white,
    },
    border: {
      placeholder: theme.colors.gray.base,
      default: theme.colors.gray.base,
      selected: theme.colors.primary.base,
      disable: theme.colors.gray.lighter,
      readonly: theme.colors.gray.lighter,
    },
    icon: {
      placeholder: theme.colors.gray.base,
      default: theme.colors.gray.dark,
      selected: theme.colors.gray.dark,
      disable: theme.colors.gray.light,
      readonly: theme.colors.gray.light,
    },
  },
})

const textColors = (theme: CapUITheme) => ({
  text: {
    primary: theme.colors.gray.black,
    secondary: theme.colors.gray.darker,
    tertiary: theme.colors.gray.dark,
    disable: theme.colors.gray.light,
    inverse: theme.colors.gray.white,
    error: theme.colors.danger.base,
  },
})

const getColors = (theme: CapUITheme) => ({
  ...buttonColors(theme),
  ...toastColors(theme),
  ...infoMessageColors(theme),
  ...tagColors(theme),
  ...actionColors(theme),
  ...avatarColors(theme),
  ...inputColors(theme),
  ...textColors(theme),
})

export type ExtendedColors = ReturnType<typeof getColors>

export const getThemeWithColorsToken = (theme: CapUITheme) => {
  return merge.all([
    {
      colors: getColors(theme),
    },
    theme,
  ]) as CapUITheme
}
