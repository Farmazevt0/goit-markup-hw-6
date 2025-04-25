
const toggleButton = document.getElementById('toggleButton');
const closeButton = document.getElementById('close-btn');
const heroButton = document.getElementById('hero-btn');
const backdropMenu = document.getElementById('backdrop-menu');
const closeModalBtn = document.getElementById('closeModalBtn');
const menu = document.getElementById('mob-menu');

toggleButton.addEventListener('click', function() {
 menu.classList.toggle('is-open-mob');
}); 

closeButton.addEventListener('click', function() {
 menu.classList.remove('is-open-mob');
});

heroButton.addEventListener('click', function() {
 backdropMenu.classList.toggle('is-open');
})

closeModalBtn.addEventListener('click', function() {
 backdropMenu.classList.remove('is-open');
})