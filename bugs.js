// const mobileMenu = document.querySelector('.mobile-menu');
const openModal = document.querySelector('.open');
const modalBox = document.querySelector('.modal');
// const cancel = document.querySelector('.cancel');
// const menuList = document.querySelectorAll('.menu-list li');
// const lists = Array.from(menuList);

function display() {
  modalBox.style.display = 'flex';
}
openModal.addEventListener('click', display);

// function close() {
//   mobileMenu.style.display = 'none';
// }
// cancel.addEventListener('click', close);
// 
// for (let i = 0; i < lists.length; i += 1) {
//   lists[i].addEventListener('click', close);
// }

