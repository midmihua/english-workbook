const menuEl = document.querySelector('#menu-bars');
const navbarEl = document.querySelector('.navbar');

menuEl.addEventListener('click', () => {
  menuEl.classList.toggle('fa-times');
  navbarEl.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  menuEl.classList.remove('fa-times');
  navbarEl.classList.remove('active');
});


const loginEl = document.querySelector('#login');
const loginForm = document.querySelector('.login-page');

loginEl.addEventListener('click', () => {
  loginForm.classList.add('active');
});

loginForm.addEventListener('click', () => {
  loginForm.classList.remove('active');
});