// Menu mobil
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log("Nombre:", name);
    console.log("Correo electrónico:", email);
    console.log("Mensaje:", message);
});