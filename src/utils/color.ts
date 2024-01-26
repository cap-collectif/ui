type ColorObject = Record<'r' | 'g' | 'b' | 'a', number>
const singleColorSpace = 16 * 16 // 256
const blueSpace = singleColorSpace
const greenSpace = blueSpace * singleColorSpace // 65536
const redSpace = greenSpace * singleColorSpace // 16777216

// adapted to TS from https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)
// See https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
// and https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors/73660199#73660199
export const toColorObject = (rgbOrHex: string): ColorObject => {
  const { length } = rgbOrHex
  const outputColor = {} as ColorObject
  if (length > 9) {
    const rgbaColor = rgbOrHex.split(',')
    const [rgbaAndRed, green, blue, alpha] = rgbaColor

    if (rgbaAndRed.slice(0, 3) !== 'rgb') {
      throw new Error('Invalid color format')
    }
    const red =
      rgbaAndRed[3] === 'a' ? rgbaAndRed.slice(5) : rgbaAndRed.slice(4)

    const rgbaLength = rgbaColor.length
    if (rgbaLength < 3 || rgbaLength > 4) {
      throw new Error('Invalid hex color format')
    }
    outputColor.r = parseInt(red, 10)
    outputColor.g = parseInt(green, 10)
    outputColor.b = parseInt(blue, 10)
    outputColor.a = alpha ? parseFloat(alpha) : -1
  } else {
    if (length === 8 || length === 6 || length < 4) {
      throw new Error('Invalid hex color format')
    }
    let HexColor = rgbOrHex
    if (length < 6) {
      HexColor = `#${rgbOrHex[1]}${rgbOrHex[1]}${rgbOrHex[2]}${rgbOrHex[2]}${
        rgbOrHex[3]
      }${rgbOrHex[3]}${length > 4 ? rgbOrHex[4] + rgbOrHex[4] : ''}`
    }
    if (length === 9 || length === 5) {
      const hexRed = parseInt(HexColor.slice(1, 3), 16)
      outputColor.r = hexRed

      const hexGreen = parseInt(HexColor.slice(3, 5), 16)
      outputColor.g = hexGreen

      const hexBlue = parseInt(HexColor.slice(5, 7), 16)
      outputColor.b = hexBlue

      const hexAlpha = parseInt(HexColor.slice(7, 9), 16)
      outputColor.a = Math.round((hexAlpha / 255) * 100) / 100
    } else {
      const hexRed = parseInt(HexColor.slice(1, 3), 16)
      outputColor.r = hexRed

      const hexGreen = parseInt(HexColor.slice(3, 5), 16)
      outputColor.g = hexGreen

      const hexBlue = parseInt(HexColor.slice(5, 7), 16)
      outputColor.b = hexBlue

      outputColor.a = -1
    }
  }
  return outputColor
}

const black: ColorObject = { r: 0, g: 0, b: 0, a: -1 }
const white: ColorObject = { r: 255, g: 255, b: 255, a: -1 }
export const tint = (
  ratio: number,
  inputColor: string,
  {
    toColor,
    useLinear,
    reformat,
  }: { toColor?: string; useLinear?: boolean; reformat?: boolean } = {},
) => {
  const { round } = Math
  const clampedRatio = Math.min(Math.max(ratio, -1), 1)
  if (ratio < -1 || ratio > 1) {
    // eslint-disable-next-line no-console
    console.info(
      `Ratio should be between -1 and 1 and it is ${ratio}. It will be clamped to ${clampedRatio}`,
    )
  }
  let baseColor = inputColor
  if (inputColor[0] !== 'r' && inputColor[0] !== '#') {
    baseColor = '#000'
    // eslint-disable-next-line no-console
    console.info(
      `Invalid input color format. "${inputColor}" should be rgb(a) or hex. It will fallback to "${baseColor}"`,
    )
  }
  let isRGBformat = baseColor.length > 9 || baseColor.includes('rgb(')
  isRGBformat = reformat ? !isRGBformat : isRGBformat

  if (toColor) {
    const isToColorRgbFormat =
      (toColor && toColor?.length > 9) || toColor?.includes('rgb(')
    isRGBformat = reformat ? !isToColorRgbFormat : isToColorRgbFormat
  }
  const formattedBaseColor = toColorObject(baseColor)
  const isNegativeRatio = clampedRatio < 0
  const toColorDefault = isNegativeRatio ? black : white
  const formattedToColor =
    toColor && !reformat ? toColorObject(toColor) : toColorDefault
  const toColorRatio = Math.abs(clampedRatio)
  const baseRatio = 1 - toColorRatio

  const outputColor = {} as ColorObject
  if (useLinear) {
    outputColor.r = round(
      baseRatio * formattedBaseColor.r + toColorRatio * formattedToColor.r,
    )
    outputColor.g = round(
      baseRatio * formattedBaseColor.g + toColorRatio * formattedToColor.g,
    )
    outputColor.b = round(
      baseRatio * formattedBaseColor.b + toColorRatio * formattedToColor.b,
    )
  } else {
    outputColor.r = round(
      (baseRatio * formattedBaseColor.r ** 2 +
        toColorRatio * formattedToColor.r ** 2) **
        0.5,
    )
    outputColor.g = round(
      (baseRatio * formattedBaseColor.g ** 2 +
        toColorRatio * formattedToColor.g ** 2) **
        0.5,
    )
    outputColor.b = round(
      (baseRatio * formattedBaseColor.b ** 2 +
        toColorRatio * formattedToColor.b ** 2) **
        0.5,
    )
  }

  const blendedAlpha =
    formattedBaseColor.a * baseRatio + formattedToColor.a * toColorRatio

  outputColor.a = formattedToColor.a < 0 ? formattedBaseColor.a : blendedAlpha

  const hasAlpha = false // for now

  const color = `#${(
    outputColor.r * redSpace +
    outputColor.g * greenSpace +
    outputColor.b * blueSpace +
    (hasAlpha ? round(outputColor.a * 255) : 0)
  )
    .toString(16)
    // If no Alpha, we remove the last 2 hex digits
    .slice(0, hasAlpha ? undefined : -2)}`

  return color.length === 7 ? color : `${color.slice(0, 1)}0${color.slice(1)}`
}
