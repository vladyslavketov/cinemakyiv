import refs from '../../common/js/refs';

refs.menuBtnRef.addEventListener('click', toggleClassIsOpen);
refs.menuNavListRef.addEventListener('click', checkNodeName);

function toggleClassIsOpen() {
  const expanded =
    refs.menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  refs.menuBtnRef.classList.toggle('isOpen');
  refs.menuBtnRef.setAttribute('aria-expanded', !expanded);

  refs.menuContainerRef.classList.toggle('isOpen');
  document.body.classList.toggle('mobileMenuIsOpen');
}

function removeClassIsOpen() {
  const expanded =
    refs.menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  refs.menuBtnRef.classList.remove('isOpen');
  refs.menuBtnRef.setAttribute('aria-expanded', !expanded);

  refs.menuContainerRef.classList.remove('isOpen');
  document.body.classList.remove('mobileMenuIsOpen');
}

function checkNodeName(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }

  removeClassIsOpen();
}
