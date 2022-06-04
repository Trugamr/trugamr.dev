import { endOfDay, startOfDay } from 'date-fns'
import { interpolate } from './interpolate'

type ColorFromDateOptions = {
  saturation?: number
  lightness?: number
  alpha?: number
}

/**
 * Generate hue, saturation, lightness, and alpha values for a given date.
 */
export function colorFromDate(
  date: Date,
  { saturation = 85, lightness = 79, alpha = 1 }: ColorFromDateOptions = {},
) {
  const hue = interpolate(date.getTime(), {
    inputRange: [startOfDay(date).getTime(), endOfDay(date).getTime()],
    outputRange: [0, 720],
  })
  return { hue: hue % 360, saturation, lightness, alpha }
}
