/* eslint-disable @typescript-eslint/ban-types */

export type BaseColorsName =
  | 'gray'
  | 'neutral-gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'aqua'

type RootThemeColorsValues =
  | 'transparent'
  | 'current'
  | 'dark'
  | 'black'
  | 'white'

type BaseColors = {
  [key in BaseColorsName]: {
    [tint: string]: string
  }
}

type RootColors = {
  [key in RootThemeColorsValues]: string
}
export type Colors = BaseColors & RootColors

const colors: Colors = {
  transparent: 'transparent',
  current: 'currentColor',
  dark: '#30363D',

  black: '#000',
  white: '#fff',

  gray: {
    '100': '#F7F7F8',
    '150': '#E8EBED',
    '200': '#DADEE1',
    '300': '#BEC4CB',
    '400': '#A2ABB4',
    '500': '#85919D',
    '600': '#6B7885',
    '700': '#545E68',
    '800': '#3D454C',
    '900': '#272B30',
  },
  'neutral-gray': {
    '100': '#F8F8F8',
    '150': '#EBEBEB',
    '200': '#DEDEDE',
    '300': '#C4C4C4',
    '400': '#ABABAB',
    '500': '#919191',
    '600': '#787878',
    '700': '#5E5E5E',
    '800': '#454545',
    '900': '#2B2B2B',
  },
  red: {
    '100': '#FEFBFB',
    '150': '#FAE5E7',
    '200': '#F6CBCF',
    '300': '#ED9BA4',
    '400': '#E56C78',
    '500': '#DD3C4C',
    '600': '#BF2231',
    '700': '#8F1925',
    '800': '#5F1119',
    '900': '#30080C',
  },
  orange: {
    '100': '#FFFDFA',
    '150': '#FFF3E0',
    '200': '#FFE7C2',
    '300': '#FFD08A',
    '400': '#FFBA52',
    '500': '#FFA31A',
    '600': '#E08700',
    '700': '#A86500',
    '800': '#704300',
    '900': '#382200',
  },
  yellow: {
    '100': '#FFFEFA',
    '150': '#FFF7E0',
    '200': '#FFF0C2',
    '300': '#FFE28A',
    '400': '#FFDA52',
    '500': '#FFC61A',
    '600': '#E0A800',
    '700': '#A87E00',
    '800': '#705400',
    '900': '#382A00',
  },
  green: {
    '100': '#FBFEFC',
    '150': '#E4F9E9',
    '200': '#CEF3D6',
    '300': '#A1E8B1',
    '400': '#73DD8C',
    '500': '#46D267',
    '600': '#2CB54C',
    '700': '#218739',
    '800': '#165A26',
    '900': '#0B2D13',
  },
  blue: {
    '100': '#FAFCFF',
    '150': '#E0EFFF',
    '200': '#C2E0FF',
    '300': '#8AC2FF',
    '400': '#52A5FF',
    '500': '#1A88FF',
    '600': '#006CE0',
    '700': '#0051A8',
    '800': '#003670',
    '900': '#001B38',
  },
  aqua: {
    '100': '#FAFEFE',
    '150': '#E4F8FC',
    '200': '#C9F2F8',
    '300': '#97E6F2',
    '400': '#65DAEC',
    '500': '#33CEE6',
    '600': '#19B0C8',
    '700': '#138496',
    '800': '#0C5864',
    '900': '#062C32',
  },
}

// seems to cause rollup not to compile... weird, so currently defining here all the colors
// looks like tsdx is using a rollup plugin which does not understand quite the new TS template litterals types
// type PathsToStringProps<T> = T extends string
//   ? []
//   : {
//       [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>]
//     }[Extract<keyof T, string>];
//
// type Join<T extends string[], D extends string> = T extends []
//   ? never
//   : T extends [infer F]
//   ? F
//   : T extends [infer F, ...infer R]
//   ? F extends string
//     ? string extends F
//       ? string
//       : `${F}${D}${Join<Extract<R, string[]>, D>}`
//     : never
//   : string;

type NestedThemeColorsValues =
  | 'gray.100'
  | 'gray.150'
  | 'gray.200'
  | 'gray.300'
  | 'gray.400'
  | 'gray.500'
  | 'gray.600'
  | 'gray.700'
  | 'gray.800'
  | 'gray.900'
  | 'neutral-gray.100'
  | 'neutral-gray.150'
  | 'neutral-gray.200'
  | 'neutral-gray.300'
  | 'neutral-gray.400'
  | 'neutral-gray.500'
  | 'neutral-gray.600'
  | 'neutral-gray.700'
  | 'neutral-gray.800'
  | 'neutral-gray.900'
  | 'red.100'
  | 'red.150'
  | 'red.200'
  | 'red.300'
  | 'red.400'
  | 'red.500'
  | 'red.600'
  | 'red.700'
  | 'red.800'
  | 'red.900'
  | 'orange.100'
  | 'orange.150'
  | 'orange.200'
  | 'orange.300'
  | 'orange.400'
  | 'orange.500'
  | 'orange.600'
  | 'orange.700'
  | 'orange.800'
  | 'orange.900'
  | 'yellow.100'
  | 'yellow.150'
  | 'yellow.200'
  | 'yellow.300'
  | 'yellow.400'
  | 'yellow.500'
  | 'yellow.600'
  | 'yellow.700'
  | 'yellow.800'
  | 'yellow.900'
  | 'green.100'
  | 'green.150'
  | 'green.200'
  | 'green.300'
  | 'green.400'
  | 'green.500'
  | 'green.600'
  | 'green.700'
  | 'green.800'
  | 'green.900'
  | 'blue.100'
  | 'blue.150'
  | 'blue.200'
  | 'blue.300'
  | 'blue.400'
  | 'blue.500'
  | 'blue.600'
  | 'blue.700'
  | 'blue.800'
  | 'blue.900'
  | 'aqua.100'
  | 'aqua.150'
  | 'aqua.200'
  | 'aqua.300'
  | 'aqua.400'
  | 'aqua.500'
  | 'aqua.600'
  | 'aqua.700'
  | 'aqua.800'
  | 'aqua.900'

export type ThemeColorsValues =
  | NestedThemeColorsValues
  | RootThemeColorsValues
  | (string & {})

export default colors
