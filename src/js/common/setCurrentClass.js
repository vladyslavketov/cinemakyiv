export default function setCurrentClass(e, querySelector) {
  const currentEl = document.querySelector(querySelector);
  if (currentEl) { currentEl.classList.remove('current') };
  e.target.classList.add('current');
}