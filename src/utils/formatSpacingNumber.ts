// Source => https://stackoverflow.com/a/16637170
export default function (value: number | string) {
  const parts = value.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return parts.join('.')
}
