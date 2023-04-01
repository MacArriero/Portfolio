import './style.css'

// Blob Effect
const blob = document.getElementById("blob");
window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

// // Carousel slider
const slider = document.querySelector('.works');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);

// Name Glitch Effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("#section-1-name").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

// Image changer
let images = ['https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif', 'https://media.giphy.com/media/8fRwPZtbWkkX6/giphy.gif', 'https://media.giphy.com/media/B6IBrYTyvo1UJOXF9u/giphy.gif'];

let index = 0;
const section1Image = document.querySelector('#section-1-image');

function change() {
   section1Image.src = images[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 4000);
};

window.addEventListener("mousemove", event => {
  const { top, bottom, left, right } = event.target.getBoundingClientRect();

  const middleX = (right - left) / 2;
  const middleY = (bottom - top) / 2;

  const clientX = event.clientX;
  const clientY = event.clientY;

  const offsetX = (clientX - middleX) / middleX;
  const offsetY = (middleY - clientY) / middleY;

  section1Image.style.transform = `perspective(1000px) rotateY(${offsetX *
    5}deg) rotateX(${offsetY * 5}deg)`;
});


const menuButton = document.querySelector(".material-symbols-outlined");
menuButton.addEventListener("click", event => {
  document.getElementById("menu").style.height = "100%";
})

const closeButton = document.querySelector(".closebtn");
closeButton.addEventListener("click", event => {
  document.getElementById("menu").style.height = "0%";
})

const homeMenu = document.querySelector(".home-menu");
homeMenu.addEventListener("click", event => {
  document.getElementById("menu").style.height = "0%";
})

const worksMenu = document.querySelector(".works-menu");
worksMenu.addEventListener("click", event => {
  document.getElementById("menu").style.height = "0%";
})

const contactMeMenu = document.querySelector(".contact-me-menu");
contactMeMenu.addEventListener("click", event => {
  document.getElementById("menu").style.height = "0%";
})

// Sends email from client side
emailjs.init('obtEvVRYz6LJbg3Xg');
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_x46fr4x', 'template_bhhy00n', this)
        .then(function() {
            alert('Thank you! Your message was successfully sent.');
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert('Error with sending the message - ', error);
        });
        
    });
    
}
