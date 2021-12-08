export const mgtob = (megas?: number) => {
  if (!megas) {
    throw new TypeError()
  }
  return megas * 1024 * 1024
}
export const btomg = (bytes?: number) => {
  if (!bytes) {
    throw new TypeError()
  }
  return Math.round((bytes / 1024 / 1024) * 10) / 10
}
