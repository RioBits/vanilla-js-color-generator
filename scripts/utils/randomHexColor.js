let possibleValues = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
]

export default function randomHexColor() {
  let hexColor = '#'

  for (let i = 0; i < 6; i++) {
    hexColor += possibleValues[Math.floor(Math.random() * 16)]
  }

  return hexColor
}
