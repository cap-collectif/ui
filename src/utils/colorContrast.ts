const hexToDec = (hexString: string): number => {
  const decString = hexString.replace(/[^a-f0-9]/gi, '')
  return parseInt(decString, 16)
}

const colorContrast = (
  hexColorOrRedOrArray: string,
  green?: string | number,
  blue?: string | number,
) => {
  const hash = /#/
  const isHex = hash.test(hexColorOrRedOrArray)
  const isRGB = green !== undefined && blue !== undefined
  const isArray = Array.isArray(hexColorOrRedOrArray)

  let fontColor = '#ffffff'
  let red = 0

  if (isHex) {
    red = hexToDec(hexColorOrRedOrArray.substr(1, 2))
    green = hexToDec(hexColorOrRedOrArray.substr(3, 2))
    blue = hexToDec(hexColorOrRedOrArray.substr(5, 2))
  } else if (isRGB) {
    red = parseInt(hexColorOrRedOrArray)
    green = typeof green === 'string' ? parseInt(green) : 0
    blue = typeof blue === 'string' ? parseInt(blue) : 0
  } else if (isArray) {
    red = parseInt(hexColorOrRedOrArray[0])
    green = parseInt(hexColorOrRedOrArray[1])
    blue = parseInt(hexColorOrRedOrArray[2])
  } else {
    // Not a color, respond with white color
    return fontColor
  }

  const contrast = Math.sqrt(
    red * red * 0.241 + green * green * 0.691 + blue * blue * 0.068,
  )

  if (contrast > 130) {
    fontColor = '#000000'
  }

  return fontColor
}

export default colorContrast
