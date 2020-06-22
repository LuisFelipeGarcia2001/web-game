//find height and width on init and on resize window
var height
var width
var life = 1
var time = 10
var setFlyTime = 1500

var level = window.location.search.replace('?', '')

if(level === 'normal') {
  setFlyTime = 1500 
} else if(level === 'dificil') {
  setFlyTime = 1000
} else if(level === 'chucknorris') {
  setFlyTime = 750
}

function windowGameSize() {
  height = window.innerHeight
  width = window.innerWidth
}

windowGameSize()

var timer = setInterval(function () {
  time--

  if (time < 0) {
    clearInterval(timer)
    clearInterval(createFly)
    window.location.href = 'victory.html'
  } else {
    document.getElementById('time-left').innerHTML = time
  }
}, 1000)

function randomicPosition() {
  if (life > 3) {
    window.location.href = 'game-over.html'
  }

  //remove previous fly if exists
  if (document.getElementById('fly')) {
    document.getElementById('fly').remove()
    document.getElementById('life' + life).src = '../assets/empty_heart.png'
    life++

  }

  var positionX = Math.floor(Math.random() * width) - 90
  var positionY = Math.floor(Math.random() * height) - 90

  positionX = positionX < 0 ? 0 : positionX
  positionY = positionY < 0 ? 0 : positionY

  //create html element
  var fly = document.createElement('img')
  fly.src = '../assets/fly.png'
  fly.className = randomicSize() + ' ' + randomicSide()
  fly.style.left = positionX + 'px'
  fly.style.top = positionY + 'px'
  fly.style.position = 'absolute'
  fly.id = 'fly'
  fly.onclick = function () {
    this.remove()
  }
  document.body.appendChild(fly)
}


function randomicSize() {
  var sizeNumber = Math.floor(Math.random() * 3)

  switch (sizeNumber) {
    case 0:
      return 'fly1'
    case 1:
      return 'fly2'
    case 2:
      return 'fly3'
  }
}

function randomicSide() {
  var sideNumber = Math.floor(Math.random() * 2)

  switch (sideNumber) {
    case 0:
      return 'right'
    case 1:
      return 'left'
  }
}