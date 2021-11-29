import dayjs from 'dayjs'
import { interpolate } from './interpolate'

type ColorFromTimeOptions = {
  time: string | number | Date
  saturation?: number
  lightness?: number
  alpha?: number
}

export function colorFromTime({
  time,
  saturation = 85,
  lightness = 79,
  alpha = 1,
}: ColorFromTimeOptions) {
  const date = dayjs(time)
  if (date.isValid() === false) {
    throw new Error('Invalid date/time')
  }
  const hue = interpolate(date.unix(), {
    inputRange: [date.startOf('day').unix(), date.endOf('day').unix()],
    outputRange: [0, 720],
  })
  const hsla = `hsla(${hue % 360}, ${saturation}%, ${lightness}%, ${alpha})`
  return hsla
}
