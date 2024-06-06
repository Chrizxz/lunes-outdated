try {
    var parralax = document.getElementById('parallax');
    var parralaxInstance = new Parallax(parallax);
  } catch (error) {
    console.error("Error: Parallax element not found");
  }
  
  // ---------------------------------------------------------------
  
  try {
    var fly1 = document.querySelector('.fly1');
    var fly2 = document.querySelector('.fly2');
  } catch (error) {
    console.error("Error: Fly elements not found");
  }
  
  function removeClassAfterTime(first, second, time) {
    setTimeout(() => {
      if (fly1) {
        fly1.classList.remove(first);
      }
      if (fly2) {
        fly2.classList.remove(second);
      }
    }, time);
  }
  
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
    star.style.zIndex = 1;
    star.style.left = `${pixelX}px`;
    star.style.top = `${pixelY}px`;
    
    setTimeout(() => {
        star.remove(); 
    }, animationDuration * 1000); 

    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;
    star.style.transform = `translate(${endX}px, ${endY}px)`;
}

// ---------------------------------------------------------------

const text = "??????";
const typingSpeed = 150;
let charIndex = 0;

function typeWriter() {
  const typingDiv = document.getElementById('typingEffect');
  if (charIndex < text.length) {
    typingDiv.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  }
}

// ---------------------------------------------------------------

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    autoplay: {
      delay: 2250,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// ---------------------------------------------------------------

removeClassAfterTime('fly1', 'fly2', 1100);
setInterval(createShootingStar, 1000);