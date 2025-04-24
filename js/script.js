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
