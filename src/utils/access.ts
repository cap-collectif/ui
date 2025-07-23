/** util to access a nested object property with a string -> access("foo.bar", { foo: { bar: "toto" }}) => "toto" */
export const access = (path, object) => {
  return path.split('.').reduce((o, i) => o?.[i], object)
}
