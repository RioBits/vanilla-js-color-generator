const app = document.getElementsByClassName('app')[0]
const btn = document.getElementsByClassName('btn')[0]
const color = document.getElementById('code-value')

btn.addEventListener('click', () => {
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
  let hexColor = '#'

  for (let i = 0; i < 6; i++) {
    hexColor += possibleValues[Math.floor(Math.random() * 16)]
  }

  app.style.backgroundColor = hexColor
  color.innerHTML = hexColor
})
