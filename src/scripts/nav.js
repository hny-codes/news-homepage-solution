let isOpen = false;
const navModal = document.querySelector('.nav-modal');

// Event listener for modal background
window.onclick = (e) => {
  if (e.target.tagName == 'ASIDE') {
    isOpen = !isOpen;
    navModal.classList.toggle('toggle');
  }
};

// Event listener for toggle menu buttons
document.querySelectorAll('.btn-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    isOpen = !isOpen;

    const modal = document.querySelector('.modal');
    // isOpen ? (modal.style.width = '65%') : (modal.style.width = '0');
    if (isOpen) {
      modal.style.width = '65%';
      setTimeout(() => {
        modal.style.left = '0';
      }, 50);
    } else {
      modal.style.width = '0';
      modal.style.left = '100%';
    }

    // Toggle Nav Modal
    navModal.classList.toggle('toggle');
  });
});
