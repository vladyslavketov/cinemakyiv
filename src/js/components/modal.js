import refs from "../common/refs";

console.log(refs.modalCloseBtn);

const backdrop = refs.modal.parentElement;

function onModalCloseBtnClick() {
  closeModal();
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) closeModal();
}

function onEscKeyPress(e) {
  if (backdrop.classList.contains('isHidden')) return;
  if (e.code === 'Escape') closeModal();
}

export function openModal() {
  backdrop.classList.remove('isHidden');
  refs.body.classList.add('modalIsOpen');

  backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscKeyPress);
  refs.modalCloseBtn.addEventListener('click', onModalCloseBtnClick);
}

export function closeModal() {
  backdrop.classList.add('isHidden');
  refs.body.classList.remove("modalIsOpen");
  refs.modal.innerHTML = "";

  backdrop.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onEscKeyPress);
  refs.modalCloseBtn.removeEventListener('keydown', onModalCloseBtnClick);
}