const overlay = document.querySelector('.list_1');
const overlayContent = document.querySelector('.list_1');

overlay.addEventListener('mouseenter', () => {
  overlayContent.classList.add('active');
});

overlay.addEventListener('mouseleave', () => {
  overlayContent.classList.remove('active');
});



const overlaya = document.querySelector('.list_2');
const overlayContentt = document.querySelector('.list_2');

overlaya.addEventListener('mouseenter', () => {
  overlayContentt.classList.add('active');
});

overlaya.addEventListener('mouseleave', () => {
  overlayContentt.classList.remove('active');
});

