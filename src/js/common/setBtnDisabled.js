export default function setBtnDisabled(e, querySelector) {
  const disableBtn = document.querySelector(`${querySelector}[disabled]`);
  if (disableBtn) disableBtn.disabled = false;
  e.target.disabled = true;
}