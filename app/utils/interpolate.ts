type InterpolateOptions = {
  inputRange: [number, number]
  outputRange: [number, number]
}

export const interpolate = (
  value: number,
  { inputRange: [minX, maxX], outputRange: [minY, maxY] }: InterpolateOptions,
) => {
  const slope = (maxY - minY) / (maxX - minX)
  const result = (value - minX) * (slope + minY)
  return result
}
