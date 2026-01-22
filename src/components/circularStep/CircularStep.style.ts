export const styles = () => ({
  '.cap-circular-step-icon': {
    color: 'circularStep.icon.default',
  },
  svg: {
    '#background-circle': {
      stroke: 'circularStep.border.background',
    },
    '#progress-circle': {
      stroke: 'circularStep.border.fill',
      transition: 'stroke-dashoffset 0.3s ease-out',
    },
  },
})
