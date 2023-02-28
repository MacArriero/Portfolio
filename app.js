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