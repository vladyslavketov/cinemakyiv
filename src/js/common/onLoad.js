import { hideLoader } from '../components/loader';

window.addEventListener('load', (() => {
  hideLoader();
  window.scrollTo(0, 0);
}));


// === інший синтаксис ===
// window.onload = hideLoader();
// ===  ===