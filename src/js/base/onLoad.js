import refs from './refs';

// refs.body.classList.add('isLoading');
// refs.loader.parentElement.classList.add('isShow');

window.addEventListener('load', onWindowLoad);

function onWindowLoad() {
  console.log("load")
  refs.body.classList.remove('isLoading');
  refs.loader.parentElement.classList.remove('isShow');
}