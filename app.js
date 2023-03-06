// Checks if element can be seen on the client side
const observer = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
        if(element.isIntersecting){
            element.target.classList.add('show');
        } else {
            element.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

// Changes the text value for the typing animation
const text = document.querySelector(".dynamic-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Coder";
    }, 0);
    setTimeout(() => {
        text.textContent = "Software Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "CompSci Graduate";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Programmer";
    }, 12000);
}
textLoad();
setInterval(textLoad, 12000);

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