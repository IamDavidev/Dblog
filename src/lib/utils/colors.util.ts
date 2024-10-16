export const colorsWithOpacity = {
  pink: {
    bg: '#FDF2FA',
    text: '#FF0080'
  },
  orange: {
    bg: '#FFF6ED',
    text: '#C4320A'
  },
  green: {
    bg: '#ECFDF3',
    text: '#027A48'
  },
  blue: {
    bg: '#EEF4FF',
    text: '#3538CD'
  },
  cyan: {
    bg: '#F0F9FF',
    text: '#026AA2'
  }
}

export type PickColor = keyof typeof colorsWithOpacity
