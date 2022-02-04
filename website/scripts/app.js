import randomHexColor from './utils/randomHexColor.js'
import randomRgbColor from './utils/randomRgbColor.js'

const app = document.getElementsByClassName('app')[0]
const hexBtn = document.getElementById('hex-btn')
const rgbBtn = document.getElementById('rgb-btn')
const styleValue = document.getElementById('code-value')

hexBtn.addEventListener('click', () => {
  const hexColor = randomHexColor()

  app.style.backgroundColor = hexColor
  styleValue.innerHTML = hexColor
})

rgbBtn.addEventListener('click', () => {
  const rgbColor = randomRgbColor()

  app.style.backgroundColor = rgbColor
  styleValue.innerHTML = rgbColor
})
