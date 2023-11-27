/*=========Menu mobile ==============*/
const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});




/*=========efeito digitando js ==============*/
const typed = new Typed('.multiple-text', {
    strings: ['Smart Band 4'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});


/*=========link da seção de rolagem==============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};    
