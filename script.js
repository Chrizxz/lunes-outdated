const mybutton = document.getElementById("btt");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//--------------------------------------------------------------

let lastScrollPosition = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;
  
  if (currentScrollPosition > 70) {
    // scrolling down
    navbar.classList.add('fixed');
  } else {
    // scrolling up
    navbar.classList.remove('fixed');
  }
  
  lastScrollPosition = currentScrollPosition;
});

//--------------------------------------------------------------

const dropcheck = document.getElementById('dropcheck');
const dropdownContent = document.querySelector('.dropdown-content');
const fries = document.querySelector('.fries');


dropcheck.addEventListener('change', function() {
    if (this.checked) {
        dropdownContent.classList.add('slide-down');
        dropdownContent.classList.remove('slide-up');
        fries.classList.add('open');
    } else {
        dropdownContent.classList.add('slide-up');
        dropdownContent.classList.remove('slide-down');
        fries.classList.remove('open');
    }
});  

//--------------------------------------------------------------

var parralax = document.getElementById('parallax');
var parralaxInstance = new Parallax(parallax);

// ---------------------------------------------------------------

const fly1 = document.querySelector('.fly1');
const fly2 = document.querySelector('.fly2');

function removeClassAfterTime(first, second, time) {
  setTimeout(() => {
    fly1.classList.remove(first);
    fly2.classList.remove(second);
  }, time);
}

removeClassAfterTime('fly1', 'fly2', 800);

// ---------------------------------------------------------------

const starCoordinates = [
  { x: '15%', y: '5%' },
  { x: '15%', y: '30%' },
  { x: '30%', y: '50%' },
  { x: '40%', y: '60%' },
  { x: '80%', y: '30%' },
  { x: '70%', y: '60%' },
  { x: '70%', y: '15%' },
  { x: '75%', y: '10%' },
  { x: '75%', y: '60%' }
];

function getPixelCoordinate(coordinate, axis) {
  if (coordinate.includes('%')) {
    const percent = parseFloat(coordinate);
    const viewportSize = axis === 'x' ? window.innerWidth : window.innerHeight;
    return (percent / 100) * viewportSize;
  }
  return parseFloat(coordinate);
}

function getRandomCoordinate() {
  const randomIndex = Math.floor(Math.random() * starCoordinates.length);
  return starCoordinates[randomIndex];
}

function createShootingStar() {
  const star = document.createElement('div');
  star.classList.add('shooting-star');
  document.body.appendChild(star);

  const { x, y } = getRandomCoordinate();
  const animationDuration = 3;
  const pixelX = getPixelCoordinate(x, 'x');
  const pixelY = getPixelCoordinate(y, 'y');

  star.style.animationDuration = `${animationDuration}s`;
  star.style.zIndex = -48;
  star.style.left = `${pixelX}px`;
  star.style.top = `${pixelY}px`;


  setTimeout(() => {
    star.remove(); 
  }, animationDuration * 1000); 

  const endX = Math.random() * window.innerWidth;
  const endY = Math.random() * window.innerHeight;
  star.style.transform = `translate(${endX}px, ${endY}px)`;
}

setInterval(createShootingStar, 1000);

// ---------------------------------------------------------------

const modeToggleBtn = document.querySelectorAll('[id^="l-d"]');
const root = document.documentElement;
const isLightMode = localStorage.getItem('isLightMode');

function setMode(mode) {
  if (mode === 'light') {
    root.classList.remove('dark-mode');
    localStorage.setItem('isLightMode', 'true');
  } else {
    root.classList.add('dark-mode');
    localStorage.removeItem('isLightMode');
  }
}

if (isLightMode) {
  setMode('light');
} else { 
  setMode('dark')
}

setInterval(function() {
  const lightMode = localStorage.getItem('isLightMode');
  if (lightMode) {
    setMode('light');
  } else { 
    setMode('dark')
  }
}, 1000);

modeToggleBtn.forEach(button => {
  button.addEventListener('click', function() {
    const currentMode = root.classList.contains('dark-mode') ? 'light' : 'dark';
    setMode(currentMode);
  })
});
