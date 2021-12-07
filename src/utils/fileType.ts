const fileType = (format: string): string => {
  if (/^(.+?)\//.test(format)) {
    return format.split('/')[0]
  }
  if (/^\./.test(format)) {
    return format.split('.')[1]
  }
  return format
}

export default fileType
