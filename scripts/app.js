const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
    let pos = window.scrollY;
    if (pos > 0) {
        header.classList.add('background');
    }
    else {
        header.classList.remove('background');
    }
});



const burgerbutton = document.querySelector(".nav-button");
const burger = document.querySelector(".nav-button-icon");
const burgermenu = document.querySelector(".burger-menu")

burgerbutton.addEventListener('click', function() {
    burger.classList.toggle('active');
    burgermenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})
