const randomRgbNumber = () => {
  return Math.floor(Math.random() * 256)
}

export default function randomHexColor() {
  return `rgb(${randomRgbNumber()}, ${randomRgbNumber()}, ${randomRgbNumber()})`
}
