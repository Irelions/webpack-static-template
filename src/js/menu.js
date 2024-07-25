let modalCover = document.querySelector('.modal__cover');
let leftPanel = document.querySelector('.left');
let mobileMenuClose = document.querySelector('.mobile-menu__close');


let menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', function () {
  leftPanel.classList.remove('hidden');
  modalCover.classList.remove('hidden');
})

mobileMenuClose.addEventListener('click', function(){
  leftPanel.classList.add('hidden');
  modalCover.classList.add('hidden');
})

modalCover.addEventListener('click', function(){
  modalCover.classList.add('hidden');
  leftPanel.classList.add('hidden');
})
