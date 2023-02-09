import { hideLoader } from '../components/loader';

window.addEventListener('load', (() => {
  // window.scrollTo(0, 0);
  hideLoader();
}));



// === інший синтаксис ===
// window.onload = hideLoader();
// ===  ===