//
// Menu activation 
//
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation__items');
    const menuBtn = document.querySelector('.open');
    const closeBtn = document.querySelector('.close');

    if (menuBtn && closeBtn && menu) {
        // Open or toggle menu
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        // Close menu when clicking the "x"
        closeBtn.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    } else {
        console.warn('One or more elements not found!');
    }
});


// NAv Scroll Animation
const scroll = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        scroll.classList.add('scroll')
    } else {
        scroll.classList.remove('scroll')
    }
})

menuActivate.addEventListener('toggle', () => {

})

// Home page scrolling effect
const sections = document.querySelectorAll('.section');
let currentSection = 0;
let isScrolling = 0;

function scrollToSection(index){
    if(index < 0 || index >= sections.length) return;

    isScrolling = true;
    sections[index].scrollIntoView({ behavior: 'smooth' });
    currentSection = index;

    setTimeout(()=> {
        isScrolling = false;
    }, 1000);
}


document.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    if (e.deltaY > 0) {
        scrollToSection(currentSection + 1);
    } else {
        scrollToSection(currentSection - 1);
    }
});

document.addEventListener('keydown', (e) => {
    if (isScrolling) return;

    if (e.key === 'ArrowDown') scrollToSection(currentSection + 1);
    if (e.key === 'ArrowUp') scrollToSection(currentSection - 1);
});


// Touch option for mobile

let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    if (isScrolling) return;
    const touchEndY = e.changedTouches[0].clientY;

    if (touchStartY - touchEndY > 50) {
        scrollToSection(currentSection + 1); // swipe up
    } else if (touchEndY - touchStartY > 50) {
        scrollToSection(currentSection - 1); // swipe down
    }
});






















// // For auto styling dots

// const dots = document.querySelectorAll('.dot-nav li a');
// const sections = document.querySelectorAll('section');

// window.addEventListener('scroll', () => {
//     let current = '';
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         if (pageYOffset >= sectionTop - 100) {
//             current = section.getAttribute('id');
//         }
//     });

//     dots.forEach(dot => {
//         dot.classList.remove('active');
//         if (dot.getAttribute('href') === `#${current}`) {
//             dot.classList.add('active');
//         }
//     });
// });
