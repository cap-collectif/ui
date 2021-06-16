import { CapUIProvider } from '../src'

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
}

export const decorators = [
  Story => (
    <CapUIProvider>
      <Story />
    </CapUIProvider>
  ),
]
