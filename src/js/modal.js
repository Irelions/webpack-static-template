let modalCover = document.querySelector('.modal__cover');
let modalPhone = document.querySelector('.modal__phone');
let modalMessage = document.querySelector('.modal__message');
let leftPanel = document.querySelector('.left');
let mobileMenuPhones = document.querySelectorAll('.mobile-menu__phone');
let mobileMenuMessages = document.querySelectorAll('.mobile-menu__message');
let modalMenuClose = document.querySelector('.modal-menu__close');


for (let i = 0; i < mobileMenuPhones.length; i++) {
  let mobileMenuPhone = mobileMenuPhones[i];
  mobileMenuPhone.addEventListener('click', function(){
    modalCover.classList.remove('hidden');
    modalPhone.classList.remove('hidden');
    leftPanel.classList.add('hidden');
  })
}

for (let i = 0; i < mobileMenuMessages.length; i++) {
  let mobileMenuMessage = mobileMenuMessages[i];
  mobileMenuMessage.addEventListener('click', function(){
    modalCover.classList.remove('hidden');
    modalMessage.classList.remove('hidden');
    leftPanel.classList.add('hidden');
  })
}

modalCover.addEventListener('click', function(){
  modalCover.classList.add('hidden');
  modalPhone.classList.add('hidden');
  modalMessage.classList.add('hidden');
})

modalMenuClose.addEventListener('click', function(){
  modalCover.classList.add('hidden');
  modalPhone.classList.add('hidden');
  modalMessage.classList.add('hidden');
  leftPanel.classList.add('hidden');
})
