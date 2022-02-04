import randomHexColor from './utils/randomHexColor.js'

const app = document.getElementsByClassName('app')[0]
const hexBtn = document.getElementById('hex-btn')
const color = document.getElementById('code-value')

hexBtn.addEventListener('click', () => {
  const hexColor = randomHexColor()

  app.style.backgroundColor = hexColor
  color.innerHTML = hexColor
})
