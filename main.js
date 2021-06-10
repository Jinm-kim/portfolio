'use strict';

// Make navbar effect when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(navbarHeight);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }
    else{
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    console.log(event.target.dataset.link);

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});

})

// Handle click on "contact me"
const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click', () => {
    scrollIntoView('#contact')
})

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('#home');
const homeHeight  = home.getBoundingClientRect().height;
document.addEventListener('scroll' ,() => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

// Arrow - up show
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    }
    else {
        arrowUp.classList.remove('visible');
    }
})

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
})

// function을 이용해서 Contact me 만들기 (navbar도 이용가능)
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}
