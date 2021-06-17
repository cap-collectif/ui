import { CapUIProvider } from '../src'

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color|bgColor|bg)$/i,
      date: /(date|createdAt|endAt|startAt|updatedAt|deletedAt)$/i,
    },
  },
}

export const decorators = [
  Story => (
    <CapUIProvider>
      <Story />
    </CapUIProvider>
  ),
]
