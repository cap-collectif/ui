export const access = (path, object) => {
  return path.split('.').reduce((o, i) => o?.[i], object)
}
